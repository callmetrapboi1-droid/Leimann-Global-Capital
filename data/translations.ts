export type Language = "EN" | "TH" | "DE";

export interface Translations {
  // Navigation
  nav: {
    home: string;
    aboutUs: string;
    investments: string;
    heritage: string;
    contact: string;
    portalBtn: string;
    deskBtn: string;
    zurichTime: string;
  };

  // Hero Section
  hero: {
    tagline: string;
    titleLine1: string;
    titleLine2: string;
    subtitleTH?: string;
    description: string;
    approachSummary?: string;
    ctaExplore: string;
    ctaHeritage: string;
    ctaContact: string;
    established: string;
    cards: {
      about: {
        title: string;
        desc: string;
      };
      investments: {
        title: string;
        desc: string;
      };
      heritage: {
        title: string;
        desc: string;
      };
    };
  };

  // Global Perspective Feature Section
  globalPerspective: {
    badge: string;
    heading: string;
    paragraph1: string;
    paragraph2: string;
    pillars: {
      independent: string;
      entrepreneurial: string;
      international: string;
      combinedLine?: string;
    };
    familyEnterprise: {
      title: string;
      desc1: string;
      desc2: string;
      cta: string;
    };
  };

  // About Us Section
  aboutUs: {
    badge: string;
    heading: string;
    p1: string;
    p2: string;
    flexibleHighlight: string;
    p3: string;
    approachTitle: string;
    approaches: {
      longTerm: {
        title: string;
        desc: string;
      };
      entrepreneurial: {
        title: string;
        desc: string;
      };
      international: {
        title: string;
        desc: string;
      };
      partnerships: {
        title: string;
        desc: string;
      };
    };
    familyOffice: {
      title: string;
      desc1: string;
      desc2: string;
      desc3: string;
      subholdingBadge: string;
    };
  };

  // Investments & Collaborations Section
  investments: {
    badge: string;
    heading: string;
    intro: string;
    focusTitle: string;
    focusAreas: {
      privateInvestments: {
        title: string;
        desc: string;
      };
      techInnovation: {
        title: string;
        desc: string;
      };
      intlBusiness: {
        title: string;
        desc: string;
      };
      strategicCollab: {
        title: string;
        desc: string;
      };
    };
    selectedCollab: {
      badge: string;
      company: string;
      industry: string;
      description: string;
      focusLabel: string;
      focusTags: string[];
      learnMore: string;
      designNote: string;
    };
    futureOpportunities: {
      title: string;
      desc: string;
    };
  };

  // Heritage Section
  heritage: {
    badge: string;
    heading: string;
    intro: string;
    foundation: {
      title: string;
      desc: string;
    };
    activaStory: {
      title: string;
      desc: string;
    };
    nextChapter: {
      title: string;
      desc: string;
    };
    valuesTitle: string;
    values: {
      independence: {
        title: string;
        desc: string;
      };
      entrepreneurship: {
        title: string;
        desc: string;
      };
      trust: {
        title: string;
        desc: string;
      };
      continuity: {
        title: string;
        desc: string;
      };
      international: {
        title: string;
        desc: string;
      };
    };
    quote: {
      foundation: string;
      opportunity: string;
      connection: string;
      built: string;
    };
  };

  // Contact Section
  contact: {
    badge: string;
    heading: string;
    intro: string;
    companyName: string;
    addressLabel: string;
    address: string;
    emailLabel: string;
    email: string;
    areasTitle: string;
    areas: string[];
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      interestLabel: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitBtn: string;
      successMsg: string;
      ndaNote: string;
    };
  };

  // Footer
  footer: {
    brand: string;
    tagline: string;
    companyName: string;
    address: string;
    email: string;
    navTitle: string;
    ownership: string;
    subholding: string;
    legalNotice: string;
    privacyPolicy: string;
    rights: string;
  };

  // Modal / Side Concierge
  concierge: {
    title: string;
    subtitle: string;
    clocksTitle: string;
    marketsTitle: string;
    directLine: string;
    partnerDesc: string;
    callBtn: string;
    vaultBtn: string;
  };
}

