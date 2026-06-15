"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function TopicsSeoAccordion() {
  return (
    <section className="border-t border-border bg-card/30 px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Mehr zum Thema
        </p>
        <h2 className="text-center text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
          Das ADHS-Spektrum erkunden
        </h2>

        <Accordion type="single" collapsible className="mt-10">
          <AccordionItem value="was-ist-adhs-spektrum">
            <AccordionTrigger className="text-base">
              Was bedeutet ADHS Spektrum?
            </AccordionTrigger>
            <AccordionContent>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p>
                  Wenn von einem „ADHS Spektrum“ die Rede ist, dann geht es um die
                  Erkenntnis, dass Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung nicht
                  als starre Kategorie verstanden werden kann. Nicht jeder Mensch mit
                  ADHS zeigt alle Symptome gleich stark. Nicht jede:r ist hyperaktiv.
                  Nicht jede:r hat große Probleme mit der Impulskontrolle. Und doch
                  kann ADHS bei allen Betroffenen erhebliche Auswirkungen auf Alltag,
                  Beziehungen, Beruf und Selbstwert haben.
                </p>
                <p>
                  Das Konzept des ADHS-Spektrums hilft, diese Vielfalt ernst zu
                  nehmen. Statt zu fragen „Hast du ADHS oder nicht?“ lässt es sich
                  genauer betrachten: In welchen Bereichen tritt es auf? Wie stark? In
                  welchem Zusammenhang mit anderen Fähigkeiten oder Herausforderungen?
                  Diese Fragen sind nicht nur theoretisch – sie beeinflussen, welche
                  Unterstützung wirklich hilft.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="elf-dimensionen">
            <AccordionTrigger className="text-base">
              Elf Dimensionen statt drei Kategorien
            </AccordionTrigger>
            <AccordionContent>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p>
                  Das klassische DSM-5-Modell teilt ADHS in zwei Hauptkategorien ein:
                  Unaufmerksamkeit und Hyperaktivität-Impulsivität. Diese Einteilung
                  ist für die klinische Diagnose nützlich, deckt aber nicht alles ab.
                  Viele Erwachsene mit ADHS berichten von Schwierigkeiten, die über
                  diese Kategorien hinausgehen: Probleme mit der Zeitwahrnehmung, mit
                  der emotionalen Regulation, mit der Wahrnehmung innerer
                  Körpersignale oder mit dem sogenannten Masking.
                </p>
                <p>
                  Deshalb betrachtet diese Website ADHS als Spektrum aus elf
                  Dimensionen: Unaufmerksamkeit, Hyperaktivität, Impulsivität,
                  exekutive Funktionen, emotionale Dysregulation, Rejection
                  Sensitivity, Zeitwahrnehmung, Interozeption, Hyperfokus, sensorische
                  Verarbeitung und Masking/Kompensation. Jede Dimension beschreibt ein
                  konkretes Erleben, für das es wissenschaftliche Erklärungen und
                  praktische Strategien gibt.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="spektrum-diagnose">
            <AccordionTrigger className="text-base">
              Kann man das ADHS-Spektrum selbst einschätzen?
            </AccordionTrigger>
            <AccordionContent>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p>
                  Eine Selbsteinschätzung kann ein sinnvoller erster Schritt sein, um
                  das eigene ADHS-Spektrum besser zu verstehen. Validierte Instrumente
                  wie der ASRS-5 erfassen die Kernsymptome. Ergänzt um weitere Fragen
                  zu exekutiven Funktionen, emotionaler Regulation, Zeitwahrnehmung
                  und Co. entsteht ein differenzierteres Bild. Wichtig ist, dass eine
                  Selbsteinschätzung keine Diagnose ersetzt – aber sie kann ein
                  wertvolles Gesprächsangebot für Fachkräfte sein.
                </p>
                <p>
                  Auf dieser Website kannst du entlang der elf Dimensionen einschätzen,
                  welche Bereiche für dich besonders relevant sind. Das Ergebnis ist
                  kein Etikett, sondern ein Spiegel. Es hilft dir, Muster zu erkennen,
                  passende Strategien zu finden und gezielter über mögliche nächste
                  Schritte nachzudenken.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="spektrum-strategien">
            <AccordionTrigger className="text-base">
              Strategien entlang des Spektrums
            </AccordionTrigger>
            <AccordionContent>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p>
                  Weil ADHS ein Spektrum ist, braucht es keine universelle Lösung,
                  sondern passgenaue Strategien. Jemand, der vor allem mit
                  Unaufmerksamkeit zu kämpfen hat, profitiert von externen
                  Aufmerksamkeitsankern, visuellen Erinnerungen und reduzierten
                  Reizen. Jemand mit starker Hyperaktivität braucht eher Bewegung,
                  Stehtische oder Fidget-Tools. Menschen mit emotionaler
                  Dysregulation finden Unterstützung in Körperübungen, Mood-Tracking
                  und Selbstmitgefühl.
                </p>
                <p>
                  Das Ziel ist nicht, ADHS „zu korrigieren“, sondern das eigene
                  Nervensystem besser zu verstehen und die Umgebung so zu gestalten,
                  dass sie besser funktioniert. Manchmal reichen kleine Änderungen:
                  ein Timer auf dem Schreibtisch, eine feste Essenszeit, ein
                  Noise-Cancelling-Kopfhörer. Manchmal sind größere Schritte nötig:
                  Therapie, Coaching oder eine Anpassung der Arbeitsumgebung. Beides
                  ist legitim.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="spektrum-gemeinschaft">
            <AccordionTrigger className="text-base">
              Lived Experience und wissenschaftliche Grundlagen
            </AccordionTrigger>
            <AccordionContent>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p>
                  Das ADHS-Spektrum versteht man am besten, wenn man wissenschaftliche
                  Erkenntnisse und persönliche Erfahrungen zusammenbetrachtet. Studien
                  zur Neurobiologie, Genetik und Wirksamkeit von Interventionen geben
                  Orientierung. Lived-Experience-Stimmen aus der Community – etwa auf
                  YouTube, Instagram oder in Podcasts – machen dieses Wissen greifbar
                  und zeigen, wie unterschiedlich ADHS gelebt werden kann.
                </p>
                <p>
                  Auf dieser Seite findest du zu jeder Dimension eine Verbindung aus
                  beidem: eine Erklärung der zugrunde liegenden Mechanismen, Beispiele
                  aus dem Alltag, Strategien und Quellen. So entsteht ein umfassenderes
                  Bild vom ADHS-Spektrum – nicht als Defizit, sondern als eine Form
                  der Neurodivergenz, die verstanden und unterstützt werden kann.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="spektrum-geschlecht">
            <AccordionTrigger className="text-base">
              Geschlecht, Diagnose und übersehene Profile
            </AccordionTrigger>
            <AccordionContent>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p>
                  Das ADHS-Spektrum wird nicht gleich bei allen Menschen erkannt.
                  Insbesondere Frauen, nicht-binäre Personen und Menschen aus
                  Minderheiten werden häufiger übersehen oder später diagnostiziert.
                  Oft liegt das daran, dass sie stärker maskieren, also ihre Symptome
                  verbergen, oder dass ihre ADHS-Ausprägung nicht dem klassischen
                  Bild des hyperaktiven Jungen entspricht.
                </p>
                <p>
                  Ein breiteres Verständnis vom ADHS-Spektrum hilft, diese Lücken zu
                  schließen. Es geht darum, Aufmerksamkeit auf weniger sichtbare
                  Ausprägungen zu lenken: innere Unruhe, emotionale Dysregulation,
                  chronische Erschöpfung oder das Gefühl, ständig „hinterherzuhinken“.
                  Je früher diese Muster erkannt werden, desto eher können Betroffene
                  passende Unterstützung finden – unabhängig davon, wie ihr ADHS nach
                  außen wirkt.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="spektrum-alltag">
            <AccordionTrigger className="text-base">
              ADHS-Spektrum im Alltag und Beruf
            </AccordionTrigger>
            <AccordionContent>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p>
                  Im Berufsleben kann das ADHS-Spektrum besonders deutlich werden:
                  Prokrastination trotz Deadline-Druck, Schwierigkeiten bei Meetings,
                  Überforderung durch parallele Aufgaben oder das Gefühl, nur unter
                  Druck richtig leistungsfähig zu sein. Gleichzeitig bringt ADHS oft
                  Stärken mit: Kreativität, schnelles Assoziieren, Problemlösung unter
                  Zeitdruck, hohe Empathie oder die Fähigkeit, sich intensiv in neue
                  Themen einzuarbeiten.
                </p>
                <p>
                  Ein realistischer Blick auf das eigene ADHS-Spektrum hilft, sowohl
                  Herausforderungen als auch Ressourcen zu erkennen. Nicht jede:r muss
                  alle Aufgaben gleich gut bewältigen. Wichtiger ist, Strukturen zu
                  finden, die zum eigenen Nervensystem passen – sei es durch externe
                  Planungshilfen, klare Kommunikation im Team oder eine Arbeitsumgebung,
                  die Reize reduziert. ADHS ist kein Gegner, sondern ein Betriebssystem,
                  das andere Bedingungen braucht.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="spektrum-zusammenfassung">
            <AccordionTrigger className="text-base">
              Zusammenfassung
            </AccordionTrigger>
            <AccordionContent>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p>
                  Das ADHS-Spektrum bietet einen differenzierteren Blick auf eine
                  Bedingung, die lange nur über Hyperaktivität und Unaufmerksamkeit
                  definiert wurde. Elf Dimensionen zeigen, wie vielfältig ADHS sich
                  äußern kann – von exekutiven Funktionen und emotionaler Regulation
                  über Zeitwahrnehmung und Interozeption bis hin zu Masking und
                  sensorischer Verarbeitung.
                </p>
                <p>
                  Auf dieser Seite kannst du jede Dimension einzeln erkunden, ihre
                  wissenschaftlichen Grundlagen verstehen und passende Strategien
                  finden. Kombiniert mit dem Screener entsteht so ein individuelles
                  Bild deines eigenen ADHS-Spektrums. Es ist kein medizinisches Urteil,
                  sondern ein Ausgangspunkt: für mehr Selbstverständnis, bessere
                  Gespräche mit Fachkräften und einen Alltag, der besser zu dir passt.
                  Klicke dich durch die einzelnen Dimensionen und finde die Bereiche,
                  die für dich am wichtigsten sind.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
