export interface Dimension {
  id: string;
  name: string;
  shortName: string;
  description: string;
  color: string;
  fill: string;
}

export interface Question {
  id: string;
  dimensionId: string;
  text: string;
  examples: string[];
}

export const dimensions: Dimension[] = [
  {
    id: "unaufmerksamkeit",
    name: "Unaufmerksamkeit",
    shortName: "U",
    description:
      "Schwierigkeiten, die Aufmerksamkeit zu steuern, ablenkbar zu sein, Details zu übersehen.",
    color: "#7BA4C8",
    fill: "rgba(123, 164, 200, 0.25)",
  },
  {
    id: "hyperaktivitaet",
    name: "Hyperaktivität",
    shortName: "H",
    description:
      "Äußere oder innere Unruhe, Bewegungsdrang, Schwierigkeiten mit Stillsitzen.",
    color: "#E8A87C",
    fill: "rgba(232, 168, 124, 0.25)",
  },
  {
    id: "impulsivitaet",
    name: "Impulsivität",
    shortName: "I",
    description:
      "Handeln ohne Nachdenken, Schwierigkeiten mit Warten, Unterbrechen, spontane Entscheidungen.",
    color: "#D76A6A",
    fill: "rgba(215, 106, 106, 0.25)",
  },
  {
    id: "exekutive-funktionen",
    name: "Exekutive Funktionen",
    shortName: "EF",
    description:
      "Planen, Organisieren, Priorisieren, Starten, Beenden, Arbeitsgedächtnis.",
    color: "#6BA8A4",
    fill: "rgba(107, 168, 164, 0.25)",
  },
  {
    id: "emotionale-dysregulation",
    name: "Emotionale Dysregulation",
    shortName: "ED",
    description:
      "Starke, schnelle Gefühle, Schwierigkeiten, Emotionen zu modulieren, Frustrationstoleranz.",
    color: "#C98CB3",
    fill: "rgba(201, 140, 179, 0.25)",
  },
  {
    id: "rsd",
    name: "Rejection Sensitivity",
    shortName: "RSD",
    description:
      "Extreme emotionale Schmerzen bei wahrgenommener Ablehnung oder Kritik.",
    color: "#9B8DC3",
    fill: "rgba(155, 141, 195, 0.25)",
  },
  {
    id: "zeitwahrnehmung",
    name: "Zeitwahrnehmung",
    shortName: "ZW",
    description:
      "Schwierigkeiten, Zeit abzuschätzen, zu strukturieren und pünktlich zu sein.",
    color: "#8BBDD8",
    fill: "rgba(139, 189, 216, 0.25)",
  },
  {
    id: "interozeption",
    name: "Interozeption",
    shortName: "IN",
    description:
      "Wahrnehmung innerer Körpersignale wie Hunger, Durst, Müdigkeit, Emotionen.",
    color: "#8FC499",
    fill: "rgba(143, 196, 153, 0.25)",
  },
  {
    id: "hyperfokus",
    name: "Hyperfokus",
    shortName: "HF",
    description:
      "Intensive, lange anhaltende Konzentration auf interessante Dinge, oft mit Zeitverlust.",
    color: "#DAB866",
    fill: "rgba(218, 184, 102, 0.25)",
  },
  {
    id: "sensorik",
    name: "Sensorische Verarbeitung",
    shortName: "SV",
    description:
      "Über- oder Unterempfindlichkeit für Geräusche, Licht, Berührung, Gerüche etc.",
    color: "#A8A8A8",
    fill: "rgba(168, 168, 168, 0.25)",
  },
  {
    id: "masking",
    name: "Masking / Kompensation",
    shortName: "MK",
    description:
      "Anstrengender Aufwand, ADHS-Merkmale nach außen zu verbergen und neurotypisch zu wirken.",
    color: "#8B7DBF",
    fill: "rgba(139, 125, 191, 0.25)",
  },
  {
    id: "schlaf",
    name: "Schlaf & Zirkadiane Rhythmen",
    shortName: "SZ",
    description:
      "Schwierigkeiten mit dem Einschlafen, der Schlafqualität oder dem inneren Rhythmus.",
    color: "#7B9EA8",
    fill: "rgba(123, 158, 168, 0.25)",
  },
];

