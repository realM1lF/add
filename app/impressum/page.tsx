import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Impressum – ADHS-Spektrum",
  description:
    "Impressum von ADHS-Spektrum. Angaben gemäß § 5 TMG, Haftungshinweise und Urheberrecht.",
};

export default function ImpressumPage() {
  return (
    <main className="flex flex-1 flex-col px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Zurück zur Startseite
        </Link>

        <h1 className="mt-8 text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          Impressum
        </h1>

        <div className="mt-10 rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="font-heading text-xl font-medium text-foreground">
            Angaben gemäß § 5 TMG
          </h2>

          <div className="mt-8 space-y-8">
            <section>
              <h3 className="font-heading text-base font-medium text-foreground">
                Verantwortlich für den Inhalt
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Sebastian Schwerdhöfer
                <br />
                Hauptstraße 51
                <br />
                97204 Höchberg
                <br />
                Deutschland
              </p>
            </section>

            <section>
              <h3 className="font-heading text-base font-medium text-foreground">
                Kontakt
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                E-Mail:{" "}
                <a
                  href="mailto:hallo@adhs-spektrum.de"
                  className="underline underline-offset-2 transition-colors hover:text-foreground"
                >
                  hallo@adhs-spektrum.de
                </a>
              </p>
            </section>

            <section>
              <h3 className="font-heading text-base font-medium text-foreground">
                Haftung für Inhalte
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
                auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
                §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
                überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                Tätigkeit hinweisen.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben hiervon
                unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
                Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
                Inhalte umgehend entfernen.
              </p>
            </section>

            <section>
              <h3 className="font-heading text-base font-medium text-foreground">
                Haftung für Links
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren
                Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
                fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
                Seiten verantwortlich.
              </p>
            </section>

            <section>
              <h3 className="font-heading text-base font-medium text-foreground">
                Urheberrecht
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
                Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
                Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
                jeweiligen Autors bzw. Erstellers.
              </p>
            </section>

            <section>
              <h3 className="font-heading text-base font-medium text-foreground">
                Hinweis zur medizinischen Information
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Die Inhalte dieser Website dienen ausschließlich der allgemeinen
                Information und Selbsterkundung. Sie stellen keine medizinische
                Beratung, Diagnose oder Behandlung dar. Bei gesundheitlichen Fragen
                wende dich bitte an eine qualifizierte Fachkraft.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
