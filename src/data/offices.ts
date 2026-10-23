// Offices and partners from pkpartners.se/contact-us and /where-we-are.

export interface Office {
  city: string;
  country: string;
  street: string;
  postal: string;
  phone: string;
  email: string;
  firm: string;
}

export const offices: Office[] = [
  { city: 'Stockholm', country: 'Sweden', street: 'Birger Jarlsgatan 13', postal: '111 45 Stockholm', phone: '+46 8 678 1630', email: 'info@pkpartners.se', firm: 'PK Partners' },
  { city: 'Paris', country: 'France', street: '53 avenue Victor Hugo', postal: '75116 Paris', phone: '+33 1 56 21 75 00', email: 'France@casecassiopea.com', firm: 'CASE CASSIOPEA' },
  { city: 'Frankfurt', country: 'Germany', street: 'Mainzer Landstr. 1', postal: '60329 Frankfurt', phone: '+49 69 204 3680 15', email: 'Germany@casecassiopea.com', firm: 'CASE CASSIOPEA' },
  { city: 'Milan', country: 'Italy', street: 'Piazza Cavour, 1', postal: '20121 Milano', phone: '+39 02 77 67 941', email: 'Italy@casecassiopea.com', firm: 'CASE CASSIOPEA' },
];

export const network = [
  { region: 'France, Germany and Italy', partner: 'CASE CASSIOPEA', text: 'A leading independent advisory firm with offices in Paris, Frankfurt and Milan.', href: 'https://casecassiopea.com' },
  { region: 'Benelux', partner: 'ABN AMRO', text: 'Partnership for M&A matters in the Benelux countries.' },
  { region: 'Latin America and Spain', partner: 'MAP Alliance', text: 'A joint venture of Atlantico Capital Partners, Metis Advisors and Providence Capital, with offices in São Paulo, Santiago, Miami, Mexico City and Madrid.' },
];

export const tel = (phone: string) => `tel:${phone.replace(/[^+\d]/g, '')}`;
