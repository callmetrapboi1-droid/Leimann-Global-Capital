export type Language = "EN" | "DE" | "TH";

export interface Translations {
  nav: {
    menu: string;
    close: string;
    home: string;
    realEstate: string;
    services: string;
    vision: string;
    capitalInvestment: string;
    aboutUs: string;
    calculator: string;
    contact: string;
    directory: string;
    brandTag: string;
    addressShort: string;
  };
  hero: {
    tag: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    ctaServices: string;
    ctaPortfolio: string;
    ctaAdvisory: string;
    statVolumeLabel: string;
    statVolumeVal: string;
    statVolumeSub: string;
    statAssetsLabel: string;
    statAssetsVal: string;
    statAssetsSub: string;
    statTrackLabel: string;
    statTrackVal: string;
    statTrackSub: string;
    statDiscretionLabel: string;
    statDiscretionVal: string;
    statDiscretionSub: string;
    scroll: string;
  };
  vision: {
    tag: string;
    headlineLine1: string;
    headlineLine2: string;
    desc1: string;
    desc2: string;
    ctaServices: string;
    ctaConsultation: string;
    imageTag: string;
    imageDesc: string;
    quote: string;
    author: string;
    location: string;
  };
  services: {
    tag: string;
    selectLabel: string;
    inquireBtn: string;
    activeFocus: string;
    tabs: {
      acquire: {
        tabLabel: string;
        title: string;
        subtitle: string;
        partner?: string;
        desc: string;
        points: string[];
        caption: string;
      };
      build: {
        tabLabel: string;
        title: string;
        subtitle: string;
        partner?: string;
        desc: string;
        points: string[];
        caption: string;
      };
      sellRent: {
        tabLabel: string;
        title: string;
        subtitle: string;
        partner?: string;
        desc: string;
        points: string[];
        caption: string;
      };
      capital: {
        tabLabel: string;
        title: string;
        subtitle: string;
        partner?: string;
        desc: string;
        points: string[];
        caption: string;
      };
    };
  };
  portfolio: {
    tag: string;
    headline: string;
    subtitle: string;
    filterAll: string;
    filterBuy: string;
    filterRent: string;
    filterSwiss: string;
    filterUk: string;
    displaying: string;
    portfolioSub: string;
    btnMoreDetails: string;
    btnViewDossier: string;
    livingArea: string;
    yoyGrowth: string;
    unitsConfig: string;
    offMarketTitle: string;
    offMarketDesc: string;
    offMarketBtn: string;
  };
  timeline: {
    tag: string;
    headline: string;
    subtitle: string;
    syndicateBadge: string;
    syndicateTitle: string;
    syndicateDesc: string;
    syndicateBtn: string;
    events: {
      year: string;
      title: string;
      partner: string;
      desc: string;
      tag: string;
    }[];
  };
  heritage: {
    tag: string;
    headline: string;
    subtitle: string;
    boardTitle: string;
    boardSub: string;
    pillarsTitle: string;
    pillarsSubtitle: string;
    badgeYears: string;
    badgeLabel: string;
    board: {
      name: string;
      title: string;
      role: string;
      bio: string;
    }[];
    pillars: {
      title: string;
      desc: string;
    }[];
  };
  calculator: {
    tag: string;
    headline: string;
    subtitle: string;
    inputCapital: string;
    inputYears: string;
    inputYield: string;
    projectedTotal: string;
    interestEarned: string;
    annualCashflow: string;
    consultBtn: string;
  };
  contact: {
    tag: string;
    headlineLine1: string;
    headlineLine2: string;
    subtitle: string;
    hqLabel: string;
    hqAddress: string;
    phoneLabel: string;
    phoneHours: string;
    emailLabel: string;
    responseBadge: string;
    formTitle: string;
    languageLabel: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabelField: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectOptions: string[];
    messageLabel: string;
    messagePlaceholder: string;
    disclaimer: string;
    sendBtn: string;
    successTitle: string;
    successDesc: string;
  };
  footer: {
    brandDesc: string;
    compliance: string;
    disciplinesNav: string;
    executiveDesks: string;
    contactDesk: string;
    copyright: string;
    terms: string;
    privacy: string;
    cookies: string;
    imprint: string;
  };
}

