import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Phone, ArrowRight } from 'lucide-react';
import { navLinks, seriesLinks } from '../../data/navigation';
import { contact } from '../../data/contact';
import { Button } from '../common/Button';

// ─── TERRAX Brand Logo ────────────────────────────────────────────────────────
function TerraxLogo({ scrolled: _scrolled }: { scrolled: boolean }) {
  return (
    <Link to="/" aria-label="TERRAX — Home" style={{ display: 'inline-block' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
        {/* Real Brand Logo Image */}
        <div
          style={{
            width: 38,
            height: 38,
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
        {/* Wordmark */}
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '1.45rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: '#fff',
            }}
          >
            TERRAX
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mid)',
              fontWeight: 600,
              fontSize: '0.52rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--color-terrax-lime-light)',
              marginTop: '1px',
            }}
          >
            Agriculture Implements
          </span>
        </div>
      </div>
    </Link>
  );
}

// ─── Products Dropdown ────────────────────────────────────────────────────────
function ProductsDropdown({ onClose }: { onClose: () => void }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: 'calc(100% + 8px)',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'var(--color-terrax-charcoal)',
        border: '1px solid var(--color-terrax-border)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.25rem',
        minWidth: '260px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
        zIndex: 200,
        animation: 'fadeUp 0.2s ease',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-mid)',
          fontSize: '0.65rem',
          fontWeight: 600,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--color-terrax-muted)',
          marginBottom: '0.6rem',
          paddingBottom: '0.6rem',
          borderBottom: '1px solid var(--color-terrax-border)',
        }}
      >
        Product Series
      </p>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
        {seriesLinks.map((link) => (
          <li key={link.href}>
            <NavLink
              to={link.href}
              onClick={onClose}
              style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.55rem 0.75rem',
                borderRadius: 'var(--radius-md)',
                fontFamily: 'var(--font-mid)',
                fontWeight: 500,
                fontSize: '0.875rem',
                color: isActive ? 'var(--color-terrax-lime-light)' : '#fff',
                backgroundColor: isActive ? 'var(--color-terrax-green-dark)' : 'transparent',
                transition: 'background-color 0.15s ease, color 0.15s ease',
                textDecoration: 'none',
              })}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                if (!el.getAttribute('data-active')) {
                  el.style.backgroundColor = 'var(--color-terrax-charcoal-2)';
                }
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                if (!el.getAttribute('data-active')) {
                  el.style.backgroundColor = 'transparent';
                }
              }}
            >
              {link.label}
              <ArrowRight size={13} style={{ color: 'var(--color-terrax-orange)', flexShrink: 0 }} />
            </NavLink>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--color-terrax-border)' }}>
        <NavLink
          to="/products"
          onClick={onClose}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontFamily: 'var(--font-mid)',
            fontSize: '0.8rem',
            fontWeight: 600,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'var(--color-terrax-orange)',
            textDecoration: 'none',
          }}
        >
          View All Products <ArrowRight size={13} />
        </NavLink>
      </div>
    </div>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
  }, [location]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Prevent body scroll when mobile nav open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isHeroPage = ['/', '/about', '/products', '/why-terrax', '/applications', '/contact'].includes(location.pathname)
    || location.pathname.startsWith('/products/');

  return (
    <>
      <header
        className={`tx-header ${scrolled ? 'scrolled' : ''}`}
        style={{
          backgroundColor: scrolled ? 'var(--color-terrax-green-dark)' : isHeroPage ? 'transparent' : 'var(--color-terrax-green-dark)',
          height: scrolled ? '64px' : '72px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          className="tx-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            paddingInline: '1rem',
          }}
        >
          {/* Logo */}
          <TerraxLogo scrolled={scrolled} />

          {/* Desktop Navigation (>=768px) */}
          <nav
            aria-label="Main navigation"
            className="hidden md:flex items-center gap-1"
          >
            {navLinks.map((link) => {
              if (link.label === 'Products') {
                return (
                  <div key={link.href} style={{ position: 'relative' }} ref={dropdownRef}>
                    <button
                      aria-expanded={productsOpen}
                      aria-haspopup="true"
                      onClick={() => setProductsOpen((prev) => !prev)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        padding: '0.5rem 0.75rem',
                        borderRadius: 'var(--radius-md)',
                        fontFamily: 'var(--font-mid)',
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        color: '#fff',
                        backgroundColor: 'transparent',
                        cursor: 'pointer',
                        border: 'none',
                        transition: 'background-color 0.15s ease',
                        letterSpacing: '0.03em',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      Products
                      <ChevronDown
                        size={14}
                        style={{ transition: 'transform 0.2s ease', transform: productsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      />
                    </button>
                    {productsOpen && <ProductsDropdown onClose={() => setProductsOpen(false)} />}
                  </div>
                );
              }

              return (
                <NavLink
                  key={link.href}
                  to={link.href}
                  end={link.href === '/'}
                  style={({ isActive }) => ({
                    padding: '0.5rem 0.75rem',
                    borderRadius: 'var(--radius-md)',
                    fontFamily: 'var(--font-mid)',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    color: isActive ? 'var(--color-terrax-lime-light)' : '#fff',
                    backgroundColor: isActive ? 'rgba(255,255,255,0.08)' : 'transparent',
                    transition: 'background-color 0.15s ease, color 0.15s ease',
                    textDecoration: 'none',
                    letterSpacing: '0.03em',
                  })}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)')}
                  onMouseLeave={(e) => {
                    const active = e.currentTarget.getAttribute('aria-current') === 'page';
                    e.currentTarget.style.backgroundColor = active ? 'rgba(255,255,255,0.08)' : 'transparent';
                  }}
                >
                  {link.label}
                </NavLink>
              );
            })}
          </nav>

          {/* Desktop CTA (>=768px) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${contact.phones[0].raw}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: 'rgba(255,255,255,0.7)',
                fontFamily: 'var(--font-mid)',
                fontSize: '0.8rem',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
              aria-label="Call TERRAX"
            >
              <Phone size={13} />
              {contact.phones[0].display}
            </a>
            <Button as="link" to="/contact" variant="primary" size="sm">
              Enquire Now
            </Button>
          </div>

          {/* Mobile Menu Toggle (<768px) */}
          <button
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-md bg-white/10 text-white border-0 cursor-pointer shrink-0"
            aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

// ─── Mobile Navigation ────────────────────────────────────────────────────────
function MobileNav({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [seriesExpanded, setSeriesExpanded] = useState(false);
  const location = useLocation();
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Close on route change
  useEffect(() => {
    setSeriesExpanded(false);
  }, [location]);

  // Accessibility: Focus trap & Escape listener
  useEffect(() => {
    if (!isOpen) return;

    // Focus close button on open
    setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key === 'Tab' && drawerRef.current) {
        const focusables = drawerRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          last.focus();
          e.preventDefault();
        } else if (!e.shiftKey && document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.65)',
          backdropFilter: 'blur(4px)',
          zIndex: 150,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: 'min(320px, 88vw)',
          backgroundColor: 'var(--color-terrax-green-dark)',
          zIndex: 200,
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
          boxShadow: '-8px 0 32px rgba(0,0,0,0.4)',
        }}
      >
        {/* Drawer Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.1rem 1.25rem',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            flexShrink: 0,
          }}
        >
          <TerraxLogo scrolled={true} />
          <button
            ref={closeBtnRef}
            onClick={onClose}
            aria-label="Close navigation menu"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 40,
              height: 40,
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'rgba(255,255,255,0.1)',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav Links */}
        <nav style={{ padding: '1rem 0.75rem', flex: 1 }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
            {navLinks.map((link) => {
              if (link.label === 'Products') {
                return (
                  <li key={link.href}>
                    <button
                      aria-expanded={seriesExpanded}
                      onClick={() => setSeriesExpanded((prev) => !prev)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.85rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        fontFamily: 'var(--font-mid)',
                        fontWeight: 600,
                        fontSize: '1rem',
                        color: seriesExpanded ? 'var(--color-terrax-lime-light)' : '#fff',
                        backgroundColor: seriesExpanded ? 'rgba(255,255,255,0.06)' : 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'background-color 0.2s ease',
                      }}
                    >
                      Products
                      <ChevronDown
                        size={18}
                        style={{
                          transition: 'transform 0.25s ease',
                          transform: seriesExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                          color: 'var(--color-terrax-orange)',
                          flexShrink: 0,
                        }}
                      />
                    </button>
                    {/* Series sub-links Accordion */}
                    {seriesExpanded && (
                      <ul
                        style={{
                          listStyle: 'none',
                          margin: '0.35rem 0 0.35rem 0.85rem',
                          padding: '0.25rem 0',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.15rem',
                          borderLeft: '2px solid var(--color-terrax-green-mid)',
                          animation: 'fadeIn 0.2s ease',
                        }}
                      >
                        <li>
                          <NavLink
                            to="/products"
                            end
                            onClick={onClose}
                            style={({ isActive }) => ({
                              display: 'block',
                              padding: '0.6rem 0.9rem',
                              fontFamily: 'var(--font-mid)',
                              fontSize: '0.875rem',
                              fontWeight: isActive ? 700 : 500,
                              color: isActive ? 'var(--color-terrax-lime-light)' : 'rgba(255,255,255,0.85)',
                              textDecoration: 'none',
                              borderRadius: 'var(--radius-sm)',
                            })}
                          >
                            All Products Overview
                          </NavLink>
                        </li>
                        {seriesLinks.map((s) => (
                          <li key={s.href}>
                            <NavLink
                              to={s.href}
                              onClick={onClose}
                              style={({ isActive }) => ({
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '0.6rem 0.9rem',
                                fontFamily: 'var(--font-mid)',
                                fontSize: '0.875rem',
                                fontWeight: isActive ? 700 : 500,
                                color: isActive ? 'var(--color-terrax-lime-light)' : 'rgba(255,255,255,0.85)',
                                textDecoration: 'none',
                                borderRadius: 'var(--radius-sm)',
                              })}
                            >
                              {s.label}
                              <ArrowRight size={13} style={{ color: 'var(--color-terrax-orange)', opacity: 0.7 }} />
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }

              return (
                <li key={link.href}>
                  <NavLink
                    to={link.href}
                    end={link.href === '/'}
                    onClick={onClose}
                    style={({ isActive }) => ({
                      display: 'block',
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      fontFamily: 'var(--font-mid)',
                      fontWeight: 600,
                      fontSize: '1rem',
                      color: isActive ? 'var(--color-terrax-lime-light)' : '#fff',
                      backgroundColor: isActive ? 'rgba(255,255,255,0.08)' : 'transparent',
                      textDecoration: 'none',
                    })}
                  >
                    {link.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Drawer Footer CTA */}
        <div
          style={{
            padding: '1.25rem 1.25rem 2rem',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            flexShrink: 0,
            backgroundColor: 'rgba(0,0,0,0.15)',
          }}
        >
          <a
            href={`tel:${contact.phones[0].raw}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1rem',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'rgba(255,255,255,0.08)',
              color: '#fff',
              fontFamily: 'var(--font-mid)',
              fontWeight: 500,
              fontSize: '0.9rem',
              textDecoration: 'none',
            }}
            aria-label="Call TERRAX sales support"
          >
            <Phone size={16} style={{ color: 'var(--color-terrax-lime-light)', flexShrink: 0 }} />
            Call {contact.phones[0].display}
          </a>
          <Button as="link" to="/contact" variant="primary" fullWidth onClick={onClose}>
            Enquire Now
          </Button>
        </div>
      </div>
    </>
  );
}
