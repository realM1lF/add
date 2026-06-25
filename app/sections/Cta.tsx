import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Cta() {
  return (
    <section className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl rounded-3xl bg-foreground px-8 py-16 text-center text-background sm:px-12">
        <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
          Fange mit einem Schritt an
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-background/80">
          Starte den Screener, beantworte die Fragen und erhalte dein
          individuelles Profil mit passenden Strategien.
        </p>
        <Button
          asChild
          size="lg"
          className="mt-8 h-12 gap-2 rounded-full bg-background px-8 text-base text-foreground hover:bg-background/90"
        >
          <Link href="/screener">
            Screener starten
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
