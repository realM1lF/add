"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BookOpen,
  ClipboardList,
  Stethoscope,
  Printer,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { allQuestions, dimensions } from "@/lib/data/dimensions";

interface Action {
  icon: React.ReactNode;
  title: string;
  description: string;
  cta?: {
    label: string;
    href?: string;
    onClick?: () => void;
    variant?: "default" | "outline";
  };
}

interface ResultActionGuideProps {
  averageScore: number;
  levelColor: string;
  levelLabel: string;
}

export function ResultActionGuide({
  averageScore,
  levelColor,
  levelLabel,
}: ResultActionGuideProps) {
  const band = getBand(averageScore);
  const actions = getActions(band);

  return (
    <Card
      className="overflow-hidden border-0 shadow-sm"
      style={{ borderLeftWidth: "4px", borderLeftColor: levelColor }}
    >
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <span
            className="inline-flex rounded-full px-3 py-1 text-sm font-medium"
            style={{ backgroundColor: `${levelColor}22`, color: levelColor }}
          >
            {levelLabel}
          </span>
        </div>
        <CardTitle className="mt-3 text-xl font-medium tracking-tight">
          Was bedeutet das für dich?
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="leading-relaxed text-muted-foreground">
          {getInterpretation(band)}
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {actions.map((action, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 rounded-xl bg-muted/30 p-4"
            >
              <div className="flex items-center gap-3">
                <span
                  className="flex size-9 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `${levelColor}18`, color: levelColor }}
                >
                  {action.icon}
                </span>
                <h4 className="font-medium">{action.title}</h4>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {action.description}
              </p>
              {action.cta && (
                <Button
                  variant={action.cta.variant ?? "outline"}
                  size="sm"
                  className="mt-auto w-fit gap-1.5 rounded-full"
                  onClick={action.cta.onClick}
                  asChild={!action.cta.onClick}
                >
                  {action.cta.onClick ? (
                    <>
                      {action.cta.label}
                      <ArrowRight className="size-3.5" aria-hidden="true" />
                    </>
                  ) : (
                    <Link href={action.cta.href ?? "#"}>
                      {action.cta.label}
                      <ArrowRight className="size-3.5" aria-hidden="true" />
                    </Link>
                  )}
                </Button>
              )}
            </div>
          ))}
        </div>

        {band === "elevated" || band === "high" ? (
          <div id="arztgespraech" className="rounded-xl bg-muted/30 p-4 text-sm text-muted-foreground">
            <p className="font-medium text-foreground">Für das Gespräch mit einer Fachkraft</p>
            <ul className="mt-2 list-disc space-y-1 pl-4">
              <li>Drucke deine Ergebnis-Zusammenfassung aus oder speichere sie.</li>
              <li>Notiere Beispiele aus dem Alltag, in denen du dich beeinträchtigt fühlst.</li>
              <li>Frage nach der Möglichkeit einer strukturierten ADHS-Diagnostik.</li>
              <li>Erkundige dich nach Behandlungsoptionen – mit und ohne Medikamente.</li>
            </ul>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}

type Band = "low" | "mild" | "moderate" | "elevated" | "high";

function getBand(averageScore: number): Band {
  if (averageScore < 20) return "low";
  if (averageScore < 40) return "mild";
  if (averageScore < 60) return "moderate";
  if (averageScore < 80) return "elevated";
  return "high";
}

function getInterpretation(band: Band): string {
  switch (band) {
    case "low":
      return "Dein Profil zeigt keine starken ADHS-typischen Muster. Das ist beruhigend – gleichzeitig kannst du natürlich trotzdem Unterstützung in Bereichen suchen, die dich gerade beschäftigen.";
    case "mild":
      return "Einige deiner Antworten passen zu ADHS-typischen Mustern, aber sie sind eher leicht ausgeprägt. Es lohnt sich, gezielt Strategien auszuprobieren und zu beobachten, in welchen Situationen du Unterstützung brauchst.";
    case "moderate":
      return "Mehrere Dimensionen sind mittelstark ausgeprägt. Das ist ein guter Anlass, das erweiterte Profil auszufüllen und dich mit den Themen auseinanderzusetzen, die am meisten zutreffen.";
    case "elevated":
      return "Dein Profil deckt sich deutlich mit ADHS-typischen Mustern. Wir empfehlen dir, mit einer Fachkraft über eine Abklärung zu sprechen – besonders wenn du dich im Alltag stark beeinträchtigt fühlst.";
    case "high":
      return "Deine Antworten zeigen eine starke Übereinstimmung mit ADHS-typischen Mustern. Eine zeitnahe Abklärung durch eine Fachkraft ist sinnvoll, um passende Unterstützung zu finden.";
  }
}

function getActions(band: Band): Action[] {
  switch (band) {
    case "low":
      return [
        {
          icon: <BookOpen className="size-4" aria-hidden="true" />,
          title: "Themen durchstöbern",
          description:
            "Lies in den Bereichen, die dich interessieren, nach Strategien und Hintergründen.",
          cta: { label: "Zu den Themen", href: "/themen" },
        },
        {
          icon: <Sparkles className="size-4" aria-hidden="true" />,
          title: "Strategien ausprobieren",
          description:
            "Auch ohne auffälliges Profil können dir Organisationstools oder Fokus-Techniken helfen.",
          cta: { label: "Toolbox entdecken", href: "/strategien", variant: "default" },
        },
      ];
    case "mild":
      return [
        {
          icon: <BookOpen className="size-4" aria-hidden="true" />,
          title: "Schwerpunkte vertiefen",
          description:
            "Schau dir die Themen-Seiten zu deinen höchsten Dimensionen an.",
          cta: { label: "Themen ansehen", href: "/themen" },
        },
        {
          icon: <ClipboardList className="size-4" aria-hidden="true" />,
          title: "Erweitertes Profil ausfüllen",
          description:
            `Mit ${allQuestions.length} Fragen entlang ${dimensions.length} Dimensionen bekommst du ein genaueres Bild.`,
          cta: { label: "Profil erweitern", href: "/screener", variant: "default" },
        },
      ];
    case "moderate":
      return [
        {
          icon: <ClipboardList className="size-4" aria-hidden="true" />,
          title: "Erweitertes Profil ausfüllen",
          description:
            "Der kurze Screener zeigt nur einen Ausschnitt. Das erweiterte Profil hilft, Muster zu erkennen.",
          cta: { label: "Jetzt erweitern", href: "/screener", variant: "default" },
        },
        {
          icon: <BookOpen className="size-4" aria-hidden="true" />,
          title: "Passende Strategien lernen",
          description:
            "Entdecke gezielte Ansätze für die Bereiche, die bei dir am stärksten ausgeprägt sind.",
          cta: { label: "Strategien entdecken", href: "/strategien" },
        },
      ];
    case "elevated":
      return [
        {
          icon: <Stethoscope className="size-4" aria-hidden="true" />,
          title: "Fachkraft kontaktieren",
          description:
            "Ein Gespräch mit Hausarzt, Psychiater:in oder Psychotherapeut:in ist der nächste sinnvolle Schritt.",
          cta: { label: "Vorbereitungstipps", href: "#arztgespraech" },
        },
        {
          icon: <Printer className="size-4" aria-hidden="true" />,
          title: "Ergebnis mitnehmen",
          description:
            "Drucke dein Profil aus oder speichere es, um es im Gespräch mit einer Fachkraft zu verwenden.",
          cta: { label: "Zusammenfassung drucken", onClick: () => window.print() },
        },
      ];
    case "high":
      return [
        {
          icon: <Stethoscope className="size-4" aria-hidden="true" />,
          title: "Zeitnah abklären lassen",
          description:
            "Bei stark ausgeprägten Mustern ist eine professionelle Diagnostik wichtig, um passende Hilfe zu bekommen.",
          cta: { label: "Wie finde ich Hilfe?", href: "#arztgespraech", variant: "default" },
        },
        {
          icon: <Printer className="size-4" aria-hidden="true" />,
          title: "Ergebnis dokumentieren",
          description:
            "Nimm dein Profil und konkrete Alltagsbeispiele zum Termin mit.",
          cta: { label: "Zusammenfassung drucken", onClick: () => window.print() },
        },
      ];
  }
}
