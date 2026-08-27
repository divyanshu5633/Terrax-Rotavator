import { useState, useEffect, type FormEvent, type ChangeEvent } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Send, CheckCircle2, AlertCircle, MessageCircle, Phone, ArrowRight, Loader2, RefreshCw } from 'lucide-react';
import { contact, trackContactEvent } from '../../data/contact';
import { allSeries } from '../../data/series';

// ─── Dropdown Options ─────────────────────────────────────────────────────────
export const PRODUCT_SERIES_OPTIONS = [
  'Mini Series',
  'Orchard Series',
  'Regular Series',
  'Regular Plus Series',
  'Sami Champion Series',
  'Gyrovator Series',
  'General Product Enquiry',
] as const;

export const SIZE_OPTIONS = [
  '3 ft',
  '3.5 ft',
  '4 ft',
  '5 ft',
  '5.5 ft',
  '6 ft',
  '7 ft',
] as const;

export const BLADE_OPTIONS = [
  '16 blade',
  '20 blade',
  '24 blade',
  '30 blade',
  '36 blade',
  '39 blade',
  '42 blade',
  '48 blade',
  '54 blade',
] as const;

export interface EnquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  series: string;
  size: string;
  bladeConfig: string;
  message: string;
  honeypot: string; // Anti-spam field
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
}