export const extendedQuestions: Question[] = [
  // ── Kernfragen zu Unaufmerksamkeit, Hyperaktivität und Impulsivität ──
  {
    id: "asrs-1",
    dimensionId: "unaufmerksamkeit",
    text: `Wie oft hast du Schwierigkeiten, dich bei langwierigen oder komplexen Aufgaben konzentriert zu halten?`,
    examples: [
      `Du baust einen IKEA-Schrank auf und belohnst dich sehr oft mit Pausen oder Ablenkungen`,
    ],
  },
  {
    id: "asrs-2",
    dimensionId: "unaufmerksamkeit",
    text: `Wie oft verlierst du leicht den Faden in Gesprächen oder bekommst erst gar nicht mit, dass man mit dir spricht?`,
    examples: [
      `Jemand erzählt dir etwas, und plötzlich merkst du, dass du gar nicht mehr zugehört hast – du weißt höchstens noch die ersten Wörter.`,
      `Dir wird des Öfteren gesagt, dass jemand mit dir gesprochen hat, nachdem sie keine Antwort von dir erhalten haben. Du hast es überhaupt nicht mitbekommen.`,
    ],
  },
  {
    id: "asrs-3",
    dimensionId: "unaufmerksamkeit",
    text: `Wie oft vergisst du wichtige Termine, Verpflichtungen oder Dinge, die du erledigen oder vereinbaren wolltest?`,
    examples: [
      `Du vergisst die Geburtstage deiner Liebsten`,
      `Du müsstest eigentlich mal wegen einer belastenden Beschwerde zum Arzt gehen, aber machst einfach keinen Termin aus`,
    ],
  },
  {
    id: "asrs-4",
    dimensionId: "hyperaktivitaet",
    text: `Wie oft fällt es dir schwer, stillzusitzen oder dich längere Zeit ruhig zu verhalten?`,
    examples: [
      `Bei einem längeren Essen oder im Kino musst du ständig die Position wechseln, mit den Fingern trommeln oder dich bewegen.`,
    ],
  },
  {
    id: "asrs-5",
    dimensionId: "hyperaktivitaet",
    text: `Wie oft fühlst du dich innerlich unruhig oder angetrieben?`,
    examples: [
      `Abends, wenn du eigentlich entspannen willst, kannst du nicht „runterfahren“ – dein Kopf rast und du musst etwas tun.`,
    ],
  },
  {
    id: "asrs-6",
    dimensionId: "impulsivitaet",
    text: `Wie oft handelst du, ohne über die Konsequenzen nachzudenken?`,
    examples: [
      `Du kaufst spontan etwas online, obwohl du weißt, dass das Budget eigentlich knapp ist.`,
    ],
  },

  // ── Unaufmerksamkeit (4 erweiterte Fragen) ──
  {
    id: "u1",
    dimensionId: "unaufmerksamkeit",
    text: `Wie oft wirst du von äußeren Reizen oder eigenen Gedanken abgelenkt, wenn du etwas erledigen musst?`,
    examples: [
      `Du wolltest nur schnell eine E-Mail schreiben, aber nach fünf Minuten bist du in einem Wikipedia-Artikel über Pinguine gelandet.`,
      `Du liest ein Buch, aber das Gelesene vermischt sich mit deinen Gedanken und du merkst plötzlich, dass du nicht mehr weißt, was du gerade gelesen hast.`,
    ],
  },
  {
    id: "u2",
    dimensionId: "unaufmerksamkeit",
    text: `Wie oft bekommst du wichtige Informationen nicht mit oder übersiehst wichtige Details?`,
    examples: [
      `Freund:innen von dir haben einen Städtetrip geplant und dir in einer WhatsApp-Gruppe alle Infos mitgeteilt. Du hast dir Details zu dem Trip aber nur halbherzig überflogen.`,
      `Eine Rundmail der Geschäftsleitung mit der Bitte, eine Anpassung an deiner E-Mail-Signatur zu machen, ignorierst du gekonnt. Ggf. denkst du dir: „Das geht so schnell und scheint nicht so wichtig zu sein, das kann ich ja jederzeit machen."`,
    ],
  },
  {
    id: "u3",
    dimensionId: "unaufmerksamkeit",
    text: `Wie oft fühlt sich dein Kopf wie ein Browser mit vielen offenen Tabs an. Der aktive Tab wechselt automatisch immer wieder von alleine durch und die Übersicht zu behalten ist kaum möglich.`,
    examples: [
      `Deine Gedanken fühlen sich unkontrolliert an und wenn du nicht gerade wirklich bei der Sache bist, quasselst deine innere Stimme pausenlos.`,
      `Du sitzt vor einer Aufgabe, aber deine Gedanken springen zwischen Terminen, einer Unterhaltung von gestern und fünf anderen Dingen hin und her.`,
      `Deine Gedanken springen hin und her – in Konversationen mit Anderen kann es passieren, dass du von A bis B gedacht hast, du aber nur C mitteilst, wodurch deinem Gegenüber Kontext fehlt.`,
    ],
  },
  {
    id: "u4",
    dimensionId: "unaufmerksamkeit",
    text: `Wie oft legst du etwas ab und findest es kurze Zeit später nicht wieder?`,
    examples: [
      `Du hattest dein Handy doch gerade noch in der Hand.`,
      `Du legst Gegenstände unwissentlich irgendwo ab und hast keinen blassen Schimmer davon. (z. B. Kaffee-Tasse auf der Arbeit)`,
    ],
  },

  // ── Hyperaktivität (4 erweiterte Fragen) ──
  {
    id: "h2",
    dimensionId: "hyperaktivitaet",
    text: `Wie oft musst du dich körperlich bewegen? Ggf. um klar denken zu können?`,
    examples: [
      `Du merkst, dass du beim Telefonieren automatisch herumläufst oder mit einem Stift spielen musst, damit deine Gedanken fließen.`,
    ],
  },
  {
    id: "h3",
    dimensionId: "hyperaktivitaet",
    text: `Wie oft zeigt sich bei dir kleine motorische Unruhe, auch wenn du versuchst, still zu sein?`,
    examples: [
      `Du wippst mit dem Fuß, knibbelst an den Fingernägeln, zwirbelst Haare oder klickst permanent mit dem Kugelschreiber.`,
    ],
  },
  {
    id: "h4",
    dimensionId: "hyperaktivitaet",
    text: `Wie oft hast du das Gefühl, ständig beschäftigt sein zu müssen?`,
    examples: [
      `Du hast mehrere Projekte gleichzeitig angefangen, weil Pausen oder Langeweile dich unruhig machen.`,
    ],
  },
  {
    id: "h5",
    dimensionId: "hyperaktivitaet",
    text: `Wie oft fällt es dir schwer, dich zu entspannen und runterzukommen, wenn du Zeit für dich hast?`,
    examples: [
      `Am Wochenende kannst du einfach nicht „nichts tun“ – du musst dich beschäftigen, sonst wird es unangenehm.`,
    ],
  },

  // ── Impulsivität (4 erweiterte Fragen) ──
  {
    id: "i1",
    dimensionId: "impulsivitaet",
    text: `Wie oft sagst oder tust du Dinge, bevor du darüber nachgedacht hast? Ggf. tust du diese Dinge auch stürmischer oder lauter, als sie sein sollten.`,
    examples: [
      `In einem Gespräch fällt dir etwas ein und du sagst es sofort – auch wenn es unpassend ist oder den anderen unterbricht.`,
      `Du lauscht einem spannenden Gespräch in einer Kneipe und dir kommt kurzerhand etwas super Witziges in den Kopf – du rufst es laut hinaus und das ganze Lokal dreht sich nach dir um.`,
    ],
  },
  {
    id: "i2",
    dimensionId: "impulsivitaet",
    text: `Wie oft triffst du spontane Entscheidungen, die du später bereust?`,
    examples: [
      `Du stimmst Sachen zu, ohne über weitere Details nachzudenken.`,
      `Du möchtest plötzlich irgendetwas unbedingt haben und kaufst es auch sofort, obwohl du weißt, dass dein Budget für diesen Monat ausgeschöpft ist.`,
    ],
  },
  {
    id: "i3",
    dimensionId: "impulsivitaet",
    text: `Wie oft unterbrichst du andere Menschen im Gespräch?`,
    examples: [
      `Du weißt, dass du den anderen ausreden lassen solltest, aber du kannst deinen Gedanken nicht festhalten, wenn du ihn nicht sofort loswirst.`,
    ],
  },
  {
    id: "i4",
    dimensionId: "emotionale-dysregulation",
    text: `Ganz oder gar nicht?`,
    examples: [
      `Wenn du etwas beginnst, bist du sofort mit vollem Eifer dabei – oder du kommst überhaupt nicht in Gang. Ein halbes Maß gibt es kaum.`,
      `Du hast eine neue Idee klar vor Augen und willst sie so schnell wie möglich umsetzen. Am besten gleich sofort. Wenn es dann länger dauert als gedacht und deine Zeit knapp wird, regt es dich sehr auf.`,
    ],
  },

  // ── Exekutive Funktionen (6 erweiterte Fragen) ──
  {
    id: "ef1",
    dimensionId: "exekutive-funktionen",
    text: `Wie oft hast du Schwierigkeiten, mit scheinbar kleinen Aufgaben anzufangen, auch wenn sie ggf. sehr wichtig sind?`,
    examples: [
      `Du weißt, dass du die Steuer machen musst, aber du kannst dich nicht dazu überwinden, den ersten Schritt zu tun.`,
      `Du lagerst irgendwo Pappkartons und sagst dir, dass du sie einfach nach und nach beim Verlassen der Wohnung zum Papier-Müll bringen wirst. Du verpasst den Zeitpunkt dafür und es werden immer mehr Kartons. Du wirst von anderen darauf angesprochen und es belastet dich sehr – erledigen wirst du es trotzdem nicht so schnell.`,
    ],
  },
  {
    id: "ef2",
    dimensionId: "exekutive-funktionen",
    text: `Wie oft fällt es dir schwer, Aufgaben zu priorisieren oder Chaos-Stapel wahrzunehmen und anzugehen?`,
    examples: [
      `Du hast mit deiner Partner:in vereinbart, dass du am nächsten Tag Erledigungen machst – stress dich nicht, irgendwann bis mittags hat sie gesagt. Die Zeitangabe war zu wage für dich und du hast bis Mittag alles Mögliche gemacht, nur nicht das, was vereinbart war.`,
      `Dein Schreibtisch ist ein Haufen Papier, den du immer wieder beiseiteschiebst, weil du nicht weißt, wo du anfangen sollst.`,
    ],
  },
  {
    id: "ef3",
    dimensionId: "exekutive-funktionen",
    text: `Wie oft vergisst du, was du gerade tun wolltest?`,
    examples: [
      `Du gehst in die Küche, um etwas zu holen, aber wenn du dort ankommst, weißt du nicht mehr, warum du eigentlich gekommen bist.`,
    ],
  },
  {
    id: "ef4",
    dimensionId: "exekutive-funktionen",
    text: `Wie oft fängst du mehrere Dinge hintereinander an und beendest keine davon?`,
    examples: [
      `Du beginnst die Spülmaschine, öffnest dann ein Fenster, merkst Staub, holst den Staubwedel – und am Abend steht nichts davon wirklich fertig.`,
    ],
  },
  {
    id: "ef5",
    dimensionId: "exekutive-funktionen",
    text: `Wie oft ist etwas für dich „aus den Augen, aus dem Sinn“ – auch wenn es wichtig ist?`,
    examples: [
      `Du hast deine Medikamente oder einen Termin vor Augen, aber sobald sie nicht sichtbar sind, vergisst du sie, als hätten sie nie existiert.`,
    ],
  },
  {
    id: "ef6",
    dimensionId: "exekutive-funktionen",
    text: `Wie oft passiert es, dass du Aufgaben nicht erledigst, die keine Deadline haben?`,
    examples: [
      `Du erhältst auf der Arbeit die Aufgabe, etwas zu tun, bekommst aber gesagt, dass es keine Eile hat. Die Chance, dass du es von selbst nicht erledigst, bis du wieder daran erinnert wirst bzw. dann eine Deadline bekommst, ist sehr hoch.`,
      `Du schaffst es dir selbst nicht, verbindliche Deadlines zu setzen – z. B. um die Pfandflaschen endlich mal wegzubringen, bevor wieder alles überquillt.`,
    ],
  },

  // ── Emotionale Dysregulation (6 erweiterte Fragen) ──
  {
    id: "ed1",
    dimensionId: "emotionale-dysregulation",
    text: `Wie oft werden deine Gefühle schnell sehr intensiv?`,
    examples: [
      `Eine kleine Kritik oder ein ärgerlicher Moment lässt dich innerlich explodieren, auch wenn du weißt, dass es „nicht so schlimm“ ist.`,
    ],
  },
  {
    id: "ed2",
    dimensionId: "emotionale-dysregulation",
    text: `Wie oft hast du Schwierigkeiten, wieder runterzukommen, wenn du einmal wütend oder traurig bist?`,
    examples: [
      `Ein kleiner Konflikt verfolgt dich stundenlang oder tagelang und du kannst nicht aufhören, ihn zu analysieren.`,
    ],
  },
  {
    id: "ed3",
    dimensionId: "emotionale-dysregulation",
    text: `Wie oft fühlst du dich von kleinen Rückschlägen oder Veränderungen überfordert?`,
    examples: [
      `Dein Plan ändert sich kurzfristig und du fühlst dich sofort aus der Bahn geworfen, frustriert oder panisch.`,
    ],
  },
  {
    id: "ed4",
    dimensionId: "emotionale-dysregulation",
    text: `Wie oft hat dein Gefühlsregler nur die Stufen „null“ und „zehn“ – mit kaum einem Mittelmaß dazwischen?`,
    examples: [
      `Entweder bist du komplett gefasst oder völlig überwältigt – ein sanfteres Maß an Intensität fällt dir schwer.`,
    ],
  },
  {
    id: "ed5",
    dimensionId: "emotionale-dysregulation",
    text: `Wie oft hältst du den Tag über alles zusammen und fällst zu Hause in ein Loch?`,
    examples: [
      `Auf der Arbeit oder unter Menschen funktionierst du mühsam – sobald du zu Hause bist, brichst du zusammen oder bist reizbar und erschöpft.`,
    ],
  },
  {
    id: "ed6",
    dimensionId: "emotionale-dysregulation",
    text: `Wie oft bist du besonders kurz angebunden bei den Menschen, die dir am meisten bedeuten?`,
    examples: [
      `Du reagierst schneller genervt oder lauter auf Menschen, die dir nahe stehen – und fühlst dich hinterher schuldig.`,
    ],
  },

  // ── Rejection Sensitivity (6 erweiterte Fragen) ──
  {
    id: "rsd1",
    dimensionId: "rsd",
    text: `Wie oft fühlst du dich von Kritik oder negativen Rückmeldungen unverhältnismäßig stark getroffen?`,
    examples: [
      `Dein Chef ist von deiner letzten Arbeit enttäuscht und du fühlst den Rest des Tages wie ein Versager.`,
      `Kleine Sticheleien – z. B. eine Nachricht von einem Freund – nimmst du manchmal zu ernst und ggf. belastet dich diese.`,
    ],
  },
  {
    id: "rsd2",
    dimensionId: "rsd",
    text: `Wie oft interpretierst du neutrale Signale als Ablehnung?`,
    examples: [
      `Eine Freund:in antwortet nicht sofort auf deine Nachricht und du denkst sofort: „Sie mag mich nicht mehr."`,
      `Deine Partner:in ist nicht gut drauf, spricht in einem ernsteren Ton mit dir – du denkst direkt, es stimmt etwas nicht.`,
      `Deine Partner:in meckert heute viel mit dir. Du nimmst es sehr persönlich, dein Kopf blockiert komplett und es belastet dich sehr, wodurch noch mehr „Fehler" leichter passieren können.`,
    ],
  },
  {
    id: "rsd3",
    dimensionId: "rsd",
    text: `Wie oft vermeidest du Situationen, in denen du Kritik oder Ablehnung erfahren könntest?`,
    examples: [
      `Du bewirbst dich nicht auf eine Stelle, fragst nicht um Hilfe oder gehst nicht zu einer Verabredung, weil du Angst vor Ablehnung hast.`,
      `Du erzählst deiner Partner:in am Telefon, dass du unbedingt Duschen musst. Das gleiche erzählst du ihr 3 Stunden später wieder. Nach weiteren 3 Stunden warst du immer noch nicht Duschen, sagst ihr dann aber, dass du Duschen warst. Das Ganze tust du, weil es dir unangenehm ist, da du es immer noch nicht geschafft hast.`,
    ],
  },
  {
    id: "rsd4",
    dimensionId: "rsd",
    text: `Wie oft entschuldigst du dich, bevor du überhaupt etwas falsch gemacht hast – nur für alle Fälle?`,
    examples: [
      `Du sagst „Sorry“ für normale Bedürfnisse, für deine Meinung oder einfach dafür, dass du existierst.`,
    ],
  },
  {
    id: "rsd5",
    dimensionId: "rsd",
    text: `Wie oft spielst du Gespräche tagelang in deinem Kopf durch und suchst nach dem, was du falsch gemacht haben könntest?`,
    examples: [
      `Ein Gespräch von vor drei Wochen spukt dir immer noch durch den Kopf und du schämst dich dafür.`,
    ],
  },
  {
    id: "rsd6",
    dimensionId: "rsd",
    text: `Wie oft wiegt eine einzige kritische Bemerkung schwerer als viele Lobworte?`,
    examples: [
      `Du bekommst zehn positive Rückmeldungen und eine kleine Kritik – und am Abend denkst du nur noch an die Kritik.`,
    ],
  },

  // ── Zeitwahrnehmung (6 erweiterte Fragen) ──
  {
    id: "zw1",
    dimensionId: "zeitwahrnehmung",
    text: `Wie oft unterschätzt du, wie lange eine Aufgabe dauert?`,
    examples: [
      `Du denkst: „Das dauert nur fünf Minuten“, aber eine Stunde später bist du immer noch dabei.`,
      `Du arbeitest nur schnell 10 Minuten an etwas – in Wirklichkeit sind aber bereits 40 Minuten vergangen.`,
    ],
  },
  {
    id: "zw2",
    dimensionId: "zeitwahrnehmung",
    text: `Wie oft kommst du zu spät, obwohl du dir wirklich Mühe gibst, pünktlich zu sein?`,
    examples: [
      `Du planst alles im Kopf, legst früher los und kommst trotzdem zu spät – ohne dass du genau sagen kannst, warum.`,
    ],
  },
  {
    id: "zw3",
    dimensionId: "zeitwahrnehmung",
    text: `Wie oft verlierst du das Gefühl für die Zeit, wenn du gerade etwas tust oder auch nicht tust?`,
    examples: [
      `Du schaust auf die Uhr und wunderst dich, dass bereits Stunden vergangen sind – oder dass gerade erst zehn Minuten vergangen sind, obwohl es sich viel länger angefühlt hat.`,
      `Du sagst: „Ich mache das noch schnell“, und plötzlich ist der halbe Tag vorbei, ohne dass du es bewusst wahrgenommen hast.`,
    ],
  },
  {
    id: "zw4",
    dimensionId: "zeitwahrnehmung",
    text: `Wie oft gerätst du in den „Wartemodus“ und kannst vor einem Termin nichts Produktives tun?`,
    examples: [
      `Du hast um 16 Uhr einen Anruf und kannst den ganzen Nachmittag vorher nichts anfangen, weil der Termin „bald" kommt.`,
    ],
  },
  {
    id: "zw5",
    dimensionId: "zeitwahrnehmung",
    text: `Wie oft dauern Dinge am Ende dreimal so lange wie geplant?`,
    examples: [
      `Du sagst: „Ich bin in zehn Minuten fertig“, und eine halbe Stunde später bist du noch mitten drin.`,
    ],
  },
  {
    id: "zw6",
    dimensionId: "zeitwahrnehmung",
    text: `Wie oft ist Krise dein eigentlicher Produktivitätsmodus – ohne Deadline bewegt sich nichts?`,
    examples: [
      `Du weißt seit Wochen, dass etwas fällig ist, aber du fängst erst in der letzten Nacht an, wenn der Druck unerträglich wird.`,
    ],
  },

  // ── Interozeption (5 erweiterte Fragen) ──
  {
    id: "in1",
    dimensionId: "interozeption",
    text: `Wie oft merkst du erst spät, dass du hungrig oder durstig bist?`,
    examples: [
      `Du merkst erst, dass du den ganzen Tag nichts gegessen hast, wenn du plötzlich erschöpft oder reizbar bist.`,
    ],
  },
  {
    id: "in2",
    dimensionId: "interozeption",
    text: `Wie oft ignorierst du körperliche Signale wie Müdigkeit oder Schmerzen, bis sie unerträglich werden?`,
    examples: [
      `Du arbeitest an einem spannenden Projekt. Deine Augen sind schwer, aber du bist so auf das Doing fixiert, dass du erst aufhörst, wenn es wirklich nicht mehr geht.`,
    ],
  },
  {
    id: "in3",
    dimensionId: "interozeption",
    text: `Wie oft fällt es dir schwer, deine eigenen Gefühle oder Bedürfnisse zu benennen?`,
    examples: [
      `Jemand fragt: „Was brauchst du gerade?“ und du weißt es nicht – du spürst nur, dass etwas nicht stimmt.`,
    ],
  },
  {
    id: "in4",
    dimensionId: "interozeption",
    text: `Wie oft vergisst du, zur Toilette zu gehen, dich zu strecken oder Pausen zu machen?`,
    examples: [
      `Du sitzt stundenlang am Schreibtisch und merkst erst, als dein Körper protestiert, dass du ihn vernachlässigt hast.`,
    ],
  },
  {
    id: "in5",
    dimensionId: "interozeption",
    text: `Wie oft merkst du erst im Nachhinein, dass du überfordert oder gestresst warst?`,
    examples: [
      `Erst wenn du zusammenbrichst oder explodierst, merkst du: „Ah, ich war wohl die ganze Zeit überfordert."`,
    ],
  },

  // ── Hyperfokus (5 erweiterte Fragen) ──
  {
    id: "hf1",
    dimensionId: "hyperfokus",
    text: `Wie oft vertiefst du dich so sehr in etwas, dass du alles um dich herum vergisst?`,
    examples: [
      `Du wolltest nur „kurz“ etwas recherchieren und stellst fest, dass fünf Stunden vergangen sind, ohne dass du es gemerkt hast.`,
    ],
  },
  {
    id: "hf2",
    dimensionId: "hyperfokus",
    text: `Wie oft fällt es dir schwer, von einer spannenden Aktivität abzulassen, um alltägliche Pflichten zu erledigen?`,
    examples: [
      `Du bist in ein Buch oder Spiel vertieft und kannst nicht aufhören, obwohl du weißt, dass du eigentlich schlafen musst.`,
    ],
  },
  {
    id: "hf3",
    dimensionId: "hyperfokus",
    text: `Wie oft entwickelst du ein intensives, fast obsessives Interesse an neuen Themen?`,
    examples: [
      `Du entdeckst ein neues Hobby und recherchierst/tagträumst/tagelang darüber – bis das nächste Interesse kommt.`,
      `Ein neues Thema fasziniert dich total: Du denkst ständig darüber nach, recherchierst alles und kannst kaum davon loskommen.`,
    ],
  },
  {
    id: "hf4",
    dimensionId: "hyperfokus",
    text: `Wie oft fokussierst du dich wochenlang auf etwas, lässt es dann aber komplett fallen und kommst nicht mehr zurück?`,
    examples: [
      `Du kaufst Material für ein neues Hobby, vertiefst dich tagelang – und zwei Monate später liegt alles unberührt in der Ecke.`,
    ],
  },
  {
    id: "hf6",
    dimensionId: "hyperfokus",
    text: `Wie oft passiert es, dass du etwas, auf das du dich fokussiert, alles andere um dich herum komplett ausblendest?`,
    examples: [
      `Du bist an deinem Arbeitsplatz und siehst dir ein Video zu einem spannenden Thema an, bis du deine Kolleg:innen schreiben hörst: „Heeyy, hast du mich nicht gehört? Ich habe 3x deinen Namen gesagt."`,
    ],
  },

  // ── Sensorische Verarbeitung (5 erweiterte Fragen) ──
  {
    id: "sv1",
    dimensionId: "sensorik",
    text: `Wie oft reagierst du stark auf laute Geräusche, helles Licht oder starke Gerüche?`,
    examples: [
      `Ein quietschender Stuhl, greller Neonlicht oder der Geruch von Parfüm in der Bahn machen dich sofort nervös oder wütend.`,
    ],
  },
  {
    id: "sv2",
    dimensionId: "sensorik",
    text: `Wie oft fühlst du dich in überfüllten oder lauten Umgebungen schnell überfordert?`,
    examples: [
      `Ein Einkaufszentrum, eine Demo oder eine volle Kneipe fühlt sich für dich schnell wie Sinnestrubel an.`,
    ],
  },
  {
    id: "sv3",
    dimensionId: "sensorik",
    text: `Wie oft hast du bestimmte Texturen, Kleidung oder Berührungen, die du extrem unangenehm findest?`,
    examples: [
      `Ein bestimmtes Etikett im Shirt, eine bestimmte Stoffhose oder das Gefühl von Nagellack können dich den ganzen Tag ablenken.`,
    ],
  },
  {
    id: "sv4",
    dimensionId: "sensorik",
    text: `Wie oft suchst du gezielt nach sensorischen Reizen, um dich zu beruhigen oder zu fokussieren?`,
    examples: [
      `Du brauchst Hintergrundgeräusche (brown noise), eine Kuscheldecke oder etwas in der Hand, um konzentriert arbeiten zu können.`,
    ],
  },
  {
    id: "sv5",
    dimensionId: "sensorik",
    text: `Wie oft merkst du, dass du besonders empfindlich auf plötzliche Veränderungen in deiner Umgebung reagierst?`,
    examples: [
      `Jemand klingelt unerwartet an der Tür oder das Licht flackert – und du bist sofort aus dem Konzept.`,
    ],
  },

  // ── Masking / Kompensation (5 erweiterte Fragen) ──
  {
    id: "mk1",
    dimensionId: "masking",
    text: `Wie oft wirkst du nach außen viel gefasster, organisierter oder eben als hättest du dein Leben im Griff, als du dich innerlich fühlst?`,
    examples: [
      `Du räumst deine Wohnung erst richtig auf, kurz bevor jemand zu Besuch kommt.`,
      `Du sprichst vor deinen Freund:innen über viele Themen nicht so negativ, wie sie eigentlich sind, oder lässt sie ganz weg.`,
      `Du hast es geschafft, dich in deinem Arbeitsumfeld gut zu organisieren, aber verschweigst, wie viel Zeit du für die Organisation aufgewendet hast (viel).`,
    ],
  },
  {
    id: "mk2",
    dimensionId: "masking",
    text: `Wie oft weiß niemand in deinem Umfeld, wie anstrengend es für dich ist, „normal“ zu wirken?`,
    examples: [
      `Du investierst enorme Energie in Planen, Erinnern und Kontrolle – und niemand merkt, wie viel Arbeit das kostet.`,
    ],
  },
  {
    id: "mk3",
    dimensionId: "masking",
    text: `Wie oft hast du dir antrainiert, neurotypisch auszusehen – so gut, dass andere deine Probleme nicht glauben?`,
    examples: [
      `Wenn du von deinen Schwierigkeiten erzählst, sagen Menschen: „Du siehst gar nicht so aus, als hättest du ADHS."`,
    ],
  },
  {
    id: "mk4",
    dimensionId: "masking",
    text: `Wie oft hast du unterschiedliche Versionen von dir für verschiedene Menschen, die dich Energie kosten?`,
    examples: [
      `Du passt dich je nach Kontext an – beruflich, privat, in der Familie – und am Ende fühlst du dich erschöpft und nicht mehr du selbst.`,
    ],
  },
  {
    id: "mk5",
    dimensionId: "masking",
    text: `Wie oft bereitest du dich übermäßig vor, nur um normal zu wirken – und schämst dich dann dafür?`,
    examples: [
      `Du planst Gespräche vor, legst Kleidung schon am Abend zurecht oder machst endlose Listen – nur um morgens nicht auffällig zu scheitern.`,
    ],
  },

  // ── Schlaf & Zirkadiane Rhythmen (6 erweiterte Fragen) ──
  {
    id: "sz1",
    dimensionId: "schlaf",
    text: `Wie oft fällt es dir schwer, zur gewünschten Zeit einzuschlafen?`,
    examples: [
      `Du liegst lange wach, weil dein Kopf noch nicht bereit ist, den Tag loszulassen.`,
    ],
  },
  {
    id: "sz2",
    dimensionId: "schlaf",
    text: `Wie oft fühlst du dich trotz ausreichender Schlafdauer tagsüber müde oder nicht richtig wach?`,
    examples: [
      `Du hast genug Stunden geschlafen, fühlst dich aber trotzdem wie durch Watte gedrückt.`,
    ],
  },
  {
    id: "sz3",
    dimensionId: "schlaf",
    text: `Wie oft verschiebt sich dein innerer Rhythmus, sodass du spät wach und müde aufwachst?`,
    examples: [
      `Am Wochenende gleitest du automatisch in einen späten Schlafrhythmus ab und hast am Montag Schwierigkeiten, wieder früher zu schlafen.`,
    ],
  },
  {
    id: "sz4",
    dimensionId: "schlaf",
    text: `Wie oft brauchst du lange, um abends herunterzufahren?`,
    examples: [
      `Du weißt, dass du schlafen solltest, aber dein Kopf oder Körper will noch nicht zur Ruhe kommen.`,
    ],
  },
  {
    id: "sz5",
    dimensionId: "schlaf",
    text: `Wie oft werden deine Schlaf- und Wachphasen durch unregelmäßige Gewohnheiten bestimmt?`,
    examples: [
      `Du gehst unterschiedlich spät ins Bett, isst spät oder nutzt bis kurz vor dem Schlafengehen Bildschirme – und merkst, dass dein Körper keinen klaren Rhythmus findet.`,
    ],
  },
  {
    id: "sz6",
    dimensionId: "schlaf",
    text: `Wie oft beeinflusst Schlafmangel deine Konzentration oder Stimmung am nächsten Tag?`,
    examples: [
      `Nach einer schlechten Nacht reagierst du schneller gereizt, kannst dich schlechter fokussieren oder fühlst dich emotional weniger stabil.`,
    ],
  },
];

export const allQuestions: Question[] = [...extendedQuestions];

export const answerLabels: Record<number, string> = {
  0: "Nie",
  1: "Selten",
  2: "Manchmal",
  3: "Oft",
  4: "Sehr oft",
};

// IDs der sechs ASRS-5 Kernfragen (entsprechen dem validierten WHO ASRS-5 Screening).
export const ASRS5_QUESTION_IDS = [
  "asrs-1",
  "asrs-2",
  "asrs-3",
  "asrs-4",
  "asrs-5",
  "asrs-6",
] as const;
