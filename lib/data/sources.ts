export type SourceCategory = "news" | "science" | "youtube" | "instagram";

export interface Source {
  id: string;
  category: SourceCategory;
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  author?: string;
  language?: "de" | "en";
  tags?: string[];
}

export interface YouTubeSource extends Source {
  category: "youtube";
  videoId?: string;
  duration?: string;
  channelName: string;
}

export interface InstagramSource extends Source {
  category: "instagram";
  handle: string;
  postUrl?: string;
  profileImageUrl?: string;
}

export type AnySource = Source | YouTubeSource | InstagramSource;

export const categoryMeta: Record<
  SourceCategory,
  {
    label: string;
    eyebrow: string;
    description: string;
    accent: string;
    accentLight: string;
  }
> = {
  news: {
    label: "Organisationen & Magazine",
    eyebrow: "Offizielle Quellen",
    description:
      "Vertrauenswürdige Organisationen, Gesundheitsbehörden und Magazine, die verständlich und faktenbasiert informieren.",
    accent: "#3d8f8a",
    accentLight: "rgba(61, 143, 138, 0.12)",
  },
  science: {
    label: "Wissenschaftliche Grundlagen",
    eyebrow: "Forschung & Leitlinien",
    description:
      "Studien, Leitlinien und Fachliteratur, auf die die Inhalte dieser Website fußen.",
    accent: "#7BA4C8",
    accentLight: "rgba(123, 164, 200, 0.12)",
  },
  youtube: {
    label: "YouTube",
    eyebrow: "Wissen als Video",
    description:
      "Wissenschaftlich fundierte Kanäle und Erklärvideos, die komplexe Themen zugänglich machen.",
    accent: "#d9534f",
    accentLight: "rgba(217, 83, 79, 0.12)",
  },
  instagram: {
    label: "Instagram – Lived Experience",
    eyebrow: "Stimmen aus der Community",
    description:
      "Menschen, die offen über ihr Leben mit ADHS sprechen. Persönlich, visuell und oft mit viel Humor.",
    accent: "#C98CB3",
    accentLight: "rgba(201, 140, 179, 0.12)",
  },
};

