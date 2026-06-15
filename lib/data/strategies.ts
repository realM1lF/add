export type Effort = "low" | "medium" | "high";

export interface Strategy {
  id: string;
  title: string;
  description: string;
  steps: string[];
  dimensionIds: string[];
  situationTags: string[];
  effort: Effort;
}

export const effortLabels: Record<Effort, string> = {
  low: "Leichter Einstieg",
  medium: "Mittlerer Aufwand",
  high: "Mehr Aufwand",
};

export const situationTags = [
  "Alltag",
  "Arbeit",
  "Studium",
  "Beziehungen",
  "Krisen",
  "Selbstfürsorge",
] as const;

export const dimensions = [
  { id: "unaufmerksamkeit", name: "Unaufmerksamkeit" },
  { id: "hyperaktivitaet", name: "Hyperaktivität" },
  { id: "impulsivitaet", name: "Impulsivität" },
  { id: "exekutive-funktionen", name: "Exekutive Funktionen" },
  { id: "emotionale-dysregulation", name: "Emotionale Dysregulation" },
  { id: "rsd", name: "Rejection Sensitivity" },
  { id: "zeitwahrnehmung", name: "Zeitwahrnehmung" },
  { id: "interozeption", name: "Interozeption" },
  { id: "hyperfokus", name: "Hyperfokus" },
  { id: "sensorik", name: "Sensorische Verarbeitung" },
  { id: "masking", name: "Masking / Kompensation" },
];

