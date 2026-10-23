// Every deal from pkpartners.se/what-we-have-done (42 entries, newest first).
// On the live site the company names only exist inside logo images, so the
// names here were read from those image file names. Anything marked
// `confirm: true` could not be read and needs checking with PK Partners.

export type Role = 'seller' | 'buyer' | 'company' | 'strategic';

export interface Deal {
  year: number;
  role: Role;
  client: string;
  counterparty?: string;
  // The deal sentence from the live site, with the names filled in.
  text: string;
  value?: { currency: 'SEK' | 'EUR' | 'DKK' | 'NOK'; amount: number; unit: 'm' | 'bn' };
  valueNote?: string;
  pending?: boolean;
  confirm?: boolean;
}

export const roleLabel: Record<Role, string> = {
  seller: 'Adviser to seller',
  buyer: 'Adviser to buyer',
  company: 'Adviser to company',
  strategic: 'Strategic adviser',
};

export const deals: Deal[] = [
  { year: 2026, role: 'seller', pending: true, confirm: true, client: 'Name to confirm', counterparty: 'Carelink', text: 'Sold to Carelink', value: { currency: 'DKK', amount: 282, unit: 'm' } },
  { year: 2026, role: 'seller', client: 'Clinstorage', counterparty: 'RHP', text: 'Sold to RHP' },
  { year: 2025, role: 'seller', client: 'DNE Pharma', counterparty: 'Navamedic', text: 'Sold to Navamedic' },
  { year: 2025, role: 'seller', client: 'Stora Enso', counterparty: 'Soya-Meag', text: 'Sold 12.4% of its Swedish forest holdings to Soya-Meag', value: { currency: 'EUR', amount: 900, unit: 'm' } },
  { year: 2025, role: 'seller', confirm: true, client: 'DNE Pharma', counterparty: 'Buyer to confirm', text: 'Sold to a buyer whose name needs confirming' },
  { year: 2024, role: 'seller', client: 'Team Olivia', counterparty: 'Humana', text: 'Sold to Humana', value: { currency: 'SEK', amount: 341, unit: 'm' } },
  { year: 2024, role: 'seller', client: 'Team Olivia', counterparty: 'Attendo', text: 'Sold its Swedish care operations to Attendo', value: { currency: 'SEK', amount: 950, unit: 'm' } },
  { year: 2024, role: 'seller', client: 'Lantmännen', counterparty: 'LEAG', text: 'Sold Scandbio to LEAG' },
  { year: 2023, role: 'seller', client: 'Willo', counterparty: 'Ejendal Invest', text: 'Sold a majority stake to Ejendal Invest' },
  { year: 2022, role: 'seller', client: 'GHP Specialty Care', counterparty: 'Capio', text: "Adviser regarding Capio's public offer to acquire GHP Specialty Care", value: { currency: 'SEK', amount: 2.5, unit: 'bn' } },
  { year: 2021, role: 'buyer', client: 'Adapteo', counterparty: 'MT Højgaard', text: 'Acquired the modular building assets of Ajos from MT Højgaard' },
  { year: 2021, role: 'seller', client: 'Ahlström Capital', counterparty: 'Colas', text: 'Sold Destia to Colas', value: { currency: 'EUR', amount: 235, unit: 'm' } },
  { year: 2021, role: 'seller', client: 'Anora', counterparty: 'Galatea', text: 'Sold selected spirits brands to Galatea' },
  { year: 2021, role: 'buyer', client: 'Alfa Laval', counterparty: 'EQT', text: 'Acquired StormGeo from EQT', value: { currency: 'NOK', amount: 3.6, unit: 'bn' } },
  { year: 2020, role: 'buyer', client: 'Adapteo', counterparty: 'Stord', text: 'Acquired Stord' },
  { year: 2020, role: 'buyer', confirm: true, client: 'Adapteo', counterparty: 'Target to confirm', text: 'Acquired a company whose name needs confirming' },
  { year: 2020, role: 'seller', client: 'Mittvaccin', counterparty: 'Cambio', text: 'Sold to Cambio' },
  { year: 2020, role: 'seller', client: 'Temp-Space', counterparty: 'Algeco', text: 'A portfolio company of Procuritas, sold to Algeco' },
  { year: 2020, role: 'seller', client: 'Bolisten', counterparty: 'XL-Bygg', text: 'Sold to XL-Bygg' },
  { year: 2019, role: 'seller', client: 'BillerudKorsnäs', counterparty: 'AMF', text: 'Sold 89.9% of the shares in Bergvik Skog Öst to AMF', value: { currency: 'SEK', amount: 12.2, unit: 'bn' } },
  { year: 2018, role: 'seller', client: 'Alfa Laval', counterparty: 'LU-VE', text: 'Sold its commercial & industrial air heat exchangers business to LU-VE' },
  { year: 2018, role: 'seller', client: 'Ramirent', counterparty: 'Procuritas', text: 'Sold its temporary space business to Procuritas' },
  { year: 2017, role: 'seller', client: 'Oral Care', counterparty: 'Accent Equity', text: 'A portfolio company of Procuritas, sold to Accent Equity' },
  { year: 2017, role: 'seller', client: 'Ecolog', counterparty: 'Accent Equity', text: 'Sold to Accent Equity' },
  { year: 2016, role: 'seller', client: 'Dialect', counterparty: 'Perusa', text: 'Adviser regarding the public offer by Perusa' },
  { year: 2016, role: 'seller', client: 'Stora Enso', counterparty: 'Kabel', text: 'Sold its paper mill in Germany to Kabel' },
  { year: 2015, role: 'seller', client: 'Apro', counterparty: 'Karo Bio', text: 'A portfolio company of Procuritas, sold to Karo Bio' },
  { year: 2015, role: 'buyer', client: 'Enagás & Fluxys', counterparty: 'EQT', text: 'Acquired Swedegas from EQT' },
  { year: 2014, role: 'buyer', client: 'Atlas Copco', counterparty: 'Henrob', text: 'Acquired Henrob' },
  { year: 2014, role: 'seller', client: 'Ahlstrom', counterparty: 'Perusa', text: 'Sold its Osnabrück paper mill in Germany to Perusa' },
  { year: 2013, role: 'buyer', client: 'Oriola', counterparty: 'Segulah', text: 'Acquired Medstop from Segulah', value: { currency: 'SEK', amount: 1.5, unit: 'bn' } },
  { year: 2013, role: 'seller', client: 'Ahold', counterparty: 'Hakon Invest', text: 'Sold its 60% of the shares in ICA to Hakon Invest', value: { currency: 'SEK', amount: 21.2, unit: 'bn' } },
  { year: 2013, role: 'company', client: 'Ahlstrom', counterparty: 'Munksjö', text: 'Combined its label and processing business with Munksjö into listed Munksjö Oyj', valueNote: 'Combined turnover EUR 1.3bn' },
  { year: 2013, role: 'seller', client: 'Log Max', counterparty: 'Komatsu', text: 'Sold to Komatsu' },
  { year: 2011, role: 'buyer', client: 'Procuritas', counterparty: 'Farma Holding', text: 'Acquired Farma Holding' },
  { year: 2011, role: 'seller', client: 'Ahlstrom', counterparty: 'Suominen', text: 'Sold its home & personal business to Suominen', value: { currency: 'EUR', amount: 170, unit: 'm' } },
  { year: 2010, role: 'seller', client: 'Gambro', counterparty: 'Fresenius', text: 'Sold its PD business to Fresenius' },
  { year: 2009, role: 'strategic', client: 'Sanitec', text: 'Strategic adviser on its debt restructuring', value: { currency: 'EUR', amount: 969, unit: 'm' } },
  { year: 2008, role: 'seller', client: 'Uponor', counterparty: '3i', text: 'Sold its British and Irish infrastructure business to 3i', value: { currency: 'EUR', amount: 120, unit: 'm' } },
  { year: 2008, role: 'buyer', client: 'Pernod Ricard', counterparty: 'the Kingdom of Sweden', text: 'Acquired Vin & Sprit from the Kingdom of Sweden', value: { currency: 'EUR', amount: 5.6, unit: 'bn' } },
  { year: 2006, role: 'seller', client: 'Gambro', counterparty: 'EQT and Investor', text: 'Adviser regarding the public offer by EQT and Investor', value: { currency: 'EUR', amount: 3.6, unit: 'bn' } },
  { year: 2006, role: 'buyer', client: 'Apax', counterparty: 'Capio', text: 'Public offer together with Nordic Capital to acquire Capio', value: { currency: 'EUR', amount: 2.7, unit: 'bn' } },
];

export function formatValue(d: Deal): string | undefined {
  if (d.value) return `${d.value.currency} ${d.value.amount}${d.value.unit}`;
  return d.valueNote;
}

// Rough size in SEK, only used to size a deal's star on the chart.
// It is never shown as a number.
const toSek = { SEK: 1, EUR: 11, DKK: 1.5, NOK: 1 };
export function roughSekBn(d: Deal): number | undefined {
  if (!d.value) return undefined;
  const bn = d.value.unit === 'bn' ? d.value.amount : d.value.amount / 1000;
  return bn * toSek[d.value.currency];
}