export const sources: AnySource[] = [
  // News & Organisationen
  {
    id: "nhs-adhd",
    category: "news",
    title: "NHS UK – ADHD",
    description: "Britisches Gesundheitssystem, verständliche Übersicht.",
    url: "https://www.nhs.uk/conditions/adhd-adults/",
    author: "NHS",
    language: "en",
    tags: ["Gesundheitsbehörde", "Übersicht"],
  },
  {
    id: "adhd-foundation",
    category: "news",
    title: "ADHD Foundation (UK)",
    description: "Neurodiversity Charity mit Ressourcen und Training.",
    url: "https://www.adhdfoundation.org.uk/",
    author: "ADHD Foundation",
    language: "en",
    tags: ["Charity", "Ressourcen"],
  },
  {
    id: "chadd",
    category: "news",
    title: "CHADD",
    description: "US-Organisation für Kinder und Erwachsene mit ADHD.",
    url: "https://chadd.org/",
    author: "CHADD",
    language: "en",
    tags: ["Organisation", "Support"],
  },
  {
    id: "additude",
    category: "news",
    title: "ADDitude Magazine",
    description: "Magazin mit Expertenbeiträgen, Webinaren, Tools.",
    url: "https://www.additudemag.com/",
    author: "ADDitude",
    language: "en",
    tags: ["Magazin", "Webinare"],
  },
  {
    id: "adxs",
    category: "news",
    title: "ADxS.org",
    description: "Wissenschaftlich fundierte deutschsprachige ADHS-Infos.",
    url: "https://www.adxs.org/en",
    author: "ADxS",
    language: "de",
    tags: ["Deutsch", "Wissenschaftlich"],
  },
  {
    id: "addiss",
    category: "news",
    title: "ADDISS",
    description: "Britische Informations- und Supportorganisation.",
    url: "https://www.addiss.co.uk/",
    author: "ADDISS",
    language: "en",
    tags: ["Organisation", "Support"],
  },
  {
    id: "caddra",
    category: "news",
    title: "CADDRA",
    description: "Kanadische Leitlinien und Ressourcen.",
    url: "https://www.caddra.ca/",
    author: "CADDRA",
    language: "en",
    tags: ["Leitlinien", "Kanada"],
  },
  {
    id: "nimh",
    category: "news",
    title: "NIMH",
    description: "US-Forschungsinstitut für psychische Gesundheit.",
    url: "https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd",
    author: "NIMH",
    language: "en",
    tags: ["Forschung", "Behörde"],
  },
  {
    id: "cdc",
    category: "news",
    title: "CDC",
    description: "US-Gesundheitsbehörde, Daten und Fakten.",
    url: "https://www.cdc.gov/adhd/index.html",
    author: "CDC",
    language: "en",
    tags: ["Behörde", "Daten"],
  },
  {
    id: "apsard",
    category: "news",
    title: "APSARD",
    description: "Amerikanische Fachgesellschaft für ADHD.",
    url: "https://apsard.org/",
    author: "APSARD",
    language: "en",
    tags: ["Fachgesellschaft", "Forschung"],
  },
  {
    id: "adda",
    category: "news",
    title: "ADDA",
    description: "Adult ADHD Organisation.",
    url: "https://add.org/",
    author: "ADDA",
    language: "en",
    tags: ["Erwachsene", "Organisation"],
  },

  // Wissenschaftliche Grundlagen
  {
    id: "osborn-field-guide",
    category: "science",
    title: "The ADHD Field Guide for Adults",
    description:
      "Osborn, C., Gude, E., & Dyball, R. (2026). Gallery Books / Simon & Schuster. ISBN: 9781668053164",
    url: "https://www.simonandschuster.com/books/The-ADHD-Field-Guide-for-Adults/Cate-Osborn/9781668053164",
    author: "Osborn, Gude & Dyball",
    language: "en",
    tags: ["Buch", "Lived Experience"],
  },
  {
    id: "brown-unfocused-mind",
    category: "science",
    title: "Attention Deficit Disorder: The Unfocused Mind",
    description: "Brown, T. E. (2005, 2017). Klassische Darstellung der exekutiven Funktionen bei ADHS.",
    url: "https://yalebooks.yale.edu/book/9780300119893/attention-deficit-disorder/",
    author: "Thomas E. Brown",
    language: "en",
    tags: ["Buch", "Exekutive Funktionen"],
  },
  {
    id: "barkley-executive-functions",
    category: "science",
    title: "ADHD and the Nature of Self-Control / Executive Functions",
    description: "Barkley, R. A. (1997, 2006, 2012). Zentrale Arbeiten zur Selbstregulation.",
    url: "https://www.guilford.com/books/Executive-Functions/Russell-Barkley/9781462545933",
    author: "Russell A. Barkley",
    language: "en",
    tags: ["Buch", "Selbstregulation"],
  },
  {
    id: "kessler-asrs-2005",
    category: "science",
    title: "The World Health Organization Adult ADHD Self-Report Scale (ASRS)",
    description: "Kessler, R. C., et al. (2005). Psychological Medicine, 35(2), 245–256.",
    url: "https://www.cambridge.org/core/journals/psychological-medicine/article/abs/world-health-organization-adult-adhd-selfreport-scale-asrs/EBCBF2074DEE66A0A4168B82E056A77B",
    author: "Kessler et al.",
    language: "en",
    tags: ["ASRS", "Screening"],
  },
  {
    id: "ustun-asrs-2017",
    category: "science",
    title: "ASRS Screening Scale for DSM-5",
    description: "Ustün, T. B., et al. (2017). JAMA Psychiatry, 74(5), 520–527.",
    url: "https://jamanetwork.com/journals/jamapsychiatry/fullarticle/2604299",
    author: "Ustün et al.",
    language: "en",
    tags: ["ASRS", "DSM-5"],
  },
  {
    id: "faraone-genetics-2019",
    category: "science",
    title: "Genetics of attention deficit hyperactivity disorder",
    description: "Faraone, S. V., & Larsson, H. (2019). Molecular Psychiatry, 24(4), 562–575.",
    url: "https://www.nature.com/articles/s41380-018-0070-7",
    author: "Faraone & Larsson",
    language: "en",
    tags: ["Genetik", "Forschung"],
  },
  {
    id: "volkow-dopamine-2009",
    category: "science",
    title: "Evaluating dopamine reward pathway in ADHD",
    description: "Volkow, N. D., et al. (2009). JAMA, 302(10), 1084–1091.",
    url: "https://jamanetwork.com/journals/jama/fullarticle/184394",
    author: "Volkow et al.",
    language: "en",
    tags: ["Dopamin", "Neurobiologie"],
  },
  {
    id: "dsm-5-tr",
    category: "science",
    title: "DSM-5-TR",
    description: "American Psychiatric Association. (2022). Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision.",
    url: "https://www.psychiatry.org/psychiatrists/practice/dsm",
    author: "APA",
    language: "en",
    tags: ["Leitlinie", "Diagnose"],
  },
  {
    id: "nhs-taskforce-2025",
    category: "science",
    title: "Report of the independent ADHD Taskforce: Part 1",
    description: "NHS England (Juni 2025). Unabhängiger Bericht zur ADHD-Versorgung in England.",
    url: "https://www.england.nhs.uk/long-read/report-of-the-independent-adhd-taskforce-part-1/",
    author: "NHS England",
    language: "en",
    tags: ["Bericht", "Versorgung"],
  },
  {
    id: "european-consensus-2019",
    category: "science",
    title: "Updated European Consensus Statement on diagnosis and treatment of adult ADHD",
    description: "Kooij, J. J. S., et al. (2019). European Konsensusleitlinie.",
    url: "https://www.tandfonline.com/doi/full/10.1080/09297049.2019.1580211",
    author: "Kooij et al.",
    language: "en",
    tags: ["Leitlinie", "Europa"],
  },
  {
    id: "ballmann-asrs-2022",
    category: "science",
    title: "Evaluation of the German Version of the Adult ADHD Self-Report Screening Scale for DSM-5",
    description: "Ballmann, C., et al. (2022). Frontiers in Psychology, 13, 858147. Deutsche Validierung der ASRS-5.",
    url: "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2022.858147/full",
    author: "Ballmann et al.",
    language: "en",
    tags: ["ASRS-5", "Validierung", "Screening"],
  },
  {
    id: "dodson-rsd-2024",
    category: "science",
    title: "Rejection Sensitivity Dysphoria in Attention-Deficit/Hyperactivity Disorder: A Case Series",
    description: "Dodson, W. W., Modestino, E. J., Ceritoğlu, H. T., & Zayed, B. (2024). Acta Scientific Neurology, 7(8), 23–30.",
    url: "https://actascientific.com/ASNE/pdf/ASNE-07-0762.pdf",
    author: "Dodson et al.",
    language: "en",
    tags: ["RSD", "Emotionale Dysregulation", "ADHS"],
  },
  {
    id: "soler-gutierrez-emotion-2023",
    category: "science",
    title: "Evidence of emotion dysregulation as a core symptom of adult ADHD: A systematic review",
    description: "Soler-Gutiérrez, A. M., Pérez-González, J. C., & Mayas, J. (2023). PLoS ONE, 18(1), e0280131.",
    url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0280131",
    author: "Soler-Gutiérrez et al.",
    language: "en",
    tags: ["Emotionale Dysregulation", "Systematisches Review", "ADHS"],
  },
  {
    id: "hupfeld-ahq-2024",
    category: "science",
    title: "Validation of the dispositional adult hyperfocus questionnaire (AHQ-D)",
    description: "Hupfeld, K. E., Osborne, J. B., Tran, Q. T., Hyatt, H. W., Abagis, T. R., & Shah, P. (2024). Scientific Reports, 14, 19460.",
    url: "https://www.nature.com/articles/s41598-024-70028-y",
    author: "Hupfeld et al.",
    language: "en",
    tags: ["Hyperfokus", "Fragebogen", "ADHS"],
  },
  {
    id: "ashinoff-hyperfocus-2021",
    category: "science",
    title: "Hyperfocus: The forgotten frontier of attention",
    description: "Ashinoff, B. K., & Abu-Akel, A. (2021). Psychological Research, 85(1), 1–19.",
    url: "https://link.springer.com/article/10.1007/s00426-019-01245-8",
    author: "Ashinoff & Abu-Akel",
    language: "en",
    tags: ["Hyperfokus", "Flow", "Aufmerksamkeit"],
  },
  {
    id: "luu-sleep-2025",
    category: "science",
    title: "ADHD as a circadian rhythm disorder: evidence and implications for chronotherapy",
    description: "Luu, B., & Fabiano, N. (2025). Frontiers in Psychiatry, 16, 1697900.",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12728042/",
    author: "Luu & Fabiano",
    language: "en",
    tags: ["Schlaf", "Zirkadianer Rhythmus", "ADHS"],
  },
  {
    id: "rowney-smith-rsd-2026",
    category: "science",
    title: "The lived experience of rejection sensitivity in ADHD: A qualitative exploration",
    description: "Rowney-Smith, A., Sutton, B., Quadt, L., & Eccles, J. A. (2026). PLoS ONE, 21(1), e0314669.",
    url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0314669",
    author: "Rowney-Smith et al.",
    language: "en",
    tags: ["RSD", "Lived Experience", "Qualitative"],
  },

  // YouTube
  {
    id: "youtube-huberman-adhd",
    category: "youtube",
    title: "ADHD & Focus",
    description:
      "Stanford-Neurowissenschaftler Andrew Huberman erklärt ADHD ausführlich – Dopamin, Fokus, Interozeption und mehr.",
    url: "https://www.youtube.com/watch?v=LAwBdRR4wQk",
    videoId: "LAwBdRR4wQk",
    channelName: "Huberman Lab",
    language: "en",
    tags: ["Neurobiologie", "Focus"],
  },
  {
    id: "youtube-huberman-channel",
    category: "youtube",
    title: "Huberman Lab – ADHD Playlist",
    description: "Wissenschaftsbasierte Podcasts rund um ADHS und das Nervensystem.",
    url: "https://www.youtube.com/@hubermanlab",
    channelName: "Huberman Lab",
    language: "en",
    tags: ["Podcast", "Playlist"],
  },
  {
    id: "youtube-how-to-adhd",
    category: "youtube",
    title: "How to ADHD",
    description:
      "Jessica McCabe verbindet lived experience mit erprobten Strategien – empathisch und praktisch.",
    url: "https://www.youtube.com/@HowtoADHD",
    channelName: "How to ADHD",
    language: "en",
    tags: ["Lived Experience", "Strategien"],
  },
  {
    id: "youtube-medcircle",
    category: "youtube",
    title: "Psychiatry & Stuff / MedCircle",
    description: "Klinische Erklärungen zu ADHS von Fachleuten.",
    url: "https://www.youtube.com/@MedCircle",
    channelName: "MedCircle",
    language: "en",
    tags: ["Klinisch", "Erklärung"],
  },

  // Instagram
  {
    id: "instagram-adhd-alien",
    category: "instagram",
    title: "ADHD Alien",
    description: "Comics über Leben mit ADHD von Pina Varnel – mitfühlend, witzig und treffend.",
    url: "https://www.instagram.com/adhd_alien/",
    handle: "@adhd_alien",
    language: "en",
    tags: ["Comics", "Lived Experience"],
  },
  {
    id: "instagram-how-to-adhd",
    category: "instagram",
    title: "How to ADHD",
    description: "Kurze Strategien und Community-Einblicke.",
    url: "https://www.instagram.com/howtoadhd/",
    handle: "@howtoadhd",
    language: "en",
    tags: ["Strategien", "Community"],
  },
  {
    id: "instagram-dani-donovan",
    category: "instagram",
    title: "Dani Donovan",
    description: "ADHD-Comics und persönliche Erlebnisse.",
    url: "https://www.instagram.com/danidonovan/",
    handle: "@danidonovan",
    language: "en",
    tags: ["Comics", "Erlebnisse"],
  },
  {
    id: "instagram-black-girl-lost-keys",
    category: "instagram",
    title: "Black Girl Lost Keys",
    description: "ADHD bei Frauen, besonders in Minderheiten – Perspektiven, die oft fehlen.",
    url: "https://www.instagram.com/blkgirllostkeys/",
    handle: "@blkgirllostkeys",
    language: "en",
    tags: ["Frauen", "Minderheiten"],
  },
  {
    id: "instagram-erynn-brook",
    category: "instagram",
    title: "Erynn Brook",
    description: "Persönliche Texte, auch zu ADHD und neurodivergentem Leben.",
    url: "https://www.instagram.com/erynnbrook/",
    handle: "@erynnbrook",
    language: "en",
    tags: ["Texte", "Persönlich"],
  },
  {
    id: "instagram-dusty-exner",
    category: "instagram",
    title: "Dusty Exner",
    description: "ADHD-Coach mit praktischem Alltagswissen.",
    url: "https://www.instagram.com/dustyexner/",
    handle: "@dustyexner",
    language: "en",
    tags: ["Coaching", "Alltag"],
  },
];

export const newsSources = sources.filter((s) => s.category === "news") as Source[];
export const scienceSources = sources.filter((s) => s.category === "science") as Source[];
export const youtubeSources = sources.filter((s) => s.category === "youtube") as YouTubeSource[];
export const instagramSources = sources.filter((s) => s.category === "instagram") as InstagramSource[];