export const strategies: Strategy[] = [
  // ── Unaufmerksamkeit ──
  {
    id: "u-external-anchors",
    title: "Externe Aufmerksamkeitsanker setzen",
    description:
      "Nutze Timer, visuelle Erinnerungen oder Post-its. Dein Gehirn arbeitet besser, wenn der Fokus von außen gestützt wird.",
    steps: [
      "Wähle eine Aufgabe und setze einen sichtbaren Timer.",
      "Schreibe das Ziel auf einen Zettel und klebe ihn im Sichtfeld.",
      "Nutze akustische oder visuelle Erinnerungen, um zum Fokus zurückzukehren.",
    ],
    dimensionIds: ["unaufmerksamkeit", "exekutive-funktionen"],
    situationTags: ["Alltag", "Arbeit", "Studium"],
    effort: "low",
  },
  {
    id: "u-single-tasking",
    title: "Single-Tasking statt Multitasking",
    description:
      "Schließe alle Tabs, stell das Handy weg, öffne nur eine Datei. Jede zusätzliche Option kostet kognitive Energie.",
    steps: [
      "Schließe alle nicht benötigten Tabs und Programme.",
      "Lege das Handy außer Reichweite oder aktiviere Fokus-Modus.",
      "Arbeite die Aufgabe zu Ende, bevor du zur nächsten wechselst.",
    ],
    dimensionIds: ["unaufmerksamkeit"],
    situationTags: ["Arbeit", "Studium"],
    effort: "low",
  },
  {
    id: "u-movement-before-focus",
    title: "Bewegung vor konzentrierter Arbeit",
    description:
      "Ein kurzer Spaziergang, Hampeln oder Dehnen vor einer Aufgabe kann das Nervensystem regulieren und den Fokus erleichtern.",
    steps: [
      "Plane 5–10 Minuten Bewegung vor einer anspruchsvollen Aufgabe.",
      "Wähle eine Bewegung, die dir Spaß macht: Spaziergang, Tanzen, Dehnen.",
      "Beobachte, ob der Fokus danach leichter fällt.",
    ],
    dimensionIds: ["unaufmerksamkeit", "hyperaktivitaet"],
    situationTags: ["Alltag", "Arbeit", "Studium"],
    effort: "low",
  },
  {
    id: "u-brown-noise",
    title: "Brown Noise oder Noise Cancelling",
    description:
      "Viele ADHS-Hirne fokussieren sich besser mit gleichmäßigem Hintergrundgeräusch oder komplett reduzierten Reizen.",
    steps: [
      "Teste Brown Noise, White Noise oder Naturgeräusche.",
      "Nutze Noise-Cancelling-Kopfhörer, wenn die Umgebung zu laut ist.",
      "Finde die Lautstärke, die konzentriert, aber nicht ablenkt.",
    ],
    dimensionIds: ["unaufmerksamkeit", "sensorik"],
    situationTags: ["Arbeit", "Studium"],
    effort: "low",
  },
  {
    id: "u-visibility",
    title: "Sichtbarkeit schaffen",
    description:
      "Out of sight, out of mind ist real. Wichtige Dinge offen liegen lassen, Klarsichtboxen nutzen, Türen von Schränken offenlassen.",
    steps: [
      "Lege wichtige Gegenstände offen sichtbar ab.",
      "Nutze transparente Boxen oder offene Regale.",
      "Vermeide geschlossene Schubladen für Dinge, die du täglich brauchst.",
    ],
    dimensionIds: ["unaufmerksamkeit", "exekutive-funktionen"],
    situationTags: ["Alltag", "Arbeit"],
    effort: "low",
  },

  // ── Hyperaktivität ──
  {
    id: "h-movement-breaks",
    title: "Bewegungspausen einplanen",
    description:
      "Setze dir alle 45–60 Minuten eine kurze Bewegungseinheit. Auch zwei Minuten Hampeln helfen.",
    steps: [
      "Stelle einen Timer auf 45–60 Minuten.",
      "Stehe auf, bewege dich kurz oder mache ein paar Dehnübungen.",
      "Kehre bewusst zurück zur Aufgabe.",
    ],
    dimensionIds: ["hyperaktivitaet"],
    situationTags: ["Arbeit", "Studium", "Alltag"],
    effort: "low",
  },
  {
    id: "h-standing-desk",
    title: "Stehtisch oder Balancekissen",
    description:
      "Wenn möglich, arbeite im Stehen oder auf einem Kissen, das leichte Bewegung ermöglicht.",
    steps: [
      "Teste einen Stehtisch oder einen hohen Tisch.",
      "Alternativ nutze ein Balancekissen auf dem Stuhl.",
      "Wechsle regelmäßig zwischen Stehen und Sitzen.",
    ],
    dimensionIds: ["hyperaktivitaet"],
    situationTags: ["Arbeit", "Studium"],
    effort: "medium",
  },
  {
    id: "h-fidget-tools",
    title: "Fidget-Tools erlauben",
    description:
      "Kugelschreiber, Stressbälle, Spinner – alles, was kleine Bewegung kanalisiert, ohne andere abzulenken.",
    steps: [
      "Wähle ein Fidget-Tool, das nicht visuell ablenkt.",
      "Halte es am Arbeitsplatz griffbereit.",
      "Nutze es bewusst während Telefonaten oder Meetings.",
    ],
    dimensionIds: ["hyperaktivitaet"],
    situationTags: ["Arbeit", "Studium", "Alltag"],
    effort: "low",
  },
  {
    id: "h-sport",
    title: "Sport als Regulation",
    description:
      "Regelmäßige körperliche Aktivität reduziert innere Unruhe und verbessert Schlaf und Fokus.",
    steps: [
      "Finde eine Sportart, die dir Freude macht.",
      "Plane feste Termine in der Woche ein.",
      "Beobachte, wie sich Unruhe und Schlafqualität verändern.",
    ],
    dimensionIds: ["hyperaktivitaet", "interozeption"],
    situationTags: ["Selbstfürsorge", "Alltag"],
    effort: "medium",
  },
  {
    id: "h-movement-learning",
    title: "Bewegung beim Lernen",
    description:
      "Hörbücher beim Spazierengehen, Telefonate im Gehen führen, Lernkarten auf dem Laufband.",
    steps: [
      "Höre Podcasts oder Hörbücher während eines Spaziergangs.",
      "Führe Telefonate im Stehen oder Gehen.",
      "Nutze Bewegung, um Gedankenfluss zu unterstützen.",
    ],
    dimensionIds: ["hyperaktivitaet", "unaufmerksamkeit"],
    situationTags: ["Studium", "Alltag"],
    effort: "low",
  },

  // ── Impulsivität ──
  {
    id: "i-10-seconds",
    title: "Die 10-Sekunden-Regel",
    description:
      "Bevor du antwortest, kaufst oder zusagst: 10 Sekunden warten. Das reicht oft, um den Impuls zu bremsen.",
    steps: [
      "Spüre den Impuls und atme einmal tief ein.",
      "Zähle langsam bis zehn, bevor du reagierst.",
      "Entscheide dann bewusst weiter.",
    ],
    dimensionIds: ["impulsivitaet"],
    situationTags: ["Alltag", "Beziehungen", "Krisen"],
    effort: "low",
  },
  {
    id: "i-if-then",
    title: "Wenn-dann-Pläne",
    description:
      "Wenn ich das Bedürfnis habe, online zu shoppen, dann warte ich bis morgen 10 Uhr. Vorab definierte Alternativen helfen.",
    steps: [
      "Identifiziere deine häufigsten Impuls-Trigger.",
      "Formuliere für jeden einen Wenn-dann-Plan.",
      "Schreibe ihn auf und lege ihn sichtbar ab.",
    ],
    dimensionIds: ["impulsivitaet", "exekutive-funktionen"],
    situationTags: ["Alltag", "Arbeit"],
    effort: "medium",
  },
  {
    id: "i-budget",
    title: "Einkaufslisten und Budget-Apps",
    description:
      "Gib Ausgaben Struktur, bevor der Impuls zuschlägt. Ein festes Budget reduziert spontane Käufe.",
    steps: [
      "Erstelle Einkaufslisten vor dem Kauf.",
      "Nutze Budget-Apps oder feste Bargeldbeträge.",
      "Warte 24 Stunden bei Käufen über einem festen Betrag.",
    ],
    dimensionIds: ["impulsivitaet"],
    situationTags: ["Alltag"],
    effort: "medium",
  },
  {
    id: "i-communicate-interruptions",
    title: "Unterbrechungen kommunizieren",
    description:
      "Sage im Gespräch: Ich habe einen Gedanken, den ich sonst vergesse, darf ich ihn kurz loswerden?",
    steps: [
      "Übe einen kurzen, höflichen Satz für Unterbrechungen.",
      "Nutze ihn, wenn der Gedanke sonst verloren geht.",
      "Kehre danach aktiv zum Gespräch zurück.",
    ],
    dimensionIds: ["impulsivitaet", "beziehungen"],
    situationTags: ["Beziehungen", "Arbeit"],
    effort: "low",
  },
  {
    id: "i-channel-impulses",
    title: "Impulse kanalisieren",
    description:
      "Schreibe den Impuls auf statt ihn sofort auszuführen. Oft genügt das, um später bewusster zu entscheiden.",
    steps: [
      "Habe ein Notizbuch oder eine App für Impulse bereit.",
      "Schreibe auf, was du tun möchtest und warum.",
      "Warte eine Stunde und prüfe, ob der Wunsch bestehen bleibt.",
    ],
    dimensionIds: ["impulsivitaet"],
    situationTags: ["Alltag", "Krisen"],
    effort: "low",
  },

  // ── Exekutive Funktionen ──
  {
    id: "ef-body-doubling",
    title: "Body Doubling",
    description:
      "Arbeite parallel zu einer anderen Person – physisch oder virtuell. Die Anwesenheit allein senkt die Startschwelle.",
    steps: [
      "Vereinbare einen Termin mit einer Vertrauensperson.",
      "Setzt euch gemeinsam an eure Aufgaben, ohne viel zu reden.",
      "Nutze Online-Body-Doubling-Sessions, wenn niemand vor Ort ist.",
    ],
    dimensionIds: ["exekutive-funktionen"],
    situationTags: ["Arbeit", "Studium"],
    effort: "low",
  },
  {
    id: "ef-two-minutes",
    title: "Nur zwei Minuten anfangen",
    description:
      "Versprich dir, nur zwei Minuten zu machen. Oft reicht das, um die Hemmung zu durchbrechen.",
    steps: [
      "Wähle den kleinstmöglichen ersten Schritt.",
      "Setze einen Timer auf zwei Minuten.",
      "Wenn du in Fluss kommst, arbeite weiter; wenn nicht, hast du trotzdem angefangen.",
    ],
    dimensionIds: ["exekutive-funktionen"],
    situationTags: ["Alltag", "Arbeit", "Studium"],
    effort: "low",
  },
  {
    id: "ef-visible",
    title: "Alles sichtbar machen",
    description:
      "Weiße Tafel, offene Schubladen, sichtbare Listen. Was nicht sichtbar ist, existiert für dein Gehirn nicht.",
    steps: [
      "Nutze eine weiße Wandtafel oder Post-its für offene Aufgaben.",
      "Halte Schubladen und Türen offen, wo sinnvoll.",
      "Platziere Listen und Erinnerungen im Blickfeld.",
    ],
    dimensionIds: ["exekutive-funktionen", "unaufmerksamkeit"],
    situationTags: ["Alltag", "Arbeit"],
    effort: "low",
  },
  {
    id: "ef-triage",
    title: "Triage statt Perfektion",
    description:
      "Frage dich: Was muss wirklich heute? Was kann warten? Was kann ich delegieren oder löschen?",
    steps: [
      "Schreibe alle offenen Aufgaben auf.",
      "Sortiere in: heute, diese Woche, später, delegieren/löschen.",
      "Konzentriere dich nur auf die heute-Liste.",
    ],
    dimensionIds: ["exekutive-funktionen"],
    situationTags: ["Arbeit", "Studium", "Alltag"],
    effort: "low",
  },
  {
    id: "ef-microsteps",
    title: "Projekte in Mikroschritte zerlegen",
    description:
      "Steuererklärung machen ist zu groß. Ordner öffnen ist ein Schritt, den du starten kannst.",
    steps: [
      "Formuliere das Projekt als konkretes Ergebnis.",
      "Zerlege es in Schritte, die maximal 5–10 Minuten dauern.",
      "Beginne mit dem allerersten, kleinsten Schritt.",
    ],
    dimensionIds: ["exekutive-funktionen"],
    situationTags: ["Arbeit", "Studium", "Alltag"],
    effort: "medium",
  },

  // ── Emotionale Dysregulation ──
  {
    id: "ed-name-it",
    title: "Name it to tame it",
    description:
      "Benenne die Emotion laut oder schriftlich. Ich bin gerade wütend, überfordert, verletzt. Das allein beruhigt das Nervensystem.",
    steps: [
      "Halte inne und spüre in dich hinein.",
      "Benenne die Emotion mit einem Wort.",
      "Schreibe einen kurzen Satz auf, ohne zu bewerten.",
    ],
    dimensionIds: ["emotionale-dysregulation"],
    situationTags: ["Krisen", "Beziehungen", "Selbstfürsorge"],
    effort: "low",
  },
  {
    id: "ed-physiological-pause",
    title: "Physiologische Pause",
    description:
      "Kühles Wasser, Bewegung, Atemübung. Emotionen sitzen im Körper – dort kannst du sie am schnellsten regulieren.",
    steps: [
      "Gehe an einen ruhigen Ort.",
      "Spül dir kaltes Wasser ins Gesicht oder halte eine kühle Flasche.",
      "Atme langsam aus – länger als einatmen.",
    ],
    dimensionIds: ["emotionale-dysregulation", "interozeption"],
    situationTags: ["Krisen", "Selbstfürsorge"],
    effort: "low",
  },
  {
    id: "ed-mood-tracking",
    title: "Mood-Tracking",
    description:
      "Notiere, wann welche Intensität auftritt. Muster erkennen hilft, früher eingreifen zu können.",
    steps: [
      "Trage einmal täglich Stimmung und Auslöser ein.",
      "Nutze eine einfache Skala von 1–10.",
      "Suche nach Mustern nach einer Woche.",
    ],
    dimensionIds: ["emotionale-dysregulation"],
    situationTags: ["Selbstfürsorge", "Alltag"],
    effort: "medium",
  },
  {
    id: "ed-self-compassion",
    title: "Was würde ich zu einem Freund sagen?",
    description:
      "Selbstmitgefühl ist kein weicher Spruch, sondern eine Strategie gegen emotionale Überflutung.",
    steps: [
      "Stelle dir vor, ein guter Freund hätte dein Problem.",
      "Schreibe auf, was du ihm sagen würdest.",
      "Lies dir den Satz selbst vor.",
    ],
    dimensionIds: ["emotionale-dysregulation", "rsd"],
    situationTags: ["Selbstfürsorge", "Krisen"],
    effort: "low",
  },
  {
    id: "ed-therapy",
    title: "Therapeutische Unterstützung",
    description:
      "Bei starken Schwankungen ist eine CBT oder Schema-Therapie sinnvoll, um alte Muster zu durchbrechen.",
    steps: [
      "Informiere dich über Therapieangebote für ADHS.",
      "Sprich mit Hausarzt oder Psychiater über eine Überweisung.",
      "Achte darauf, dass die Therapie auf emotionale Dysregulation eingeht.",
    ],
    dimensionIds: ["emotionale-dysregulation"],
    situationTags: ["Selbstfürsorge", "Krisen"],
    effort: "high",
  },

  // ── Rejection Sensitivity ──
  {
    id: "rsd-triggers",
    title: "Trigger erkennen",
    description:
      "Frage dich: Ist das wirklich Ablehnung oder wahrgenommene Ablehnung? Ein kurzer Realitätscheck kann den Alarm dämpfen.",
    steps: [
      "Halte inne, wenn du dich abgelehnt fühlst.",
      "Sammle Beweise: Was wurde wirklich gesagt oder getan?",
      "Formuliere eine alternative Erklärung.",
    ],
    dimensionIds: ["rsd"],
    situationTags: ["Beziehungen", "Arbeit", "Krisen"],
    effort: "low",
  },
  {
    id: "rsd-self-validation",
    title: "Selbstbestätigung statt externer Validierung",
    description:
      "Sammle Beweise dafür, dass du okay bist – unabhängig von der Meinung anderer.",
    steps: [
      "Schreibe drei Dinge auf, die du an dir schätzt.",
      "Erinnere dich an Erfolge, die nicht von anderen bestätigt wurden.",
      "Lies die Liste, wenn du dich unsicher fühlst.",
    ],
    dimensionIds: ["rsd", "emotionale-dysregulation"],
    situationTags: ["Selbstfürsorge", "Krisen"],
    effort: "low",
  },
  {
    id: "rsd-calm-nervous-system",
    title: "Nervensystem beruhigen",
    description:
      "Kühles Wasser im Gesicht, kurze Bewegung, lange Ausatmung. Der körperliche Alarm muss zuerst runterfahren.",
    steps: [
      "Spüle dir kaltes Wasser über die Handgelenke oder ins Gesicht.",
      "Atme 4 Sekunden ein, 6 Sekunden aus.",
      "Bewege dich kurz, bis sich der Alarm legt.",
    ],
    dimensionIds: ["rsd", "emotionale-dysregulation"],
    situationTags: ["Krisen", "Selbstfürsorge"],
    effort: "low",
  },
  {
    id: "rsd-boundaries",
    title: "Gesunde Grenzen setzen",
    description:
      "Nicht jede Kritik musst du persönlich nehmen. Übe, zwischen Feedback an deinem Verhalten und Bewertung deiner Person zu unterscheiden.",
    steps: [
      "Frage dich: Betrifft das meine Person oder mein Verhalten?",
      "Nimm Feedback als Information, nicht als Urteil.",
      "Übe einen Satz wie: Danke für das Feedback, ich schaue mir das an.",
    ],
    dimensionIds: ["rsd"],
    situationTags: ["Beziehungen", "Arbeit"],
    effort: "medium",
  },
  {
    id: "rsd-medication",
    title: "Medikamentöse Optionen besprechen",
    description:
      "Bei schwerer RSD können Alpha-2-Agonisten helfen. Sprich darüber mit einem Psychiater oder einer Psychiaterin.",
    steps: [
      "Dokumentiere, wie oft und in welchen Situationen RSD auftritt.",
      "Vereinbare einen Termin bei einem Psychiater.",
      "Sprich offen über die Belastung und mögliche Behandlungsoptionen.",
    ],
    dimensionIds: ["rsd"],
    situationTags: ["Selbstfürsorge"],
    effort: "high",
  },

  // ── Zeitwahrnehmung ──
  {
    id: "zw-visual-timer",
    title: "Visuelle Timer nutzen",
    description:
      "Time Timer, Sanduhr oder Apps, die verbleibende Zeit anzeigen. Abstrakte Zahlen reichen oft nicht.",
    steps: [
      "Besorg dir einen visuellen Timer oder eine App.",
      "Nutze ihn für Aufgaben, bei denen du die Zeit vergisst.",
      "Platziere ihn sichtbar auf dem Schreibtisch.",
    ],
    dimensionIds: ["zeitwahrnehmung"],
    situationTags: ["Alltag", "Arbeit", "Studium"],
    effort: "low",
  },
  {
    id: "zw-time-blocking",
    title: "Time Blocking",
    description:
      "Blocke im Kalender nicht nur Termine, sondern auch Aufgaben mit konkreter Start- und Endzeit.",
    steps: [
      "Plane den nächsten Tag in Blöcken zu je 30–60 Minuten.",
      "Weise jeder Aufgabe einen festen Startzeitpunkt zu.",
      "Halte Pufferzeiten für unvorhergesehenes ein.",
    ],
    dimensionIds: ["zeitwahrnehmung", "exekutive-funktionen"],
    situationTags: ["Arbeit", "Studium"],
    effort: "medium",
  },
  {
    id: "zw-backwards-planning",
    title: "Rückwärts planen",
    description:
      "Beginne bei der Deadline und plane Schritt für Schritt rückwärts. So wird die Zukunft greifbarer.",
    steps: [
      "Notiere das Endziel und das Datum.",
      "Arbeite rückwärts: Was muss davor passieren?",
      "Trage jeden Zwischenschritt im Kalender ein.",
    ],
    dimensionIds: ["zeitwahrnehmung", "exekutive-funktionen"],
    situationTags: ["Arbeit", "Studium", "Alltag"],
    effort: "medium",
  },
  {
    id: "zw-buffer",
    title: "Pufferzeit einbauen",
    description:
      "Plane immer 50–100 % mehr Zeit ein als du denkst, dass du brauchst. Fast alles dauert länger.",
    steps: [
      "Schätze, wie lange eine Aufgabe dauert.",
      "Verdopple die geschätzte Zeit.",
      "Plane diese Pufferzeit ernsthaft ein, nicht als Reserve.",
    ],
    dimensionIds: ["zeitwahrnehmung"],
    situationTags: ["Alltag", "Arbeit"],
    effort: "low",
  },
  {
    id: "zw-artificial-deadlines",
    title: "Deadlines künstlich vorziehen",
    description:
      "Wenn du erst unter Druck startest, setze dir eigene Deadlines vor der echten Deadline.",
    steps: [
      "Notiere die echte Deadline.",
      "Setze dir eine persönliche Deadline 1–2 Tage vorher.",
      "Mache die persönliche Deadline visuell sichtbar.",
    ],
    dimensionIds: ["zeitwahrnehmung", "exekutive-funktionen"],
    situationTags: ["Arbeit", "Studium"],
    effort: "low",
  },

  // ── Interozeption ──
  {
    id: "in-checkins",
    title: "Regelmäßige Check-ins",
    description:
      "Setze dir Erinnerungen für Hunger, Durst, Toilette, Pausen. Nicht, weil du dumm bist, sondern weil dein Gehirn das nicht von allein regelt.",
    steps: [
      "Stelle wiederkehrende Erinnerungen für Mahlzeiten und Pausen ein.",
      "Nutze eine einfache Checkliste im Blickfeld.",
      "Folge der Erinnerung, auch wenn du nichts spürst.",
    ],
    dimensionIds: ["interozeption"],
    situationTags: ["Selbstfürsorge", "Alltag"],
    effort: "low",
  },
  {
    id: "in-body-scan",
    title: "Body-Scan kurz",
    description:
      "Einmal am Tag bewusst durch den Körper gehen: Was spüre ich gerade? Brauche ich etwas?",
    steps: [
      "Nimm dir 3 Minuten Zeit.",
      "Gehe vom Kopf bis zu den Füßen durch den Körper.",
      "Frage dich: Hunger, Durst, Müdigkeit, Anspannung?",
    ],
    dimensionIds: ["interozeption"],
    situationTags: ["Selbstfürsorge"],
    effort: "low",
  },
  {
    id: "in-meal-structure",
    title: "Externe Struktur für Mahlzeiten",
    description:
      "Feste Essenszeiten, vorbereitete Snacks, Wasserflasche immer sichtbar. Mach es dem Gehirn leicht.",
    steps: [
      "Plane feste Essenszeiten in deinem Kalender.",
      "Halte Snacks und eine Wasserflasche griffbereit.",
      "Bereite Mahlzeiten am Vorabend vor, wenn möglich.",
    ],
    dimensionIds: ["interozeption"],
    situationTags: ["Selbstfürsorge", "Alltag"],
    effort: "medium",
  },
  {
    id: "in-emotions-as-signals",
    title: "Emotionen als Körpersignale lesen",
    description:
      "Wenn du plötzlich reizbar bist, frage: Habe ich geschlafen? Gegessen? Getrunken?",
    steps: [
      "Spüre bei starker Emotion in den Körper.",
      "Gehe eine kurze Checkliste durch: Schlaf, Essen, Wasser, Pausen.",
      "Befriedige das Grundbedürfnis, bevor du die Emotion bewertest.",
    ],
    dimensionIds: ["interozeption", "emotionale-dysregulation"],
    situationTags: ["Krisen", "Selbstfürsorge"],
    effort: "low",
  },
  {
    id: "in-rest-before-collapse",
    title: "Pausen vor dem Zusammenbruch",
    description:
      "Plane Ruhe ein, bevor du sie brauchst. Recovery ist keine Belohnung, sondern Wartung.",
    steps: [
      "Plane täglich mindestens eine kurze Ruhepause ein.",
      "Setze einen Timer, bevor du überforderst bist.",
      "Nutzte die Pause aktiv zur Erholung, nicht nur zum Weitermachen.",
    ],
    dimensionIds: ["interozeption", "masking"],
    situationTags: ["Selbstfürsorge", "Alltag"],
    effort: "medium",
  },

  // ── Hyperfokus ──
  {
    id: "hf-time-limits",
    title: "Zeitgrenzen setzen",
    description:
      "Mehrere Alarme stellen, die dich an Essen, Schlaf oder Termine erinnern, bevor du in etwas versinkst.",
    steps: [
      "Setze vor dem Start einen Alarm für das Ende.",
      "Plane Erinnerungen für Essen, Wasser und Toilettenpausen.",
      "Halte dich an den Alarm, auch wenn es schwerfällt.",
    ],
    dimensionIds: ["hyperfokus", "interozeption"],
    situationTags: ["Alltag", "Arbeit", "Studium"],
    effort: "low",
  },
  {
    id: "hf-important-first",
    title: "Wichtiges vor dem Hyperfokus",
    description:
      "Erledige Pflichten, bevor du dich in ein Interesse stürzt. Sonst wird der Hyperfokus zur Ausrede.",
    steps: [
      "Definiere vorher eine Pflichtaufgabe, die zuerst erledigt werden muss.",
      "Nutze den Hyperfokus als Belohnung nach der Pflicht.",
      "Setze klare Bedingungen: Erst X, dann Interesse.",
    ],
    dimensionIds: ["hyperfokus", "exekutive-funktionen"],
    situationTags: ["Arbeit", "Studium"],
    effort: "medium",
  },
  {
    id: "hf-reward-system",
    title: "Hyperfixation als Belohnung nutzen",
    description:
      "Wenn ich die E-Mail geschrieben habe, darf ich eine Stunde recherchieren. So arbeitet dein Belohnungssystem für dich.",
    steps: [
      "Wähle eine Aufgabe, die du sonst vermeidest.",
      "Vereinbare mit dir selbst: Nach der Aufgabe folgt Hyperfokus-Zeit.",
      "Halte den Deal ernsthaft ein.",
    ],
    dimensionIds: ["hyperfokus", "exekutive-funktionen"],
    situationTags: ["Arbeit", "Studium"],
    effort: "medium",
  },
  {
    id: "hf-external-interrupts",
    title: "Externe Unterbrecher einplanen",
    description:
      "Vereinbare mit jemandem, dass er dich nach einer bestimmten Zeit abholt – physisch oder virtuell.",
    steps: [
      "Frage eine Vertrauensperson, dich nach einer festen Zeit zu kontaktieren.",
      "Nutze Termine oder Verabredungen als natürliche Grenze.",
      "Akzeptiere die Unterbrechung als Unterstützung, nicht als Störung.",
    ],
    dimensionIds: ["hyperfokus"],
    situationTags: ["Alltag", "Beziehungen"],
    effort: "low",
  },
  {
    id: "hf-archive",
    title: "Wissens-Archive anlegen",
    description:
      "Wenn du ein Interesse fallenlässt, speichere Notizen sichtbar. Vielleicht kommt es in einem Jahr zurück.",
    steps: [
      "Lege für jedes Interesse einen Ordner oder eine Notiz an.",
      "Speichere Links, Notizen und Erkenntnisse dort.",
      "Bewahre das Archivar an einem Ort, den du wiederfindest.",
    ],
    dimensionIds: ["hyperfokus"],
    situationTags: ["Alltag", "Studium"],
    effort: "medium",
  },

  // ── Sensorik ──
  {
    id: "sv-reduce-stimuli",
    title: "Reize reduzieren",
    description:
      "Noise-Cancelling-Kopfhörer, gedimmtes Licht, komfortable Kleidung. Deine Umgebung ist kein Luxus, sondern Medizin.",
    steps: [
      "Identifiziere die Reize, die dich am meisten stören.",
      "Investiere in Noise-Cancelling-Kopfhörer oder Ohrstöpsel.",
      "Dimme Licht und reduziere visuellen Clutter.",
    ],
    dimensionIds: ["sensorik"],
    situationTags: ["Arbeit", "Studium", "Selbstfürsorge"],
    effort: "low",
  },
  {
    id: "sv-sensory-breaks",
    title: "Sensorische Pausen einplanen",
    description:
      "Nach überreizenden Situationen bewusst in einen ruhigen Raum gehen, Augen schließen, Atem beruhigen.",
    steps: [
      "Plane nach lauten oder vollen Orten eine Ruhepause ein.",
      "Suche einen ruhigen Raum oder geh nach draußen.",
      "Schließe die Augen und atme 2–3 Minuten bewusst.",
    ],
    dimensionIds: ["sensorik", "interozeption"],
    situationTags: ["Selbstfürsorge", "Alltag"],
    effort: "low",
  },
  {
    id: "sv-seek-stimuli",
    title: "Gesuchte Reize erlauben",
    description:
      "Brown noise, Kuscheldecken, Fidget-Toys – was beruhigt, ist erlaubt, auch wenn es anderen seltsam vorkommt.",
    steps: [
      "Finde heraus, welche Reize dich beruhigen.",
      "Halte diese Dinge griffbereit: Decke, Kopfhörer, Fidget-Tool.",
      "Nutze sie bewusst, ohne dich dafür zu schämen.",
    ],
    dimensionIds: ["sensorik"],
    situationTags: ["Selbstfürsorge", "Arbeit", "Studium"],
    effort: "low",
  },
  {
    id: "sv-plan-ahead",
    title: "Vorausplanen",
    description:
      "Wenn du einen lauten Ort erwartest, nimm Kopfhörer, Sonnenbrille oder eine Ausrede mit, um früh zu gehen.",
    steps: [
      "Prüfe vorher, welche Reize dich am Ort erwarten.",
      "Packe eine kleine Notfall-Tasche mit Hilfsmitteln.",
      "Vereinbare im Voraus eine Ausstiegsmöglichkeit.",
    ],
    dimensionIds: ["sensorik"],
    situationTags: ["Alltag", "Beziehungen"],
    effort: "low",
  },
  {
    id: "sv-comfort-clothing",
    title: "Komfortkleidung ernst nehmen",
    description:
      "Schneide Etiketten aus, trage Stoffe, die du verträgst. Kleidung ist kein Detail, wenn sie den ganzen Tag ablenkt.",
    steps: [
      "Sortiere Kleidung nach Tragekomfort.",
      "Schneide Etiketten aus und vermeide unangenehme Nähte.",
      "Lege dir einen „Uniform-Look“ für stressige Tage zurecht.",
    ],
    dimensionIds: ["sensorik"],
    situationTags: ["Selbstfürsorge", "Alltag"],
    effort: "low",
  },

  // ── Masking ──
  {
    id: "m-cost-awareness",
    title: "Masking als Kostenfaktor erkennen",
    description:
      "Akzeptiere, dass normal wirken Energie kostet. Plane danach Erholung ein, keine weiteren Aufgaben.",
    steps: [
      "Beobachte, wann du maskierst und wie es sich anfühlt.",
      "Plane nach maskierenden Situationen bewusst Ruhe ein.",
      "Akzeptiere, dass Erholung notwendig ist, nicht optional.",
    ],
    dimensionIds: ["masking"],
    situationTags: ["Selbstfürsorge", "Alltag"],
    effort: "medium",
  },
  {
    id: "m-safe-people",
    title: "Sichere Menschen finden",
    description:
      "Suche 2–3 Menschen, bei denen du die Maske abnehmen darfst. Qualität vor Quantität.",
    steps: [
      "Überlege, bei wem du dich am ehesten du selbst fühlst.",
      "Sprich mit diesen Menschen über deine Bedürfnisse.",
      "Investiere Zeit in diese Beziehungen.",
    ],
    dimensionIds: ["masking", "rsd"],
    situationTags: ["Beziehungen", "Selbstfürsorge"],
    effort: "medium",
  },
  {
    id: "m-reduce-decisions",
    title: "Entscheidungen reduzieren",
    description:
      "Capsule Wardrobe, Meal Prep, feste Abläufe. Weniger Entscheidungen = weniger Masking-Energie.",
    steps: [
      "Standardisiere wiederkehrende Entscheidungen.",
      "Plane Mahlzeiten und Outfits im Voraus.",
      "Automatisiere Abläufe, wo immer möglich.",
    ],
    dimensionIds: ["masking", "exekutive-funktionen"],
    situationTags: ["Alltag", "Selbstfürsorge"],
    effort: "medium",
  },
  {
    id: "m-communicate-needs",
    title: "„Ich brauche das so“ kommunizieren",
    description:
      "Du musst nicht alles erklären. Ein kurzer Satz wie Ich brauche für das einen Timer reicht oft.",
    steps: [
      "Formuliere einen kurzen, klaren Bedarfssatz.",
      "Übe ihn, bis er natürlich klingt.",
      "Setze ihn in Situationen ein, in denen du Unterstützung brauchst.",
    ],
    dimensionIds: ["masking"],
    situationTags: ["Beziehungen", "Arbeit"],
    effort: "low",
  },
  {
    id: "m-therapy",
    title: "Therapie bei chronischer Erschöpfung",
    description:
      "Wenn Masking dich dauerhaft erschöpft, kann eine Therapie helfen, zwischen notwendiger Anpassung und Selbstverleugnung zu unterscheiden.",
    steps: [
      "Dokumentiere deine Erschöpfungsmuster.",
      "Suche eine Therapie, die ADHS und Identität thematisiert.",
      "Sprich offen über die Kosten des Maskings.",
    ],
    dimensionIds: ["masking"],
    situationTags: ["Selbstfürsorge"],
    effort: "high",
  },
];

export function getAllDimensions() {
  return dimensions;
}

export function getAllSituationTags() {
  return [...situationTags];
}

export function getStrategiesByDimension(dimensionId: string) {
  return strategies.filter((s) => s.dimensionIds.includes(dimensionId));
}

export function getStrategiesByTag(tag: string) {
  return strategies.filter((s) => s.situationTags.includes(tag));
}
