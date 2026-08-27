// ─── TERRAX Contact Configuration ───────────────────────────────────────────
// Single source of truth for all contact information.
// Update this file when contact details change.

export interface PhoneContact {
  number: string;      // E.164 / tel format
  display: string;     // Formatted display
  raw: string;         // Clean numeric without spaces or symbols
}

export const contact = {
  phones: [
    { number: '+91 8485998851', display: '+91 84859 98851', raw: '+918485998851' },
    { number: '+91 9099903217', display: '+91 90999 03217', raw: '+919099903217' },
    { number: '+91 9879664168', display: '+91 98796 64168', raw: '+919879664168' },
  ],
  whatsapp: {
    number: '+919099903217',
    internationalRaw: '919099903217',
    display: '+91 90999 03217',
    link: 'https://wa.me/919099903217',
  },
  email: {
    address: 'cruciateagritech@gmail.com',
    link: 'mailto:cruciateagritech@gmail.com',
  },
  address: {
    line1: 'Chiloda Char Rasta, N.H. No. 8',
    line2: 'Gautam Threshar',
    city: 'Chiloda',
    state: 'Gujarat',
    pincode: '382355',
    country: 'India',
    full: 'Chiloda Char Rasta, N.H. No. 8, Gautam Threshar, Gujarat 382355, India',
    mapQuery: 'Chiloda+Char+Rasta+NH+8+Gautam+Threshar+Gujarat+382355',
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Chiloda+Char+Rasta+NH+8+Gautam+Threshar+Gujarat+382355',
    embedUrl: 'https://maps.google.com/maps?q=Chiloda+Char+Rasta+NH+8+Gautam+Threshar+Gujarat+382355&t=&z=14&ie=UTF8&iwloc=&output=embed',
  },
  website: 'https://terrax.in',
} as const;

export type ContactConfig = typeof contact;

// ─── Analytics Interaction Event Hooks ────────────────────────────────────────
// Clean structured analytics dispatchers for future integration
export type AnalyticsEvent =
  | 'contact_form_started'
  | 'contact_form_submitted'
  | 'contact_form_failed'
  | 'whatsapp_clicked'
  | 'phone_clicked'
  | 'email_clicked'
  | 'directions_clicked'
  | 'product_enquiry_clicked';

export function trackContactEvent(event: AnalyticsEvent, payload?: Record<string, unknown>) {
  if (typeof window !== 'undefined') {
    // Dispatch to custom event or console in development
    const customEvent = new CustomEvent('terrax_analytics', {
      detail: { event, payload, timestamp: new Date().toISOString() },
    });
    window.dispatchEvent(customEvent);
  }
}
