// ─── TERRAX Contact Configuration ───────────────────────────────────────────
// Single source of truth for all contact information.
// Update this file when contact details change.

export const contact = {
  phones: [
    { number: '+91 8485998851', display: '+91 84859 98851' },
    { number: '+91 9099903217', display: '+91 90999 03217' },
    { number: '+91 9879664168', display: '+91 98796 64168' },
  ],
  whatsapp: {
    number: '+919099903217',
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
  },
  website: 'https://terrax.in',
} as const;

export type ContactConfig = typeof contact;
