export interface Example {
  question: string;
  situation: string;
}

export interface Strategy {
  title: string;
  description: string;
}

export interface Source {
  title: string;
  url?: string;
}

export interface Topic {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  description: string;
  color: string;
  fill: string;
  tagline: string;
  examples: Example[];
  livedExperienceQuotes: string[];
  neurobiology: {
    intro: string;
    mechanism: string;
    context: string;
  };
  strategies: Strategy[];
  sources: Source[];
}

export const topics: Topic[] = [
  {
    id: "unaufmerksamkeit",
    slug: "unaufmerksamkeit",
    name: "Unaufmerksamkeit",
    shortName: "U",
    description:
      "Schwierigkeiten, die Aufmerksamkeit zu steuern, ablenkbar zu sein, Details zu übersehen.",
    color: "#7BA4C8",
    fill: "rgba(123, 164, 200, 0.25)",
    tagline: "Dein Gehirn filtert Reize anders – nicht weniger wertvoll, nur anders verdrahtet.",
    examples: [
      {
        question: "Wie oft wirst du von Reizen oder Gedanken abgelenkt?",
        situation:
          "Du wolltest nur schnell eine E-Mail schreiben, aber nach fünf Minuten bist du in einem Wikipedia-Artikel über Pinguine gelandet.",
      },
      {
        question: "Wie oft übersiehst du Fehler oder wichtige Details?",
        situation:
          "Du schickst eine wichtige E-Mail ab und merkst erst danach, dass du den Anhang vergessen hast.",
      },
      {
        question: "Wie oft fühlt sich dein Kopf an wie ein Browser mit vielen Tabs?",
        situation:
          "Deine Gedanken springen zwischen Terminen, einer Unterhaltung von gestern und fünf anderen Dingen hin und her.",
      },
      {
        question: "Wie oft legst du etwas gerade ab und findest es Sekunden später nicht?",
        situation:
          "Du hältst dein Handy nur kurz in die Hand – und suchst es zwei Minuten später in allen Zimmern.",
      },
      {
        question: "Wie oft schaltest du ab mitten in einem Gespräch?",
        situation:
          "Jemand redet mit dir, und plötzlich merkst du, dass du zwar nickst, aber kein Wort mitbekommen hast.",
      },
    ],
    livedExperienceQuotes: [
      "Ich will zuhören. Mein Gehirn hat nur andere Pläne.",
      "Es fühlt sich an, als würde jemand ständig den Kanal wechseln, während ich fernsehe.",
    ],
    neurobiology: {
      intro:
        "Unaufmerksamkeit bei ADHS ist kein Mangel an Willenskraft, sondern ein Problem der Aufmerksamkeitsregulation. Dein Gehirn hat Schwierigkeiten, relevante von irrelevanten Reizen zu unterscheiden und den Fokus über Zeit stabil zu halten.",
      mechanism:
        "Das Default Mode Network und das task-related network sollten eigentlich gegensätzlich aktiv sein: Wenn du dich konzentrierst, sollte das DMN leiser werden. Bei ADHS feuern beide Netzwerke oft gleichzeitig – daher driftet der Fokus ab. Zudem spielt das frontostriatale System eine zentrale Rolle: Der präfrontale Cortex und das Striatum kommunizieren weniger effizient, was Filterung, Arbeitsgedächtnis und Impulskontrolle beeinträchtigt.",
      context:
        "Die Low-Dopamine-Hypothese erklärt, warum uninteressante Aufgaben so schwer durchzuhalten sind: Dein Belohnungssystem braucht mehr Stimulation, um die gleiche Aktivierung zu erreichen. Deshalb kannst du stundenlang hyperfokussieren, wenn etwas fasziniert – und gleichzeitig denselben Absatz fünfmal lesen, wenn es langweilig ist.",
    },
    strategies: [
      {
        title: "Externe Aufmerksamkeitsanker setzen",
        description:
          "Nutze Timer, visuelle Erinnerungen oder Post-its. Dein Gehirn arbeitet besser, wenn der Fokus von außen gestützt wird.",
      },
      {
        title: "Single-Tasking statt Multitasking",
        description:
          "Schließe alle Tabs, stell das Handy weg, öffne nur eine Datei. Jede zusätzliche Option kostet kognitive Energie.",
      },
      {
        title: "Bewegung vor konzentrierter Arbeit",
        description:
          "Ein kurzer Spaziergang, Hampeln oder Dehnen vor einer Aufgabe kann das Nervensystem regulieren und den Fokus erleichtern.",
      },
      {
        title: "Brown Noise oder Noise Cancelling",
        description:
          "Viele ADHS-Hirne fokussieren sich besser mit gleichmäßigem Hintergrundgeräusch oder komplett reduzierten Reizen.",
      },
      {
        title: "Sichtbarkeit schaffen",
        description:
          "Out of sight, out of mind ist real. Wichtige Dinge offen liegen lassen, Klarsichtboxen nutzen, Türen von Schränken offenlassen.",
      },
    ],
    sources: [
      { title: "DSM-5-TR (2022) – Kriterien Unaufmerksamkeit" },
      { title: "Huberman Lab Podcast #37 – ADHD & Focus" },
      { title: "Spencer et al. (2015) – Low dopamine hypothesis of ADHD" },
      { title: "Cate Osborn – The ADHD Field Guide for Adults" },
    ],
  },
  {
    id: "hyperaktivitaet",
    slug: "hyperaktivitaet",
    name: "Hyperaktivität",
    shortName: "H",
    description:
      "Äußere oder innere Unruhe, Bewegungsdrang, Schwierigkeiten mit Stillsitzen.",
    color: "#E8A87C",
    fill: "rgba(232, 168, 124, 0.25)",
    tagline: "Dein Körper sucht Bewegung, um das Gehirn zu beruhigen.",
    examples: [
      {
        question: "Wie oft fühlst du dich innerlich unruhig oder unter Strom?",
        situation:
          "Auch wenn du körperlich stillsitzt, fühlt sich dein Körper an, als würde er vibrieren – wie ein Motor, der nicht abschaltet.",
      },
      {
        question: "Wie oft musst du dich körperlich bewegen, um klar denken zu können?",
        situation:
          "Du merkst, dass du beim Telefonieren automatisch herumläufst oder mit einem Stift spielen musst, damit deine Gedanken fließen.",
      },
      {
        question: "Wie oft zeigt sich bei dir kleine motorische Unruhe?",
        situation:
          "Du wippst mit dem Fuß, knibbelst an den Fingernägeln, zwirbelst Haare oder klickst permanent mit dem Kugelschreiber.",
      },
      {
        question: "Wie oft hast du das Gefühl, ständig beschäftigt sein zu müssen?",
        situation:
          "Du hast mehrere Projekte gleichzeitig angefangen, weil Pausen oder Langeweile dich unruhig machen.",
      },
      {
        question: "Wie oft fällt es dir schwer, dich zu entspannen?",
        situation:
          "Am Wochenende kannst du einfach nicht nichts tun – du musst dich beschäftigen, sonst wird es unangenehm.",
      },
    ],
    livedExperienceQuotes: [
      "Stillzusitzen fühlt sich an wie einen Juckreiz ignorieren.",
      "Mein Körper will etwas tun, auch wenn mein Verstand müde ist.",
    ],
    neurobiology: {
      intro:
        "Hyperaktivität entsteht durch eine Dysregulation der motorischen Hemmung und der Arousal-Regulation. Dein Nervensystem braucht mehr sensorischen oder motorischen Input, um im optimalen Wachheitszustand zu bleiben.",
      mechanism:
        "Die Basalganglien und der präfrontale Cortex sind an der Unterdrückung impulsiver motorischer Reaktionen beteiligt. Bei ADHS sind diese Schaltkreise weniger effizient, weshalb Bewegungsdrang nicht gut gebremst werden kann. Bewegung dient dann als Selbstregulation: Sie erhöht Dopamin und Norepinephrin und hilft dem Gehirn, fokussierter zu arbeiten.",
      context:
        "Bei Erwachsenen zeigt sich Hyperaktivität oft nicht mehr als Herumrennen, sondern als innere Unruhe, Zappeln, Schwierigkeiten beim Entspannen oder das Bedürfnis, ständig etwas zu tun. Das ist keine Unreife, sondern eine anhaltende neurobiologische Eigenschaft.",
    },
    strategies: [
      {
        title: "Bewegungspausen einplanen",
        description:
          "Setze dir alle 45–60 Minuten eine kurze Bewegungseinheit. Auch zwei Minuten Hampeln helfen.",
      },
      {
        title: "Stehtisch oder Balancekissen",
        description:
          "Wenn möglich, arbeite im Stehen oder auf einem Kissen, das leichte Bewegung ermöglicht.",
      },
      {
        title: "Fidget-Tools erlauben",
        description:
          "Kugelschreiber, Stressbälle, Spinner – alles, was kleine Bewegung kanalisiert, ohne andere abzulenken.",
      },
      {
        title: "Sport als Regulation",
        description:
          "Regelmäßige körperliche Aktivität reduziert innere Unruhe und verbessert Schlaf und Fokus.",
      },
      {
        title: "Bewegung beim Lernen",
        description:
          "Hörbücher beim Spazierengehen, Telefonate im Gehen führen, Lernkarten auf dem Laufband.",
      },
    ],
    sources: [
      { title: "DSM-5-TR (2022) – Kriterien Hyperaktivität" },
      { title: "Barkley, R. A. (2012) – Executive Functions" },
      { title: "ADHD Foundation UK / NHS Taskforce Report (2025)" },
    ],
  },
  {
    id: "impulsivitaet",
    slug: "impulsivitaet",
    name: "Impulsivität",
    shortName: "I",
    description:
      "Handeln ohne Nachdenken, Schwierigkeiten mit Warten, Unterbrechen, spontane Entscheidungen.",
    color: "#D76A6A",
    fill: "rgba(215, 106, 106, 0.25)",
    tagline: "Dein Gehirn sagt jetzt, bevor dein Filter warte sagen kann.",
    examples: [
      {
        question: "Wie oft sagst oder tust du Dinge, bevor du darüber nachgedacht hast?",
        situation:
          "In einem Gespräch fällt dir etwas ein und du sagst es sofort – auch wenn es unpassend ist oder den anderen unterbricht.",
      },
      {
        question: "Wie oft triffst du spontane Entscheidungen, die du später bereust?",
        situation:
          "Du kaufst impulsiv etwas, sagst ja zu einem Termin, den du eigentlich nicht haben willst.",
      },
      {
        question: "Wie oft unterbrichst du andere Menschen im Gespräch?",
        situation:
          "Du weißt, dass du den anderen ausreden lassen solltest, aber du kannst deinen Gedanken nicht festhalten.",
      },
      {
        question: "Wie oft geht es bei dir ganz oder gar nicht?",
        situation:
          "Wenn du etwas beginnst, bist du sofort mit vollem Eifer dabei – oder du kommst überhaupt nicht in Gang.",
      },
      {
        question: "Wie oft kommen deine Gedanken schneller als deine Worte?",
        situation:
          "Im Gespräch willst du etwas sagen, aber dein Gehirn hat schon drei neue Punkte – du unterbrichst dich selbst.",
      },
    ],
    livedExperienceQuotes: [
      "Mein Mund ist manchmal schneller als mein Filter.",
      "Spontanität ist meine Superkraft – und meine Fallgrube.",
    ],
    neurobiology: {
      intro:
        "Impulsivität ist ein Kernmerkmal der verhaltenshemmenden Selbstregulation. Dein Gehirn hat Schwierigkeiten, einen Impuls kurz zu halten, um langfristige Konsequenzen abzuwägen.",
      mechanism:
        "Russell Barkley beschreibt ADHS als Störung der Verhaltenshemmung. Der präfrontale Cortex sollte eigentlich Stoppsignale senden, bevor eine Handlung ausgeführt wird. Bei ADHS ist diese Hemmung verzögert oder schwächer. Besonders betroffen sind das ventromediale präfrontale Cortex und das anteriore Cingulum.",
      context:
        "Impulsivität steht in direktem Zusammenhang mit dem Dopamin- und Norepinephrin-System. Weniger Dopamin in bestimmten Schaltkreisen führt dazu, dass das Gehirn nach sofortiger Verstärkung sucht – sei es durch Kaufentscheidungen, Unterbrechungen oder riskantes Verhalten.",
    },
    strategies: [
      {
        title: "Die 10-Sekunden-Regel",
        description:
          "Bevor du antwortest, kaufst oder zusagst: 10 Sekunden warten. Das reicht oft, um den Impuls zu bremsen.",
      },
      {
        title: "Wenn-dann-Pläne",
        description:
          "Wenn ich das Bedürfnis habe, online zu shoppen, dann warte ich bis morgen 10 Uhr. Vorab definierte Alternativen helfen.",
      },
      {
        title: "Einkaufslisten und Budget-Apps",
        description:
          "Gib Ausgaben Struktur, bevor der Impuls zuschlägt. Ein festes Budget reduziert spontane Käufe.",
      },
      {
        title: "Unterbrechungen kommunizieren",
        description:
          "Sage im Gespräch: Ich habe einen Gedanken, den ich sonst vergesse, darf ich ihn kurz loswerden?",
      },
      {
        title: "Impulse kanalisieren",
        description:
          "Schreibe den Impuls auf statt ihn sofort auszuführen. Oft genügt das, um später bewusster zu entscheiden.",
      },
    ],
    sources: [
      { title: "Barkley, R. A. (2012) – Executive Functions" },
      { title: "DSM-5-TR (2022) – Kriterien Impulsivität" },
      { title: "Brown, T. E. (2017) – Smart but Stuck" },
    ],
  },
  {
    id: "exekutive-funktionen",
    slug: "exekutive-funktionen",
    name: "Exekutive Funktionen",
    shortName: "EF",
    description:
      "Planen, Organisieren, Priorisieren, Starten, Beenden, Arbeitsgedächtnis.",
    color: "#6BA8A4",
    fill: "rgba(107, 168, 164, 0.25)",
    tagline: "Du weißt, was zu tun ist. Dein Gehirn hat nur Schwierigkeiten, es in Aktion zu übersetzen.",
    examples: [
      {
        question: "Wie oft hast du Schwierigkeiten, mit Aufgaben anzufangen?",
        situation:
          "Du weißt, dass du die Steuer machen musst, aber du kannst dich nicht dazu überwinden, den ersten Schritt zu tun.",
      },
      {
        question: "Wie oft fällt es dir schwer, Aufgaben zu priorisieren?",
        situation:
          "Du hast 20 Dinge auf der Liste und fängst stattdessen an, die Küche zu putzen, obwohl eine Deadline morgen fällig ist.",
      },
      {
        question: "Wie oft hast du einen Doom Pile?",
        situation:
          "Dein Schreibtisch ist ein Haufen Papier, den du immer wieder beiseiteschiebst, weil du nicht weißt, wo du anfangen sollst.",
      },
      {
        question: "Wie oft vergisst du, was du gerade tun wolltest?",
        situation:
          "Du gehst in die Küche, um etwas zu holen, aber wenn du dort ankommst, weißt du nicht mehr, warum du eigentlich gekommen bist.",
      },
      {
        question: "Wie oft fängst du mehrere Dinge an und beendest keine?",
        situation:
          "Du beginnst die Spülmaschine, öffnest dann ein Fenster, merkst Staub, holst den Staubwedel – und am Abend steht nichts davon fertig.",
      },
    ],
    livedExperienceQuotes: [
      "Ich habe keine Probleme mit dem Wissen. Ich habe Probleme mit dem Tun.",
      "Jede Aufgabe fühlt sich an wie ein Berg, bis jemand sie in Schritte für mich zerlegt.",
    ],
    neurobiology: {
      intro:
        "Exekutive Funktionen werden überwiegend vom präfrontalen Cortex gesteuert. Sie umfassen Planen, Priorisieren, Starten, Beenden, Arbeitsgedächtnis und Selbstüberwachung. Bei ADHS sind diese Funktionen beeinträchtigt – nicht absent, sondern inkonsistent.",
      mechanism:
        "Thomas Brown modelliert ADHS als Störung von sechs exekutiven Clustern: Activation, Focus, Effort, Emotion, Memory und Action. Russell Barkley betont zusätzlich die Bedeutung des verbalen Arbeitsgedächtnisses und der internalisierten Sprache für Selbststeuerung.",
      context:
        "Ein zentrales Problem ist die Interessen- und Anstrengungsregulation: Aufgaben, die nicht intrinsisch motivierend sind, lösen weniger Dopamin aus und fühlen sich daher physisch schwerer an. Das hat nichts mit Faulheit zu tun, sondern mit einer unterschiedlichen neuronalen Aktivierung.",
    },
    strategies: [
      {
        title: "Body Doubling",
        description:
          "Arbeite parallel zu einer anderen Person – physisch oder virtuell. Die Anwesenheit allein senkt die Startschwelle.",
      },
      {
        title: "Nur zwei Minuten anfangen",
        description:
          "Versprich dir, nur zwei Minuten zu machen. Oft reicht das, um die Hemmung zu durchbrechen.",
      },
      {
        title: "Alles sichtbar machen",
        description:
          "Weiße Tafel, offene Schubladen, sichtbare Listen. Was nicht sichtbar ist, existiert für dein Gehirn nicht.",
      },
      {
        title: "Triage statt Perfektion",
        description:
          "Frage dich: Was muss wirklich heute? Was kann warten? Was kann ich delegieren oder löschen?",
      },
      {
        title: "Projekte in Mikroschritte zerlegen",
        description:
          "Steuererklärung machen ist zu groß. Ordner öffnen ist ein Schritt, den du starten kannst.",
      },
    ],
    sources: [
      { title: "Brown, T. E. (2017) – Smart but Stuck" },
      { title: "Barkley, R. A. (2012) – Executive Functions" },
      { title: "Alison Lush – Professional Organizing für ADHS" },
    ],
  },
  {
    id: "emotionale-dysregulation",
    slug: "emotionale-dysregulation",
    name: "Emotionale Dysregulation",
    shortName: "ED",
    description:
      "Starke, schnelle Gefühle, Schwierigkeiten, Emotionen zu modulieren, Frustrationstoleranz.",
    color: "#C98CB3",
    fill: "rgba(201, 140, 179, 0.25)",
    tagline: "Deine Gefühle sind intensiv – das ist keine Schwäche, sondern ein Regulationsthema.",
    examples: [
      {
        question: "Wie oft werden deine Gefühle schnell sehr intensiv?",
        situation:
          "Eine kleine Kritik oder ein ärgerlicher Moment lässt dich innerlich explodieren, auch wenn du weißt, dass es nicht so schlimm ist.",
      },
      {
        question: "Wie oft hast du Schwierigkeiten, wieder runterzukommen?",
        situation:
          "Ein kleiner Konflikt verfolgt dich stundenlang oder tagelang und du kannst nicht aufhören, ihn zu analysieren.",
      },
      {
        question: "Wie oft fühlst du dich von kleinen Rückschlägen überfordert?",
        situation:
          "Dein Plan ändert sich kurzfristig und du fühlst dich sofort aus der Bahn geworfen, frustriert oder panisch.",
      },
      {
        question: "Wie oft hat dein Gefühlsregler nur null und zehn?",
        situation:
          "Entweder bist du komplett gefasst oder völlig überwältigt – ein sanftes Maß an Intensität fällt dir schwer.",
      },
      {
        question: "Wie oft hältst du den Tag zusammen und fällst zu Hause in ein Loch?",
        situation:
          "Auf der Arbeit funktionierst du mühsam – sobald du zu Hause bist, brichst du zusammen oder bist reizbar.",
      },
    ],
    livedExperienceQuotes: [
      "Ich fühle Dinge zuerst mit der Intensität von zehn und verstehe sie danach.",
      "Nach dem Tag brauche ich keine Erklärung für meinen Zusammenbruch – nur Ruhe.",
    ],
    neurobiology: {
      intro:
        "Emotionale Dysregulation wird bei ADHS zunehmend als Kernsymptom betrachtet, nicht nur als Begleiterscheinung. Bis zu 70 % der Erwachsenen mit ADHS berichten davon. Sie beeinflusst Beruf, Beziehungen und Selbstwert oft stärker als klassische Kernsymptome.",
      mechanism:
        "Betroffen sind das anteriore Cingulum, der präfrontale Cortex und die Verbindung zur Amygdala. Diese Strukturen regulieren, wie stark und wie lange emotionale Reaktionen anhalten. Bei ADHS ist die top-down-Regulation oft verzögert oder schwächer. Deshalb steigen Gefühle schneller an und sinken langsamer wieder ab.",
      context:
        "Viele Betroffene sammeln über Jahre korrigierende Rückmeldungen. Das Nervensystem lernt, Fehler mit Bedrohung zu verknüpfen. Deshalb können kleine Konflikte große emotionale Wellen auslösen: Es ist nicht nur die aktuelle Situation, sondern auch die gespeicherte Erfahrung von Kritik.",
    },
    strategies: [
      {
        title: "Name it to tame it",
        description:
          "Benenne die Emotion laut oder schriftlich. Ich bin gerade wütend, überfordert, verletzt. Das allein beruhigt das Nervensystem.",
      },
      {
        title: "Physiologische Pause",
        description:
          "Kühles Wasser, Bewegung, Atemübung. Emotionen sitzen im Körper – dort kannst du sie am schnellsten regulieren.",
      },
      {
        title: "Mood-Tracking",
        description:
          "Notiere, wann welche Intensität auftritt. Muster erkennen hilft, früher eingreifen zu können.",
      },
      {
        title: "Was würde ich zu einem Freund sagen?",
        description:
          "Selbstmitgefühl ist kein weicher Spruch, sondern eine Strategie gegen emotionale Überflutung.",
      },
      {
        title: "Therapeutische Unterstützung",
        description:
          "Bei starken Schwankungen ist eine CBT oder Schema-Therapie sinnvoll, um alte Muster zu durchbrechen.",
      },
    ],
    sources: [
      { title: "Soler-Gutiérrez et al. (2023) – Emotional dysregulation in ADHD" },
      { title: "Brown, T. E. (2017) – Smart but Stuck" },
      { title: "Sol Smith – Lived-Experience-Inhalte zu emotionaler Sicherheit" },
    ],
  },
  {
    id: "rsd",
    slug: "rsd",
    name: "Rejection Sensitivity",
    shortName: "RSD",
    description:
      "Extreme emotionale Schmerzen bei wahrgenommener Ablehnung oder Kritik.",
    color: "#9B8DC3",
    fill: "rgba(155, 141, 195, 0.25)",
    tagline: "Kritik trifft dich nicht nur im Kopf – sie trifft dich im ganzen Körper.",
    examples: [
      {
        question: "Wie oft fühlst du dich von Kritik unverhältnismäßig stark getroffen?",
        situation:
          "Dein Chef gibt dir einen kleinen Verbesserungsvorschlag und du fühlst den Rest des Tages wie ein Versager.",
      },
      {
        question: "Wie oft interpretierst du neutrale Signale als Ablehnung?",
        situation:
          "Eine Freundin antwortet nicht sofort auf deine Nachricht und du denkst sofort: Sie mag mich nicht mehr.",
      },
      {
        question: "Wie oft vermeidest du Situationen mit möglicher Kritik?",
        situation:
          "Du bewirbst dich nicht auf eine Stelle, fragst nicht um Hilfe oder gehst nicht zu einer Verabredung.",
      },
      {
        question: "Wie oft entschuldigst du dich, bevor du etwas falsch gemacht hast?",
        situation:
          "Du sagst Sorry für normale Bedürfnisse, für deine Meinung oder einfach dafür, dass du existierst.",
      },
      {
        question: "Wie oft spielst du Gespräche tagelang im Kopf durch?",
        situation:
          "Ein Gespräch von vor drei Wochen spukt dir immer noch durch den Kopf und du schämst dich dafür.",
      },
    ],
    livedExperienceQuotes: [
      "Eine kurze Nachricht ohne Emoji kann meinen ganzen Tag ruinieren.",
      "Ich weiß logisch, dass es nicht persönlich gemeint war. Mein Körper hat es trotzdem so empfunden.",
    ],
    neurobiology: {
      intro:
        "Rejection Sensitive Dysphoria ist kein offizieller DSM-5-Begriff, aber klinisch sehr verbreitet. Es beschreibt intensive emotionale Schmerzen bei wahrgenommener Ablehnung – sei es durch Kritik, Zurückweisung oder sogar neutrale Signale.",
      mechanism:
        "RSD ist ein Nervensystem-Phänomen. Durch jahrelange korrigierende oder abwertende Rückmeldungen lernt das Gehirn, soziale Signale mit Bedrohung zu verknüpfen. Die Amygdala reagiert sensibler, das Stresssystem aktiviert sich, der Körper geht in Alarmbereitschaft. Das passiert oft automatisch und schneller, als der präfrontale Cortex eingreifen kann.",
      context:
        "Wichtig ist: RSD ist kein Charakterfehler und keine Überempfindlichkeit im moralischen Sinn. Es ist ein konditioniertes Alarmmuster. Alpha-2-Agonisten wie Guanfacin oder Clonidin werden in schweren Fällen klinisch eingesetzt, weil sie das Nervensystem beruhigen.",
    },
    strategies: [
      {
        title: "Trigger erkennen",
        description:
          "Frage dich: Ist das wirklich Ablehnung oder wahrgenommene Ablehnung? Ein kurzer Realitätscheck kann den Alarm dämpfen.",
      },
      {
        title: "Selbstbestätigung statt externer Validierung",
        description:
          "Sammle Beweise dafür, dass du okay bist – unabhängig von der Meinung anderer.",
      },
      {
        title: "Nervensystem beruhigen",
        description:
          "Kühles Wasser im Gesicht, kurze Bewegung, lange Ausatmung. Der körperliche Alarm muss zuerst runterfahren.",
      },
      {
        title: "Gesunde Grenzen setzen",
        description:
          "Nicht jede Kritik musst du persönlich nehmen. Übe, zwischen Feedback an deinem Verhalten und Bewertung deiner Person zu unterscheiden.",
      },
      {
        title: "Medikamentöse Optionen besprechen",
        description:
          "Bei schwerer RSD können Alpha-2-Agonisten helfen. Sprich darüber mit einem Psychiater oder einer Psychiaterin.",
      },
    ],
    sources: [
      { title: "Dodson & Modestino (2024) – Rejection Sensitivity Dysphoria in ADHD" },
      { title: "Sol Smith – Lived-Experience-Erklärungen zu RSD" },
      { title: "Understood.org – Sorry, I Missed This Podcast" },
    ],
  },
  {
    id: "zeitwahrnehmung",
    slug: "zeitwahrnehmung",
    name: "Zeitwahrnehmung",
    shortName: "ZW",
    description:
      "Schwierigkeiten, Zeit abzuschätzen, zu strukturieren und pünktlich zu sein.",
    color: "#8BBDD8",
    fill: "rgba(139, 189, 216, 0.25)",
    tagline: "Zeit ist für dich nicht immer linear. Das ist keine Charakterschwäche.",
    examples: [
      {
        question: "Wie oft unterschätzt du, wie lange eine Aufgabe dauert?",
        situation:
          "Du denkst: Das dauert nur fünf Minuten, aber eine Stunde später bist du immer noch dabei.",
      },
      {
        question: "Wie oft kommst du zu spät, obwohl du dir Mühe gibst?",
        situation:
          "Du planst alles im Kopf, legst früher los und kommst trotzdem zu spät.",
      },
      {
        question: "Wie oft verlierst du das Zeitgefühl bei Interessantem?",
        situation:
          "Du spielst ein Spiel oder arbeitest an einem Hobby und merkst plötzlich, dass es Nacht ist.",
      },
      {
        question: "Wie oft gerätst du in den Wartemodus?",
        situation:
          "Du hast um 16 Uhr einen Anruf und kannst den ganzen Nachmittag vorher nichts anfangen.",
      },
      {
        question: "Wie oft dauern Dinge dreimal so lange wie geplant?",
        situation:
          "Du sagst: Ich bin in zehn Minuten fertig, und eine halbe Stunde später bist du noch mitten drin.",
      },
    ],
    livedExperienceQuotes: [
      "Für mich gibt es nur jetzt und nicht jetzt.",
      "Ich bin nicht respektlos, weil ich zu spät komme. Ich habe einfach kein Gefühl dafür, wie lange Dinge dauern.",
    ],
    neurobiology: {
      intro:
        "Zeitwahrnehmung ist eine kognitive Funktion, die eng mit exekutiven Funktionen, Arbeitsgedächtnis und Aufmerksamkeit verknüpft ist. Bei ADHS ist die Fähigkeit, Zeitintervalle abzuschätzen und zukünftige Ereignisse als real wahrzunehmen, oft beeinträchtigt.",
      mechanism:
        "Das Cerebellum und der präfrontale Cortex spielen eine zentrale Rolle bei der Zeitverarbeitung. Bei ADHS feuern diese Regionen anders, wodurch die interne Uhr unzuverlässiger wird. Zudem spielt das Default Mode Network eine Rolle: Wenn es nicht ausreichend abschaltet, verschwimmt die Grenze zwischen Jetzt und Später.",
      context:
        "Huberman beschreibt das Phänomen Jetzt vs. Nicht-Jetzt. Zukünftige Deadlines fühlen sich unreal an, bis sie plötzlich unmittelbar drohen. Deshalb funktioniert krisengetriebene Produktivität so gut – der Druck macht die Zukunft für das Nervensystem greifbar.",
    },
    strategies: [
      {
        title: "Visuelle Timer nutzen",
        description:
          "Time Timer, Sanduhr oder Apps, die verbleibende Zeit anzeigen. Abstrakte Zahlen reichen oft nicht.",
      },
      {
        title: "Time Blocking",
        description:
          "Blocke im Kalender nicht nur Termine, sondern auch Aufgaben mit konkreter Start- und Endzeit.",
      },
      {
        title: "Rückwärts planen",
        description:
          "Beginne bei der Deadline und plane Schritt für Schritt rückwärts. So wird die Zukunft greifbarer.",
      },
      {
        title: "Pufferzeit einbauen",
        description:
          "Plane immer 50–100 % mehr Zeit ein als du denkst, dass du brauchst. Fast alles dauert länger.",
      },
      {
        title: "Deadlines künstlich vorziehen",
        description:
          "Wenn du erst unter Druck startest, setze dir eigene Deadlines vor der echten Deadline.",
      },
    ],
    sources: [
      { title: "Huberman Lab Podcast #37 – ADHD & Focus" },
      { title: "Barkley, R. A. (2012) – Executive Functions" },
      { title: "Brown, T. E. (2017) – Smart but Stuck" },
    ],
  },
  {
    id: "interozeption",
    slug: "interozeption",
    name: "Interozeption",
    shortName: "IN",
    description:
      "Wahrnehmung innerer Körpersignale wie Hunger, Durst, Müdigkeit, Emotionen.",
    color: "#8FC499",
    fill: "rgba(143, 196, 153, 0.25)",
    tagline: "Dein Körper sendet Signale. Manchmal empfängst du sie erst, wenn sie sehr laut sind.",
    examples: [
      {
        question: "Wie oft merkst du erst spät, dass du hungrig oder durstig bist?",
        situation:
          "Du merkst erst, dass du den ganzen Tag nichts gegessen hast, wenn du plötzlich erschöpft oder reizbar bist.",
      },
      {
        question: "Wie oft ignorierst du körperliche Signale bis zur Unerträglichkeit?",
        situation:
          "Du bist seit Stunden müde, aber du merkst es erst, wenn deine Augen brennen und du kaum noch denken kannst.",
      },
      {
        question: "Wie oft fällt es dir schwer, Gefühle oder Bedürfnisse zu benennen?",
        situation:
          "Jemand fragt: Was brauchst du gerade? und du weißt es nicht – du spürst nur, dass etwas nicht stimmt.",
      },
      {
        question: "Wie oft vergisst du Pausen oder Grundbedürfnisse?",
        situation:
          "Du sitzt stundenlang am Schreibtisch und merkst erst, als dein Körper protestiert, dass du ihn vernachlässigt hast.",
      },
      {
        question: "Wie oft merkst du erst im Nachhinein, dass du überfordert warst?",
        situation:
          "Erst wenn du zusammenbrichst oder explodierst, merkst du: Ah, ich war wohl die ganze Zeit überfordert.",
      },
    ],
    livedExperienceQuotes: [
      "Ich merke oft erst, dass ich hungrig bin, wenn ich panisch werde.",
      "Mein Körper redet mit mir. Ich muss nur lernen, seine Sprache früher zu verstehen.",
    ],
    neurobiology: {
      intro:
        "Interozeption ist die Wahrnehmung innerer Körpersignale – Hunger, Durst, Müdigkeit, Herzschlag, Emotionen. Viele Menschen mit ADHS haben eine verminderte oder verzögerte Interozeption. Das bedeutet nicht, dass die Signale fehlen, sondern dass sie erst sehr spät ins Bewusstsein durchdringen.",
      mechanism:
        "Die Interozeption wird über das insulare Cortex verarbeitet, der Informationen aus dem Körper sammelt und an den präfrontalen Cortex weiterleitet. Bei ADHS kann diese Verarbeitung durch Aufmerksamkeitsdysregulation gestört sein: Der Fokus liegt so stark auf externen Reizen, dass interne Signale übersehen werden.",
      context:
        "Schlechte Interozeption führt zu vergessenem Essen, Übermüdung, vernachlässigter Selbstfürsorge und plötzlichen emotionalen Ausbrüchen. Das ist keine Selbstvernachlässigung, sondern ein Wahrnehmungsproblem.",
    },
    strategies: [
      {
        title: "Regelmäßige Check-ins",
        description:
          "Setze dir Erinnerungen für Hunger, Durst, Toilette, Pausen. Nicht, weil du dumm bist, sondern weil dein Gehirn das nicht von allein regelt.",
      },
      {
        title: "Body-Scan kurz",
        description:
          "Einmal am Tag bewusst durch den Körper gehen: Was spüre ich gerade? Brauche ich etwas?",
      },
      {
        title: "Externe Struktur für Mahlzeiten",
        description:
          "Feste Essenszeiten, vorbereitete Snacks, Wasserflasche immer sichtbar. Mach es dem Gehirn leicht.",
      },
      {
        title: "Emotionen als Körpersignale lesen",
        description:
          "Wenn du plötzlich reizbar bist, frage: Habe ich geschlafen? Gegessen? Getrunken?",
      },
      {
        title: "Pausen vor dem Zusammenbruch",
        description:
          "Plane Ruhe ein, bevor du sie brauchst. Recovery ist keine Belohnung, sondern Wartung.",
      },
    ],
    sources: [
      { title: "Huberman Lab Podcast #37 – Interozeption" },
      { title: "Soler-Gutiérrez et al. (2023) – Emotional dysregulation in ADHD" },
      { title: "Sol Smith – Neurodivergent Recharging" },
    ],
  },
  {
    id: "hyperfokus",
    slug: "hyperfokus",
    name: "Hyperfokus",
    shortName: "HF",
    description:
      "Intensive, lange anhaltende Konzentration auf interessante Dinge, oft mit Zeitverlust.",
    color: "#DAB866",
    fill: "rgba(218, 184, 102, 0.25)",
    tagline: "Wenn dein Gehirn interessiert ist, kann es sich in nichts anderes mehr verlieren.",
    examples: [
      {
        question: "Wie oft vertiefst du dich so sehr, dass du alles um dich herum vergisst?",
        situation:
          "Du wolltest nur kurz etwas recherchieren und stellst fest, dass fünf Stunden vergangen sind.",
      },
      {
        question: "Wie oft fällt es dir schwer, von einer spannenden Aktivität abzulassen?",
        situation:
          "Du bist in ein Buch oder Spiel vertieft und kannst nicht aufhören, obwohl du eigentlich schlafen musst.",
      },
      {
        question: "Wie oft entwickelst du ein intensives Interesse an neuen Themen?",
        situation:
          "Du entdeckst ein neues Hobby und recherchierst tagelang darüber – bis das nächste Interesse kommt.",
      },
      {
        question: "Wie oft hyperfokussierst du wochenlang, lässt es dann aber fallen?",
        situation:
          "Du kaufst Material für ein neues Hobby, vertiefst dich tagelang – und zwei Monate später liegt alles unberührt in der Ecke.",
      },
      {
        question: "Wie oft tauchst du in ein zufälliges Thema so tief ein wie ein Experte?",
        situation:
          "Du entdeckst ein neues Interesse und nach wenigen Tagen hast du Artikel, Podcasts und Videos durchgearbeitet.",
      },
    ],
    livedExperienceQuotes: [
      "Hyperfokus fühlt sich an wie Fliegen. Nur vergisst man dabei zu essen.",
      "Ich kann Tage über ein Thema recherchieren und dann nie wieder daran denken.",
    ],
    neurobiology: {
      intro:
        "Hyperfokus ist das Gegenstück zur Unaufmerksamkeit. Während uninteressante Aufgaben kaum Dopamin freisetzen, lösen faszinierende Themen eine starke Dopamin-Ausschüttung aus. Das Gehirn verbeißt sich in die Aktivität.",
      mechanism:
        "Das Belohnungssystem und das task-related network arbeiten bei hohem Interesse extrem effizient zusammen. Das Default Mode Network wird stark unterdrückt, externe Reize werden ausgeblendet. Zeitgefühl und Körperbedürfnisse treten in den Hintergrund.",
      context:
        "Hyperfokus ist weder Gabe noch Fluch – er ist beides. Er kann enorm produktiv sein, aber auch dazu führen, dass Schlaf, Essen oder Pflichten vernachlässigt werden. Das Ziel ist nicht, ihn abzuschaffen, sondern ihn zu kanalisieren.",
    },
    strategies: [
      {
        title: "Zeitgrenzen setzen",
        description:
          "Mehrere Alarme stellen, die dich an Essen, Schlaf oder Termine erinnern, bevor du in etwas versinkst.",
      },
      {
        title: "Wichtiges vor dem Hyperfokus",
        description:
          "Erledige Pflichten, bevor du dich in ein Interesse stürzt. Sonst wird der Hyperfokus zur Ausrede.",
      },
      {
        title: "Hyperfixation als Belohnung nutzen",
        description:
          "Wenn ich die E-Mail geschrieben habe, darf ich eine Stunde recherchieren. So arbeitet dein Belohnungssystem für dich.",
      },
      {
        title: "Externe Unterbrecher einplanen",
        description:
          "Vereinbare mit jemandem, dass er dich nach einer bestimmten Zeit abholt – physisch oder virtuell.",
      },
      {
        title: "Wissens-Archive anlegen",
        description:
          "Wenn du ein Interesse fallenlässt, speichere Notizen sichtbar. Vielleicht kommt es in einem Jahr zurück.",
      },
    ],
    sources: [
      { title: "Huberman Lab Podcast #37 – Hyperfocus" },
      { title: "Brown, T. E. (2017) – Smart but Stuck" },
      { title: "Cate Osborn – The ADHD Field Guide for Adults" },
    ],
  },
  {
    id: "sensorik",
    slug: "sensorik",
    name: "Sensorische Verarbeitung",
    shortName: "SV",
    description:
      "Über- oder Unterempfindlichkeit für Geräusche, Licht, Berührung, Gerüche etc.",
    color: "#A8A8A8",
    fill: "rgba(168, 168, 168, 0.25)",
    tagline: "Deine Sinne nehmen die Welt intensiver wahr. Das kann bereichern und überfluten.",
    examples: [
      {
        question: "Wie oft reagierst du stark auf laute Geräusche, helles Licht oder starke Gerüche?",
        situation:
          "Ein quietschender Stuhl, greller Neonlicht oder der Geruch von Parfüm in der Bahn machen dich sofort nervös.",
      },
      {
        question: "Wie oft fühlst du dich in überfüllten Umgebungen schnell überfordert?",
        situation:
          "Ein Einkaufszentrum, eine Demo oder eine volle Kneipe fühlt sich für dich schnell wie Sinnestrubel an.",
      },
      {
        question: "Wie oft hast du Texturen oder Berührungen, die du extrem unangenehm findest?",
        situation:
          "Ein bestimmtes Etikett im Shirt, eine bestimmte Stoffhose oder das Gefühl von Nagellack können dich den ganzen Tag ablenken.",
      },
      {
        question: "Wie oft suchst du gezielt nach sensorischen Reizen?",
        situation:
          "Du brauchst Hintergrundgeräusche, eine Kuscheldecke oder etwas in der Hand, um konzentriert arbeiten zu können.",
      },
      {
        question: "Wie oft reagierst du empfindlich auf plötzliche Veränderungen?",
        situation:
          "Jemand klingelt unerwartet an der Tür oder das Licht flackert – und du bist sofort aus dem Konzept.",
      },
    ],
    livedExperienceQuotes: [
      "Manchmal fühlt sich die Welt an, als wäre der Lautstärkeregler auf 11.",
      "Ich brauche bestimmte Geräusche, um zu denken. Andere Geräusche zerstören mich.",
    ],
    neurobiology: {
      intro:
        "Sensorische Verarbeitung beschreibt, wie das Nervensystem Sinnesreize aufnimmt, filtert und interpretiert. Viele Menschen mit ADHS haben eine veränderte sensorische Verarbeitung – sie reagieren stärker auf bestimmte Reize oder suchen gezielt sensorischen Input.",
      mechanism:
        "Das sensorische System ist eng mit dem autonomen Nervensystem verbunden. Bei Überempfindlichkeit können Reize schnell als bedrohlich gewertet werden, was Stressreaktionen auslöst. Bei Unterempfindlichkeit braucht das Nervensystem mehr Input, um wach und reguliert zu bleiben. Das Cerebellum und kortikale Filtermechanismen spielen hier eine Rolle.",
      context:
        "Sensorische Überempfindlichkeit ist besonders bei der Überlappung von ADHS und Autismus häufig, kommt aber auch bei reinem ADHS vor. Sie beeinflusst Alltag stark: Kleidung, Geräusche, Licht, Gerüche, soziale Situationen.",
    },
    strategies: [
      {
        title: "Reize reduzieren",
        description:
          "Noise-Cancelling-Kopfhörer, gedimmtes Licht, komfortable Kleidung. Deine Umgebung ist kein Luxus, sondern Medizin.",
      },
      {
        title: "Sensorische Pausen einplanen",
        description:
          "Nach überreizenden Situationen bewusst in einen ruhigen Raum gehen, Augen schließen, Atem beruhigen.",
      },
      {
        title: "Gesuchte Reize erlauben",
        description:
          "Brown noise, Kuscheldecken, Fidget-Toys – was beruhigt, ist erlaubt, auch wenn es anderen seltsam vorkommt.",
      },
      {
        title: "Vorausplanen",
        description:
          "Wenn du einen lauten Ort erwartest, nimm Kopfhörer, Sonnenbrille oder eine Ausrede mit, um früh zu gehen.",
      },
      {
        title: "Komfortkleidung ernst nehmen",
        description:
          "Schneide Etiketten aus, trage Stoffe, die du verträgst. Kleidung ist kein Detail, wenn sie den ganzen Tag ablenkt.",
      },
    ],
    sources: [
      { title: "ADHD Foundation UK / NHS Taskforce Report (2025)" },
      { title: "Huberman Lab Podcast #37 – Sensorische Reize" },
      { title: "Understood.org – Sensory Processing" },
    ],
  },
  {
    id: "masking",
    slug: "masking",
    name: "Masking / Kompensation",
    shortName: "MK",
    description:
      "Anstrengender Aufwand, ADHS-Merkmale nach außen zu verbergen und neurotypisch zu wirken.",
    color: "#8B7DBF",
    fill: "rgba(139, 125, 191, 0.25)",
    tagline: "Du investierst enorme Energie, um normal zu wirken. Das kostet.",
    examples: [
      {
        question: "Wie oft wirkest du nach außen gefasster, als du dich fühlst?",
        situation:
          "Andere sehen jemanden, der alles im Griff hat – während du innerlich kämpfst, den Faden nicht zu verlieren.",
      },
      {
        question: "Wie oft weiß niemand, wie anstrengend normal wirken ist?",
        situation:
          "Du investierst enorme Energie in Planen, Erinnern und Kontrolle – und niemand merkt, wie viel Arbeit das kostet.",
      },
      {
        question: "Wie oft hast du dir antrainiert, neurotypisch auszusehen?",
        situation:
          "Wenn du von deinen Schwierigkeiten erzählst, sagen Menschen: Du siehst gar nicht so aus, als hättest du ADHS.",
      },
      {
        question: "Wie oft hast du unterschiedliche Versionen von dir für verschiedene Menschen?",
        situation:
          "Du passt dich je nach Kontext an – beruflich, privat, in der Familie – und am Ende fühlst du dich erschöpft.",
      },
      {
        question: "Wie oft bereitest du dich übermäßig vor, nur um normal zu wirken?",
        situation:
          "Du planst Gespräche vor, legst Kleidung schon am Abend zurecht oder machst endlose Listen – nur um morgens nicht auffällig zu scheitern.",
      },
    ],
    livedExperienceQuotes: [
      "Ich bin so gut darin, normal zu wirken, dass niemand glaubt, wie sehr ich kämpfe.",
      "Nach dem Tag falle ich auseinander. Nicht, weil der Tag hart war, sondern weil ich die ganze Zeit gespielt habe.",
    ],
    neurobiology: {
      intro:
        "Masking ist kein Bewusstseinsakt, sondern ein Kompensationsprozess, der über Jahre gelernt wird. Besonders Menschen, die spät diagnostiziert werden – darunter viele Frauen – entwickeln früh Strategien, um ADHS-Merkmale zu verbergen. Das ist anstrengend und mit schlechterer psychischer Gesundheit assoziiert.",
      mechanism:
        "Masking erfordert dauerhafte Selbstüberwachung und kognitive Kontrolle. Der präfrontale Cortex muss ständig impulsive Reaktionen, Ablenkungen oder emotionale Ausbrüche bremsen. Dieser Dauerbetrieb verbraucht enorme Energie und führt zu Restraint Collapse – dem Zusammenbruch, sobald die soziale Maske abgenommen werden kann.",
      context:
        "Masking ist oft notwendig, um in einer neurotypischen Welt zu funktionieren. Aber es ist kein Dauerzustand, der gesund ist. Je mehr du maskierst, desto weniger Energie bleibt für echte Bedürfnisse, Beziehungen und Erholung.",
    },
    strategies: [
      {
        title: "Masking als Kostenfaktor erkennen",
        description:
          "Akzeptiere, dass normal wirken Energie kostet. Plane danach Erholung ein, keine weiteren Aufgaben.",
      },
      {
        title: "Sichere Menschen finden",
        description:
          "Suche 2–3 Menschen, bei denen du die Maske abnehmen darfst. Qualität vor Quantität.",
      },
      {
        title: "Entscheidungen reduzieren",
        description:
          "Capsule Wardrobe, Meal Prep, feste Abläufe. Weniger Entscheidungen = weniger Masking-Energie.",
      },
      {
        title: "Ich brauche das so kommunizieren",
        description:
          "Du musst nicht alles erklären. Ein kurzer Satz wie Ich brauche für das einen Timer reicht oft.",
      },
      {
        title: "Therapie bei chronischer Erschöpfung",
        description:
          "Wenn Masking dich dauerhaft erschöpft, kann eine Therapie helfen, zwischen notwendiger Anpassung und Selbstverleugnung zu unterscheiden.",
      },
    ],
    sources: [
      { title: "Morgan, J. (2023) – Women's experiences of ADHD diagnosis" },
      { title: "King's College London Thesis (2025) – ADHD in Girls and Women" },
      { title: "Sol Smith – Restraint Collapse & Masking" },
    ],
  },
  {
    id: "schlaf",
    slug: "schlaf",
    name: "Schlaf & Zirkadiane Rhythmen",
    shortName: "SZ",
    description:
      "Schwierigkeiten mit dem Einschlafen, der Schlafqualität oder dem inneren Rhythmus.",
    color: "#7B9EA8",
    fill: "rgba(123, 158, 168, 0.25)",
    tagline: "Dein innerer Taktgeber tickt anders – das ist kein Charakterfehler.",
    examples: [
      {
        question: "Wie oft fällt es dir schwer, zur gewünschten Zeit einzuschlafen?",
        situation:
          "Du liegst lange wach, weil dein Kopf noch nicht bereit ist, den Tag loszulassen.",
      },
      {
        question: "Wie oft fühlst du dich trotz Schlaf tagsüber müde?",
        situation:
          "Du hast genug Stunden geschlafen, fühlst dich aber trotzdem wie durch Watte gedrückt.",
      },
      {
        question: "Wie oft verschiebt sich dein innerer Rhythmus?",
        situation:
          "Am Wochenende gleitest du automatisch in einen späten Schlafrhythmus ab und hast am Montag Schwierigkeiten, wieder früher zu schlafen.",
      },
      {
        question: "Wie oft brauchst du lange, um abends herunterzufahren?",
        situation:
          "Du weißt, dass du schlafen solltest, aber dein Kopf oder Körper will noch nicht zur Ruhe kommen.",
      },
      {
        question: "Wie oft beeinflusst Schlafmangel deine Stimmung oder Konzentration?",
        situation:
          "Nach einer schlechten Nacht reagierst du schneller gereizt und kannst dich schlechter fokussieren.",
      },
    ],
    livedExperienceQuotes: [
      "Mein Körper will erst um 2 Uhr schlafen, aber die Welt beginnt um 8.",
      "Schlafen fühlt sich manchmal wie eine Aufgabe an, die ich einfach nicht starten kann.",
    ],
    neurobiology: {
      intro:
        "Schlaf und ADHS beeinflussen sich gegenseitig. Viele Menschen mit ADHS haben einen verzögerten inneren Rhythmus, Schwierigkeiten, abends herunterzufahren, oder eine unruhige Schlafqualität. Das liegt nicht an mangelnder Disziplin, sondern an der Regulierung von Wachheit und Schlaf.",
      mechanism:
        "Das circadiane System wird durch Licht, Melatonin und körpereigene Signale gesteuert. Bei ADHS kann die Melatonin-Freisetzung später erfolgen, sodass der Körper erst später müde wird. Zudem beeinflussen Dopamin und Norepinephrin die Einschlafbereitschaft: Ein noch aktives Belohnungs- und Aufmerksamkeitssystem macht das Herunterfahren schwierig.",
      context:
        "Schlafmangel verstärkt ADHS-typische Symptome wie Reizbarkeit, Ablenkbarkeit und Schwierigkeiten mit dem Task-Initiation. Umgekehrt können ADHS-Muster – spätes Hyperfokussieren, unregelmäßige Routinen, körperliche Unruhe – den Schlaf erschweren. Ein gezielter Fokus auf Schlafhygiene und Rhythmus kann deshalb große Wirkung entfalten.",
    },
    strategies: [
      {
        title: "Licht als Taktgeber nutzen",
        description:
          "Morgens helles Licht, abends gedimmtes Licht. Licht ist der stärkste Einfluss auf den circadianen Rhythmus.",
      },
      {
        title: "Wind-down-Routine statt perfekten Schlafhygiene",
        description:
          "Eine feste Abfolge von 20–30 Minuten vor dem Schlafengehen hilft dem Nervensystem, herunterzufahren.",
      },
      {
        title: "Bildschirme früher reduzieren",
        description:
          "Blaues Licht und spannende Inhalte aktivieren das Belohnungssystem. Versuche, abends sanftere Reize zu wählen.",
      },
      {
        title: "Aufstehzeit priorisieren",
        description:
          "Eine konsequente Aufstehzeit stabilisiert den Rhythmus oft besser als eine feste Schlafenszeit.",
      },
      {
        title: "Schlaf als Nervensystem-Wartung reframen",
        description:
          "Schlaf ist keine Zeitverschwendung, sondern essenziell für Regulation, Gedächtnis und Emotionen.",
      },
    ],
    sources: [
      { title: "Huberman Lab Podcast #37 – Schlaf & Circadiane Rhythmen" },
      { title: "American Psychiatric Association (2022) – DSM-5-TR" },
      { title: "ADHD Foundation UK – Schlaf und ADHS" },
    ],
  },
];

export function getTopicBySlug(slug: string): Topic | undefined {
  return topics.find((topic) => topic.slug === slug);
}
