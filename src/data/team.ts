// The team from pkpartners.se/who-we-are and each person's profile page.
// The live site does not publish job titles, so none are shown here.

export interface Person {
  slug: string;
  name: string;
  email: string;
  // Short facts from the profile page: earlier roles and education.
  background: string[];
  education: string[];
  note?: string;
}

export const team: Person[] = [
  {
    slug: 'johannes-aronsson',
    name: 'Johannes Aronsson',
    email: 'johannes.aronsson@pkpartners.se',
    background: ['Söderberg & Partners, Stockholm', 'Various part-time positions'],
    education: ['B.Sc. in Business and Economics, Stockholm School of Economics'],
  },
  {
    slug: 'marcus-bengtsson',
    name: 'Marcus Bengtsson',
    email: 'marcus.bengtsson@pkpartners.se',
    background: ['EY, Stockholm', 'Various other positions'],
    education: ['BBA in Economics, Baruch College, New York City'],
  },
  {
    slug: 'peter-birke',
    name: 'Peter Birke',
    email: 'peter.birke@pkpartners.se',
    background: [
      'Macquarie, Managing Director and head of the Nordic office',
      'ABN Amro Corporate Finance (formerly Alfred Berg), Managing Director and head, Stockholm',
      'Ministry of Industry, Employment and Communications, 1999–2000',
      'Swedbank Corporate Finance, 1996–1999',
      'Enskilda Securities, 1991–1996',
    ],
    education: ['Stockholm School of Economics'],
  },
  {
    slug: 'jacob-carlsson',
    name: 'Jacob Carlsson',
    email: 'jacob.carlsson@pkpartners.se',
    background: ['Pareto Securities, Stockholm', 'Various part-time positions'],
    education: ['M.Sc. in Accounting and Financial Management, Stockholm School of Economics'],
  },
  {
    slug: 'johan-dyster-aas',
    name: 'Johan Dyster-Aas',
    email: 'johan.dyster-aas@pkpartners.se',
    background: ['Capgemini', 'Grasp AI, Stockholm'],
    education: ['M.Sc. in Business and Management, Stockholm School of Economics'],
  },
  {
    slug: 'ludwig-humble',
    name: 'Ludwig Humble',
    email: 'ludwig.humble@pkpartners.se',
    background: ['Valuation Europe, Stockholm', 'Various part-time positions'],
    education: ['B.Sc. in Business and Economics, Stockholm School of Economics'],
  },
  {
    slug: 'per-karlsson',
    name: 'Per Karlsson',
    email: 'per.karlsson@pkpartners.se',
    note: 'Founded PK Partners in 2002. Board Director, IKANO S.A.',
    background: [
      'Independent adviser, London and Stockholm, 1992–2002',
      'Enskilda Securities, London, established and co-headed the M&A practice, 1986–1992',
      'The Boston Consulting Group, London, 1979–1986',
      'IKEA Europe, 1977–1978',
    ],
    education: ['Stockholm School of Economics'],
  },
  {
    slug: 'oscar-lidman',
    name: 'Oscar Lidman',
    email: 'oscar.lidman@pkpartners.se',
    background: ['Downing LLP Investment Management, London, intern', 'Other internships'],
    education: ['B.Sc. in Business Administration, University of Bath'],
  },
  {
    slug: 'ruya-merkit',
    name: 'Rüya Merkit',
    email: 'ruya.merkit@pkpartners.se',
    background: ['Hotel Birger Jarl, Stockholm'],
    education: ['Human Resource Management and Working Life, Uppsala University'],
  },
  {
    slug: 'markus-norlin',
    name: 'Markus Norlin',
    email: 'markus.norlin@pkpartners.se',
    background: [
      'Skeberga Advisory',
      'Macquarie Capital, Nordic team',
      'ABN Amro Corporate Finance',
      'Alfred Berg Corporate Finance, Stockholm',
    ],
    education: ['M.Sc., Stockholm School of Economics, Finance and Macroeconomics'],
  },
  {
    slug: 'mats-palmblad',
    name: 'Mats Palmblad',
    email: 'mats.palmblad@pkpartners.se',
    note: 'With PK Partners since it started in 2002.',
    background: [
      'The Boston Consulting Group, London and Stockholm, Partner and Director, 1989–2002',
      'Baxter International, Chicago and Brussels, 1986–1989',
    ],
    education: ['M.Sc. in Engineering Physics, Lund University', 'MBA, University of Chicago Graduate School of Business'],
  },
  {
    slug: 'joachim-palme',
    name: 'Joachim Palmé',
    email: 'joachim.palme@pkpartners.se',
    note: 'Joined PK Partners in 2026.',
    background: [
      'Sareq, CEO, 2023–2025',
      'TD SYNNEX, SVP Nordics, 2016–2023',
      'EY, Partner, Transaction Advisory Services, 2015–2016',
      'Triton, Operating Partner, 2010–2014',
      'AlixPartners, Managing Director, 2003–2010',
      'Egon Zehnder, 2002–2003',
      'The Boston Consulting Group, Manager, 1995–2001',
    ],
    education: [
      'M.Sc. in Industrial Engineering and Management, Chalmers University of Technology',
      'MBA, INSEAD',
    ],
  },
];
