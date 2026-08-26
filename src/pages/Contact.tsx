import { useState, type FormEvent } from 'react';
import { useSEO } from '../hooks/useSEO';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { contact } from '../data/contact';
import { allSeries } from '../data/series';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  series: string;
  message: string;
}

export function ContactPage() {
  useSEO({
    title: 'Contact — TERRAX',
    description: 'Enquire about TERRAX rotavators. Phone, WhatsApp, and email contact available. Located in Chiloda, Gujarat.',
    canonical: '/contact',
  });

  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    series: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Phase 1: form submission placeholder (backend TBD)
    // For now: build a mailto link with the form data
    const body = `Name: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0ASeries of interest: ${form.series || 'Not specified'}%0A%0AMessage:%0A${form.message}`;
    window.location.href = `mailto:${contact.email.address}?subject=TERRAX Enquiry — ${form.name}&body=${body}`;
    setSubmitted(true);
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.85rem 1rem',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--color-terrax-border-light)',
    backgroundColor: '#fff',
    fontFamily: 'var(--font-body)',
    fontSize: '1rem', // 16px minimum to prevent iOS browser auto-zoom
    color: 'var(--color-terrax-charcoal)',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'var(--font-mid)',
    fontWeight: 600,
    fontSize: '0.8rem',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'var(--color-terrax-muted-dark)',
    marginBottom: '0.4rem',
  };

  return (
    <>
      {/* Page Hero */}
      <div
        style={{
          backgroundColor: 'var(--color-terrax-green-dark)',
          paddingTop: '7rem',
          paddingBottom: '3.5rem',
        }}
      >
        <Container>
          <span className="tx-overline">Get in Touch</span>
          <h1
            className="tx-heading-xl"
            style={{ color: '#fff', marginTop: '0.5rem' }}
          >
            Contact TERRAX
          </h1>
          <p
            className="tx-body"
            style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '55ch', marginTop: '1rem' }}
          >
            Reach out to the TERRAX team for product information, specifications, and pricing enquiries.
          </p>
        </Container>
      </div>

      {/* Content */}
      <div className="tx-section" style={{ backgroundColor: 'var(--color-terrax-offwhite)' }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* LEFT: Contact Details & Google Maps */}
            <div className="flex flex-col gap-10">
              <div>
                <SectionHeading
                  overline="Direct Contact"
                  heading="Reach Us Directly"
                  accentBar
                  subtext="We're available via phone, WhatsApp, or email. For product enquiries and specifications, use the enquiry form."
                />

                <div style={{ marginTop: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {/* Phones */}
                  {contact.phones.map((p) => (
                    <a
                      key={p.number}
                      href={`tel:${p.number.replace(/\s/g, '')}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1rem 1.25rem',
                        borderRadius: 'var(--radius-lg)',
                        backgroundColor: '#fff',
                        border: '1px solid var(--color-terrax-border-light)',
                        textDecoration: 'none',
                        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--color-terrax-green)';
                        (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 16px rgba(26,77,46,0.08)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--color-terrax-border-light)';
                        (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
                      }}
                      aria-label={`Call ${p.display}`}
                    >
                      <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-terrax-green-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Phone size={18} style={{ color: 'var(--color-terrax-lime-light)' }} />
                      </div>
                      <div>
                        <p style={{ fontFamily: 'var(--font-mid)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-terrax-muted)', marginBottom: '0.15rem' }}>Phone</p>
                        <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '1rem', color: 'var(--color-terrax-charcoal)' }}>{p.display}</p>
                      </div>
                    </a>
                  ))}

                  {/* WhatsApp */}
                  <a
                    href={contact.whatsapp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1rem 1.25rem',
                      borderRadius: 'var(--radius-lg)',
                      backgroundColor: '#fff',
                      border: '1px solid var(--color-terrax-border-light)',
                      textDecoration: 'none',
                      transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = '#25D366';
                      (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 16px rgba(37,211,102,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--color-terrax-border-light)';
                      (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
                    }}
                    aria-label="Contact via WhatsApp"
                  >
                    <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', backgroundColor: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <MessageCircle size={18} style={{ color: '#fff' }} />
                    </div>
                    <div>
                      <p style={{ fontFamily: 'var(--font-mid)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-terrax-muted)', marginBottom: '0.15rem' }}>WhatsApp</p>
                      <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '1rem', color: 'var(--color-terrax-charcoal)' }}>{contact.whatsapp.display}</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={contact.email.link}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1rem 1.25rem',
                      borderRadius: 'var(--radius-lg)',
                      backgroundColor: '#fff',
                      border: '1px solid var(--color-terrax-border-light)',
                      textDecoration: 'none',
                      transition: 'border-color 0.2s ease',
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--color-terrax-green)')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--color-terrax-border-light)')}
                    aria-label={`Email ${contact.email.address}`}
                  >
                    <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-terrax-green-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Mail size={18} style={{ color: 'var(--color-terrax-lime-light)' }} />
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <p style={{ fontFamily: 'var(--font-mid)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-terrax-muted)', marginBottom: '0.15rem' }}>Email</p>
                      <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-terrax-charcoal)', wordBreak: 'break-all' }}>{contact.email.address}</p>
                    </div>
                  </a>

                  {/* Address */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem',
                      padding: '1rem 1.25rem',
                      borderRadius: 'var(--radius-lg)',
                      backgroundColor: '#fff',
                      border: '1px solid var(--color-terrax-border-light)',
                    }}
                  >
                    <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-terrax-green-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <MapPin size={18} style={{ color: 'var(--color-terrax-lime-light)' }} />
                    </div>
                    <div>
                      <p style={{ fontFamily: 'var(--font-mid)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-terrax-muted)', marginBottom: '0.35rem' }}>Manufacturing Address</p>
                      <address style={{ fontStyle: 'normal', fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--color-terrax-charcoal)', lineHeight: 1.65 }}>
                        {contact.address.line1},<br />
                        {contact.address.line2},<br />
                        {contact.address.state} {contact.address.pincode},<br />
                        {contact.address.country}
                      </address>
                    </div>
                  </div>
                </div>
              </div>

              {/* FIND TERRAX — Google Maps Section */}
              <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '1px solid var(--color-terrax-border-light)', backgroundColor: '#fff', padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div>
                    <span className="tx-overline" style={{ marginBottom: '0.2rem' }}>Location</span>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', textTransform: 'uppercase', color: 'var(--color-terrax-charcoal)' }}>
                      Find TERRAX
                    </h3>
                  </div>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${contact.address.mapQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{ textDecoration: 'none', padding: '0.5rem 1rem', fontSize: '0.8rem', minHeight: '40px' }}
                  >
                    Get Directions
                  </a>
                </div>
                <div style={{ width: '100%', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--color-terrax-border-light)' }}>
                  <iframe
                    title="TERRAX Manufacturing Location — Chiloda, Gujarat"
                    src={`https://maps.google.com/maps?q=${contact.address.mapQuery}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                    width="100%"
                    height="320"
                    style={{ border: 0, display: 'block', minHeight: '300px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT: Enquiry Form */}
            <div>
              <div
                style={{
                  backgroundColor: '#fff',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid var(--color-terrax-border-light)',
                  padding: '2rem',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                }}
              >
                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                    <CheckCircle2 size={48} style={{ color: 'var(--color-terrax-green)', margin: '0 auto 1rem' }} />
                    <h3 className="tx-heading-md" style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                      Enquiry Sent
                    </h3>
                    <p className="tx-body" style={{ fontSize: '0.9rem' }}>
                      Your enquiry has been directed to our email. We'll respond as soon as possible.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        fontSize: '1.35rem',
                        textTransform: 'uppercase',
                        color: 'var(--color-terrax-charcoal)',
                        marginBottom: '0.35rem',
                      }}
                    >
                      Product Enquiry
                    </h2>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--color-terrax-muted)', marginBottom: '1.75rem' }}>
                      Fill in your details and we'll get back to you.
                    </p>

                    <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                      {/* Name */}
                      <div>
                        <label htmlFor="contact-name" style={labelStyle}>Your Name *</label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          autoComplete="name"
                          value={form.name}
                          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                          placeholder="Full name"
                          style={inputStyle}
                          onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-terrax-green)')}
                          onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--color-terrax-border-light)')}
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="contact-phone" style={labelStyle}>Phone Number *</label>
                        <input
                          id="contact-phone"
                          type="tel"
                          required
                          autoComplete="tel"
                          value={form.phone}
                          onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                          placeholder="+91 XXXXX XXXXX"
                          style={inputStyle}
                          onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-terrax-green)')}
                          onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--color-terrax-border-light)')}
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="contact-email" style={labelStyle}>Email Address</label>
                        <input
                          id="contact-email"
                          type="email"
                          autoComplete="email"
                          value={form.email}
                          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                          placeholder="you@example.com"
                          style={inputStyle}
                          onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-terrax-green)')}
                          onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--color-terrax-border-light)')}
                        />
                      </div>

                      {/* Series of interest */}
                      <div>
                        <label htmlFor="contact-series" style={labelStyle}>Series of Interest</label>
                        <select
                          id="contact-series"
                          value={form.series}
                          onChange={(e) => setForm((f) => ({ ...f, series: e.target.value }))}
                          style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                          onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-terrax-green)')}
                          onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--color-terrax-border-light)')}
                        >
                          <option value="">— Select a series —</option>
                          {allSeries.sort((a, b) => a.order - b.order).map((s) => (
                            <option key={s.id} value={s.name}>{s.name}</option>
                          ))}
                          <option value="General">General Enquiry</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="contact-message" style={labelStyle}>Message</label>
                        <textarea
                          id="contact-message"
                          rows={4}
                          value={form.message}
                          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                          placeholder="Describe your requirements, tractor HP, field size, crop type..."
                          style={{ ...inputStyle, resize: 'vertical', minHeight: '100px' }}
                          onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-terrax-green)')}
                          onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--color-terrax-border-light)')}
                        />
                      </div>

                      <Button
                        as="button"
                        type="submit"
                        variant="primary"
                        fullWidth
                        rightIcon={<Send size={15} />}
                      >
                        Send Enquiry
                      </Button>

                      <p style={{ fontSize: '0.75rem', color: 'var(--color-terrax-muted)', textAlign: 'center', fontFamily: 'var(--font-body)' }}>
                        This will open your email client. Alternatively, call or WhatsApp us directly.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
