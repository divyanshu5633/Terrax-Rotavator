import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, ChevronDown } from 'lucide-react';
import { contact } from '../../data/contact';
import { seriesLinks, companyLinks, exploreLinks } from '../../data/navigation';
import { Container } from '../common/Container';

// ─── Footer ───────────────────────────────────────────────────────────────────
// Desktop: 5-column grid (Brand | Products | Company | Explore | Contact)
// Mobile: accordion sections for compact access
// Imports companyLinks and exploreLinks from navigation.ts (includes Manufacturing)

function FooterLink({ to, label }: { to: string; label: string }) {
  return (
    <li>
      <Link
        to={to}
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.875rem',
          color: 'rgba(255,255,255,0.65)',
          textDecoration: 'none',
          transition: 'color 0.2s ease',
          display: 'inline-block',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
      >
        {label}
      </Link>
    </li>
  );
}

function FooterColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3
      style={{
        fontFamily: 'var(--font-mid)',
        fontWeight: 600,
        fontSize: '0.7rem',
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--color-terrax-muted)',
        marginBottom: '1rem',
      }}
    >
      {children}
    </h3>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Mobile accordion state
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    products: false,
    company: false,
    explore: false,
    contact: true, // open by default for quick reach
  });

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-terrax-green-dark)',
        color: '#fff',
        borderTop: '1px solid rgba(255,255,255,0.08)',
      }}
      role="contentinfo"
    >
      <div className="tx-section" style={{ paddingBlock: '3rem' }}>
        <Container>
          {/* ── DESKTOP LAYOUT (≥768px) — 5 columns ────────────────────── */}
          <div
            className="hidden md:grid gap-8"
            style={{ gridTemplateColumns: '2fr 1.5fr 1fr 1fr 1.75fr' }}
          >
            {/* Col 1: Brand */}
            <div>
              <Link to="/" style={{ display: 'inline-block', marginBottom: '1rem' }} aria-label="TERRAX Home">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 'var(--radius-sm)',
                      overflow: 'hidden',
                      flexShrink: 0,
                      border: '1px solid rgba(255,255,255,0.2)',
                      backgroundColor: '#fff',
                    }}
                  >
                    <img
                      src="/assets/brand/terrax-logo.jpg"
                      alt="TERRAX Logo"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 800,
                      fontSize: '1.35rem',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                    }}
                  >
                    TERRAX
                  </span>
                </div>
              </Link>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.85rem',
                  lineHeight: 1.7,
                  color: 'rgba(255,255,255,0.6)',
                  marginBottom: '0.75rem',
                  maxWidth: '26ch',
                }}
              >
                Built for the Earth.<br />Engineered to Perform.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-mid)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--color-terrax-lime-light)',
                  fontWeight: 600,
                }}
              >
                Agriculture Implements
              </p>
            </div>

            {/* Col 2: Products */}
            <div>
              <FooterColumnHeading>Products</FooterColumnHeading>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {seriesLinks.map((link) => (
                  <FooterLink key={link.href} to={link.href} label={link.label} />
                ))}
              </ul>
            </div>

            {/* Col 3: Company */}
            <div>
              <FooterColumnHeading>Company</FooterColumnHeading>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {companyLinks.map((link) => (
                  <FooterLink key={link.href} to={link.href} label={link.label} />
                ))}
              </ul>
            </div>

            {/* Col 4: Explore */}
            <div>
              <FooterColumnHeading>Explore</FooterColumnHeading>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {exploreLinks.map((link) => (
                  <FooterLink key={link.href} to={link.href} label={link.label} />
                ))}
              </ul>
            </div>

            {/* Col 5: Contact */}
            <div>
              <FooterColumnHeading>Contact</FooterColumnHeading>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {contact.phones.map((p) => (
                  <li key={p.number}>
                    <a
                      href={`tel:${p.number.replace(/\s/g, '')}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.875rem',
                        color: 'rgba(255,255,255,0.7)',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                    >
                      <Phone size={13} style={{ color: 'var(--color-terrax-lime-light)', flexShrink: 0 }} />
                      {p.display}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={contact.whatsapp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                      color: 'rgba(255,255,255,0.7)',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                  >
                    <MessageCircle size={13} style={{ color: '#25D366', flexShrink: 0 }} />
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={contact.email.link}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.85rem',
                      color: 'rgba(255,255,255,0.7)',
                      textDecoration: 'none',
                      wordBreak: 'break-all',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                  >
                    <Mail size={13} style={{ color: 'var(--color-terrax-lime-light)', flexShrink: 0 }} />
                    {contact.email.address}
                  </a>
                </li>
                <li>
                  <address
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.8rem',
                      color: 'rgba(255,255,255,0.55)',
                      fontStyle: 'normal',
                      lineHeight: 1.5,
                    }}
                  >
                    <MapPin size={13} style={{ color: 'var(--color-terrax-lime-light)', flexShrink: 0, marginTop: '3px' }} />
                    <span>
                      {contact.address.line1}, {contact.address.line2},{' '}
                      {contact.address.state} {contact.address.pincode}, {contact.address.country}
                    </span>
                  </address>
                </li>
              </ul>
            </div>
          </div>

          {/* ── MOBILE ACCORDION LAYOUT (<768px) ───────────────────────── */}
          <div className="md:hidden flex flex-col gap-6">
            {/* Brand Top */}
            <div style={{ paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <Link to="/" style={{ display: 'inline-block', marginBottom: '0.5rem' }} aria-label="TERRAX Home">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <div
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 'var(--radius-sm)',
                      overflow: 'hidden',
                      flexShrink: 0,
                      border: '1px solid rgba(255,255,255,0.2)',
                      backgroundColor: '#fff',
                    }}
                  >
                    <img
                      src="/assets/brand/terrax-logo.jpg"
                      alt="TERRAX Logo"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem', color: '#fff' }}>
                    TERRAX
                  </span>
                </div>
              </Link>
              <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', margin: 0 }}>
                Built for the Earth. Engineered to Perform.
              </p>
            </div>

            {/* Accordion: PRODUCTS */}
            <MobileAccordion
              title="Products"
              isOpen={openSections.products}
              onToggle={() => toggleSection('products')}
            >
              <ul style={{ listStyle: 'none', margin: '0.5rem 0', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {seriesLinks.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </MobileAccordion>

            {/* Accordion: COMPANY */}
            <MobileAccordion
              title="Company"
              isOpen={openSections.company}
              onToggle={() => toggleSection('company')}
            >
              <ul style={{ listStyle: 'none', margin: '0.5rem 0', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </MobileAccordion>

            {/* Accordion: EXPLORE */}
            <MobileAccordion
              title="Explore"
              isOpen={openSections.explore}
              onToggle={() => toggleSection('explore')}
            >
              <ul style={{ listStyle: 'none', margin: '0.5rem 0', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {exploreLinks.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </MobileAccordion>

            {/* Accordion: CONTACT — open by default */}
            <MobileAccordion
              title="Contact Information"
              isOpen={openSections.contact}
              onToggle={() => toggleSection('contact')}
            >
              <ul style={{ listStyle: 'none', margin: '0.5rem 0', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {contact.phones.map((p) => (
                  <li key={p.number}>
                    <a
                      href={`tel:${p.number.replace(/\s/g, '')}`}
                      style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}
                    >
                      <Phone size={14} style={{ color: 'var(--color-terrax-lime-light)' }} />
                      {p.display}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={contact.whatsapp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}
                  >
                    <MessageCircle size={14} style={{ color: '#25D366' }} />
                    WhatsApp: {contact.whatsapp.display}
                  </a>
                </li>
                <li>
                  <a
                    href={contact.email.link}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', wordBreak: 'break-all' }}
                  >
                    <Mail size={14} style={{ color: 'var(--color-terrax-lime-light)' }} />
                    {contact.email.address}
                  </a>
                </li>
                <li>
                  <address style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)', fontStyle: 'normal', lineHeight: 1.5 }}>
                    <MapPin size={14} style={{ color: 'var(--color-terrax-lime-light)', marginTop: '2px', flexShrink: 0 }} />
                    <span>{contact.address.full}</span>
                  </address>
                </li>
              </ul>
            </MobileAccordion>
          </div>
        </Container>
      </div>

      {/* Bottom Legal Bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingBlock: '1.1rem' }}>
        <Container>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.75rem',
            }}
          >
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', margin: 0 }}>
              © {currentYear} TERRAX — Cruciate Agritech. All rights reserved.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)', margin: 0 }}>
              Website Design &amp; Development ·{' '}
              <a
                href="https://www.linkedin.com/in/divyanshu-patel-99450426b/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  fontWeight: 500,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-terrax-orange)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                }}
              >
                Divyanshu
              </a>
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', margin: 0 }}>
              Made in India 🇮🇳
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}

// ─── MobileAccordion helper ───────────────────────────────────────────────────
function MobileAccordion({
  title,
  isOpen,
  onToggle,
  children,
}: {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.5rem' }}>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBlock: '0.5rem',
          fontFamily: 'var(--font-mid)',
          fontWeight: 600,
          fontSize: '0.8rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--color-terrax-lime-light)',
          border: 'none',
          background: 'none',
          cursor: 'pointer',
        }}
      >
        {title}
        <ChevronDown
          size={16}
          style={{
            transition: 'transform 0.2s ease',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            flexShrink: 0,
          }}
        />
      </button>
      {isOpen && children}
    </div>
  );
}
