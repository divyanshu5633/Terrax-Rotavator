import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, ChevronDown } from 'lucide-react';
import { contact } from '../../data/contact';
import { navLinks, seriesLinks } from '../../data/navigation';
import { Container } from '../common/Container';

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Mobile accordion state
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    products: false,
    company: false,
    contact: true, // Keep contact open by default on mobile for easy reach
    quicklinks: false,
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
          {/* DESKTOP LAYOUT (>=768px) */}
          <div className="hidden md:grid md:grid-cols-4 gap-8">
            {/* Brand Column */}
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
                  marginBottom: '1rem',
                  maxWidth: '28ch',
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

            {/* Products Column */}
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-mid)',
                  fontWeight: 600,
                  fontSize: '0.75rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--color-terrax-muted)',
                  marginBottom: '1rem',
                }}
              >
                Products
              </h3>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {seriesLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.875rem',
                        color: 'rgba(255,255,255,0.65)',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-mid)',
                  fontWeight: 600,
                  fontSize: '0.75rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--color-terrax-muted)',
                  marginBottom: '1rem',
                }}
              >
                Company
              </h3>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {navLinks
                  .filter((l) => !['Home', 'Products'].includes(l.label))
                  .map((link) => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.875rem',
                          color: 'rgba(255,255,255,0.65)',
                          textDecoration: 'none',
                          transition: 'color 0.2s ease',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-mid)',
                  fontWeight: 600,
                  fontSize: '0.75rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--color-terrax-muted)',
                  marginBottom: '1rem',
                }}
              >
                Contact
              </h3>
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
                      {contact.address.line1}, {contact.address.line2}, {contact.address.state} {contact.address.pincode}
                    </span>
                  </address>
                </li>
              </ul>
            </div>
          </div>

          {/* MOBILE ACCORDION LAYOUT (<768px) */}
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
            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.5rem' }}>
              <button
                onClick={() => toggleSection('products')}
                aria-expanded={openSections.products}
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
                }}
              >
                Products
                <ChevronDown
                  size={16}
                  style={{
                    transition: 'transform 0.2s ease',
                    transform: openSections.products ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </button>
              {openSections.products && (
                <ul style={{ listStyle: 'none', margin: '0.5rem 0', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {seriesLinks.map((link) => (
                    <li key={link.href}>
                      <Link to={link.href} style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Accordion: COMPANY */}
            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.5rem' }}>
              <button
                onClick={() => toggleSection('company')}
                aria-expanded={openSections.company}
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
                }}
              >
                Company
                <ChevronDown
                  size={16}
                  style={{
                    transition: 'transform 0.2s ease',
                    transform: openSections.company ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </button>
              {openSections.company && (
                <ul style={{ listStyle: 'none', margin: '0.5rem 0', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li>
                    <Link to="/about" style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>
                      About TERRAX
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            {/* Accordion: QUICK LINKS */}
            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.5rem' }}>
              <button
                onClick={() => toggleSection('quicklinks')}
                aria-expanded={openSections.quicklinks}
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
                }}
              >
                Quick Links
                <ChevronDown
                  size={16}
                  style={{
                    transition: 'transform 0.2s ease',
                    transform: openSections.quicklinks ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </button>
              {openSections.quicklinks && (
                <ul style={{ listStyle: 'none', margin: '0.5rem 0', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li>
                    <Link to="/why-terrax" style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>
                      Why TERRAX
                    </Link>
                  </li>
                  <li>
                    <Link to="/applications" style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>
                      Farming Applications
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            {/* Accordion: CONTACT */}
            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.5rem' }}>
              <button
                onClick={() => toggleSection('contact')}
                aria-expanded={openSections.contact}
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
                }}
              >
                Contact Information
                <ChevronDown
                  size={16}
                  style={{
                    transition: 'transform 0.2s ease',
                    transform: openSections.contact ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </button>
              {openSections.contact && (
                <ul style={{ listStyle: 'none', margin: '0.5rem 0', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {contact.phones.map((p) => (
                    <li key={p.number}>
                      <a href={`tel:${p.number.replace(/\s/g, '')}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>
                        <Phone size={14} style={{ color: 'var(--color-terrax-lime-light)' }} />
                        {p.display}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a href={contact.whatsapp.link} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>
                      <MessageCircle size={14} style={{ color: '#25D366' }} />
                      WhatsApp: {contact.whatsapp.display}
                    </a>
                  </li>
                  <li>
                    <a href={contact.email.link} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', wordBreak: 'break-all' }}>
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
              )}
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Legal Bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingBlock: '1rem' }}>
        <Container>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.5rem',
            }}
          >
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', margin: 0 }}>
              © {currentYear} TERRAX — Cruciate Agritech. All rights reserved.
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
