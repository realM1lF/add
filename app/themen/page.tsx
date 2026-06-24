import type { Metadata } from "next";
import Link from "next/link";
import { topics } from "@/lib/data/topics";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowRight, Sparkles, Info } from "lucide-react";
import { SpectrumGraphic } from "./SpectrumGraphic";
import { TopicsSeoAccordion } from "./TopicsSeoAccordion";

export const metadata: Metadata = {
  title: "Das Spektrum – ADHS-Spektrum",
  description:
    "Entdecke die zwölf Dimensionen von ADHS: Erklärungen, Alltagsbeispiele, Strategien und Quellen – wissenschaftlich fundiert und verständlich erklärt.",
};

export default function TopicsOverviewPage() {
  return (
    <main className="flex flex-1 flex-col px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-6xl">
        <section className="relative grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-sm">
              <Sparkles className="size-3.5 text-primary" />
              12 Dimensionen – verständlich erklärt
            </div>

            <h1 className="text-balance text-3xl font-medium tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Das Spektrum
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              ADHS zeigt sich auf viele Weisen. Hier findest du zu jeder
              Dimension eine einfühlsame Erklärung, alltagsnahe Beispiele,
              konkrete Strategien und wissenschaftliche Quellen.
            </p>
          </div>

          <div className="flex justify-start lg:justify-end">
            <SpectrumGraphic />
          </div>
        </section>

        <Alert className="mt-8 max-w-3xl border-l-4 border-l-primary bg-card/50">
          <Info className="size-5 text-primary" />
          <AlertDescription>
            Nicht alle Themen müssen auf dich zutreffen. Manche Menschen haben
            vor allem Schwierigkeiten mit der Aufmerksamkeit, andere mit
            Impulsivität, wieder andere mit emotionaler Dysregulation oder
            Masking. Es gibt kein „richtiges“ ADHS-Profil.
          </AlertDescription>
        </Alert>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <Card
              key={topic.id}
              className="group flex flex-col overflow-hidden transition-shadow hover:shadow-md"
            >
              <CardContent className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <span
                    className="flex size-12 shrink-0 items-center justify-center rounded-2xl text-lg font-bold text-white"
                    style={{ backgroundColor: topic.color }}
                  >
                    {topic.shortName}
                  </span>
                </div>

                <h2 className="mt-5 text-xl font-medium text-foreground">
                  {topic.name}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {topic.description}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/80">
                  {topic.tagline}
                </p>

                <Button
                  asChild
                  className="mt-6 w-full gap-2 rounded-full"
                  style={{
                    backgroundColor: topic.color,
                    color: "#ffffff",
                  }}
                >
                  <Link href={`/themen/${topic.slug}`}>
                    Mehr erfahren
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <TopicsSeoAccordion />
      </div>
    </main>
  );
}
