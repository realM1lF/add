import type { Metadata } from "next";
import Link from "next/link";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Footer } from "./sections/Footer";
import "./globals.css";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://adhs-spektrum.de/#website",
      url: "https://adhs-spektrum.de",
      name: "ADHS-Spektrum",
      description:
        "Verstehe dein individuelles ADHS-Profil entlang elf Dimensionen. Wissenschaftlich fundiert, empathisch und ohne Diagnose-Druck.",
      publisher: {
        "@id": "https://adhs-spektrum.de/#organization",
      },
      inLanguage: "de-DE",
    },
    {
      "@type": "Organization",
      "@id": "https://adhs-spektrum.de/#organization",
      name: "ADHS-Spektrum",
      url: "https://adhs-spektrum.de",
      contactPoint: {
        "@type": "ContactPoint",
        email: "hallo@adhs-spektrum.de",
        contactType: "Kontakt",
        availableLanguage: "German",
      },
    },
  ],
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adhs-spektrum.de"),
  title: {
    default: "ADHS-Spektrum – Dein persönlicher Spiegel",
    template: "%s – ADHS-Spektrum",
  },
  description:
    "Verstehe dein individuelles ADHS-Profil entlang elf Dimensionen. Wissenschaftlich fundiert, empathisch und ohne Diagnose-Druck. Mit ASRS-5-Screener, erweitertem Profil und interaktivem Radar-Chart.",
  keywords: [
    "ADHS",
    "ADHS-Spektrum",
    "ADHS Screener",
    "ADHS Selbsttest",
    "ADHS Symptome",
    "ADHS Erwachsene",
    "ADHS Strategien",
    "ASRS-5",
    "Aufmerksamkeitsdefizit",
    "Hyperaktivität",
  ],
  authors: [{ name: "Sebastian Schwerdhöfer" }],
  creator: "Sebastian Schwerdhöfer",
  publisher: "ADHS-Spektrum",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://adhs-spektrum.de",
    siteName: "ADHS-Spektrum",
    title: "ADHS-Spektrum – Dein persönlicher Spiegel",
    description:
      "Verstehe dein individuelles ADHS-Profil entlang elf Dimensionen. Wissenschaftlich fundiert, empathisch und ohne Diagnose-Druck.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADHS-Spektrum – Dein persönlicher Spiegel",
    description:
      "Verstehe dein individuelles ADHS-Profil entlang elf Dimensionen. Wissenschaftlich fundiert, empathisch und ohne Diagnose-Druck.",
  },
  verification: {
    google: undefined,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {/* pimmel-easter-egg
        ⠀⠀⠀⠀⠀⠀⠀⠀⣠⣶⣿⣿⣿⣷⣤⡀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⢀⣾⡿⠋⠀⠿⠇⠉⠻⣿⣄⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⢠⣿⠏⠀⠀⠀⠀⠀⠀⠀⠙⣿⣆⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⢠⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣆⠀⠀⠀⠀
        ⠀⠀⠀⠀⢸⣿⡄⠀⠀⠀⢀⣤⣀⠀⠀⠀⠀⣿⡿⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠻⣿⣶⣶⣾⡿⠟⢿⣷⣶⣶⣿⡟⠁⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⣿⡏⠉⠁⠀⠀⠀⠀⠉⠉⣿⡇⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⣸⣿⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⣿⡇⢀⣴⣿⠇⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀
        ⠀⠀⠀⢀⣠⣴⣿⣷⣿⠟⠁⠀⠀⠀⠀⠀⣿⣧⣄⡀⠀⠀⠀
        ⠀⢀⣴⡿⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠙⢿⣷⣄⠀
        ⢠⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣿⣆
        ⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿
        ⣿⣇⠀⠀⠀⠀⠀⠀⢸⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿
        ⢹⣿⡄⠀⠀⠀⠀⠀⠀⢿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⡿
        ⠀⠻⣿⣦⣀⠀⠀⠀⠀⠈⣿⣷⣄⡀⠀⠀⠀⠀⣀⣤⣾⡟⠁
        ⠀⠀⠈⠛⠿⣿⣷⣶⣾⡿⠿⠛⠻⢿⣿⣶⣾⣿⠿⠛⠉⠀⠀
        */}
        <TooltipProvider>
          <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-8 lg:px-12">
              <Link
                href="/"
                className="font-heading text-lg font-medium tracking-tight text-foreground"
              >
                ADHS-Spektrum
              </Link>
              <nav className="flex items-center gap-4 text-sm">
                <Link
                  href="/themen"
                  className="hidden text-muted-foreground transition-colors hover:text-foreground sm:inline"
                >
                  Das Spektrum
                </Link>
                <Link
                  href="/strategien"
                  className="hidden text-muted-foreground transition-colors hover:text-foreground sm:inline"
                >
                  Strategien
                </Link>
                <Link
                  href="/quellen"
                  className="hidden text-muted-foreground transition-colors hover:text-foreground sm:inline"
                >
                  Quellen
                </Link>
                <Link
                  href="/screener"
                  className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Screener
                </Link>
              </nav>
            </div>
          </header>

          {children}

          <Footer />
        </TooltipProvider>
      </body>
    </html>
  );
}