export const translations: Record<Language, Translations> = {
  EN: {
    nav: {
      home: "Home",
      aboutUs: "About Us",
      investments: "Investments",
      heritage: "Heritage",
      contact: "Contact",
      portalBtn: "Investor Portal",
      deskBtn: "Swiss Desk",
      zurichTime: "Freienbach / Zurich",
    },
    hero: {
      tagline: "Swiss Private Investment Platform • ActivaSwiss AG Subholding",
      titleLine1: "Global Perspective.",
      titleLine2: "Long-Term Vision.",
      subtitleTH: "มุมมองระดับโลก วิสัยทัศน์ระยะยาว",
      description:
        "Leimann Global Capital is a privately held investment and business platform based in Switzerland. As part of the Leimann family investment structure and a subholding of the ActivaSwiss AG Family Office, we pursue selected investments, strategic collaborations, and international business ventures.",
      approachSummary:
        "Our approach is driven by a long-term perspective, entrepreneurial thinking, and an international outlook.",
      ctaExplore: "Explore Our World",
      ctaHeritage: "Discover Our Heritage",
      ctaContact: "Connect With Us",
      established: "Subholding of ActivaSwiss AG Family Office",
      cards: {
        about: {
          title: "ABOUT US",
          desc: "A Switzerland-based investment platform with an international outlook.",
        },
        investments: {
          title: "INVESTMENTS & COLLABORATIONS",
          desc: "Selected opportunities, collaborations, and strategic projects.",
        },
        heritage: {
          title: "HERITAGE",
          desc: "Building upon a multi-generational entrepreneurial spirit.",
        },
      },
    },
    globalPerspective: {
      badge: "A Global Perspective",
      heading: "Where Meaningful Opportunities Emerge",
      paragraph1:
        "We believe that meaningful opportunities often emerge at the intersection of industries, markets, and relationships.",
      paragraph2:
        "Leimann Global Capital operates with an agile and entrepreneurial approach, exploring selected opportunities across global markets and industries.",
      pillars: {
        independent: "Independent.",
        entrepreneurial: "Entrepreneurial.",
        international: "International.",
        combinedLine: "Independent. Entrepreneurial. International.",
      },
      familyEnterprise: {
        title: "Part of a Family Enterprise",
        desc1:
          "Leimann Global Capital forms part of the overall Leimann family investment structure.",
        desc2:
          "As a subholding of ActivaSwiss AG, the family office in Switzerland, we build upon an entrepreneurial foundation while cultivating new opportunities for the future.",
        cta: "Discover Our Heritage →",
      },
    },
    aboutUs: {
      badge: "About Us",
      heading: "About Leimann Global Capital",
      p1: "Leimann Global Capital is a Swiss-based investment and business platform with an international perspective.",
      p2: "We focus on selected investments, strategic collaborations, and business opportunities where long-term thinking, entrepreneurial agility, and international networks can generate enduring value.",
      flexibleHighlight: "Our approach is intentionally flexible.",
      p3: "Rather than adhering to rigid investment mandates, we evaluate each opportunity on a case-by-case basis, concentrating on areas where our experience, network, and long-term perspective can provide meaningful impact.",
      approachTitle: "Our Approach",
      approaches: {
        longTerm: {
          title: "Long-Term Perspective",
          desc: "We believe in creating sustainable value and look beyond short-term market cycles.",
        },
        entrepreneurial: {
          title: "Entrepreneurial Thinking",
          desc: "We value initiative, independence, and the ability to identify and cultivate opportunities.",
        },
        international: {
          title: "International Outlook",
          desc: "We operate with an international mindset and seek to foster relationships and opportunities across markets and borders.",
        },
        partnerships: {
          title: "Selective Partnerships",
          desc: "We prioritize opportunities and relationships with clear strategic rationale and long-term potential.",
        },
      },
      familyOffice: {
        title: "Part of the ActivaSwiss Family Office",
        desc1:
          "Leimann Global Capital is a subholding of ActivaSwiss AG, an investment platform and Family Office owned by the Leimann family.",
        desc2:
          "The family's investment structure combines a long-standing entrepreneurial foundation with selected investments and activities across diverse sectors.",
        desc3:
          "While deeply rooted in Switzerland, Leimann Global Capital is developing an increasingly international outlook, representing a new chapter in the ongoing evolution of the family enterprise.",
        subholdingBadge: "ActivaSwiss AG Family Office Subholding",
      },
    },
    investments: {
      badge: "Investments & Collaborations",
      heading: "Selected Investments & Collaborations",
      intro:
        "Leimann Global Capital engages in selected investments, strategic collaborations, and international business projects. Our activities are opportunity-driven rather than restricted to a single industry. We are interested in businesses, technologies, and partners with long-term potential and a clear international perspective.",
      focusTitle: "Focus Areas",
      focusAreas: {
        privateInvestments: {
          title: "Private Investments",
          desc: "Selected investments in entrepreneurial companies and business opportunities.",
        },
        techInnovation: {
          title: "Technology & Innovation",
          desc: "Emerging technologies and businesses with the potential to create long-term value.",
        },
        intlBusiness: {
          title: "International Business",
          desc: "Cross-border opportunities, strategic collaborations, and international market development.",
        },
        strategicCollab: {
          title: "Strategic Collaborations",
          desc: "Selected partners where relationships, experience, and international networks can support long-term goals.",
        },
      },
      selectedCollab: {
        badge: "SELECTED COLLABORATION",
        company: "ANAVIA AG",
        industry: "Swiss Aerospace & Defence Technology",
        description:
          "A strategic collaboration focused on international business development and strategic partnerships.",
        focusLabel: "Focus",
        focusTags: [
          "International Markets",
          "Strategic Partnerships",
          "Business Development",
        ],
        learnMore: "Learn More →",
        designNote:
          "Discreet strategic collaboration in high-precision Swiss technology.",
      },
      futureOpportunities: {
        title: "Future Opportunities",
        desc: "Our portfolio and collaborative network will continue to evolve as new opportunities arise. Leimann Global Capital remains committed to building selected relationships and pursuing ventures with strategic importance and long-term potential.",
      },
    },
    heritage: {
      badge: "Heritage",
      heading: "Built on Heritage. Focused on the Future.",
      intro:
        "Leimann Global Capital builds on an entrepreneurial foundation shaped by independent thinking, business development, and a multi-generational sense of long-term responsibility. The Leimann family's history is rooted in Switzerland and reflects a culture of enterprise, independence, and the dedication to building for the future. These values continue to guide our approach to investments, partnerships, and new endeavors today.",
      foundation: {
        title: "An Entrepreneurial Foundation",
        desc: "Over the years, the Leimann family has developed diverse business activities across enterprise and investment. Rooted in Swiss principles of diligence, privacy, and precision, the family has nurtured sustainable enterprises across changing economic eras.",
      },
      activaStory: {
        title: "The ActivaSwiss AG Evolution",
        desc: "One of the pivotal chapters in this journey was the founding and development of ActivaSwiss AG. Initially established as an investment platform with a solid foundation in prime real estate, ActivaSwiss evolved into the comprehensive Family Office structure for the family, reflecting ongoing diversification and strategic asset stewardship.",
      },
      nextChapter: {
        title: "The Next Chapter",
        desc: "Leimann Global Capital represents a new and increasingly international chapter within the family enterprise. While our roots remain firmly anchored in Switzerland, our perspective extends far beyond borders. We aim to connect opportunities, people, and ideas across international markets while preserving the principles that have shaped the family's entrepreneurial journey for generations.",
      },
      valuesTitle: "Our Values",
      values: {
        independence: {
          title: "Independence",
          desc: "Freedom to think and act with a long-term perspective.",
        },
        entrepreneurship: {
          title: "Entrepreneurship",
          desc: "A belief in initiative, responsibility, and creating lasting value.",
        },
        trust: {
          title: "Trust",
          desc: "Meaningful business relationships take time to build.",
        },
        continuity: {
          title: "Continuity",
          desc: "Thinking beyond the present to ensure the long-term stewardship of what we create.",
        },
        international: {
          title: "International Perspective",
          desc: "Embracing opportunities and partnerships across global markets.",
        },
      },
      quote: {
        foundation: "Heritage provides a foundation.",
        opportunity: "The future creates opportunity.",
        connection:
          "Leimann Global Capital represents the connection between both.",
        built: "Built on heritage. Shaped by the future.",
      },
    },
    contact: {
      badge: "Contact Us",
      heading: "Let's Connect",
      intro:
        "We welcome discussions with selected parties regarding investments, strategic collaborations, and international business opportunities. For general and strategic inquiries, please reach out to our team in Switzerland.",
      companyName: "Leimann Global Capital GmbH Switzerland",
      addressLabel: "Registered Office",
      address: "Unterdorfstrasse 12, 8808 Freienbach SZ Switzerland",
      emailLabel: "Business & Strategic Opportunities",
      email: "info@leimannglobalcapital.ch",
      areasTitle: "Areas of Interest",
      areas: [
        "Investment Opportunities",
        "Strategic Collaborations",
        "International Business Development",
        "Technology & Innovation",
        "Cross-Border Partnerships",
      ],
      form: {
        nameLabel: "Full Name / Entity",
        namePlaceholder: "e.g. Dr. Alexander Weber / Family Office",
        emailLabel: "Corporate / Direct Email",
        emailPlaceholder: "principal@institution.ch",
        interestLabel: "Primary Area of Interest",
        messageLabel: "Confidential Brief",
        messagePlaceholder:
          "Please outline the strategic rationale, investment scope, or cross-border venture...",
        submitBtn: "Dispatch Inquiry",
        successMsg:
          "Thank you for contacting Leimann Global Capital. Your inquiry has been routed to our managing team in Freienbach SZ.",
        ndaNote:
          "All communications are treated with strict confidentiality under Swiss business standards.",
      },
    },
    footer: {
      brand: "LEIMANN GLOBAL CAPITAL",
      tagline:
        "Privately held. Entrepreneurially driven. Internationally focused.",
      companyName: "Leimann Global Capital GmbH Switzerland",
      address: "Unterdorfstrasse 12, 8808 Freienbach SZ Switzerland",
      email: "info@leimannglobalcapital.ch",
      navTitle: "Navigation",
      ownership: "Part of the Leimann family investment structure",
      subholding: "A subholding of ActivaSwiss AG",
      legalNotice: "Legal Notice",
      privacyPolicy: "Privacy Policy",
      rights: "All rights reserved.",
    },
    concierge: {
      title: "Swiss Desk & World Clocks",
      subtitle: "Freienbach SZ • Zurich • London • Singapore • Bangkok",
      clocksTitle: "Global Financial Centers (Live)",
      marketsTitle: "Strategic Benchmarks & FX",
      directLine: "Strategic Opportunity Desk",
      partnerDesc:
        "Direct access for prospective partners and principals regarding confidential mandates.",
      callBtn: "Initiate Private Contact",
      vaultBtn: "Client Portal Access",
    },
  },

  DE: {
    nav: {
      home: "Home",
      aboutUs: "Über uns",
      investments: "Investitionen",
      heritage: "Herkunft & Werte",
      contact: "Kontakt",
      portalBtn: "Investor Portal",
      deskBtn: "Swiss Desk",
      zurichTime: "Freienbach / Zürich",
    },
    hero: {
      tagline: "Schweizer Private Investment Plattform • Subholding der ActivaSwiss AG",
      titleLine1: "Globale Perspektive.",
      titleLine2: "Langfristige Vision.",
      subtitleTH: "Schweizer Investment- und Geschäftsplattform",
      description:
        "Leimann Global Capital ist eine privat gehaltene Investment- und Geschäftsplattform mit Sitz in der Schweiz. Als Teil der Anlagestruktur der Familie Leimann und Subholding des ActivaSwiss AG Family Office verfolgen wir ausgewählte Investitionen, strategische Kooperationen und internationale Geschäftsvorhaben.",
      approachSummary:
        "Unser Ansatz basiert auf einer langfristigen Perspektive, unternehmerischem Denken und einer internationalen Ausrichtung.",
      ctaExplore: "Unsere Welt entdecken",
      ctaHeritage: "Unsere Herkunft entdecken",
      ctaContact: "Kontakt aufnehmen",
      established: "Subholding des ActivaSwiss AG Family Office",
      cards: {
        about: {
          title: "ÜBER UNS",
          desc: "Eine Schweizer Investmentplattform mit internationalem Horizont.",
        },
        investments: {
          title: "INVESTITIONEN & KOOPERATIONEN",
          desc: "Ausgewählte Opportunitäten, Kooperationen und strategische Projekte.",
        },
        heritage: {
          title: "HERKUNFT",
          desc: "Aufbauend auf einem generationenübergreifenden Unternehmergeist.",
        },
      },
    },
    globalPerspective: {
      badge: "Eine globale Perspektive",
      heading: "Wo bedeutende Opportunitäten entstehen",
      paragraph1:
        "Wir glauben, dass bedeutende Opportunitäten an der Schnittstelle von Branchen, Märkten und Beziehungen entstehen.",
      paragraph2:
        "Leimann Global Capital agiert mit einem agilen und unternehmerischen Ansatz und evaluiert gezielt Opportunitäten über globale Märkte und Industrien hinweg.",
      pillars: {
        independent: "Unabhängig.",
        entrepreneurial: "Unternehmerisch.",
        international: "International.",
        combinedLine: "Unabhängig. Unternehmerisch. International.",
      },
      familyEnterprise: {
        title: "Teil eines Familienunternehmens",
        desc1:
          "Leimann Global Capital ist Teil der übergeordneten Anlagestruktur der Familie Leimann.",
        desc2:
          "Als Subholding der ActivaSwiss AG, dem Family Office in der Schweiz, bauen wir auf einem soliden unternehmerischen Fundament auf und entwickeln neue Opportunitäten für die Zukunft.",
        cta: "Unsere Herkunft entdecken →",
      },
    },
    aboutUs: {
      badge: "Über uns",
      heading: "Über Leimann Global Capital",
      p1: "Leimann Global Capital ist eine Schweizer Investment- und Geschäftsplattform mit internationaler Ausrichtung.",
      p2: "Wir konzentrieren uns auf ausgewählte Investitionen, strategische Partnerschaften und Geschäftsmöglichkeiten, bei denen langfristiges Denken, unternehmerische Agilität und internationale Netzwerke nachhaltige Werte schaffen.",
      flexibleHighlight: "Unser Ansatz ist bewusst flexibel.",
      p3: "Anstatt starren Mandaten zu folgen, bewerten wir jede Opportunität individuell und fokussieren uns auf Bereiche, in denen unsere Erfahrung, unser Netzwerk und unsere langfristige Perspektive eine signifikante Wirkung entfalten.",
      approachTitle: "Unser Ansatz",
      approaches: {
        longTerm: {
          title: "Langfristige Perspektive",
          desc: "Wir glauben an nachhaltige Wertschöpfung und blicken über kurzfristige Marktzyklen hinaus.",
        },
        entrepreneurial: {
          title: "Unternehmerisches Denken",
          desc: "Wir schätzen Eigeninitiative, Unabhängigkeit und die Fähigkeit, Chancen gezielt zu entwickeln.",
        },
        international: {
          title: "Internationale Ausrichtung",
          desc: "Wir agieren mit einem globalen Mindset und fördern grenzüberschreitende Beziehungen und Opportunitäten.",
        },
        partnerships: {
          title: "Selektive Partnerschaften",
          desc: "Wir priorisieren Engagements und Beziehungen mit klarer strategischer Logik und langfristigem Potenzial.",
        },
      },
      familyOffice: {
        title: "Teil des ActivaSwiss Family Office",
        desc1:
          "Leimann Global Capital ist eine Subholding der ActivaSwiss AG, einer Investmentplattform und dem Family Office im Besitz der Familie Leimann.",
        desc2:
          "Die Anlagestruktur der Familie vereint ein gewachsenes unternehmerisches Fundament mit ausgewählten Investitionen über diverse Sektoren hinweg.",
        desc3:
          "Fest in der Schweiz verwurzelt, entwickelt Leimann Global Capital eine zunehmend internationale Dimension – ein neues Kapitel in der kontinuierlichen Weiterentwicklung des Familienunternehmens.",
        subholdingBadge: "Subholding des ActivaSwiss AG Family Office",
      },
    },
    investments: {
      badge: "Investitionen & Kooperationen",
      heading: "Ausgewählte Investitionen & Kooperationen",
      intro:
        "Leimann Global Capital engagiert sich in ausgewählten Direktinvestitionen, strategischen Kooperationen und internationalen Projekten. Unsere Aktivitäten sind opportunitätsgetrieben und nicht auf eine einzelne Branche beschränkt. Wir interessieren uns für Unternehmen, Technologien und Partner mit langfristigem Potenzial und internationaler Perspektive.",
      focusTitle: "Fokusbereiche",
      focusAreas: {
        privateInvestments: {
          title: "Private Investitionen",
          desc: "Ausgewählte Beteiligungen an unternehmerischen Gesellschaften und Direktinvestitionen.",
        },
        techInnovation: {
          title: "Technologie & Innovation",
          desc: "Zukunftstechnologien und hochpräzise Schweizer Ingenieurskunst mit nachhaltigem Wertpotenzial.",
        },
        intlBusiness: {
          title: "Internationales Geschäft",
          desc: "Grenzüberschreitende Marktentwicklung, Handelsinitiativen und internationale Expansion.",
        },
        strategicCollab: {
          title: "Strategische Kooperationen",
          desc: "Selektive Partnerschaften, bei denen Erfahrung, Schweizer Werte und Netzwerke gemeinsame Ziele beschleunigen.",
        },
      },
      selectedCollab: {
        badge: "AUSGEWÄHLTE KOOPERATION",
        company: "ANAVIA AG",
        industry: "Schweizer Luft- und Raumfahrttechnologie",
        description:
          "Strategische Kooperation mit Fokus auf internationale Markterschliessung und strategische Partnerschaften.",
        focusLabel: "Fokus",
        focusTags: [
          "Internationale Märkte",
          "Strategische Partnerschaften",
          "Business Development",
        ],
        learnMore: "Mehr erfahren →",
        designNote:
          "Diskrete strategische Kooperation im Bereich Schweizer Hochpräzisionstechnologie.",
      },
      futureOpportunities: {
        title: "Zukünftige Opportunitäten",
        desc: "Unser Portfolio und Partnernetzwerk entwickeln sich kontinuierlich weiter. Leimann Global Capital bleibt bestrebt, erstklassige Beziehungen aufzubauen und Vorhaben mit strategischer Relevanz zu begleiten.",
      },
    },
    heritage: {
      badge: "Herkunft & Werte",
      heading: "Auf Herkunft gebaut. Auf die Zukunft fokussiert.",
      intro:
        "Leimann Global Capital baut auf einem unternehmerischen Fundament auf, das durch unabhängiges Denken, Geschäftsentwicklung und generationenübergreifende Verantwortung geprägt ist. Die Geschichte der Familie Leimann ist in der Schweiz verwurzelt und spiegelt eine Kultur von Verlässlichkeit, Diskretion und Weitsicht wider.",
      foundation: {
        title: "Ein unternehmerisches Fundament",
        desc: "Über Jahrzehnte hinweg hat die Familie Leimann vielfältige unternehmerische Aktivitäten aufgebaut. Verwurzelt in Schweizer Werten wie Sorgfalt und Präzision wurden nachhaltige Werte geschaffen.",
      },
      activaStory: {
        title: "Die Entwicklung der ActivaSwiss AG",
        desc: "Ein zentrales Kapitel bildete die Gründung und Entwicklung der ActivaSwiss AG. Ursprünglich als Investmentplattform mit solider Immobilienbasis gegründet, entwickelte sich ActivaSwiss zum umfassenden Family Office der Familie.",
      },
      nextChapter: {
        title: "Das nächste Kapitel",
        desc: "Leimann Global Capital verkörpert ein neues, internationales Kapitel innerhalb des Familienunternehmens. Während unsere Wurzeln fest in der Schweiz verankert bleiben, reicht unser Horizont weit über Grenzen hinaus.",
      },
      valuesTitle: "Unsere Werte",
      values: {
        independence: {
          title: "Unabhängigkeit",
          desc: "Die Freiheit, mit langfristiger Perspektive zu denken und zu handeln.",
        },
        entrepreneurship: {
          title: "Unternehmergeist",
          desc: "Überzeugung von Eigeninitiative, Verantwortung und nachhaltiger Wertschöpfung.",
        },
        trust: {
          title: "Vertrauen",
          desc: "Bedeutende Geschäftsbeziehungen basieren auf Beständigkeit und Integrität.",
        },
        continuity: {
          title: "Kontinuität",
          desc: "Verantwortungsvolle generationenübergreifende Verwaltung und Weitsicht.",
        },
        international: {
          title: "Internationale Perspektive",
          desc: "Nutzung von Opportunitäten und Partnerschaften in globalen Märkten.",
        },
      },
      quote: {
        foundation: "Herkunft bildet das Fundament.",
        opportunity: "Die Zukunft schafft Opportunitäten.",
        connection:
          "Leimann Global Capital verbindet beides.",
        built: "Auf Herkunft gebaut. Durch die Zukunft geprägt.",
      },
    },
    contact: {
      badge: "Kontakt",
      heading: "Lassen Sie uns vernetzen",
      intro:
        "Wir freuen uns auf den Austausch mit ausgewählten Partnern über Investitionen, strategische Kooperationen und internationale Geschäftsvorhaben. Unser Team in der Schweiz steht Ihnen gerne zur Verfügung.",
      companyName: "Leimann Global Capital GmbH Schweiz",
      addressLabel: "Hauptsitz / Domizil",
      address: "Unterdorfstrasse 12, 8808 Freienbach SZ Schweiz",
      emailLabel: "Geschäftliche & Strategische Opportunitäten",
      email: "info@leimannglobalcapital.ch",
      areasTitle: "Interessenbereiche",
      areas: [
        "Investitionsopportunitäten",
        "Strategische Kooperationen",
        "Internationale Geschäftsentwicklung",
        "Technologie & Innovation",
        "Grenzüberschreitende Partnerschaften",
      ],
      form: {
        nameLabel: "Vollständiger Name / Institution",
        namePlaceholder: "z.B. Dr. Alexander Weber / Family Office",
        emailLabel: "Direkte E-Mail-Adresse",
        emailPlaceholder: "principal@institution.ch",
        interestLabel: "Primärer Interessenbereich",
        messageLabel: "Vertrauliche Nachricht / Zusammenfassung",
        messagePlaceholder:
          "Bitte skizzieren Sie die strategische Logik oder das Vorhaben...",
        submitBtn: "Anfrage senden",
        successMsg:
          "Vielen Dank für Ihre Kontaktaufnahme. Ihre Anfrage wurde vertraulich an unser Team in Freienbach SZ weitergeleitet.",
        ndaNote:
          "Sämtliche Anfragen werden gemäss Schweizer Fiduciary- und Vertraulichkeitsstandards behandelt.",
      },
    },
    footer: {
      brand: "LEIMANN GLOBAL CAPITAL",
      tagline:
        "Privat gehalten. Unternehmerisch getrieben. International fokussiert.",
      companyName: "Leimann Global Capital GmbH Schweiz",
      address: "Unterdorfstrasse 12, 8808 Freienbach SZ Schweiz",
      email: "info@leimannglobalcapital.ch",
      navTitle: "Navigation",
      ownership: "Teil der Anlagestruktur der Familie Leimann",
      subholding: "Eine Subholding der ActivaSwiss AG",
      legalNotice: "Impressum",
      privacyPolicy: "Datenschutz",
      rights: "Alle Rechte vorbehalten.",
    },
    concierge: {
      title: "Swiss Desk & Weltzeit",
      subtitle: "Freienbach SZ • Zürich • London • Singapur • Bangkok",
      clocksTitle: "Globale Finanzzentren (Live)",
      marketsTitle: "Strategische Benchmarks & FX",
      directLine: "Desk für strategische Opportunitäten",
      partnerDesc:
        "Direkter Zugang für ausgewählte Partner und Mandatsträger bezüglich vertraulicher Vorhaben.",
      callBtn: "Direktkontakt aufnehmen",
      vaultBtn: "Client Portal Zugang",
    },
  },

  TH: {
    nav: {
      home: "หน้าหลัก",
      aboutUs: "เกี่ยวกับเรา",
      investments: "การลงทุน",
      heritage: "มรดกและประวัติความเป็นมา",
      contact: "ติดต่อเรา",
      portalBtn: "Investor Portal",
      deskBtn: "Swiss Desk",
      zurichTime: "Freienbach / ซูริก",
    },
    hero: {
      tagline:
        "แพลตฟอร์มการลงทุนและธุรกิจเอกชน • Subholding ของ ActivaSwiss AG",
      titleLine1: "Global Perspective.",
      titleLine2: "Long-Term Vision.",
      subtitleTH: "มุมมองระดับโลก วิสัยทัศน์ระยะยาว",
      description:
        "Leimann Global Capital เป็นแพลตฟอร์มด้านการลงทุนและธุรกิจที่ถือครองโดยเอกชน และตั้งอยู่ในประเทศสวิตเซอร์แลนด์ บริษัทเป็นส่วนหนึ่งของโครงสร้างการลงทุนของตระกูล Leimann และเป็น Subholding ของ ActivaSwiss AG Family Office โดยมุ่งค้นหาโอกาสในการลงทุนที่คัดเลือกมาอย่างเหมาะสม ความร่วมมือเชิงกลยุทธ์ และโครงการธุรกิจระหว่างประเทศ",
      approachSummary:
        "แนวทางของเราขับเคลื่อนด้วยมุมมองระยะยาว ความคิดแบบผู้ประกอบการ และมุมมองในระดับนานาชาติ",
      ctaExplore: "สำรวจโลกของเรา",
      ctaHeritage: "ค้นพบเรื่องราวของเรา",
      ctaContact: "ติดต่อเรา",
      established: "Subholding ของ ActivaSwiss AG Family Office",
      cards: {
        about: {
          title: "ABOUT US",
          desc: "แพลตฟอร์มการลงทุนที่ตั้งอยู่ในสวิตเซอร์แลนด์ พร้อมมุมมองระดับนานาชาติ",
        },
        investments: {
          title: "INVESTMENTS & COLLABORATIONS",
          desc: "โอกาสที่ได้รับการคัดเลือก ความร่วมมือ และโครงการเชิงกลยุทธ์",
        },
        heritage: {
          title: "HERITAGE",
          desc: "ต่อยอดจากจิตวิญญาณของผู้ประกอบการที่สั่งสมมาหลายรุ่น",
        },
      },
    },
    globalPerspective: {
      badge: "A Global Perspective",
      heading: "โอกาสที่มีความหมายเกิดขึ้นตรงจุดตัดของตลาด",
      paragraph1:
        "เราเชื่อว่าโอกาสที่มีความหมายมักเกิดขึ้นตรงจุดตัดระหว่างอุตสาหกรรม ตลาด และความสัมพันธ์",
      paragraph2:
        "Leimann Global Capital ดำเนินงานด้วยแนวทางที่ยืดหยุ่นและมีความเป็นผู้ประกอบการ โดยสำรวจโอกาสที่ได้รับการคัดเลือกในตลาดและอุตสาหกรรมต่าง ๆ ทั่วโลก",
      pillars: {
        independent: "เป็นอิสระ (Independent)",
        entrepreneurial: "มีความเป็นผู้ประกอบการ (Entrepreneurial)",
        international: "มุ่งสู่ระดับนานาชาติ (International)",
        combinedLine: "เป็นอิสระ มีความเป็นผู้ประกอบการ และมุ่งสู่ระดับนานาชาติ",
      },
      familyEnterprise: {
        title: "Part of a Family Enterprise",
        desc1:
          "Leimann Global Capital เป็นส่วนหนึ่งของโครงสร้างการลงทุนโดยรวมของตระกูล Leimann",
        desc2:
          "ในฐานะ Subholding ของ ActivaSwiss AG ซึ่งเป็น Family Office ของครอบครัวในสวิตเซอร์แลนด์ เราต่อยอดจากรากฐานด้านการเป็นผู้ประกอบการ พร้อมทั้งพัฒนาโอกาสใหม่ ๆ สำหรับอนาคต",
        cta: "ค้นพบเรื่องราวของเรา →",
      },
    },
    aboutUs: {
      badge: "เกี่ยวกับเรา",
      heading: "About Leimann Global Capital",
      p1: "Leimann Global Capital เป็นแพลตฟอร์มด้านการลงทุนและธุรกิจที่ตั้งอยู่ในสวิตเซอร์แลนด์ พร้อมมุมมองในระดับนานาชาติ",
      p2: "เรามุ่งเน้นการลงทุนที่ได้รับการคัดเลือก ความร่วมมือเชิงกลยุทธ์ และโอกาสทางธุรกิจ ซึ่งการคิดระยะยาว ความเป็นผู้ประกอบการ และเครือข่ายระดับนานาชาติสามารถสร้างคุณค่าได้",
      flexibleHighlight: "แนวทางของเรามีความยืดหยุ่นโดยตั้งใจ",
      p3: "แทนที่จะใช้รูปแบบการลงทุนที่ตายตัว เราจะประเมินแต่ละโอกาสเป็นรายกรณี และมุ่งเน้นในพื้นที่ที่เราเชื่อว่าประสบการณ์ เครือข่าย และมุมมองระยะยาวของเราสามารถสร้างประโยชน์ได้อย่างมีความหมาย",
      approachTitle: "Our Approach — แนวทางของเรา",
      approaches: {
        longTerm: {
          title: "Long-Term Perspective — มุมมองระยะยาว",
          desc: "เราเชื่อในการสร้างคุณค่าที่ยั่งยืน และมองการณ์ไกลเกินกว่าวัฏจักรตลาดระยะสั้น",
        },
        entrepreneurial: {
          title: "Entrepreneurial Thinking — แนวคิดแบบผู้ประกอบการ",
          desc: "เราให้ความสำคัญกับความคิดริเริ่ม ความเป็นอิสระ และความสามารถในการมองเห็นและพัฒนาโอกาส",
        },
        international: {
          title: "International Outlook — มุมมองระดับนานาชาติ",
          desc: "เราดำเนินงานด้วยแนวคิดระดับนานาชาติ และมุ่งสร้างความสัมพันธ์และโอกาสข้ามตลาดและพรมแดน",
        },
        partnerships: {
          title: "Selective Partnerships — ความร่วมมือที่ได้รับการคัดเลือก",
          desc: "เราให้ความสำคัญกับโอกาสและความสัมพันธ์ที่มีเหตุผลเชิงกลยุทธ์อย่างชัดเจน และมีศักยภาพในระยะยาว",
        },
      },
      familyOffice: {
        title: "Part of the ActivaSwiss Family Office",
        desc1:
          "Leimann Global Capital เป็น Subholding ของ ActivaSwiss AG ซึ่งเป็นแพลตฟอร์มการลงทุนและ Family Office ที่ครอบครัว Leimann เป็นเจ้าของ",
        desc2:
          "โครงสร้างการลงทุนของครอบครัวผสานพื้นฐานด้านการเป็นผู้ประกอบการที่สั่งสมมาอย่างยาวนาน เข้ากับการลงทุนและกิจกรรมในหลากหลายภาคส่วนที่ได้รับการคัดเลือก",
        desc3:
          "แม้จะมีรากฐานที่มั่นคงในสวิตเซอร์แลนด์ แต่ Leimann Global Capital กำลังพัฒนามุมมองในระดับนานาชาติมากขึ้น และเป็นบทใหม่ของการพัฒนาองค์กรธุรกิจของครอบครัวอย่างต่อเนื่อง",
        subholdingBadge: "Subholding ของ ActivaSwiss AG Family Office",
      },
    },
    investments: {
      badge: "การลงทุนและความร่วมมือ",
      heading: "Selected Investments & Collaborations",
      intro:
        "Leimann Global Capital มีส่วนร่วมในการลงทุนที่ได้รับการคัดเลือก ความร่วมมือเชิงกลยุทธ์ และโครงการธุรกิจระหว่างประเทศ กิจกรรมของเราขับเคลื่อนด้วยโอกาส มากกว่าการจำกัดตัวเองอยู่ในอุตสาหกรรมใดอุตสาหกรรมหนึ่ง เราสนใจธุรกิจ เทคโนโลยี และพันธมิตรที่มีศักยภาพในระยะยาว และมีมุมมองที่ชัดเจนในระดับนานาชาติ",
      focusTitle: "Focus Areas — พื้นที่ที่ให้ความสำคัญ",
      focusAreas: {
        privateInvestments: {
          title: "Private Investments — การลงทุนภาคเอกชน",
          desc: "การลงทุนที่ได้รับการคัดเลือกในบริษัทและโอกาสทางธุรกิจของผู้ประกอบการ",
        },
        techInnovation: {
          title: "Technology & Innovation — เทคโนโลยีและนวัตกรรม",
          desc: "เทคโนโลยีเกิดใหม่และธุรกิจที่มีศักยภาพในการสร้างคุณค่าในระยะยาว",
        },
        intlBusiness: {
          title: "International Business — ธุรกิจระหว่างประเทศ",
          desc: "โอกาสข้ามพรมแดน ความร่วมมือเชิงกลยุทธ์ และการพัฒนาตลาดระหว่างประเทศ",
        },
        strategicCollab: {
          title: "Strategic Collaborations — ความร่วมมือเชิงกลยุทธ์",
          desc: "พันธมิตรที่ได้รับการคัดเลือก ซึ่งความสัมพันธ์ ประสบการณ์ และเครือข่ายระดับนานาชาติสามารถช่วยสนับสนุนเป้าหมายระยะยาวได้",
        },
      },
      selectedCollab: {
        badge: "SELECTED COLLABORATION",
        company: "ANAVIA AG",
        industry:
          "Swiss Aerospace & Defence Technology — เทคโนโลยีการบินและอวกาศและการป้องกันประเทศของสวิตเซอร์แลนด์",
        description:
          "ความร่วมมือเชิงกลยุทธ์ที่มุ่งเน้นการพัฒนาธุรกิจระหว่างประเทศและการสร้างพันธมิตร",
        focusLabel: "จุดเน้นหลัก",
        focusTags: [
          "International Markets (ตลาดระหว่างประเทศ)",
          "Strategic Partnerships (พันธมิตรเชิงกลยุทธ์)",
          "Business Development (การพัฒนาธุรกิจ)",
        ],
        learnMore: "Learn More →",
        designNote:
          "ความร่วมมือเชิงกลยุทธ์ด้านเทคโนโลยีการบินและวิศวกรรมความแม่นยำสูงของสวิตเซอร์แลนด์",
      },
      futureOpportunities: {
        title: "Future Opportunities — โอกาสในอนาคต",
        desc: "Portfolio และเครือข่ายความร่วมมือจะพัฒนาอย่างต่อเนื่องเมื่อมีโอกาสใหม่ ๆ เกิดขึ้น Leimann Global Capital ยังคงมุ่งสร้างความสัมพันธ์ที่ได้รับการคัดเลือก และแสวงหาโอกาสที่มีความสำคัญเชิงกลยุทธ์และศักยภาพในระยะยาว",
      },
    },
    heritage: {
      badge: "มรดกและประวัติความเป็นมา",
      heading: "Built on Heritage. Focused on the Future.",
      intro:
        "Leimann Global Capital ต่อยอดจากรากฐานด้านการเป็นผู้ประกอบการ ซึ่งได้รับอิทธิพลจากแนวคิดอิสระ การพัฒนาธุรกิจ และความรับผิดชอบระยะยาวที่สืบทอดผ่านคนหลายรุ่น ประวัติของตระกูล Leimann มีรากฐานอยู่ในสวิตเซอร์แลนด์ และสะท้อนถึงวัฒนธรรมของการเป็นผู้ประกอบการ ความเป็นอิสระ และความตั้งใจที่จะสร้างสิ่งต่าง ๆ เพื่ออนาคต คุณค่าเหล่านี้ยังคงมีอิทธิพลต่อแนวทางที่เราใช้ในการลงทุน ความร่วมมือ และการแสวงหาโอกาสใหม่ ๆ ในปัจจุบัน",
      foundation: {
        title: "An Entrepreneurial Foundation — รากฐานแห่งการเป็นผู้ประกอบการ",
        desc: "ตลอดหลายปีที่ผ่านมา ตระกูล Leimann ได้พัฒนากิจกรรมด้านธุรกิจในหลากหลายพื้นที่ ทั้งธุรกิจและการลงทุน โดยยึดมั่นในหลักการความละเอียดรอบคอบ ความเป็นส่วนตัว และความแม่นยำตามแบบฉบับสวิส",
      },
      activaStory: {
        title: "The ActivaSwiss AG Evolution — วิวัฒนาการสู่ ActivaSwiss AG",
        desc: "หนึ่งในบทสำคัญของเส้นทางนี้คือการก่อตั้งและพัฒนา ActivaSwiss AG โดย ActivaSwiss ซึ่งก่อตั้งขึ้นในฐานะแพลตฟอร์มการลงทุนที่มีรากฐานแข็งแกร่งในธุรกิจอสังหาริมทรัพย์ ได้พัฒนาต่อมาเป็นโครงสร้าง Family Office โดยรวมของครอบครัว สะท้อนถึงการขยายและกระจายกิจกรรมของครอบครัวอย่างต่อเนื่อง",
      },
      nextChapter: {
        title: "The Next Chapter — บทต่อไป",
        desc: "Leimann Global Capital เป็นบทใหม่และมีความเป็นนานาชาติมากขึ้นภายในองค์กรธุรกิจของครอบครัว แม้รากฐานของเรายังคงเชื่อมโยงกับสวิตเซอร์แลนด์อย่างมั่นคง แต่มุมมองของเราครอบคลุมไปไกลกว่าพรมแดน เรามุ่งเชื่อมโยงโอกาส ผู้คน และแนวคิดต่าง ๆ ระหว่างตลาดนานาชาติ พร้อมรักษาหลักการที่หล่อหลอมแนวทางการเป็นผู้ประกอบการของครอบครัวมาตลอดหลายรุ่น",
      },
      valuesTitle: "Our Values — คุณค่าของเรา",
      values: {
        independence: {
          title: "Independence — ความเป็นอิสระ",
          desc: "อิสระในการคิดและลงมือทำด้วยมุมมองระยะยาว",
        },
        entrepreneurship: {
          title: "Entrepreneurship — ความเป็นผู้ประกอบการ",
          desc: "ความเชื่อในความคิดริเริ่ม ความรับผิดชอบ และการสร้างสิ่งที่มีคุณค่าอย่างยั่งยืน",
        },
        trust: {
          title: "Trust — ความไว้วางใจ",
          desc: "ความสัมพันธ์ทางธุรกิจที่มีความหมายต้องใช้เวลาในการสร้าง",
        },
        continuity: {
          title: "Continuity — ความต่อเนื่อง",
          desc: "เราคิดไกลกว่าปัจจุบัน และคำนึงถึงการพัฒนาในระยะยาวของสิ่งที่เราสร้างขึ้น",
        },
        international: {
          title: "International Perspective — มุมมองระดับนานาชาติ",
          desc: "เราเปิดรับโอกาสและความสัมพันธ์จากตลาดและประเทศต่าง ๆ",
        },
      },
      quote: {
        foundation: "Heritage provides a foundation. (มรดกในอดีตคือรากฐาน)",
        opportunity: "The future creates opportunity. (อนาคตสร้างโอกาส)",
        connection:
          "Leimann Global Capital represents the connection between both. (Leimann Global Capital คือจุดเชื่อมระหว่างทั้งสองสิ่ง)",
        built:
          "Built on heritage. Shaped by the future. (สร้างบนรากฐานจากอดีต และหล่อหลอมด้วยอนาคต)",
      },
    },
    contact: {
      badge: "ติดต่อเรา",
      heading: "Let's Connect — มาร่วมเชื่อมต่อกัน",
      intro:
        "เรายินดีพูดคุยกับผู้ที่ได้รับการคัดเลือกเกี่ยวกับการลงทุน ความร่วมมือเชิงกลยุทธ์ และโอกาสทางธุรกิจระหว่างประเทศ สำหรับการสอบถามทั่วไปและเชิงกลยุทธ์ กรุณาติดต่อเรา",
      companyName: "Leimann Global Capital GmbH Switzerland",
      addressLabel: "สำนักงานจดทะเบียน",
      address: "Unterdorfstrasse 12, 8808 Freienbach SZ Switzerland",
      emailLabel: "Business & Strategic Opportunities — โอกาสทางธุรกิจและเชิงกลยุทธ์",
      email: "info@leimannglobalcapital.ch",
      areasTitle: "Areas of Interest — ขอบเขตที่เราสนใจ",
      areas: [
        "Investment Opportunities (โอกาสด้านการลงทุน)",
        "Strategic Collaborations (ความร่วมมือเชิงกลยุทธ์)",
        "International Business Development (การพัฒนาธุรกิจระหว่างประเทศ)",
        "Technology & Innovation (เทคโนโลยีและนวัตกรรม)",
        "Cross-Border Partnerships (พันธมิตรข้ามพรมแดน)",
      ],
      form: {
        nameLabel: "ชื่อ-นามสกุล / องค์กร",
        namePlaceholder: "เช่น ดร. อเล็กซานเดอร์ เวเบอร์ / Family Office",
        emailLabel: "อีเมลติดต่อ",
        emailPlaceholder: "principal@institution.ch",
        interestLabel: "ขอบเขตที่สนใจ",
        messageLabel: "สรุปรายละเอียดเบื้องต้น (Confidential Brief)",
        messagePlaceholder:
          "โปรดระบุวัตถุประสงค์เชิงกลยุทธ์ ขอบเขตการลงทุน หรือโครงการร่วมทุน...",
        submitBtn: "ส่งข้อความติดต่อ",
        successMsg:
          "ขอบคุณสำหรับการติดต่อ Leimann Global Capital ข้อมูลของคุณถูกส่งต่อไปยังทีมงาน ณ Freienbach SZ เรียบร้อยแล้ว",
        ndaNote:
          "การสื่อสารทั้งหมดได้รับการคุ้มครองภายใต้มาตรฐานความลับทางธุรกิจของสวิตเซอร์แลนด์",
      },
    },
    footer: {
      brand: "LEIMANN GLOBAL CAPITAL",
      tagline:
        "บริษัทเอกชน ขับเคลื่อนด้วยแนวคิดผู้ประกอบการ มุ่งเน้นระดับนานาชาติ",
      companyName: "Leimann Global Capital GmbH Switzerland",
      address: "Unterdorfstrasse 12, 8808 Freienbach SZ Switzerland",
      email: "info@leimannglobalcapital.ch",
      navTitle: "เมนูหลัก",
      ownership: "เป็นส่วนหนึ่งของโครงสร้างการลงทุนของตระกูล Leimann",
      subholding: "เป็น Subholding ของ ActivaSwiss AG",
      legalNotice: "Legal Notice (ข้อกฎหมาย / ประกาศทางกฎหมาย)",
      privacyPolicy: "Privacy Policy (นโยบายความเป็นส่วนตัว)",
      rights: "สงวนลิขสิทธิ์ทั้งหมด",
    },
    concierge: {
      title: "Swiss Desk & นาฬิกาตลาดโลก",
      subtitle: "Freienbach SZ • ซูริก • ลอนดอน • สิงคโปร์ • กรุงเทพฯ",
      clocksTitle: "ศูนย์กลางการเงินโลก (เวลาจริง)",
      marketsTitle: "ดัชนีชี้วัดเชิงกลยุทธ์ & อัตราแลกเปลี่ยน",
      directLine: "สายตรงโอกาสเชิงกลยุทธ์",
      partnerDesc:
        "การติดต่อโดยตรงสำหรับพันธมิตรและนักลงทุนที่ได้รับคัดเลือก",
      callBtn: "ติดต่อทีมผู้บริหาร",
      vaultBtn: "เข้าสู่ระบบ Client Portal",
    },
  },
};
