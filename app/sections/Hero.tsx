import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SpectrumGlow } from "@/components/SpectrumGlow";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center sm:px-8 lg:px-12">
      <SpectrumGlow />

      <div className="relative z-10 mx-auto max-w-3xl">
        <div className="relative mx-auto mb-8 w-56 sm:w-72 md:w-80">
          <div className="absolute -right-2 top-0 z-20 sm:-right-4 sm:top-2">
            <div className="relative max-w-[12rem] rounded-2xl border border-border bg-card px-4 py-3 shadow-lg sm:max-w-[14rem]">
              <p className="text-balance text-sm font-medium leading-snug text-foreground sm:text-base">
                Ich bin nur hier um süß auszusehen.
              </p>
              <span
                className="absolute -bottom-1.5 left-4 size-3 rotate-45 border-b border-r border-border bg-card"
                aria-hidden="true"
              />
            </div>
          </div>

          <Image
            src="/logo.png"
            alt="ADHS-Spektrum Maskottchen"
            width={320}
            height={320}
            className="h-auto w-full"
            priority
          />
        </div>

        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-sm">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-40" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          Forschungsbasiert · Keine Diagnose · Daten bleiben auf deinem Gerät
        </p>

        <h1 className="text-balance text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Lerne dich selbst besser kennen und werfe einen Blick auf dein
          Spektrum.
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Kein Diagnose-Tool, sondern ein erster Schritt zur Selbsterkundung.
          Beantworte den Screener, entdecke dein individuelles Profil und finde
          Strategien, die zu dir passen.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-12 gap-2 rounded-full px-8 text-base"
          >
            <Link href="/screener">
              Jetzt Profil erkunden
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 rounded-full px-8 text-base"
          >
            <Link href="#so-funktioniert-es">Wie funktioniert es?</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
