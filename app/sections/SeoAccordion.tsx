"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function SeoAccordion() {
  return (
    <section className="border-t border-border bg-card/30 px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Mehr zum Thema
        </p>
        <h2 className="text-center text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
          ADHS verstehen
        </h2>

        <Accordion type="single" collapsible className="mt-10">
          <AccordionItem value="adhs-ueberblick">
            <AccordionTrigger className="text-base">
              Was ist ADHS?
            </AccordionTrigger>
            <AccordionContent>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p>
                  ADHS steht für Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung. Es
                  handelt sich um eine neurobiologische Variante der
                  Informationsverarbeitung, die mit Aufmerksamkeit, Impulskontrolle,
                  Aktivitätsregulation und emotionaler Steuerung zusammenhängt. In
                  Deutschland wird ADHS meist nach den Kriterien des DSM-5-TR oder der
                  ICD-10/ICD-11 diagnostiziert. Die offiziellen Kernsymptome umfassen
                  Unaufmerksamkeit, Hyperaktivität und Impulsivität – doch in der
                  klinischen Praxis zeigt sich ADHS bei Erwachsenen oft viel
                  vielschichtiger.
                </p>
                <p>
                  Viele Betroffene beschreiben ADHS nicht als „Fehlanlage“, sondern als
                  eine Art Gehirn, das anders verdrahtet ist. Das bedeutet nicht, dass
                  es einfacher wäre – aber es bedeutet, dass Strategien, Umgebungen und
                  Erwartungen an das eigene Nervensystem angepasst werden können.
                  Wissenschaftlich spricht man heute zunehmend vom ADHS-Spektrum: Es
                  gibt nicht einen Typus, sondern viele unterschiedliche Ausprägungen,
                  die sich im Laufe des Lebens verändern können.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="adhs-symptome">
            <AccordionTrigger className="text-base">
              Typische ADHS-Symptome im Alltag
            </AccordionTrigger>
            <AccordionContent>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p>
                  ADHS äußert sich bei jedem Menschen anders. Die bekanntesten Symptome
                  sind Ablenkbarkeit, innere Unruhe, Schwierigkeiten beim
                  Zeitmanagement und impulsive Entscheidungen. Erwachsene mit ADHS
                  berichten oft von Problemen beim Starten und Beenden von Aufgaben,
                  von emotionalen Hochs und Tiefs sowie von der sogenannten
                  Rejection-Sensitive Dysphoria, also übermäßig starken emotionalen
                  Schmerzen bei wahrgenommener Ablehnung.
                </p>
                <p>
                  Hinzu kommen Bereiche, die lange unterschätzt wurden:
                  Interozeption – also die Wahrnehmung innerer Signale wie Hunger,
                  Durst oder Müdigkeit –, sensorische Überempfindlichkeit oder das
                  sogenannte Masking, also der große Energieaufwand, um nach außen
                  „neurotypisch“ zu wirken. Gerade Frauen und Menschen, die spät
                  diagnostiziert werden, zeigen häufig starke Kompensationsleistungen,
                  die erst bei genauerem Hinsehen als ADHS erkennbar sind.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="adhs-diagnose">
            <AccordionTrigger className="text-base">
              Diagnose und Abklärung
            </AccordionTrigger>
            <AccordionContent>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p>
                  Eine ADHS-Diagnose wird in der Regel von Psychiater:innen,
                  Psycholog:innen oder anderen entsprechend qualifizierten Fachkräften
                  gestellt. Sie basiert auf einer ausführlichen Anamnese, der
                  Befragung von Angehörigen oder Partner:innen, klinischen Tests und
                  der Abgrenzung gegenüber anderen Ursachen wie Depressionen,
                  Angststörungen, Traumafolgen oder Schlafstörungen.
                  Selbsteinschätzungen entlang verschiedener ADHS-Dimensionen können
                  dabei helfen, erste Hinweise zu sammeln und ein Gespräch mit einer
                  Fachkraft vorzubereiten.
                </p>
                <p>
                  Wichtig ist: Ein Online-Screener ersetzt keine Diagnose. Er kann aber
                  ein wertvolles Werkzeug sein, um eigene Muster zu erkennen und
                  Gespräche mit Ärzt:innen oder Therapeut:innen besser zu strukturieren.
                  Viele Betroffene berichten, dass ihnen ein strukturierter Fragebogen
                  hilft, Dinge zu benennen, die sie lange nur als „chaotisch“ oder
                  „faul“ empfunden haben.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="adhs-hilfe">
            <AccordionTrigger className="text-base">
              Hilfe, Strategien und Lebensgestaltung
            </AccordionTrigger>
            <AccordionContent>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p>
                  ADHS lässt sich nicht „wegtrainieren“ – aber sehr gut steuern. Je
                  nach Schweregrad und individuellem Profil kommen verschiedene
                  Unterstützungsformen infrage: Psychoedukation, kognitive
                  Verhaltenstherapie, Coaching, Medikation und strukturelle
                  Alltagsanpassungen. Nicht jede:r braucht alles. Manche Menschen
                  kommen mit gezielten Strategien sehr gut zurecht, andere profitieren
                  zusätzlich von einer medikamentösen Behandlung.
                </p>
                <p>
                  Typische Strategien sind externe Strukturen wie Timer, sichtbare
                  Listen, Body Doubling, Time Blocking oder Pufferzeiten im Kalender.
                  Bewegung, Schlafhygiene und eine sensorisch passende Umgebung können
                  das Nervensystem spürbar regulieren. Auch Selbstmitgefühl spielt eine
                  große Rolle: Viele Betroffene haben Jahre lang geglaubt, sie seien
                  „zu faul“ oder „nicht diszipliniert genug“. Eine ADHS-Perspektive
                  hilft, diese Selbstkritik zu entkräften und realistischere Wege zu
                  finden.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="adhs-spektrum">
            <AccordionTrigger className="text-base">
              Warum „ADHS-Spektrum“?
            </AccordionTrigger>
            <AccordionContent>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p>
                  Der Begriff „ADHS-Spektrum“ beschreibt die Erkenntnis, dass ADHS
                  keine Einheitskrankheit ist. Manche Menschen haben vorwiegend
                  Schwierigkeiten mit der Aufmerksamkeit, andere sind eher impulsiv,
                  wieder andere kämpfen vor allem mit emotionaler Dysregulation oder
                  sensorischer Überempfindlichkeit. Zudem können die Ausprägungen im
                  Laufe des Lebens variieren – was in der Schulzeit auffällig war,
                  kann sich im Berufsleben anders zeigen.
                </p>
                <p>
                  Diese Website versteht ADHS als Spektrum entlang zwölf Dimensionen.
                  Das Ziel ist nicht, dich in eine Schublade zu stecken, sondern dir zu
                  helfen, deine individuellen Muster besser zu verstehen. Daraus
                  lassen sich passendere Strategien, offenere Gespräche mit Fachkräften
                  und mehr Selbstakzeptanz entwickeln.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="adhs-erwachsene">
            <AccordionTrigger className="text-base">
              ADHS bei Erwachsenen
            </AccordionTrigger>
            <AccordionContent>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p>
                  ADHS wird oft mit Kindern assoziiert, doch die Hälfte bis zwei
                  Drittel aller Betroffenen behalten ihre Symptome ins Erwachsenenalter.
                  Bei Erwachsenen zeigt sich ADHS jedoch häufig anders: Statt
                  herumzutanzen, herrscht innere Unruhe. Statt im Unterricht
                  aufzufallen, scheitert man an Deadlines, Beziehungen oder der eigenen
                  Erschöpfung. Viele Erwachsene werden erst spät diagnostiziert,
                  besonders wenn sie keine klassische Hyperaktivität zeigen.
                </p>
                <p>
                  Eine späte Diagnose kann sowohl erleichtern als auch verstören: Endlich
                  hat man einen Namen für jahrelange Schwierigkeiten. Gleichzeitig muss
                  man viele innere Überzeugungen überprüfen – etwa dass man zu faul
                  oder nicht ganz normal sei. Wichtig ist zu wissen: ADHS bei
                  Erwachsenen ist behandelbar, und eine Diagnose ist der Ausgangspunkt
                  für mehr Selbstverständnis, nicht für mehr Scham.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="adhs-mythen">
            <AccordionTrigger className="text-base">
              ADHS: Mythos und Realität
            </AccordionTrigger>
            <AccordionContent>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p>
                  Es gibt viele Missverständnisse rund um ADHS. Eines der häufigsten:
                  ADHS sei eine Erfindung der Pharmaindustrie oder eine Modeerscheinung.
                  Die Realität ist: ADHS ist eine gut erforschte neurobiologische
                  Bedingung mit nachweisbaren Unterschieden in der Funktionsweise
                  bestimmter Hirnregionen und Botenstoffe. Es ist keine Willensschwäche
                  und kein Zeichen mangelnder Erziehung.
                </p>
                <p>
                  Ein weiterer Mythos lautet: Wenn du dich konzentrieren kannst, hast
                  du kein ADHS. Das Gegenteil ist oft der Fall – Hyperfokus, also das
                  stundenlange Eintauchen in interessante Dinge, gehört genauso zum
                  ADHS-Spektrum wie Ablenkbarkeit. ADHS ist keine Frage der Motivation,
                  sondern der Regulation von Aufmerksamkeit, Emotionen und Aktionen.
                  Wer das versteht, kann sich selbst und andere mit ADHS fairer
                  beurteilen.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="adhs-zusammenfassung">
            <AccordionTrigger className="text-base">
              Zusammenfassung
            </AccordionTrigger>
            <AccordionContent>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p>
                  ADHS ist ein komplexes Spektrum aus unterschiedlichen Ausprägungen,
                  das Aufmerksamkeit, Impulse, Emotionen, Zeitwahrnehmung und viele
                  weitere Bereiche betreffen kann. Es beginnt oft in der Kindheit,
                  zeigt sich bei Erwachsenen aber häufig anders und wird deshalb oft
                  spät oder gar nicht erkannt. Wissenschaftlich fundierte
                  Selbsterkundung und der Austausch mit Fachkräften können den Weg zu
                  mehr Klarheit eröffnen.
                </p>
                <p>
                  Auf ADHS-Spektrum findest du einen wissenschaftlich fundierten
                  Fragebogen, erklärende Artikel zu zwölf Dimensionen, praktische
                  Strategien und kuratierte Quellen. Das Ziel ist nicht, dir ein Label
                  zu geben, sondern dir dabei zu helfen, dein individuelles Profil besser
                  zu verstehen – mit Respekt, Fakten und ohne Diagnose-Druck. Wenn du
                  bereit bist, starte den Screener und entdecke, welche Dimensionen für
                  dich besonders relevant sein könnten.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