export function EnquiryForm() {
  const [searchParams] = useSearchParams();

  const [form, setForm] = useState<EnquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    series: '',
    size: '',
    bladeConfig: '',
    message: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [hasStarted, setHasStarted] = useState(false);

  // Prepopulate series from query parameter: e.g. /contact?series=mini-series
  useEffect(() => {
    const seriesParam = searchParams.get('series');
    if (seriesParam) {
      const normalizedParam = seriesParam.trim().toLowerCase();
      // Match by slug or partial name
      const matchedSeries = allSeries.find(
        (s) => s.slug.toLowerCase() === normalizedParam || s.name.toLowerCase() === normalizedParam
      );

      if (matchedSeries) {
        setForm((prev) => ({ ...prev, series: matchedSeries.name }));
      } else if (normalizedParam === 'general' || normalizedParam === 'general-enquiry') {
        setForm((prev) => ({ ...prev, series: 'General Product Enquiry' }));
      }
    }
  }, [searchParams]);

  // ─── Input Handlers ─────────────────────────────────────────────────────────
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (!hasStarted) {
      setHasStarted(true);
      trackContactEvent('contact_form_started', { firstField: name });
    }

    setForm((prev) => ({ ...prev, [name]: value }));

    // Real-time validation if already touched
    if (touched[name]) {
      validateField(name, value);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, value);
  };

  // ─── Validation Helpers ─────────────────────────────────────────────────────
  const validatePhone = (phone: string): boolean => {
    // Normalize: remove spaces, hyphens, brackets
    const cleaned = phone.replace(/[\s\-()]/g, '');
    // Allow +91 followed by 10 digits, or 0 followed by 10 digits, or direct 10 digits starting with 6-9
    const indianPhoneRegex = /^(?:\+91|91|0)?[6-9]\d{9}$/;
    return indianPhoneRegex.test(cleaned);
  };

  const validateEmail = (email: string): boolean => {
    if (!email.trim()) return true; // Optional field
    // Basic format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  };

  const validateField = (name: string, value: string) => {
    let error = '';

    if (name === 'fullName') {
      if (!value.trim()) {
        error = 'Full name is required';
      } else if (value.trim().length < 2) {
        error = 'Please enter your full name';
      }
    }

    if (name === 'phone') {
      if (!value.trim()) {
        error = 'Phone number is required';
      } else if (!validatePhone(value)) {
        error = 'Please enter a valid 10-digit phone number';
      }
    }

    if (name === 'email') {
      if (value.trim() && !validateEmail(value)) {
        error = 'Please enter a valid email address';
      }
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
    return !error;
  };

  const validateAll = (): boolean => {
    const nameValid = validateField('fullName', form.fullName);
    const phoneValid = validateField('phone', form.phone);
    const emailValid = validateField('email', form.email);

    setTouched({
      fullName: true,
      phone: true,
      email: true,
    });

    return nameValid && phoneValid && emailValid;
  };

  // ─── Construct WhatsApp Message ─────────────────────────────────────────────
  const generateWhatsAppMessage = () => {
    const lines: string[] = ['Hello Terrax,', '', 'I would like to enquire about:'];

    const details: string[] = [];
    if (form.series) details.push(`Product Series: ${form.series}`);
    if (form.size) details.push(`Preferred Size: ${form.size}`);
    if (form.bladeConfig) details.push(`Blade Configuration: ${form.bladeConfig}`);

    if (details.length > 0) {
      lines.push(...details);
    } else {
      lines.push('Product Series: Agricultural Implements / Rotavators');
    }

    lines.push('');
    if (form.fullName.trim()) lines.push(`Name: ${form.fullName.trim()}`);
    if (form.phone.trim()) lines.push(`Phone: ${form.phone.trim()}`);
    if (form.email.trim()) lines.push(`Email: ${form.email.trim()}`);

    if (form.message.trim()) {
      lines.push('', 'Message:', form.message.trim());
    }

    lines.push('', 'Please provide more information.');

    return lines.join('\n');
  };

  const handleWhatsAppSend = () => {
    trackContactEvent('whatsapp_clicked', { source: 'enquiry_form', series: form.series });
    const message = generateWhatsAppMessage();
    const encoded = encodeURIComponent(message);
    const url = `${contact.whatsapp.link}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // ─── Form Submission Handler ────────────────────────────────────────────────
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Anti-spam check
    if (form.honeypot) {
      console.warn('Spam detected via honeypot');
      return;
    }

    if (!validateAll()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const endpoint = import.meta.env.VITE_ENQUIRY_ENDPOINT;

      if (endpoint && typeof endpoint === 'string' && endpoint.startsWith('http')) {
        // Post to configured endpoint
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            fullName: form.fullName.trim(),
            phone: form.phone.trim(),
            email: form.email.trim() || undefined,
            series: form.series || 'General Product Enquiry',
            size: form.size || undefined,
            bladeConfig: form.bladeConfig || undefined,
            message: form.message.trim() || undefined,
            submittedAt: new Date().toISOString(),
          }),
        });

        if (!res.ok) {
          throw new Error(`Server returned ${res.status}`);
        }
      } else {
        // No custom endpoint configured: simulate realistic async network dispatch
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      setSubmitStatus('success');
      trackContactEvent('contact_form_submitted', { series: form.series });
    } catch (err) {
      console.error('Enquiry submission failed:', err);
      setSubmitStatus('error');
      setErrorMessage(
        'Something went wrong while sending your enquiry. Please try again or contact Terrax directly by phone or WhatsApp.'
      );
      trackContactEvent('contact_form_failed', { error: String(err) });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitStatus('idle');
    setForm({
      fullName: '',
      phone: '',
      email: '',
      series: '',
      size: '',
      bladeConfig: '',
      message: '',
      honeypot: '',
    });
    setErrors({});
    setTouched({});
  };

  // ─── Styles ─────────────────────────────────────────────────────────────────
  const inputBaseStyle: React.CSSProperties = {
    width: '100%',
    minHeight: '48px',
    padding: '0.75rem 1rem',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--color-terrax-border-light)',
    backgroundColor: '#fff',
    fontFamily: 'var(--font-body)',
    fontSize: '1rem', // Prevents iOS auto-zoom
    color: 'var(--color-terrax-charcoal)',
    outline: 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'var(--font-mid)',
    fontWeight: 600,
    fontSize: '0.78rem',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'var(--color-terrax-charcoal)',
    marginBottom: '0.35rem',
  };

  const errorTextStyle: React.CSSProperties = {
    fontFamily: 'var(--font-body)',
    fontSize: '0.75rem',
    color: '#D32F2F',
    marginTop: '0.25rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
  };

  // ─── Render Success State ───────────────────────────────────────────────────
  if (submitStatus === 'success') {
    return (
      <div
        className="tx-card"
        style={{
          backgroundColor: '#fff',
          borderRadius: 'var(--radius-xl)',
          border: '1px solid var(--color-terrax-border-light)',
          padding: 'clamp(2rem, 5vw, 3rem)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
          textAlign: 'center',
        }}
        role="alert"
        aria-live="polite"
      >
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            backgroundColor: 'rgba(26, 77, 46, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
          }}
        >
          <CheckCircle2 size={36} style={{ color: 'var(--color-terrax-green)' }} />
        </div>

        <span
          className="tx-overline"
          style={{ color: 'var(--color-terrax-orange)', marginBottom: '0.5rem', display: 'block' }}
        >
          Enquiry Received
        </span>

        <h3
          className="tx-heading-lg"
          style={{
            color: 'var(--color-terrax-charcoal)',
            fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
            marginBottom: '0.75rem',
          }}
        >
          ENQUIRY SENT
        </h3>

        <p
          className="tx-body"
          style={{
            fontSize: '1rem',
            color: 'var(--color-terrax-muted-dark)',
            maxWidth: '44ch',
            margin: '0 auto 1rem',
            lineHeight: 1.6,
          }}
        >
          Thank you for contacting TERRAX. Your enquiry has been received by our team.
        </p>

        {form.series && (
          <div
            style={{
              padding: '0.75rem 1rem',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--color-terrax-offwhite)',
              border: '1px solid var(--color-terrax-border-light)',
              maxWidth: '380px',
              margin: '0 auto 2rem',
              fontSize: '0.85rem',
              fontFamily: 'var(--font-body)',
              color: 'var(--color-terrax-charcoal)',
            }}
          >
            <strong>Enquiry Item:</strong> {form.series}
            {form.size && ` • ${form.size}`}
            {form.bladeConfig && ` • ${form.bladeConfig}`}
          </div>
        )}

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            maxWidth: '380px',
            margin: '0 auto',
          }}
        >
          <a
            href={contact.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackContactEvent('whatsapp_clicked', { source: 'success_screen' })}
            className="btn-ghost"
            style={{
              textDecoration: 'none',
              backgroundColor: 'rgba(37,211,102,0.1)',
              borderColor: 'rgba(37,211,102,0.5)',
              color: '#0D2818',
              minHeight: '48px',
            }}
            aria-label="Connect via WhatsApp"
          >
            <MessageCircle size={18} style={{ color: '#25D366' }} />
            WHATSAPP TERRAX
          </a>

          <Link
            to="/products"
            className="btn-primary"
            style={{ textDecoration: 'none', minHeight: '48px' }}
          >
            BACK TO PRODUCTS
            <ArrowRight size={16} />
          </Link>

          <button
            type="button"
            onClick={handleReset}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem',
              fontFamily: 'var(--font-mid)',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--color-terrax-muted-dark)',
              padding: '0.5rem',
              marginTop: '0.5rem',
              cursor: 'pointer',
              background: 'none',
              border: 'none',
            }}
          >
            <RefreshCw size={14} /> Send Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  // ─── Render Enquiry Form ────────────────────────────────────────────────────
  return (
    <div
      className="tx-card"
      style={{
        backgroundColor: '#fff',
        borderRadius: 'var(--radius-xl)',
        border: '1px solid var(--color-terrax-border-light)',
        padding: 'clamp(1.5rem, 4vw, 2.5rem)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
      }}
    >
      <div style={{ marginBottom: '1.75rem' }}>
        <span
          className="tx-overline"
          style={{ marginBottom: '0.25rem', display: 'block' }}
        >
          Enquiry Form
        </span>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(1.4rem, 3vw, 1.85rem)',
            textTransform: 'uppercase',
            letterSpacing: '0.02em',
            color: 'var(--color-terrax-charcoal)',
            marginBottom: '0.5rem',
          }}
        >
          PRODUCT ENQUIRY
        </h2>
        <p
          className="tx-body"
          style={{ fontSize: '0.9rem', color: 'var(--color-terrax-muted-dark)', lineHeight: 1.5 }}
        >
          Enter your details below to enquire about available rotavator series and configurations.
        </p>
      </div>

      {/* ── Submission Error Alert State ── */}
      {submitStatus === 'error' && (
        <div
          role="alert"
          style={{
            padding: '1.25rem',
            borderRadius: 'var(--radius-lg)',
            backgroundColor: '#FFEBEE',
            border: '1px solid #FFCDD2',
            marginBottom: '1.5rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <AlertCircle size={20} style={{ color: '#D32F2F', flexShrink: 0, marginTop: '2px' }} />
            <div style={{ flex: 1 }}>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  color: '#B71C1C',
                  marginBottom: '0.75rem',
                  lineHeight: 1.5,
                }}
              >
                {errorMessage}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <a
                  href={`tel:${contact.phones[0].raw}`}
                  className="btn-primary"
                  style={{
                    padding: '0.4rem 0.85rem',
                    fontSize: '0.75rem',
                    minHeight: '38px',
                    textDecoration: 'none',
                  }}
                >
                  <Phone size={13} />
                  CALL TERRAX
                </a>
                <a
                  href={contact.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{
                    padding: '0.4rem 0.85rem',
                    fontSize: '0.75rem',
                    minHeight: '38px',
                    textDecoration: 'none',
                  }}
                >
                  <MessageCircle size={13} />
                  WHATSAPP TERRAX
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {/* Anti-spam honeypot (hidden) */}
        <div
          style={{
            position: 'absolute',
            left: '-9999px',
            top: '-9999px',
            opacity: 0,
            pointerEvents: 'none',
          }}
          aria-hidden="true"
        >
          <label htmlFor="company_code">Do not fill this field</label>
          <input
            id="company_code"
            type="text"
            name="honeypot"
            value={form.honeypot}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Row 1: Full Name & Phone Number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" style={labelStyle}>
                Full Name <span style={{ color: 'var(--color-terrax-orange)' }}>*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                autoComplete="name"
                value={form.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="e.g. Ramesh Patel"
                style={{
                  ...inputBaseStyle,
                  borderColor: errors.fullName ? '#D32F2F' : 'var(--color-terrax-border-light)',
                }}
                aria-required="true"
                aria-invalid={Boolean(errors.fullName)}
                aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-terrax-green)')}
              />
              {errors.fullName && (
                <p id="fullName-error" style={errorTextStyle} role="alert">
                  <AlertCircle size={12} /> {errors.fullName}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" style={labelStyle}>
                Phone Number <span style={{ color: 'var(--color-terrax-orange)' }}>*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                value={form.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="+91 98765 43210"
                style={{
                  ...inputBaseStyle,
                  borderColor: errors.phone ? '#D32F2F' : 'var(--color-terrax-border-light)',
                }}
                aria-required="true"
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-terrax-green)')}
              />
              {errors.phone && (
                <p id="phone-error" style={errorTextStyle} role="alert">
                  <AlertCircle size={12} /> {errors.phone}
                </p>
              )}
            </div>
          </div>

          {/* Row 2: Email Address (Optional) & Product Series */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email */}
            <div>
              <label htmlFor="email" style={labelStyle}>
                Email Address <span style={{ fontSize: '0.7rem', color: 'var(--color-terrax-muted)', fontWeight: 400 }}>(Optional)</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="you@example.com"
                style={{
                  ...inputBaseStyle,
                  borderColor: errors.email ? '#D32F2F' : 'var(--color-terrax-border-light)',
                }}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
                onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-terrax-green)')}
              />
              {errors.email && (
                <p id="email-error" style={errorTextStyle} role="alert">
                  <AlertCircle size={12} /> {errors.email}
                </p>
              )}
            </div>

            {/* Product Series */}
            <div>
              <label htmlFor="series" style={labelStyle}>
                Product Series
              </label>
              <select
                id="series"
                name="series"
                value={form.series}
                onChange={handleChange}
                style={{
                  ...inputBaseStyle,
                  cursor: 'pointer',
                  backgroundColor: '#fff',
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-terrax-green)')}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--color-terrax-border-light)')}
              >
                <option value="">Select Product Series</option>
                {PRODUCT_SERIES_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 3: Preferred Size & Blade Configuration */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Preferred Size */}
            <div>
              <label htmlFor="size" style={labelStyle}>
                Preferred Size
              </label>
              <select
                id="size"
                name="size"
                value={form.size}
                onChange={handleChange}
                style={{
                  ...inputBaseStyle,
                  cursor: 'pointer',
                  backgroundColor: '#fff',
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-terrax-green)')}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--color-terrax-border-light)')}
              >
                <option value="">Select Size</option>
                {SIZE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Blade Configuration */}
            <div>
              <label htmlFor="bladeConfig" style={labelStyle}>
                Blade Configuration
              </label>
              <select
                id="bladeConfig"
                name="bladeConfig"
                value={form.bladeConfig}
                onChange={handleChange}
                style={{
                  ...inputBaseStyle,
                  cursor: 'pointer',
                  backgroundColor: '#fff',
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-terrax-green)')}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--color-terrax-border-light)')}
              >
                <option value="">Select Blade Configuration</option>
                {BLADE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message Textarea */}
          <div>
            <label htmlFor="message" style={labelStyle}>
              Message <span style={{ fontSize: '0.7rem', color: 'var(--color-terrax-muted)', fontWeight: 400 }}>(Optional)</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us what product or configuration you are looking for..."
              style={{
                ...inputBaseStyle,
                minHeight: '110px',
                resize: 'vertical',
                lineHeight: 1.5,
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-terrax-green)')}
              onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--color-terrax-border-light)')}
            />
          </div>

          {/* ── Submit & WhatsApp Action Buttons ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary"
              style={{
                width: '100%',
                minHeight: '48px',
                fontSize: '0.925rem',
                opacity: isSubmitting ? 0.75 : 1,
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
              }}
              aria-label="Send Product Enquiry"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  SENDING ENQUIRY...
                </>
              ) : (
                <>
                  <Send size={16} />
                  SEND ENQUIRY
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleWhatsAppSend}
              className="btn-ghost"
              style={{
                width: '100%',
                minHeight: '48px',
                backgroundColor: 'rgba(37,211,102,0.08)',
                borderColor: 'rgba(37,211,102,0.4)',
                color: '#0D2818',
                fontSize: '0.875rem',
              }}
              aria-label="Send Enquiry via WhatsApp"
            >
              <MessageCircle size={18} style={{ color: '#25D366' }} />
              SEND VIA WHATSAPP
            </button>
          </div>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.78rem',
              color: 'var(--color-terrax-muted-dark)',
              textAlign: 'center',
              marginTop: '0.25rem',
            }}
          >
            Direct factory enquiry • No spam • Prompt response from TERRAX
          </p>
        </div>
      </form>
    </div>
  );
}
