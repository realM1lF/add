import Link from "next/link";
import { Heart, Shield, Mail } from "lucide-react";

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
      <div className="mx-auto max-w-6xl">
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
              Verstehe dein individuelles ADHS-Profil entlang elf Dimensionen.
              Wissenschaftlich fundiert, empathisch und ohne Diagnose-Druck. Deine
              Daten bleiben auf deinem Gerät.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-xs text-muted-foreground">
              <Shield className="size-4" />
              Keine Diagnose. Nur Selbsterkundung.
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
            <a
              href="mailto:hallo@adhsleben.org"
              className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="size-4" />
              hallo@adhsleben.org
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} ADHS-Spektrum. Mit{" "}
            <Heart className="inline size-3 text-primary" aria-hidden="true" /> für
            mehr Verständnis gebaut.
          </p>
          <p className="text-xs text-muted-foreground">
            Bei akuten Krisen: Telefonseelsorge{" "}
            <a
              href="tel:08001110111"
              className="underline underline-offset-2 transition-colors hover:text-foreground"
            >
              0800 / 111 0 111
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
