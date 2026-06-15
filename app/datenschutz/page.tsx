import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – ADHS-Spektrum",
  description:
    "Datenschutzerklärung von ADHS-Spektrum. Informationen zur Datenverarbeitung, Speicherung, Hosting und deinen Rechten.",
};

export default function DatenschutzPage() {
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
          Datenschutzerklärung
        </h1>

        <div className="mt-10 rounded-2xl border border-border bg-card p-6 sm:p-8">
          <div className="space-y-10">
            <section>
              <h2 className="font-heading text-xl font-medium text-foreground">
                1. Datenschutz auf einen Blick
              </h2>
              <h3 className="mt-4 font-heading text-base font-medium text-foreground">
                Allgemeine Hinweise
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was
                mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
                besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                persönlich identifiziert werden können.
              </p>

              <h3 className="mt-6 font-heading text-base font-medium text-foreground">
                Datenerfassung auf dieser Website
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                <strong className="text-foreground">
                  Wer ist verantwortlich für die Datenerfassung auf dieser Website?
                </strong>
                <br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den
                Websitebetreiber:
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Sebastian Schwerdhöfer
                <br />
                Hauptstraße 51
                <br />
                97204 Höchberg
                <br />
                Deutschland
                <br />
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
              <h2 className="font-heading text-xl font-medium text-foreground">
                2. Hosting
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Diese Website wird über den Hosting-Anbieter Netlify, Inc., 2325 3rd
                Street, Suite 296, San Francisco, California 94107, USA, bereitgestellt.
                Beim Besuch der Website werden technisch notwendige Daten wie
                IP-Adresse, Browsertyp und Zugriffszeit auf den Servern von Netlify
                verarbeitet. Hierbei können auch personenbezogene Daten an Server von
                Netlify in den USA übermittelt werden. Weitere Informationen findest du
                in der{" "}
                <a
                  href="https://www.netlify.com/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 transition-colors hover:text-foreground"
                >
                  Datenschutzerklärung von Netlify
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-medium text-foreground">
                3. Allgemeine Hinweise und Pflichtinformationen
              </h2>
              <h3 className="mt-4 font-heading text-base font-medium text-foreground">
                Datenschutz
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
                Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
                vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften
                sowie dieser Datenschutzerklärung.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Die Nutzung unserer Website ist in der Regel ohne Angabe
                personenbezogener Daten möglich. Soweit auf unseren Seiten
                personenbezogene Daten (beispielsweise Name, Anschrift oder
                E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets
                auf freiwilliger Basis.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-medium text-foreground">
                4. Datenerfassung auf dieser Website
              </h2>
              <h3 className="mt-4 font-heading text-base font-medium text-foreground">
                Lokale Speicherung deiner Screener-Antworten
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Wenn du den Screener oder den erweiterten Fragebogen nutzt, werden
                deine Antworten ausschließlich lokal in deinem Browser gespeichert
                (LocalStorage). Sie werden nicht an unsere Server oder an Dritte
                übermittelt. Du kannst die gespeicherten Daten jederzeit in deinen
                Browser-Einstellungen löschen.
              </p>

              <h3 className="mt-6 font-heading text-base font-medium text-foreground">
                Server-Logdateien
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Der Hosting-Anbieter erhebt und speichert automatisch Informationen
                in sogenannten Server-Logdateien, die dein Browser automatisch an uns
                übermittelt. Dies sind:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht
                vorgenommen.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-medium text-foreground">
                5. Externe Dienste
              </h2>
              <h3 className="mt-4 font-heading text-base font-medium text-foreground">
                YouTube-Vorschaubilder
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Auf der Seite „Quellen“ werden Vorschaubilder von YouTube-Videos über
                die öffentliche Thumbnail-URL von YouTube geladen. Dabei handelt es
                sich um statische Bilder; es werden keine Cookies gesetzt und keine
                personenbezogenen Daten an YouTube übermittelt, solange du das Video
                nicht abspielst.
              </p>

              <h3 className="mt-6 font-heading text-base font-medium text-foreground">
                Externe Links
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Unsere Seite enthält Links zu externen Websites, beispielsweise zu
                Organisationen, wissenschaftlichen Quellen oder Social-Media-Profilen.
                Beim Klick auf einen solchen Link verlässt du unser Angebot. Für die
                Datenschutzpraktiken dieser externen Seiten sind deren Betreiber
                verantwortlich.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-medium text-foreground">
                6. Ihre Rechte
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Sie haben jederzeit das Recht auf Auskunft über die bei uns
                gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger
                sowie den Zweck der Datenverarbeitung. Sie haben außerdem ein Recht
                auf Berichtigung, Löschung oder Einschränkung der Verarbeitung dieser
                Daten.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich
                jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-medium text-foreground">
                7. Löschung deiner Daten
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Da wir selbst keine personenbezogenen Daten erheben oder speichern,
                entfällt eine serverseitige Löschung. Deine Screener-Antworten liegen
                ausschließlich lokal in deinem Browser. Du kannst sie in den
                Browser-Einstellungen unter „Website-Daten löschen“ entfernen.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