export const translations: Record<Language, Translations> = {
  EN: {
    nav: {
      menu: "Menu",
      close: "Close",
      home: "HOME",
      realEstate: "REAL ESTATE",
      services: "SERVICES",
      vision: "OUR VISION",
      capitalInvestment: "CAPITAL INVESTMENT",
      aboutUs: "ABOUT US",
      calculator: "SIMULATOR",
      contact: "CONTACT",
      directory: "Directory & Navigation",
      brandTag: "Küsnacht • Zurich • Geneva • London",
      addressShort: "Boglerenstrasse 67, CH-8700 Küsnacht, Zurich, Switzerland",
    },
    hero: {
      tag: "Leimann Global Capital • Est. 1984",
      titleLine1: "Sustainable Real Estate",
      titleLine2: "& Capital Growth.",
      subtitle:
        "We acquire prime building land, engineer sustainable architectural landmarks, and deploy private wealth into high-yield Swiss and international growth assets.",
      ctaServices: "Discover Our Services",
      ctaPortfolio: "Real Estate Portfolio",
      ctaAdvisory: "Private Advisory",
      statVolumeLabel: "Asset & Project Volume",
      statVolumeVal: "CHF 4.8B+",
      statVolumeSub: "Tier-1 Swiss Custodians",
      statAssetsLabel: "Swiss & Global Assets",
      statAssetsVal: "62 Prime Projects",
      statAssetsSub: "Zurich, Küsnacht, Geneva, London",
      statTrackLabel: "Swiss Track Record",
      statTrackVal: "40+ Years",
      statTrackSub: "Multi-Generational Stability",
      statDiscretionLabel: "Swiss Discretion",
      statDiscretionVal: "100% Private",
      statDiscretionSub: "Fiduciary Family Office",
      scroll: "SCROLL",
    },
    vision: {
      tag: "Our Vision & Strategy",
      headlineLine1: "The Whole Picture –",
      headlineLine2: "Securing Lasting Value.",
      desc1:
        "Leimann Global Capital is dedicated to acquiring premium building land and realizing forward-thinking, sustainable real estate across Switzerland. We unite architectural rigor, environmental excellence, and Swiss capital security.",
      desc2:
        "Every development is conceived not merely for today's yields, but as an enduring asset for subsequent generations. Our direct access to prime off-market opportunities ensures unmatched strategic advantage.",
      ctaServices: "Explore Disciplines",
      ctaConsultation: "Private Consultation",
      imageTag: "Swiss Engineering & Sustainability",
      imageDesc: "Prime location sourcing in Küsnacht, Zurich, Geneva & Engadin with strict Minergie-P environmental standards.",
      quote:
        "Authenticity is the Swiss standard. We build multi-generational value with precision, discretion, and architectural permanence.",
      author: "Leimann Global Capital",
      location: "Küsnacht / Zurich • Geneva • Switzerland",
    },
    services: {
      tag: "Our Services & Capabilities",
      selectLabel: "Select Discipline:",
      inquireBtn: "Inquire on Service Mandate",
      activeFocus: "Active Portfolio Focus",
      tabs: {
        acquire: {
          tabLabel: "1. Acquire",
          title: "Land Acquisition & Strategic Sourcing",
          subtitle: "Securing Prime Building Land in Switzerland",
          desc: "We identify, evaluate, and acquire first-class building land and off-market parcels throughout the most coveted cantons of Switzerland. Our deep Swiss network provides direct access to prime plots before public release.",
          points: [
            "Rigorous due diligence on building zoning, topography, and municipal permits",
            "Off-market discrete transactions ensuring total confidentiality",
            "Prime locations across Zurich Goldcoast, Geneva, Vaud, and Zug",
            "Strategic land banking with optimized cantonal fiscal structures",
          ],
          caption: "Alpine & Lakeside Strategic Land Parcels, Switzerland",
        },
        build: {
          tabLabel: "2. Build",
          title: "Sustainable Real Estate Development",
          subtitle: "Swiss Precision Architecture & Ecological Standards",
          desc: "From architectural conception to turnkey completion, Leimann Global Capital manages new residential and mixed-use construction with uncompromising Swiss quality, utilizing sustainable timber-hybrid systems and energy-positive technologies.",
          points: [
            "Minergie-P & Swiss Net-Zero carbon architectural engineering",
            "Turnkey general contractor management with strict cost control",
            "Timeless minimalist aesthetics crafted with natural stone and timber",
            "High-yield floorplan optimization for discerning future tenants and buyers",
          ],
          caption: "Funny Haus & Sustainable Urban Developments in Zurich",
        },
        sellRent: {
          tabLabel: "3. Sell & Rent",
          title: "Property Marketing & Portfolio Leasing",
          subtitle: "In Partnership with Leimann Immobilien GmbH",
          partner: "Leimann Immobilien GmbH",
          desc: "In close synergy with Leimann Immobilien GmbH, we curate targeted marketing campaigns and high-end brokerage for prestigious buyers and institutional tenants seeking elite residences and commercial units.",
          points: [
            "Direct outreach to qualified Swiss and international high-net-worth buyers",
            "Custom dossier production, 3D architectural tours, and VIP showings",
            "Optimal tenant selection for multi-year lease yield stability",
            "Seamless legal structuring and notary completion support",
          ],
          caption: "Luxury Residential & Commercial Brokerage, Küsnacht (ZH)",
        },
        capital: {
          tabLabel: "4. Capital Investment",
          title: "Venture Capital & Strategic Growth",
          subtitle: "Direct Equity & Strategic Co-Investments",
          partner: "Family Office Syndicates",
          desc: "Expanding beyond physical assets, Leimann Global Capital directs patient capital into next-generation technology, international commercial assets with TABIA GROUP in Spain, and advanced Swiss/UAE aerospace ventures.",
          points: [
            "International commercial real estate investments (Madrid, Balearic Islands)",
            "Venture equity in aerospace and autonomous aviation joint ventures",
            "Curated co-investment syndicates for private family offices",
            "Comprehensive multi-currency sovereign wealth hedging",
          ],
          caption: "Global Strategic Investments & Venture Partnerships",
        },
      },
    },
    portfolio: {
      tag: "Prime Real Estate Portfolio",
      headline: "Real Estate. Realizing Opportunities. Securing Value.",
      subtitle: "Direct access to prime residential developments, sustainable commercial landmarks, and off-market trophy assets across Switzerland and global capital centers.",
      filterAll: "All Properties",
      filterBuy: "Acquisitions (Buy)",
      filterRent: "Exclusive Leasing (Rent)",
      filterSwiss: "Switzerland (Zurich / Geneva / Engadin)",
      filterUk: "London (UK)",
      displaying: "Displaying curated Swiss & international properties",
      portfolioSub: "Leimann Global Capital & Leimann Immobilien Portfolio",
      btnMoreDetails: "More Details",
      btnViewDossier: "View Dossier",
      livingArea: "Living Area",
      yoyGrowth: "YoY Growth",
      unitsConfig: "Units / Config",
      offMarketTitle: "Seeking Discreet Off-Market Building Land or Acquisitions?",
      offMarketDesc: "Leimann Global Capital maintains private mandates for off-market development parcels, lakeside villas, and commercial assets throughout Switzerland.",
      offMarketBtn: "Submit Confidential Mandate",
    },
    timeline: {
      tag: "Strategic Growth & Partnerships",
      headline: "Capital Investment. Supporting Next-Generation Growth.",
      subtitle: "Leimann Global Capital deploys patient capital into high-conviction ventures, cross-border commercial real estate, and transformative technologies.",
      syndicateBadge: "Swiss Fiduciary Governance",
      syndicateTitle: "Explore Co-Investment & Venture Syndicates",
      syndicateDesc: "Qualified institutional investors and private family offices may request detailed investment memoranda for current Spanish commercial and aerospace mandates.",
      syndicateBtn: "Request Syndicate Memorandum",
      events: [
        {
          year: "2024",
          title: "Venture Capital & International Tech Syndicate",
          partner: "Direct Multi-Family Syndicate",
          desc: "Established strategic alliance to co-invest in high-growth European and Asian deep-tech enterprises, artificial intelligence infrastructure, and multi-family wealth syndicates.",
          tag: "Tech & Venture Equity",
        },
        {
          year: "2025",
          title: "Mediterranean Commercial Real Estate Expansion",
          partner: "TABIA GROUP (Palma de Mallorca)",
          desc: "Cross-border collaboration targeting prime commercial real estate, luxury hospitality, and high-yield retail assets in Madrid and the Balearic Islands.",
          tag: "Commercial Real Estate",
        },
        {
          year: "2026",
          title: "Swiss / UAE Aerospace & Unmanned Aviation JV",
          partner: "Autonomous Flight Joint Venture",
          desc: "Direct investment and strategic advisory in next-generation aerospace, autonomous flight technologies, and urban air mobility systems bridging Switzerland and the Middle East.",
          tag: "Deep Tech & Aviation",
        },
        {
          year: "Present & Future",
          title: "Sovereign Asset Resilience & Global Growth",
          partner: "Multi-Jurisdictional Family Office",
          desc: "Continuous expansion of off-market real estate, sustainable timber architecture, and global private equity allocations engineered for multi-generational wealth longevity.",
          tag: "Capital Preservation",
        },
      ],
    },
    heritage: {
      tag: "Swiss Heritage & Governance",
      headline: "About Us. The Whole Picture – Securing the Future.",
      subtitle: "Rooted in Küsnacht on the Zurich Goldcoast, Leimann Global Capital embodies the timeless values of Swiss discretion, entrepreneurial resilience, and architectural permanence.",
      boardTitle: "Board of Directors & Executive Leadership",
      boardSub: "Leimann Group & Private Family Office",
      pillarsTitle: "Built on the Bedrock of Swiss Discretion & Fiduciary Duty.",
      pillarsSubtitle: "We maintain the values and intimacy of a boutique Swiss multi-family office while providing the formidable infrastructure of an international real estate and capital investment house.",
      badgeYears: "40+",
      badgeLabel: "Years of Trust & Discretion",
      board: [
        {
          name: "Dr. Rudolf Leimann",
          title: "Chairman of the Board of Directors",
          role: "Swiss Real Estate & Private Equity Strategy",
          bio: "Over 40 years of pioneering leadership in Swiss commercial land development, institutional banking fiduciary governance, and multi-family estate structuring.",
        },
        {
          name: "Adrian Leimann",
          title: "Member of the Board & CEO",
          role: "Global Acquisitions & Technology Ventures",
          bio: "Leads international acquisitions, venture syndicates, and sustainable timber-hybrid architectural developments across Switzerland and global financial hubs.",
        },
        {
          name: "Dr. iur. Hans-Toni Leimann",
          title: "Member of the Board of Directors",
          role: "Legal Counsel & Swiss Cantonal Structuring",
          bio: "Doctor of Law specializing in Swiss Federal Banking regulation, cross-border real estate transactions, cantonal taxation, and sovereign estate governance.",
        },
      ],
      pillars: [
        {
          title: "Strict adherence to Swiss banking privacy standards",
          desc: "Client confidentiality protected under Swiss Federal Banking Law (Art. 47) and sovereign fiduciary discretion.",
        },
        {
          title: "Independent fiduciary governance & family equity",
          desc: "Free from institutional product sales or conflicts of interest. The Leimann family co-invests personal capital alongside clients.",
        },
        {
          title: "Direct access to managing partners & board",
          desc: "Clients deal directly with board members in our Küsnacht/Zurich headquarters with uninterrupted continuity.",
        },
        {
          title: "Multi-generational real estate & land resilience",
          desc: "Proven 40-year track record in Swiss building land acquisition, Minergie-P sustainable construction, and prime asset preservation.",
        },
      ],
    },
    calculator: {
      tag: "Fiduciary Wealth Simulator",
      headline: "Model Your Multi-Generational Real Estate & Capital Growth",
      subtitle: "Simulate compounding returns, net rental yields, and wealth preservation across Swiss Franc and global currencies.",
      inputCapital: "Initial Capital Allocation",
      inputYears: "Investment Horizon (Years)",
      inputYield: "Target Net Annual Yield (%)",
      projectedTotal: "Projected Estate Value",
      interestEarned: "Cumulative Capital Growth",
      annualCashflow: "Projected Annual Net Cash Flow",
      consultBtn: "Structure Bespoke Mandate",
    },
    contact: {
      tag: "Direct Swiss Desk",
      headlineLine1: "Your Vision.",
      headlineLine2: "Our Expertise.",
      subtitle: "Every great investment begins with a thoughtful conversation. Whether you wish to sell building land, acquire off-market prime assets, or co-invest in strategic venture syndicates, our executive partners are at your disposal.",
      hqLabel: "Swiss Headquarters",
      hqAddress: "Boglerenstrasse 67, CH-8700 Küsnacht, Switzerland",
      phoneLabel: "Direct Private Line",
      phoneHours: "Monday – Friday • 08:30 – 18:30 CET",
      emailLabel: "Confidential Inquiries",
      responseBadge: "Zurich Desk Fiduciary Response: Within 2 business hours.",
      formTitle: "Submit Confidential Brief",
      languageLabel: "Language:",
      nameLabel: "Full Name / Family Entity *",
      namePlaceholder: "e.g. Dr. Alexander von Bern",
      emailLabelField: "Confidential Email *",
      emailPlaceholder: "e.g. principal@family-office.ch",
      subjectLabel: "Primary Mandate Topic",
      subjectOptions: [
        "Building Land Acquisition / Real Estate Mandate",
        "Off-Market Prime Property Acquisition (Buy)",
        "Exclusive Swiss Real Estate Leasing (Rent)",
        "Capital Investment & Venture Syndicate",
        "Swiss Fiduciary & Family Office Governance",
      ],
      messageLabel: "Confidential Message & Parameters",
      messagePlaceholder: "Please specify your desired canton, property criteria, or investment volume parameters...",
      disclaimer: "Strictly confidential under Swiss Federal Banking Law (Art. 47).",
      sendBtn: "Send a Message",
      successTitle: "Mandate Inscription Received",
      successDesc: "Thank you. Your confidential brief has been forwarded directly to the executive desk of Adrian Leimann and our Swiss real estate advisory board.",
    },
    footer: {
      brandDesc: "Pioneering sustainable real estate development, building land acquisition, and strategic wealth co-investments across Switzerland and global centers.",
      compliance: "Governed by Swiss Federal Banking Law (Art. 47) & Fiduciary Discretion.",
      disciplinesNav: "Disciplines & Navigation",
      executiveDesks: "Executive Desks",
      contactDesk: "Contact Swiss Desk",
      copyright: "Leimann Global Capital GmbH. All rights reserved.",
      terms: "Terms of Use",
      privacy: "Privacy Policy",
      cookies: "Cookies Policy",
      imprint: "Swiss Imprint",
    },
  },
  DE: {
    nav: {
      menu: "Menü",
      close: "Schliessen",
      home: "HOME",
      realEstate: "IMMOBILIEN",
      services: "DIENSTLEISTUNGEN",
      vision: "VISION",
      capitalInvestment: "KAPITALANLAGEN",
      aboutUs: "ÜBER UNS",
      calculator: "SIMULATOR",
      contact: "KONTAKT",
      directory: "Verzeichnis & Navigation",
      brandTag: "Küsnacht • Zürich • Genf • London",
      addressShort: "Boglerenstrasse 67, CH-8700 Küsnacht, Zürich, Schweiz",
    },
    hero: {
      tag: "Leimann Global Capital • Gegr. 1984",
      titleLine1: "Nachhaltige Immobilien",
      titleLine2: "& Kapitalwachstum.",
      subtitle:
        "Wir erwerben erstklassiges Bauland, realisieren zukunftsweisende Immobilien in der Schweiz und investieren in renditestarke globale Wachstumswerte.",
      ctaServices: "Dienstleistungen entdecken",
      ctaPortfolio: "Immobilienportfolio",
      ctaAdvisory: "Private Beratung",
      statVolumeLabel: "Projekt- & Anlagevolumen",
      statVolumeVal: "CHF 4.8 Mrd.+",
      statVolumeSub: "Erstklassige Schweizer Depotbanken",
      statAssetsLabel: "Projekte in der Schweiz & weltweit",
      statAssetsVal: "62 Spitzenprojekte",
      statAssetsSub: "Zürich, Küsnacht, Genf, London",
      statTrackLabel: "Schweizer Erfolgsbilanz",
      statTrackVal: "40+ Jahre",
      statTrackSub: "Generationenübergreifende Stabilität",
      statDiscretionLabel: "Schweizer Diskretion",
      statDiscretionVal: "100% Privat",
      statDiscretionSub: "Unabhängiges Family Office",
      scroll: "SCROLLEN",
    },
    vision: {
      tag: "Unsere Vision & Strategie",
      headlineLine1: "Das Ganze Sehen –",
      headlineLine2: "Die Zukunft Sichern.",
      desc1:
        "Leimann Global Capital widmet sich dem Erwerb von erstklassigem Bauland und dem Neubau nachhaltiger Immobilien in der ganzen Schweiz. Wir verbinden Schweizer Präzision, ökologische Standards und Kapitalsicherheit.",
      desc2:
        "Jede Entwicklung ist darauf ausgerichtet, bleibende Werte für nachfolgende Generationen zu schaffen. Unser Zugang zu exklusiven Off-Market-Grundstücken verschafft Ihnen entscheidende Vorteile.",
      ctaServices: "Fachbereiche entdecken",
      ctaConsultation: "Persönliche Beratung",
      imageTag: "Schweizer Baukunst & Nachhaltigkeit",
      imageDesc: "Standortakquisition in Küsnacht, Zürich, Genf und Engadin nach Minergie-P Standards.",
      quote:
        "Authentizität ist der Schweizer Standard. Wir schaffen Werte von Dauer mit Präzision, Diskretion und architektonischer Beständigkeit.",
      author: "Leimann Global Capital",
      location: "Küsnacht / Zürich • Genf • Schweiz",
    },
    services: {
      tag: "Unsere Dienstleistungen & Kompetenzen",
      selectLabel: "Fachbereich wählen:",
      inquireBtn: "Mandatsanfrage senden",
      activeFocus: "Aktueller Portfoliofokus",
      tabs: {
        acquire: {
          tabLabel: "1. Kaufen (Bauland)",
          title: "Baulanderwerb & Strategische Akquisition",
          subtitle: "Erstklassiges Bauland in der Schweiz sichern",
          desc: "Wir identifizieren, bewerten und erwerben erstklassiges Bauland in den begehrtesten Kantonen der Schweiz. Unser starkes Netzwerk ermöglicht Zugang zu Grundstücken vor dem offiziellen Marktstart.",
          points: [
            "Umfassende Prüfung von Zonenplänen, Topografie und Baurecht",
            "Diskrete Off-Market-Abwicklung mit höchster Vertraulichkeit",
            "Top-Lagen an der Zürcher Goldküste, Genf, Waadt und Zug",
            "Strategisches Land-Banking mit steuerlicher Optimierung",
          ],
          caption: "Strategische Baulandparzellen in der Schweiz",
        },
        build: {
          tabLabel: "2. Bauen (Entwicklung)",
          title: "Nachhaltige Immobilienentwicklung",
          subtitle: "Schweizer Präzisionsarchitektur & Ökologie",
          desc: "Von der architektonischen Konzeption bis zur schlüsselfertigen Übergabe realisieren wir Neubauten mit kompromissloser Schweizer Qualität, Holz-Hybrid-Bauweise und Minergie-P Standard.",
          points: [
            "Minergie-P & Netto-Null-Emissionsstandards",
            "Generalunternehmer-Management mit strikter Kostenkontrolle",
            "Zeitlose Ästhetik mit Naturstein und heimischem Holz",
            "Renditeoptimierte Grundrisse für anspruchsvolle Mieter und Käufer",
          ],
          caption: "Funny Haus & Nachhaltige Urbanprojekte in Zürich",
        },
        sellRent: {
          tabLabel: "3. Verkaufen & Vermieten",
          title: "Immobilienmarketing & Exklusive Vermietung",
          subtitle: "In Partnerschaft mit der Leimann Immobilien GmbH",
          partner: "Leimann Immobilien GmbH",
          desc: "In enger Zusammenarbeit mit der Leimann Immobilien GmbH vermitteln wir Luxusimmobilien und Gewerbeflächen gezielt an qualifizierte Schweizer und internationale Käufer und Mieter.",
          points: [
            "Direktansprache von bonitätsgeprüften High-Net-Worth Interessenten",
            "Erstellung massgeschneiderter Verkaufsdossiers & VIP-Besichtigungen",
            "Sorgfältige Mieterauswahl für langfristige Ertragsstabilität",
            "Rechtliche Strukturierung und Notariatsabwicklung",
          ],
          caption: "Exklusive Immobilienvermittlung in Küsnacht (ZH)",
        },
        capital: {
          tabLabel: "4. Kapitalanlagen",
          title: "Venture Capital & Strategische Beteiligungen",
          subtitle: "Direktinvestitionen & Syndikate",
          partner: "Family Office Syndikate",
          desc: "Ergänzend zu Sachwerten investieren wir strategisch in Zukunftstechnologien, Gewerbeimmobilien in Spanien mit der TABIA GROUP sowie Schweizer/VAE Luftfahrt- und Deep-Tech-Projekte.",
          points: [
            "Gewerbeimmobilieninvestitionen (Madrid, Balearen)",
            "Venture Equity in Luftfahrt und autonome Flugsysteme",
            "Kuratierte Co-Investment-Syndikate für Family Offices",
            "Umfassende Währungsabsicherung in Schweizer Franken",
          ],
          caption: "Globale strategische Co-Investments",
        },
      },
    },
    portfolio: {
      tag: "Exklusives Immobilienportfolio",
      headline: "Immobilien. Chancen Realisieren. Werte Sichern.",
      subtitle: "Direkter Zugang zu erstklassigen Wohnresidenzen, nachhaltigen Gewerbebauten und Off-Market Trophy Assets in der Schweiz und internationalen Finanzmetropolen.",
      filterAll: "Alle Objekte",
      filterBuy: "Kaufangebote (Buy)",
      filterRent: "Exklusive Miete (Rent)",
      filterSwiss: "Schweiz (Zürich / Genf / Engadin)",
      filterUk: "London (UK)",
      displaying: "Ausgewählte Schweizer & internationale Immobilien",
      portfolioSub: "Portfolio der Leimann Global Capital & Leimann Immobilien",
      btnMoreDetails: "Mehr Details",
      btnViewDossier: "Dossier anfordern",
      livingArea: "Wohnfläche",
      yoyGrowth: "Wertsteigerung p.a.",
      unitsConfig: "Einheiten / Einteilung",
      offMarketTitle: "Suchen Sie diskret Bauland oder Off-Market Objekte?",
      offMarketDesc: "Leimann Global Capital betreut vertrauliche Mandate für Baulandparzellen, Seevillen und Gewerbeimmobilien in der gesamten Schweiz.",
      offMarketBtn: "Vertrauliches Mandat einreichen",
    },
    timeline: {
      tag: "Strategisches Wachstum & Partnerschaften",
      headline: "Kapitalanlagen. Zukunftsorientiertes Wachstum.",
      subtitle: "Leimann Global Capital investiert geduldiges Kapital in überzeugende Zukunftstechnologien, grenzüberschreitende Gewerbeimmobilien und Co-Investments.",
      syndicateBadge: "Schweizer Fiduciary Governance",
      syndicateTitle: "Co-Investment & Syndikate Anfragen",
      syndicateDesc: "Qualifizierte Anleger und Family Offices können detaillierte Anlagememoranden für aktuelle spanische Gewerbe- und Luftfahrtmandate anfordern.",
      syndicateBtn: "Memorandum anfordern",
      events: [
        {
          year: "2024",
          title: "Venture Capital & Internationales Tech-Syndikat",
          partner: "Multi-Family Syndikat",
          desc: "Strategische Allianz für Co-Investments in europäische und asiatische Deep-Tech-Unternehmen und KI-Infrastruktur.",
          tag: "Tech & Venture Equity",
        },
        {
          year: "2025",
          title: "Expansion Gewerbeimmobilien Mittelmeerraum",
          partner: "TABIA GROUP (Palma de Mallorca)",
          desc: "Grenzüberschreitende Zusammenarbeit für erstklassige Gewerbe- und Hotelimmobilien in Madrid und auf den Balearen.",
          tag: "Gewerbeimmobilien",
        },
        {
          year: "2026",
          title: "Schweiz / VAE Luftfahrt & Autonome Flugsysteme JV",
          partner: "Autonomous Flight Joint Venture",
          desc: "Beteiligung und strategische Begleitung bei unbemannten Flugtechnologien und urbaner Luftmobilität.",
          tag: "Deep Tech & Luftfahrt",
        },
        {
          year: "Gegenwart & Zukunft",
          title: "Kapitalerhalt & Globale Diversifikation",
          partner: "Multi-Jurisdiktionales Family Office",
          desc: "Kontinuierlicher Ausbau von Off-Market-Immobilien, nachhaltiger Holzbau-Architektur und resilienten Private-Equity-Strukturen.",
          tag: "Kapitalerhalt",
        },
      ],
    },
    heritage: {
      tag: "Schweizer Tradition & Governance",
      headline: "Über Uns. Das Ganze Sehen – Die Zukunft Sichern.",
      subtitle: "Mit Sitz in Küsnacht an der Zürcher Goldküste verkörpert Leimann Global Capital die zeitlosen Werte von Schweizer Diskretion, unternehmerischer Unabhängigkeit und Beständigkeit.",
      boardTitle: "Verwaltungsrat & Geschäftsleitung",
      boardSub: "Leimann Gruppe & Private Family Office",
      pillarsTitle: "Gegründet auf Schweizer Diskretion & Treuhandpflicht.",
      pillarsSubtitle: "Wir pflegen die persönliche Nähe eines Schweizer Family Office und bieten zugleich die Schlagkraft eines internationalen Immobilien- und Investmenthauses.",
      badgeYears: "40+",
      badgeLabel: "Jahre Vertrauen & Diskretion",
      board: [
        {
          name: "Dr. Rudolf Leimann",
          title: "Präsident des Verwaltungsrates",
          role: "Schweizer Immobilien & Private Equity Strategie",
          bio: "Über 40 Jahre Erfahrung in der Schweizer Baulandentwicklung, Banken-Governance und Nachlassstrukturierung für Unternehmerfamilien.",
        },
        {
          name: "Adrian Leimann",
          title: "Mitglied des Verwaltungsrates & CEO",
          role: "Globale Akquisitionen & Technologie-Ventures",
          bio: "Verantwortet Akquisitionen, Venture-Syndikate und nachhaltige Holz-Hybrid-Immobilienprojekte in der Schweiz und internationalen Finanzzentren.",
        },
        {
          name: "Dr. iur. Hans-Toni Leimann",
          title: "Mitglied des Verwaltungsrates",
          role: "Rechtsberatung & Kantonale Strukturierung",
          bio: "Doktor der Rechtswissenschaften mit Spezialisierung auf Schweizer Bankenrecht, Immobilientransaktionen, kantonales Steuerrecht und Familienstatuten.",
        },
      ],
      pillars: [
        {
          title: "Strikte Einhaltung des Schweizer Bankkundengeheimnisses",
          desc: "Schutz der Privatsphäre nach Art. 47 des Schweizer Bankengesetzes und strengste treuhänderische Diskretion.",
        },
        {
          title: "Unabhängige Führung & Eigenkapitalbeteiligung",
          desc: "Keine institutionellen Produktverkäufe. Die Familie Leimann investiert substanzielles Eigenkapital an der Seite ihrer Kunden.",
        },
        {
          title: "Direkter Zugang zu Partnern und Verwaltungsrat",
          desc: "Sie verhandeln direkt mit den Entscheidungsträgern an unserem Hauptsitz in Küsnacht/Zürich.",
        },
        {
          title: "Generationenübergreifende Immobilienkompetenz",
          desc: "Bewährte 40-jährige Erfolgsbilanz in Baulandakquisition, Minergie-P Bauausführung und Werterhalt.",
        },
      ],
    },
    calculator: {
      tag: "Vermögens- & Renditesimulator",
      headline: "Simulieren Sie Ihr langfristiges Immobilien- & Kapitalwachstum",
      subtitle: "Berechnen Sie Zinseszinseffekte, Mietrenditen und Werterhalt in Schweizer Franken und globalen Leitwährungen.",
      inputCapital: "Kapitalanlagebetrag",
      inputYears: "Anlagehorizont (Jahre)",
      inputYield: "Angestrebte Netto-Jahresrendite (%)",
      projectedTotal: "Projiziertes Gesamtvermögen",
      interestEarned: "Kumulierter Kapitalzuwachs",
      annualCashflow: "Jährlicher Netto-Cashflow",
      consultBtn: "Individuelles Mandat besprechen",
    },
    contact: {
      tag: "Direkter Schweizer Desk",
      headlineLine1: "Ihre Vision.",
      headlineLine2: "Unsere Expertise.",
      subtitle: "Jede erfolgreiche Investition beginnt mit einem persönlichen Gespräch. Ob Baulandverkauf, Off-Market Akquisition oder Co-Investment – unser Verwaltungsrat steht Ihnen gerne zur Verfügung.",
      hqLabel: "Schweizer Hauptsitz",
      hqAddress: "Boglerenstrasse 67, CH-8700 Küsnacht, Schweiz",
      phoneLabel: "Direkte Telefonnummer",
      phoneHours: "Montag – Freitag • 08:30 – 18:30 Uhr MEZ",
      emailLabel: "Vertrauliche Anfragen",
      responseBadge: "Zürcher Fiduciary Rückmeldung: Innerhalb von 2 Geschäftsstunden.",
      formTitle: "Vertrauliches Mandat einreichen",
      languageLabel: "Sprache:",
      nameLabel: "Vollständiger Name / Einheit *",
      namePlaceholder: "z.B. Dr. Alexander von Bern",
      emailLabelField: "Vertrauliche E-Mail *",
      emailPlaceholder: "z.B. principal@family-office.ch",
      subjectLabel: "Thema des Mandats",
      subjectOptions: [
        "Baulanderwerb / Immobilienmandat",
        "Off-Market Immobilienkauf (Buy)",
        "Exklusive Immobilienmiete (Rent)",
        "Kapitalanlagen & Venture-Syndikat",
        "Schweizer Treuhand & Family Office",
      ],
      messageLabel: "Vertrauliche Nachricht & Kriterien",
      messagePlaceholder: "Bitte nennen Sie bevorzugte Kantone, Grundstücksparameter oder das gewünschte Anlagevolumen...",
      disclaimer: "Streng vertraulich nach Schweizer Bankengesetz (Art. 47).",
      sendBtn: "Nachricht senden",
      successTitle: "Mandatsanfrage erfolgreich eingegangen",
      successDesc: "Vielen Dank. Ihre vertrauliche Anfrage wurde direkt an die Geschäftsleitung von Adrian Leimann und unseren Schweizer Beirat weitergeleitet.",
    },
    footer: {
      brandDesc: "Pionier in nachhaltiger Immobilienentwicklung, Baulanderwerb und strategischen Kapitalanlagen in der Schweiz und weltweit.",
      compliance: "Unterliegt dem Schweizer Bankkundengeheimnis (Art. 47) & Treuhandstandards.",
      disciplinesNav: "Fachbereiche & Navigation",
      executiveDesks: "Standorte",
      contactDesk: "Schweizer Kontakt",
      copyright: "Leimann Global Capital GmbH. Alle Rechte vorbehalten.",
      terms: "Nutzungsbedingungen",
      privacy: "Datenschutzerklärung",
      cookies: "Cookie-Richtlinie",
      imprint: "Impressum Schweiz",
    },
  },
  TH: {
    nav: {
      menu: "เมนู",
      close: "ปิด",
      home: "หน้าแรก",
      realEstate: "อสังหาริมทรัพย์",
      services: "บริการของเรา",
      vision: "วิสัยทัศน์",
      capitalInvestment: "การลงทุนเชิงกลยุทธ์",
      aboutUs: "เกี่ยวกับเรา",
      calculator: "คำนวณผลตอบแทน",
      contact: "ติดต่อเรา",
      directory: "สารบัญ & แผนผังเว็บไซต์",
      brandTag: "คูสนัคท์ • ซูริก • เจนีวา • ลอนดอน",
      addressShort: "Boglerenstrasse 67, CH-8700 Küsnacht, Zurich, Switzerland",
    },
    hero: {
      tag: "Leimann Global Capital • ก่อตั้งปี 1984",
      titleLine1: "การพัฒนาอสังหาริมทรัพย์ยั่งยืน",
      titleLine2: "& การเติบโตของเงินทุนระดับสวิส",
      subtitle:
        "เราจัดหาที่ดินเพื่อการก่อสร้างระดับพรีเมียมในสวิตเซอร์แลนด์ พัฒนาโครงการสถาปัตยกรรมระดับมาสเตอร์พีซ และบริหารเงินทุนส่วนบุคคลเพื่อการเติบโตอย่างยั่งยืนของครอบครัว",
      ctaServices: "สำรวจบริการทั้งหมด",
      ctaPortfolio: "พอร์ตโฟลิโออสังหาริมทรัพย์",
      ctaAdvisory: "ปรึกษาผู้บริหารส่วนบุคคล",
      statVolumeLabel: "มูลค่าโครงการและการบริหารสินทรัพย์",
      statVolumeVal: "4.8 พันล้าน+ CHF",
      statVolumeSub: "สถาบันการเงินชั้นนำของสวิส",
      statAssetsLabel: "โครงการในสวิสและระดับโลก",
      statAssetsVal: "62 โครงการพรีเมียม",
      statAssetsSub: "ซูริก, คูสนัคท์, เจนีวา, ลอนดอน",
      statTrackLabel: "ผลงานความมั่นคงระดับสวิส",
      statTrackVal: "40+ ปี",
      statTrackSub: "ความมั่นคงส่งต่อข้ามรุ่น",
      statDiscretionLabel: "มาตรฐานความลับระดับสวิส",
      statDiscretionVal: "100% ส่วนบุคคล",
      statDiscretionSub: "สำนักงานครอบครัวเพื่อความไว้วางใจ",
      scroll: "เลื่อนลง",
    },
    vision: {
      tag: "วิสัยทัศน์และยุทธศาสตร์",
      headlineLine1: "มองภาพรวมอย่างถ่องแท้ –",
      headlineLine2: "เพื่อปกป้องคุณค่าแห่งอนาคต",
      desc1:
        "Leimann Global Capital มุ่งมั่นในการจัดหาที่ดินเพื่อการก่อสร้างคุณภาพสูง และพัฒนาอสังหาริมทรัพย์ที่ยั่งยืนทั่วสวิตเซอร์แลนด์ เราผสานความแม่นยำทางวิศวกรรมสไตล์สวิส ความเป็นเลิศด้านสิ่งแวดล้อม และความมั่นคงทางการเงินเข้าด้วยกัน",
      desc2:
        "ทุกโครงการพัฒนาขึ้นไม่เพียงเพื่อผลตอบแทนในปัจจุบัน แต่เพื่อเป็นสินทรัพย์ที่ส่งต่อคุณค่าสู่คนรุ่นต่อไปอย่างมั่นคง พร้อมสิทธิพิเศษในการเข้าถึงที่ดิน Off-Market ระดับไพรเวท",
      ctaServices: "สำรวจความเชี่ยวชาญ",
      ctaConsultation: "นัดหมายปรึกษาส่วนตัว",
      imageTag: "วิศวกรรมสวิส & ความยั่งยืน",
      imageDesc: "คัดสรรทำเลทองในคูสนัคท์, ซูริก, เจนีวา และเองกาดีน ตามมาตรฐานพลังงาน Minergie-P ของสวิตเซอร์แลนด์",
      quote:
        "ความแท้จริงคือมาตรฐานของสวิส เราสร้างคุณค่าที่ส่งต่อได้หลายชั่วอายุคน ด้วยความประณีต ความลับสูงสุด และสถาปัตยกรรมที่คงทนถาวร",
      author: "Leimann Global Capital",
      location: "คูสนัคท์ / ซูริก • เจนีวา • สวิตเซอร์แลนด์",
    },
    services: {
      tag: "บริการและศักยภาพของเรา",
      selectLabel: "เลือกสาขาความเชี่ยวชาญ:",
      inquireBtn: "ส่งคำขอรับคำปรึกษา",
      activeFocus: "เป้าหมายการลงทุนปัจจุบัน",
      tabs: {
        acquire: {
          tabLabel: "1. จัดหาที่ดิน (Acquire)",
          title: "การจัดหาที่ดินและการลงทุนทำเลทอง",
          subtitle: "คัดสรรที่ดินเพื่อการก่อสร้างระดับพรีเมียมในสวิตเซอร์แลนด์",
          desc: "เราค้นหา ตรวจสอบ และเข้าซื้อที่ดินแปลงสวยและที่ดิน Off-Market ทั่วสวิตเซอร์แลนด์ เครือข่ายที่ลึกซึ้งของเราช่วยให้คุณเข้าถึงที่ดินแปลงสำคัญได้ก่อนเปิดสู่สาธารณะ",
          points: [
            "ตรวจสอบผังเมือง ข้อกฎหมาย และใบอนุญาตก่อสร้างอย่างเข้มงวด",
            "การทำธุรกรรมแบบ Off-Market เพื่อรักษาความลับสูงสุด",
            "ทำเลริมทะเลสาบและใจกลางเมือง เช่น ซูริก โกลด์โคสต์, เจนีวา, โว และซุก",
            "การถือครองที่ดินเชิงกลยุทธ์พร้อมโครงสร้างภาษีที่เหมาะสม",
          ],
          caption: "ที่ดินทำเลทองริมทะเลสาบและแนวเทือกเขาแอลป์ สวิตเซอร์แลนด์",
        },
        build: {
          tabLabel: "2. พัฒนาและก่อสร้าง (Build)",
          title: "การพัฒนาอสังหาริมทรัพย์อย่างยั่งยืน",
          subtitle: "สถาปัตยกรรมมาตรฐานสวิสและการรักษาสิ่งแวดล้อม",
          desc: "ตั้งแต่การออกแบบทางสถาปัตยกรรมจนถึงการส่งมอบงาน Leimann Global Capital ควบคุมการก่อสร้างด้วยมาตรฐานระดับสวิส โครงสร้างไม้ไฮบริดที่เป็นมิตรต่อสิ่งแวดล้อม และเทคโนโลยีประหยัดพลังงาน",
          points: [
            "มาตรฐานอาคารพลังงานเป็นมิตร Minergie-P & Net-Zero ของสวิส",
            "บริหารงานก่อสร้างแบบครบวงจรพร้อมควบคุมงบประมาณอย่างเข้มงวด",
            "ดีไซน์มินิมอลเหนือกาลเวลาด้วยหินธรรมชาติและไม้คุณภาพสูง",
            "ออกแบบผังห้องเพื่อผลตอบแทนสูงสุดสำหรับผู้เช่าและผู้ซื้อระดับบน",
          ],
          caption: "โครงการ Funny Haus และสถาปัตยกรรมยั่งยืนในซูริก",
        },
        sellRent: {
          tabLabel: "3. ขายและให้เช่า (Sell & Rent)",
          title: "การตลาดอสังหาริมทรัพย์และการปล่อยเช่าพรีเมียม",
          subtitle: "ร่วมมือกับ Leimann Immobilien GmbH",
          partner: "Leimann Immobilien GmbH",
          desc: "ร่วมกับ Leimann Immobilien GmbH เราจัดทำแคมเปญการตลาดเฉพาะกลุ่มเพื่อจับคู่ผู้ซื้อและผู้เช่าระดับ High-Net-Worth จากทั้งในสวิตเซอร์แลนด์และต่างประเทศ",
          points: [
            "เข้าถึงกลุ่มผู้ซื้อที่มีศักยภาพสูงและผ่านการตรวจสอบสถานะทางการเงิน",
            "จัดทำ Dossier เอกสารข้อมูลโครงการ แผนภาพ 3D และการพาลมชมแบบ VIP",
            "คัดเลือกผู้เช่าคุณภาพสูงเพื่อสร้างกระแสเงินสดที่สม่ำเสมอในระยะยาว",
            "ดูแลสัญญา นิติกรรม และการโอนกรรมสิทธิ์ ณ สำนักงานที่ดินสวิส",
          ],
          caption: "บริการนายหน้าอสังหาริมทรัพย์ระดับลักชัวรี คูสนัคท์ (ซูริก)",
        },
        capital: {
          tabLabel: "4. การลงทุนเชิงกลยุทธ์ (Capital)",
          title: "Venture Capital และการเติบโตระดับสากล",
          subtitle: "การลงทุนร่วมในสินทรัพย์และเทคโนโลยีแห่งอนาคต",
          partner: "Family Office Syndicates",
          desc: "นอกเหนือจากอสังหาริมทรัพย์ เราจัดสรรเงินทุนร่วมลงทุนในเทคโนโลยีระดับ Deep-Tech, อสังหาริมทรัพย์เชิงพาณิชย์ในสเปนร่วมกับ TABIA GROUP และอุตสาหกรรมการบิน/อากาศยานไร้คนขับ สวิส-ยูเออี",
          points: [
            "ลงทุนในอสังหาริมทรัพย์เชิงพาณิชย์ชั้นนำ (มาดริด, หมู่เกาะแบลีแอริก)",
            "การร่วมลงทุนในเทคโนโลยีการบินและอากาศยานอัตโนมัติ",
            "การจัดตั้งกลุ่ม Syndicate สำหรับสำนักงานครอบครัวชั้นนำ",
            "การกระจายความเสี่ยงและป้องกันความเสี่ยงด้านค่าเงินด้วยฟรังก์สวิส",
          ],
          caption: "การลงทุนเชิงกลยุทธ์และพันธมิตรระดับสากล",
        },
      },
    },
    portfolio: {
      tag: "พอร์ตโฟลิโออสังหาริมทรัพย์ระดับพรีเมียม",
      headline: "อสังหาริมทรัพย์. คว้าโอกาส. รักษาคุณค่าที่ยั่งยืน",
      subtitle: "เข้าถึงโครงการที่อยู่อาศัยระดับมาสเตอร์พีซ อาคารพาณิชย์ประหยัดพลังงาน และสินทรัพย์หายากแบบ Off-Market ทั่วสวิตเซอร์แลนด์และศูนย์กลางการเงินโลก",
      filterAll: "อสังหาริมทรัพย์ทั้งหมด",
      filterBuy: "โครงการสำหรับขาย (Buy)",
      filterRent: "โครงการให้เช่าพิเศษ (Rent)",
      filterSwiss: "สวิตเซอร์แลนด์ (ซูริก / เจนีวา / เองกาดีน)",
      filterUk: "ลอนดอน (สหราชอาณาจักร)",
      displaying: "แสดงรายการอสังหาริมทรัพย์ระดับสวิสและนานาชาติ",
      portfolioSub: "พอร์ตโฟลิโอของ Leimann Global Capital & Leimann Immobilien",
      btnMoreDetails: "ดูรายละเอียด",
      btnViewDossier: "ขอดาวน์โหลด Dossier",
      livingArea: "พื้นที่ใช้สอย",
      yoyGrowth: "การเติบโตของมูลค่าต่อปี",
      unitsConfig: "จำนวนยูนิต / การแบ่งสัดส่วน",
      offMarketTitle: "ต้องการจัดหาที่ดินหรืออสังหาริมทรัพย์แบบ Off-Market หรือไม่?",
      offMarketDesc: "Leimann Global Capital ดูแลรับมอบหมายพิเศษเพื่อจัดหาที่ดินแปลงลับ คฤหาสน์ริมทะเลสาบ และอาคารพาณิชย์ทั่วประเทศสวิตเซอร์แลนด์",
      offMarketBtn: "ส่งข้อกำหนดเพื่อจัดหาที่ดิน/สินทรัพย์",
    },
    timeline: {
      tag: "การเติบโตเชิงกลยุทธ์และพันธมิตร",
      headline: "การลงทุนเชิงทุน. สนับสนุนการเติบโตแห่งอนาคต",
      subtitle: "Leimann Global Capital จัดสรรเงินทุนระยะยาวในธุรกิจที่มีศักยภาพสูง อสังหาริมทรัพย์เชิงพาณิชย์ข้ามพรมแดน และเทคโนโลยีเปลี่ยนโลก",
      syndicateBadge: "ธรรมาภิบาลและความไว้วางใจระดับสวิส",
      syndicateTitle: "สำรวจโอกาสการลงทุนร่วมและกองทุน Syndicate",
      syndicateDesc: "นักลงทุนสถาบันและสำนักงานครอบครัวสามารถขอรับเอกสารสรุปการลงทุน (Memorandum) สำหรับโครงการเชิงพาณิชย์และเทคโนโลยีการบินได้",
      syndicateBtn: "ขอรับเอกสารสรุปการลงทุน",
      events: [
        {
          year: "2024",
          title: "Venture Capital และกลุ่มเทคโนโลยีระดับสากล",
          partner: "Direct Multi-Family Syndicate",
          desc: "ก่อตั้งพันธมิตรเชิงกลยุทธ์เพื่อร่วมลงทุนในธุรกิจ Deep-Tech และโครงสร้างพื้นฐาน AI ในยุโรปและเอเชีย",
          tag: "เทคโนโลยี & หุ้นนอกตลาด",
        },
        {
          year: "2025",
          title: "ขยายการลงทุนอสังหาริมทรัพย์เชิงพาณิชย์ในแถบเมดิเตอร์เรเนียน",
          partner: "TABIA GROUP (ปัลมาเดมายอร์กา)",
          desc: "ร่วมมือข้ามพรมแดนในอสังหาริมทรัพย์เชิงพาณิชย์ โรงแรมระดับลักชัวรี และพื้นที่ค้าปลีกทำเลทองในมาดริดและหมู่เกาะแบลีแอริก",
          tag: "อสังหาริมทรัพย์พาณิชย์",
        },
        {
          year: "2026",
          title: "การร่วมทุนด้านอากาศยานไร้คนขับ สวิตเซอร์แลนด์ / ยูเออี",
          partner: "Autonomous Flight Joint Venture",
          desc: "ลงทุนโดยตรงและให้คำปรึกษาเชิงกลยุทธ์ในเทคโนโลยีการบินไร้คนขับและระบบการเดินทางทางอากาศแห่งอนาคต",
          tag: "Deep Tech & การบิน",
        },
        {
          year: "ปัจจุบัน & อนาคต",
          title: "ความมั่นคงของสินทรัพย์และการเติบโตทั่วโลก",
          partner: "Multi-Jurisdictional Family Office",
          desc: "ขยายพอร์ตโฟลิโออสังหาริมทรัพย์ Off-Market สถาปัตยกรรมไม้ยั่งยืน และการจัดสรรหุ้นนอกตลาดเพื่อการส่งต่อความมั่งคั่งข้ามรุ่น",
          tag: "การรักษาเงินทุน",
        },
      ],
    },
    heritage: {
      tag: "มรดกและธรรมาภิบาลระดับสวิส",
      headline: "เกี่ยวกับเรา. มองภาพรวม – เพื่ออนาคตที่มั่นคง",
      subtitle: "มีรากฐานในคูสนัคท์ บนชายฝั่งโกลด์โคสต์ของทะเลสาบซูริก Leimann Global Capital ยึดมั่นในค่านิยมเหนือกาลเวลาด้านความลับ ความเป็นอิสระ และความมั่นคงถาวร",
      boardTitle: "คณะกรรมการบริหารและผู้บริหารระดับสูง",
      boardSub: "Leimann Group & Private Family Office",
      pillarsTitle: "สร้างขึ้นบนรากฐานของความลับและหน้าที่ความไว้วางใจระดับสวิส",
      pillarsSubtitle: "เราคงไว้ซึ่งความใกล้ชิดและการดูแลอย่างอบอุ่นของสำนักงานครอบครัวสวิส พร้อมทั้งมอบโครงสร้างพื้นฐานที่แข็งแกร่งของการลงทุนระดับสากล",
      badgeYears: "40+",
      badgeLabel: "ปีแห่งความไว้วางใจและรักษาความลับ",
      board: [
        {
          name: "Dr. Rudolf Leimann",
          title: "ประธานคณะกรรมการบริหาร (Chairman)",
          role: "กลยุทธ์อสังหาริมทรัพย์สวิสและการลงทุน Private Equity",
          bio: "ประสบการณ์กว่า 40 ปีในการเป็นผู้นำการพัฒนาที่ดินพาณิชย์สวิส การกำกับดูแลธรรมาภิบาลการเงิน และการจัดโครงสร้างมรดกครอบครัว",
        },
        {
          name: "Adrian Leimann",
          title: "กรรมการบริหารและประธานเจ้าหน้าที่บริหาร (CEO)",
          role: "การเข้าซื้อกิจการระดับสากลและการร่วมลงทุนเทคโนโลยี",
          bio: "นำทีมการเข้าซื้อที่ดินและสินทรัพย์ทั่วโลก กลุ่มทุน Syndicate และการพัฒนาโครงการอสังหาริมทรัพย์ไม้ยั่งยืนในสวิตเซอร์แลนด์และศูนย์กลางการเงินโลก",
        },
        {
          name: "Dr. iur. Hans-Toni Leimann",
          title: "กรรมการบริหารและที่ปรึกษากฎหมาย (Legal Counsel)",
          role: "ที่ปรึกษากฎหมายและโครงสร้างภาษีมณฑลสวิส",
          bio: "ดุษฎีบัณฑิตสาขากฎหมาย ผู้เชี่ยวชาญด้านกฎหมายการธนาคารสวิส ธุรกรรมอสังหาริมทรัพย์ข้ามพรมแดน ภาษีมณฑล และการบริหารจัดการธรรมนูญครอบครัว",
        },
      ],
      pillars: [
        {
          title: "ปฏิบัติตามมาตรฐานความลับทางการเงินของสวิสอย่างเคร่งครัด",
          desc: "คุ้มครองข้อมูลลูกค้าภายใต้พระราชบัญญัติการธนาคารแห่งสมาพันธรัฐสวิส (มาตรา 47) และมาตรฐานความลับระดับสูงสุด",
        },
        {
          title: "การบริหารอย่างเป็นอิสระและร่วมลงทุนด้วยเงินทุนครอบครัว",
          desc: "ปราศจากความขัดแย้งทางผลประโยชน์ ครอบครัว Leimann ร่วมลงทุนด้วยเงินทุนส่วนตัวเคียงข้างลูกค้าเสมอ",
        },
        {
          title: "ติดต่อโดยตรงกับหุ้นส่วนผู้จัดการและคณะกรรมการ",
          desc: "ลูกค้าติดต่อและปรึกษาโดยตรงกับคณะกรรมการบริหาร ณ สำนักงานใหญ่คูสนัคท์/ซูริก อย่างต่อเนื่องไร้รอยต่อ",
        },
        {
          title: "ความเชี่ยวชาญด้านที่ดินและอสังหาริมทรัพย์ที่สืบทอดข้ามรุ่น",
          desc: "ประวัติผลงานกว่า 40 ปีในการจัดหาที่ดิน การก่อสร้างมาตรฐาน Minergie-P และการรักษาคุณค่าสินทรัพย์อย่างยั่งยืน",
        },
      ],
    },
    calculator: {
      tag: "เครื่องคำนวณและจำลองผลตอบแทน",
      headline: "จำลองการเติบโตของอสังหาริมทรัพย์และเงินทุนของคุณ",
      subtitle: "คำนวณผลตอบแทนทบต้น อัตราผลตอบแทนค่าเช่า และการปกป้องเงินทุนในสกุลเงินฟรังก์สวิสและสกุลเงินหลักทั่วโลก",
      inputCapital: "เงินทุนตั้งต้นในการจัดสรร",
      inputYears: "ระยะเวลาการลงทุน (ปี)",
      inputYield: "เป้าหมายผลตอบแทนสุทธิต่อปี (%)",
      projectedTotal: "มูลค่าสินทรัพย์รวมที่คาดการณ์",
      interestEarned: "ผลตอบแทนการเติบโตสะสม",
      annualCashflow: "กระแสเงินสดสุทธิต่อปีที่คาดการณ์",
      consultBtn: "นัดหมายวางแผนโครงสร้างการลงทุน",
    },
    contact: {
      tag: "โต๊ะบริการตรงจากสวิตเซอร์แลนด์",
      headlineLine1: "วิสัยทัศน์ของคุณ.",
      headlineLine2: "ความเชี่ยวชาญระดับสวิสของเรา.",
      subtitle: "ทุกการลงทุนที่ยอดเยี่ยมเริ่มต้นจากการสนทนาที่จริงใจ ไม่ว่าคุณต้องการขายที่ดินเพื่อการก่อสร้าง จัดหาอสังหาริมทรัพย์ Off-Market หรือร่วมลงทุน คณะผู้บริหารของเราพร้อมให้คำปรึกษา",
      hqLabel: "สำนักงานใหญ่สวิตเซอร์แลนด์",
      hqAddress: "Boglerenstrasse 67, CH-8700 Küsnacht, Switzerland",
      phoneLabel: "เบอร์โทรศัพท์สายตรงส่วนบุคคล",
      phoneHours: "จันทร์ – ศุกร์ • 08:30 – 18:30 น. (เวลาสวิส)",
      emailLabel: "อีเมลติดต่อเพื่อความลับส่วนบุคคล",
      responseBadge: "การตอบกลับตามมาตรฐานสวิส: ภายใน 2 ชั่วโมงทำการ",
      formTitle: "ส่งข้อกำหนดและข้อมูลความต้องการ",
      languageLabel: "เลือกภาษา:",
      nameLabel: "ชื่อ-นามสกุล / นิติบุคคลครอบครัว *",
      namePlaceholder: "เช่น ดร. อเล็กซานเดอร์ วอน เบิร์น",
      emailLabelField: "อีเมลส่วนตัว *",
      emailPlaceholder: "เช่น principal@family-office.ch",
      subjectLabel: "หัวข้อที่ต้องการรับคำปรึกษา",
      subjectOptions: [
        "การจัดหาที่ดิน / พัฒนาอสังหาริมทรัพย์ในสวิส",
        "การซื้ออสังหาริมทรัพย์หายากแบบ Off-Market (Buy)",
        "การเช่าอสังหาริมทรัพย์ระดับพรีเมียม (Rent)",
        "การลงทุนร่วม Capital Investment & Venture Syndicate",
        "การบริหารจัดการสำนักงานครอบครัวและธรรมาภิบาลสวิส",
      ],
      messageLabel: "ข้อความและข้อกำหนดความต้องการ",
      messagePlaceholder: "โปรดระบุทำเลมณฑลที่ต้องการ เกณฑ์ที่ดิน หรือขอบเขตงบประมาณการลงทุน...",
      disclaimer: "ข้อมูลทั้งหมดถูกเก็บรักษาเป็นความลับสูงสุดตามกฎหมายธนาคารสวิส (มาตรา 47)",
      sendBtn: "ส่งข้อความ",
      successTitle: "ได้รับข้อมูลเรียบร้อยแล้ว",
      successDesc: "ขอบพระคุณเป็นอย่างยิ่ง ข้อมูลของคุณถูกส่งตรงไปยังโต๊ะทำงานของผู้บริหาร Adrian Leimann และคณะกรรมการที่ปรึกษาในสวิตเซอร์แลนด์เรียบร้อยแล้ว",
    },
    footer: {
      brandDesc: "ผู้นำด้านการพัฒนาอสังหาริมทรัพย์ยั่งยืน การจัดหาที่ดินเพื่อการก่อสร้าง และการลงทุนเชิงกลยุทธ์ในสวิตเซอร์แลนด์และศูนย์กลางการเงินโลก",
      compliance: "อยู่ภายใต้กฎหมายการรักษาความลับทางการเงินของสวิส (มาตรา 47) และมาตรฐานความไว้วางใจ",
      disciplinesNav: "บริการและแผนผังเว็บไซต์",
      executiveDesks: "ที่ตั้งสำนักงาน",
      contactDesk: "ติดต่อสำนักงานสวิส",
      copyright: "Leimann Global Capital GmbH. สงวนลิขสิทธิ์ทั้งหมด",
      terms: "เงื่อนไขการใช้บริการ",
      privacy: "นโยบายความเป็นส่วนตัว",
      cookies: "นโยบายคุกกี้",
      imprint: "ข้อมูลทางกฎหมาย (Swiss Imprint)",
    },
  },
};
