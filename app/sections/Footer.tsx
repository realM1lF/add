import Link from "next/link";
import { AlertTriangle, Heart, Lock } from "lucide-react";

const navLinks = [
  { href: "/themen", label: "Das Spektrum" },
  { href: "/strategien", label: "Strategien" },
  { href: "/quellen", label: "Quellen" },
  { href: "/screener", label: "Screener" },
];

const legalLinks = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-card/30 px-6 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl space-y-10">
        {/* Medical disclaimer */}
        <div className="flex items-start gap-4 rounded-2xl border border-border bg-card/50 p-5">
          <AlertTriangle
            className="mt-0.5 size-5 shrink-0 text-foreground"
            aria-hidden="true"
          />
          <p className="text-sm leading-relaxed text-foreground">
            <strong className="font-medium">Medizinischer Hinweis:</strong>{" "}
            Diese Website ersetzt keine medizinische oder psychotherapeutische
            Beratung. Bei Verdacht auf ADHS wende dich an eine Fachkraft.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-heading text-lg font-medium tracking-tight text-foreground"
            >
              ADHS-Spektrum
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Verstehe dein individuelles ADHS-Profil entlang zwölf Dimensionen.
              Wissenschaftlich fundiert, empathisch und ohne Diagnose-Druck.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-xs text-muted-foreground">
              <Lock className="size-4" aria-hidden="true" />
              Alle Antworten werden nur lokal in deinem Browser gespeichert.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading text-sm font-medium text-foreground">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h3 className="font-heading text-sm font-medium text-foreground">
              Rechtliches & Kontakt
            </h3>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} ADHS-Spektrum. Mit{" "}
            <Heart className="inline size-3 text-primary" aria-hidden="true" /> für
            mehr Verständnis gebaut.
          </p>

        </div>
      </div>
    </footer>
  );
}
