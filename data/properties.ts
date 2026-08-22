export interface PropertyItem {
  id: string;
  title: string;
  location: string;
  city: string;
  country: "switzerland" | "uk" | "asia" | "europe";
  countryLabel: string;
  type: string;
  offerType: "BUY" | "RENT";
  completionYear?: string;
  units?: string;
  priceCHF: number;
  areaSqM: number;
  areaSqFt: number;
  bedrooms: number;
  bathrooms: number;
  yieldRate: string;
  appreciationRate: string;
  status: "Available" | "Private Treaty" | "Acquired";
  image: string;
  gallery: string[];
  description: string;
  highlights: string[];
  taxAdvantage: string;
}

export const propertiesData: PropertyItem[] = [
  {
    id: "funny-haus-binz",
    title: "Funny Haus Prime Development",
    location: "Binz, Zurich, Switzerland",
    city: "Zurich",
    country: "switzerland",
    countryLabel: "Switzerland",
    type: "Residential & Commercial Landmark",
    offerType: "RENT",
    completionYear: "Autumn 2024",
    units: "2 Luxury Apts / 3 Commercial Units",
    priceCHF: 4000000,
    areaSqM: 580,
    areaSqFt: 6243,
    bedrooms: 4,
    bathrooms: 4,
    yieldRate: "5.8% Net",
    appreciationRate: "+8.4% YoY",
    status: "Available",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80",
    ],
    description:
      "A boutique architectural development in Binz (Zurich), integrating sustainable timber-hybrid construction, expansive glass facades, and modular commercial-residential suites developed by Leimann Global Capital.",
    highlights: [
      "Prime canton Zurich logistics and urban connectivity",
      "Energy-positive Swiss Minergie-P certification",
      "Managed in partnership with Leimann Immobilien GmbH",
      "Underground parking equipped with EV fast-chargers",
    ],
    taxAdvantage: "Direct Swiss Real Estate Holding Structure",
  },
  {
    id: "kuesnacht-goldcoast",
    title: "The Küsnacht Lakefront Villa",
    location: "Boglerenstrasse, Küsnacht (ZH), Switzerland",
    city: "Zurich",
    country: "switzerland",
    countryLabel: "Switzerland",
    type: "Super-Prime Waterfront Estate",
    offerType: "BUY",
    completionYear: "Q1 2025",
    units: "Single Private Sanctuary",
    priceCHF: 24500000,
    areaSqM: 780,
    areaSqFt: 8395,
    bedrooms: 6,
    bathrooms: 7,
    yieldRate: "4.5% Net",
    appreciationRate: "+7.9% YoY",
    status: "Private Treaty",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80",
    ],
    description:
      "Situated along the celebrated Zurich Goldcoast in Küsnacht, this monumental private estate commands direct Lake Zurich access, private jetty, wellness sanctuary, and maximum privacy.",
    highlights: [
      "Private deep-water yacht dock and boathouse",
      "Cantonal tax privilege location in Küsnacht",
      "Geothermal climate systems and Swiss oak craftsmanship",
      "Discrete security infrastructure with multi-vault security",
    ],
    taxAdvantage: "Zurich Cantonal Lump-Sum Taxation (Pauschalbesteuerung) Eligible",
  },
  {
    id: "geneva-lakefront",
    title: "Villa L'Étoile du Lac",
    location: "Cologny, Geneva, Switzerland",
    city: "Geneva",
    country: "switzerland",
    countryLabel: "Switzerland",
    type: "Private Waterfront Estate",
    offerType: "BUY",
    completionYear: "Completed",
    units: "Private Sovereign Estate",
    priceCHF: 32000000,
    areaSqM: 1200,
    areaSqFt: 12916,
    bedrooms: 7,
    bathrooms: 8,
    yieldRate: "3.5% Net",
    appreciationRate: "+6.4% YoY",
    status: "Available",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80",
    ],
    description:
      "A monumental private estate situated in Geneva's most exclusive enclave of Cologny. Features expansive landscaped grounds rolling down to private lake moorings with panoramic views of Mont Blanc.",
    highlights: [
      "Private deep-water yacht jetty and boathouse",
      "Independent 2-bedroom staff lodge and security post",
      "Subterranean 8-car gallery garage with turntable",
      "Double-height reception hall with French limestone",
    ],
    taxAdvantage: "Geneva Private Estate Domicile Structuring Ready",
  },
  {
    id: "st-moritz-chalet",
    title: "The Suvretta Alpine Sanctuary",
    location: "Suvretta Hill, St. Moritz, Switzerland",
    city: "St. Moritz",
    country: "switzerland",
    countryLabel: "Switzerland",
    type: "Ski-In / Ski-Out Luxury Chalet",
    offerType: "BUY",
    completionYear: "Completed",
    units: "Alpine Family Compound",
    priceCHF: 28000000,
    areaSqM: 980,
    areaSqFt: 10548,
    bedrooms: 6,
    bathrooms: 7,
    yieldRate: "5.6% Seasonal",
    appreciationRate: "+8.2% YoY",
    status: "Private Treaty",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=80",
    ],
    description:
      "Nestled atop Suvretta Hill in the Engadin valley, this alpine estate marries ancient Austrian pine craftsmanship with monumental quartz stone, complete with outdoor heated infinity pool facing the peaks.",
    highlights: [
      "Direct ski-in / ski-out access to Corviglia slopes",
      "Outdoor heated onsen pool overlooking Engadin valley",
      "Private cinema room and ski equipment lounge",
      "Helipad access protocol within 5 minutes",
    ],
    taxAdvantage: "Graubünden Cantonal Favorable Property Tax Regime",
  },
  {
    id: "london-belgravia",
    title: "The Eaton Square Belgravia Residence",
    location: "Belgravia, London SW1, United Kingdom",
    city: "London",
    country: "uk",
    countryLabel: "United Kingdom",
    type: "Grade II* Listed Townhouse",
    offerType: "RENT",
    completionYear: "Completed",
    units: "Main Residence + Mews House",
    priceCHF: 27500000,
    areaSqM: 850,
    areaSqFt: 9150,
    bedrooms: 6,
    bathrooms: 7,
    yieldRate: "3.8% Net",
    appreciationRate: "+5.9% YoY",
    status: "Available",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
    ],
    description:
      "A masterclass in Georgian architectural grandeur, meticulously restored to blend historic cornicing and soaring ceilings with state-of-the-art climate control, cinema room, and private landscaped mews.",
    highlights: [
      "Direct access to private Belgravia garden square",
      "Private passenger lift servicing all 6 levels",
      "Integrated Crestron smart home automation",
      "Separate mews house with private garage and guest suite",
    ],
    taxAdvantage: "UK Non-Dom Trust Structure Compatible (SPV Transferred)",
  },
  {
    id: "zurichberg-penthouse",
    title: "The Zürichberg Sky Residence",
    location: "Zürichberg, Zurich, Switzerland",
    city: "Zurich",
    country: "switzerland",
    countryLabel: "Switzerland",
    type: "Modernist Penthouse",
    offerType: "BUY",
    completionYear: "Q2 2025",
    units: "Penthouse Suite",
    priceCHF: 16800000,
    areaSqM: 520,
    areaSqFt: 5597,
    bedrooms: 4,
    bathrooms: 5,
    yieldRate: "4.1% Net",
    appreciationRate: "+7.5% YoY",
    status: "Available",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
    ],
    description:
      "Perched high above Zurich with sweeping panoramic vistas across the lake and snow-capped Alpine ridge, this minimalist residence offers 360-degree wraparound terraces and bespoke craftsmanship.",
    highlights: [
      "Direct private elevator access and 4-car private box",
      "Sublime 200 sqm wraparound terrace overlooking the lake",
      "Designed according to Swiss sustainable construction standards",
    ],
    taxAdvantage: "Zurich Prime Asset Portfolio Allocation",
  },
];
