export type SourceCategory = "news" | "science" | "youtube" | "instagram";
export type ScienceGroup = "screening" | "overview" | "special";

export const categoryOrder: SourceCategory[] = ["news", "science", "youtube", "instagram"];
export const scienceGroupOrder: ScienceGroup[] = ["screening", "overview", "special"];

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
  group?: ScienceGroup;
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

export const scienceGroupMeta: Record<
  ScienceGroup,
  {
    label: string;
    description: string;
  }
> = {
  screening: {
    label: "Screening-Tools",
    description:
      "Validierte Selbstbeurteilungsinstrumente, die einen ersten Hinweis auf ein mögliches ADHS im Erwachsenenalter geben können. Ein positives Ergebnis ersetzt keine ärztliche oder psychotherapeutische Diagnostik.",
  },
  overview: {
    label: "Wissenschaftliche Übersichten",
    description:
      "Leitlinien, Fachbücher und Übersichtsarbeiten, die den aktuellen Stand von Diagnostik, Neurobiologie und Versorgung zusammenfassen.",
  },
  special: {
    label: "Spezielle Themen",
    description:
      "Studien zu zusätzlichen Aspekten des ADHS-Spektrums wie emotionaler Dysregulation, Schlaf, Hyperfokus und RSD, die in der öffentlichen Wahrnehmung oft übersehen werden.",
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
    group: "overview",
    title: "The ADHD Field Guide for Adults",
    description:
      "Bietet eine zugängliche Übersicht über Erwachsenen-ADHS aus der Perspektive von Lived Experience und Fachwissen und unterstützt damit die inhaltliche Grundlage der Website.",
    url: "https://www.simonandschuster.com/books/The-ADHD-Field-Guide-for-Adults/Cate-Osborn/9781668053164",
    author: "Osborn, Gude & Dyball",
    language: "en",
    tags: ["Buch", "Lived Experience"],
  },
  {
    id: "brown-unfocused-mind",
    category: "science",
    group: "overview",
    title: "Attention Deficit Disorder: The Unfocused Mind",
    description:
      "Stellt das Modell der exekutiven Funktionen bei ADHS dar und zeigt, warum ADHS mehr ist als Auffälligkeiten der Aufmerksamkeit.",
    url: "https://yalebooks.yale.edu/book/9780300119893/attention-deficit-disorder/",
    author: "Thomas E. Brown",
    language: "en",
    tags: ["Buch", "Exekutive Funktionen"],
  },
  {
    id: "barkley-executive-functions",
    category: "science",
    group: "overview",
    title: "ADHD and the Nature of Self-Control / Executive Functions",
    description:
      "Zentrale Schriften zur Selbstregulation und exekutiven Funktionen bei ADHS, auf die Erklärungen zu Impulskontrolle und Arbeitsgedächtnis aufbauen.",
    url: "https://www.guilford.com/books/Executive-Functions/Russell-Barkley/9781462545933",
    author: "Russell A. Barkley",
    language: "en",
    tags: ["Buch", "Selbstregulation"],
  },
  {
    id: "kessler-asrs-2005",
    category: "science",
    group: "screening",
    title: "The World Health Organization Adult ADHD Self-Report Scale (ASRS)",
    description:
      "Liefert die ursprüngliche ASRS-Skala zur Erwachsenen-Selbstbeurteilung, die als Vorläufer für gängige Screening-Fragebögen dient.",
    url: "https://www.cambridge.org/core/journals/psychological-medicine/article/abs/world-health-organization-adult-adhd-selfreport-scale-asrs/EBCBF2074DEE66A0A4168B82E056A77B",
    author: "Kessler et al.",
    language: "en",
    tags: ["ASRS", "Screening"],
  },
  {
    id: "ustun-asrs-2017",
    category: "science",
    group: "screening",
    title: "ASRS Screening Scale for DSM-5",
    description:
      "Stellt die an DSM-5 angepasste ASRS-Version vor, die kurze, validierte Items zur Selbstbeurteilung erwachsener ADHS-Merkmale enthält.",
    url: "https://jamanetwork.com/journals/jamapsychiatry/fullarticle/2604299",
    author: "Ustün et al.",
    language: "en",
    tags: ["ASRS", "DSM-5"],
  },
  {
    id: "faraone-genetics-2019",
    category: "science",
    group: "overview",
    title: "Genetics of attention deficit hyperactivity disorder",
    description:
      "Fasst den aktuellen Stand der genetischen ADHS-Forschung zusammen und zeigt die Bedeutung von Vererbung und Polygenität.",
    url: "https://www.nature.com/articles/s41380-018-0070-7",
    author: "Faraone & Larsson",
    language: "en",
    tags: ["Genetik", "Forschung"],
  },
  {
    id: "volkow-dopamine-2009",
    category: "science",
    group: "overview",
    title: "Evaluating dopamine reward pathway in ADHD",
    description:
      "Untermauert die neurobiologischen Grundlagen von ADHS, insbesondere die Rolle dopaminerger Belohnungsprozesse.",
    url: "https://jamanetwork.com/journals/jama/fullarticle/184394",
    author: "Volkow et al.",
    language: "en",
    tags: ["Dopamin", "Neurobiologie"],
  },
  {
    id: "dsm-5-tr",
    category: "science",
    group: "overview",
    title: "DSM-5-TR",
    description:
      "Enthält die offiziellen diagnostischen Kriterien für ADHS in der Textrevision und dient als Referenz für Symptombeschreibungen.",
    url: "https://www.psychiatry.org/psychiatrists/practice/dsm",
    author: "APA",
    language: "en",
    tags: ["Leitlinie", "Diagnose"],
  },
  {
    id: "nhs-taskforce-2025",
    category: "science",
    group: "overview",
    title: "Report of the independent ADHD Taskforce: Part 1",
    description:
      "Unabhängiger Bericht zur ADHD-Versorgung in England, der aktuelle Versorgungslücken und Empfehlungen zusammenfasst.",
    url: "https://www.england.nhs.uk/long-read/report-of-the-independent-adhd-taskforce-part-1/",
    author: "NHS England",
    language: "en",
    tags: ["Bericht", "Versorgung"],
  },
  {
    id: "european-consensus-2019",
    category: "science",
    group: "overview",
    title: "Updated European Consensus Statement on diagnosis and treatment of adult ADHD",
    description:
      "Europäische Konsensusleitlinie zur Diagnostik und Behandlung von ADHS im Erwachsenenalter.",
    url: "https://www.tandfonline.com/doi/full/10.1080/09297049.2019.1580211",
    author: "Kooij et al.",
    language: "en",
    tags: ["Leitlinie", "Europa"],
  },
  {
    id: "ballmann-asrs-2022",
    category: "science",
    group: "screening",
    title: "Evaluation of the German Version of the Adult ADHD Self-Report Screening Scale for DSM-5",
    description:
      "Deutsche Validierung der ASRS-5, die die sprachliche und statistische Fundierung eines gängigen Screening-Instruments belegt.",
    url: "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2022.858147/full",
    author: "Ballmann et al.",
    language: "en",
    tags: ["ASRS-5", "Validierung", "Screening"],
  },
  {
    id: "dodson-rsd-2024",
    category: "science",
    group: "special",
    title: "Rejection Sensitivity Dysphoria in Attention-Deficit/Hyperactivity Disorder: A Case Series",
    description:
      "Beschreibt klinische Beobachtungen zu RSD bei ADHS und hebt damit einen wichtigen, aber nicht-diagnostischen Aspekt emotionaler Dysregulation hervor.",
    url: "https://actascientific.com/ASNE/pdf/ASNE-07-0762.pdf",
    author: "Dodson et al.",
    language: "en",
    tags: ["RSD", "Emotionale Dysregulation", "ADHS"],
  },
  {
    id: "soler-gutierrez-emotion-2023",
    category: "science",
    group: "special",
    title: "Evidence of emotion dysregulation as a core symptom of adult ADHD: A systematic review",
    description:
      "Systematischer Review, der Evidenz dafür zusammenträgt, dass emotionale Dysregulation als zentrale Facette von Erwachsenen-ADHS verstanden werden sollte.",
    url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0280131",
    author: "Soler-Gutiérrez et al.",
    language: "en",
    tags: ["Emotionale Dysregulation", "Systematisches Review", "ADHS"],
  },
  {
    id: "hupfeld-ahq-2024",
    category: "science",
    group: "special",
    title: "Validation of the dispositional adult hyperfocus questionnaire (AHQ-D)",
    description:
      "Stellt ein validiertes Instrument zur Erfassung von Hyperfokus vor, ohne ihn als diagnostisches Kriterium zu behandeln.",
    url: "https://www.nature.com/articles/s41598-024-70028-y",
    author: "Hupfeld et al.",
    language: "en",
    tags: ["Hyperfokus", "Fragebogen", "ADHS"],
  },
  {
    id: "ashinoff-hyperfocus-2021",
    category: "science",
    group: "special",
    title: "Hyperfocus: The forgotten frontier of attention",
    description:
      "Wissenschaftliche Einordnung von Hyperfokus als Aufmerksamkeitsphänomen, das bei ADHS häufig vorkommt, aber kein Diagnosemerkmal ist.",
    url: "https://link.springer.com/article/10.1007/s00426-019-01245-8",
    author: "Ashinoff & Abu-Akel",
    language: "en",
    tags: ["Hyperfokus", "Flow", "Aufmerksamkeit"],
  },
  {
    id: "luu-sleep-2025",
    category: "science",
    group: "special",
    title: "ADHD as a circadian rhythm disorder: evidence and implications for chronotherapy",
    description:
      "Diskutiert Zusammenhänge zwischen ADHS, Schlaf und zirkadianen Rhythmen und zeigt Ansätze für chronotherapeutische Interventionen auf.",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12728042/",
    author: "Luu & Fabiano",
    language: "en",
    tags: ["Schlaf", "Zirkadianer Rhythmus", "ADHS"],
  },
  {
    id: "rowney-smith-rsd-2026",
    category: "science",
    group: "special",
    title: "The lived experience of rejection sensitivity in ADHD: A qualitative exploration",
    description:
      "Qualitative Studie zum subjektiven Erleben von Rejection Sensitivity bei ADHS, die Lived-Experience-Perspektiven mit wissenschaftlicher Methodik verbindet.",
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
