import { useSEO } from '../hooks/useSEO';
import { Container } from '../components/common/Container';
import { BrandHero } from '../components/brand/BrandHero';
import { ContactDetails } from '../components/common/ContactDetails';
import { EnquiryForm } from '../components/contact/EnquiryForm';
import { LocationMap } from '../components/common/LocationMap';

export function ContactPage() {
  useSEO({
    title: 'Contact Terrax | Agricultural Implements & Rotavators',
    description:
      'Contact Terrax for agricultural implement and rotavator product enquiries, configurations and location information.',
    canonical: '/contact',
  });

  return (
    <>
      {/* 1. Page Hero */}
      <BrandHero
        eyebrow="Contact Terrax"
        title={["LET'S TALK", 'AGRICULTURAL', 'IMPLEMENTS.']}
        description="Have a product enquiry or need information about available configurations? Connect with the Terrax team."
        theme="dark-green"
      />

      {/* 2. Main Contact & Enquiry Section */}
      <section
        className="tx-section"
        style={{
          backgroundColor: 'var(--color-terrax-offwhite)',
          paddingBlock: 'clamp(3rem, 6vw, 5.5rem)',
        }}
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* LEFT COLUMN: Contact Info & Action Cards */}
            <div className="lg:col-span-5 min-w-0">
              <div style={{ marginBottom: '1.75rem' }}>
                <span
                  className="tx-overline"
                  style={{ marginBottom: '0.25rem', display: 'block' }}
                >
                  Direct Channels
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
                  REACH US DIRECTLY
                </h2>
                <p
                  className="tx-body"
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--color-terrax-muted-dark)',
                    lineHeight: 1.5,
                  }}
                >
                  Connect with the factory and product team via direct phone lines, WhatsApp, or email.
                </p>
              </div>

              {/* Reusable ContactDetails Component */}
              <ContactDetails showQuickActions />
            </div>

            {/* RIGHT COLUMN: Enquiry Form */}
            <div className="lg:col-span-7 min-w-0">
              <EnquiryForm />
            </div>
          </div>

          {/* 3. Google Maps / Location Section */}
          <div style={{ marginTop: 'clamp(3rem, 6vw, 4.5rem)' }}>
            <LocationMap
              title="FIND TERRAX"
              overline="Manufacturing Facility"
              showDirectionsButton
            />
          </div>
        </Container>
      </section>
    </>
  );
}
