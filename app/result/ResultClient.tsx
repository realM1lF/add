"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { RadarChart } from "@/components/RadarChart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  calculateDimensionScores,
  calculateASRS5Score,
  decodeScores,
  exampleAverageScores,
  getASRS5Color,
  getASRS5DisplayLabel,
  getASRS5Interpretation,
  getASRS5Level,
  getAverageScore,
  getLevelColor,
  getLevelLabel,
  type DimensionScore,
} from "@/lib/score";
import { STORAGE_KEY, PROGRESS_KEY, ASRS_TRANSITION_SHOWN_KEY } from "@/hooks/useScreener";
import {
  ArrowLeft,
  RotateCcw,
  Sparkles,
  AlertTriangle,
  Info,
  ClipboardList,
} from "lucide-react";
import { ResultActionGuide } from "./ResultActionGuide";
import { ResponseReview } from "./ResponseReview";
import {
  allQuestions,
  dimensions,
  type DimensionCategory,
} from "@/lib/data/dimensions";

const CATEGORY_ORDER: DimensionCategory[] = [
  "core",
  "experience",
  "comorbidity",
];

const categoryHeadlines: Record<DimensionCategory, string> = {
  core: "Deine stärksten Kernbereiche:",
  experience: "Weitere häufige ADHS-Erfahrungen bei dir:",
  comorbidity: "Begleitbereiche, die du im Blick behalten solltest:",
};

function useLocalStorageAnswers(): Record<string, number> {
  const [answers, setAnswers] = React.useState<Record<string, number>>({});

  React.useEffect(() => {
    const read = () => {
      try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        setAnswers(raw ? (JSON.parse(raw) as Record<string, number>) : {});
      } catch {
        setAnswers({});
      }
    };

    read();
    window.addEventListener("storage", read);
    return () => window.removeEventListener("storage", read);
  }, []);

  return answers;
}

function toRadarPoints(scores: DimensionScore[]) {
  return scores.map((s) => ({
    subject: s.shortName,
    fullName: s.name,
    id: s.id,
    value: s.value,
    color: s.color,
  }));
}

export function ResultClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const localAnswers = useLocalStorageAnswers();
  const scoreHash = searchParams.get("scores");

  const scores = React.useMemo(() => {
    if (scoreHash) {
      const decoded = decodeScores(scoreHash);
      if (decoded) return decoded;
    }
    return calculateDimensionScores(localAnswers);
  }, [scoreHash, localAnswers]);

  const ownPoints = React.useMemo(() => toRadarPoints(scores), [scores]);

  const comparePoints = React.useMemo(
    () => toRadarPoints(exampleAverageScores),
    []
  );

  const notablesByCategory = React.useMemo(() => {
    const result: Record<DimensionCategory, DimensionScore[]> = {
      core: [],
      experience: [],
      comorbidity: [],
    };
    for (const category of CATEGORY_ORDER) {
      result[category] = [...scores]
        .filter((s) => s.category === category && s.value > 15)
        .sort((a, b) => b.value - a.value)
        .slice(0, 2);
    }
    return result;
  }, [scores]);

  const averageScore = getAverageScore(scores);
  const levelColor = getLevelColor(averageScore);
  const levelLabel = getLevelLabel(averageScore);

  const asrs5Score = calculateASRS5Score(localAnswers);
  const asrs5Level = getASRS5Level(asrs5Score);
  const asrs5Color = getASRS5Color(asrs5Level);

  const scaleSteps = [
    { label: "Unauffällig", threshold: 0 },
    { label: "Leicht erhöht", threshold: 20 },
    { label: "Mäßig erhöht", threshold: 40 },
    { label: "Deutlich erhöht", threshold: 60 },
    { label: "Stark erhöht", threshold: 80 },
  ];

  return (
    <div className="mx-auto w-full min-w-0 max-w-4xl">
      <section className="space-y-6 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Dein Ergebnis
        </p>
        <h1 className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
          Dein individuelles Profil
        </h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Eine Momentaufnahme entlang verschiedener Dimensionen. Keine Diagnose –
          sondern ein Spiegel, der sich mit Zeit und Kontext verändern kann.
        </p>
      </section>

      <section className="mt-12">
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <div
            className="flex size-16 items-center justify-center rounded-full border-4 border-background shadow-lg"
            style={{ backgroundColor: levelColor }}
            role="img"
            aria-label={`Durchschnitt aller Dimensionen: ${Math.round(averageScore)}%, ${levelLabel}`}
          >
            <span className="text-2xl font-medium text-white">
              {Math.round(averageScore)}
            </span>
          </div>
          <div className="text-center sm:text-left">
            <p
              className="text-2xl font-medium tracking-tight"
              style={{ color: levelColor }}
            >
              {levelLabel}
            </p>
            <p className="text-sm text-muted-foreground">
              Durchschnitt aller Dimensionen
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        {comparePoints.length > 0 ? (
          <figure>
            <RadarChart
              ownScores={ownPoints}
              compareScores={comparePoints}
              className="w-full"
              animate
              showAverageInfo={false}
              showToggleAll={false}
            />
            <figcaption className="mt-4 flex items-start gap-3 text-sm text-muted-foreground">
              <Info className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              Der eingezeichnete Durchschnitt ist eine vereinfachte Schätzung aus
              Screening-Forschung, keine klinische Norm.
            </figcaption>
          </figure>
        ) : (
          <RadarChart
            ownScores={ownPoints}
            compareScores={comparePoints}
            className="w-full"
            animate
            showAverageInfo={false}
            showToggleAll={false}
          />
        )}
      </section>

      <section className="mt-16">
        <Card className="border-0 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-base font-medium">
              <Sparkles className="size-4 text-primary" aria-hidden="true" />
              Deine Schwerpunkte
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              Dein Profil zeigt Merkmale, die bei ADHS häufig vorkommen. Diese
              Bereiche könnten in einer diagnostischen Abklärung besprochen
              werden.
            </p>

            <div className="space-y-6">
              {CATEGORY_ORDER.map((category) => {
                const dims = notablesByCategory[category];
                return (
                  <div key={category}>
                    <h3 className="mb-2 text-sm font-medium text-foreground">
                      {categoryHeadlines[category]}
                    </h3>
                    {dims.length === 0 ? (
                      <p className="text-sm text-muted-foreground">
                        Keine auffälligen Werte in dieser Kategorie.
                      </p>
                    ) : (
                      <ul className="space-y-2">
                        {dims.map((dim) => (
                          <li
                            key={dim.id}
                            className="flex items-center gap-3"
                          >
                            <span
                              className="size-2.5 rounded-full"
                              style={{ backgroundColor: dim.color }}
                              aria-hidden="true"
                            />
                            <span className="flex-1 text-sm font-medium">
                              {dim.name}
                            </span>
                            <span className="font-mono text-sm text-muted-foreground">
                              {Math.round(dim.value)}%
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mt-16">
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-foreground">Einschätzungs-Skala</span>
          </div>
          <div className="relative h-2 w-full rounded-full bg-muted">
            <div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                width: "100%",
                background:
                  "linear-gradient(to right, hsl(142, 76%, 44%), hsl(100, 76%, 44%), hsl(57, 76%, 44%), hsl(28, 76%, 44%), hsl(0, 76%, 44%))",
              }}
            />
            <div
              className="absolute top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-background shadow"
              style={{ left: `${Math.min(100, Math.max(0, averageScore))}%`, backgroundColor: levelColor }}
            />
          </div>
          <div className="relative h-5 w-full text-xs text-muted-foreground">
            {scaleSteps.map((step, index) => {
              const isFirst = index === 0;
              const isLast = index === scaleSteps.length - 1;
              return (
                <span
                  key={step.label}
                  className={`absolute ${
                    isFirst
                      ? "left-0"
                      : isLast
                      ? "translate-x-[-100%]"
                      : "-translate-x-1/2"
                  }`}
                  style={{ left: `${step.threshold}%` }}
                >
                  {step.label}
                </span>
              );
            })}
          </div>
        </div>

        <div className="mt-6 flex items-start gap-3 text-sm text-muted-foreground">
          <Info className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <p>
            Die Skala zeigt Orientierungswerte auf Basis deines Durchschnitts über
            alle Dimensionen. Höhere Werte deuten auf eine stärkere Ausprägung hin.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <ResultActionGuide
          averageScore={averageScore}
          levelColor={levelColor}
          levelLabel={levelLabel}
        />
      </section>

      <section className="mt-16">
        <Card className="border-0 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-base font-medium">
              <ClipboardList className="size-4 text-primary" aria-hidden="true" />
              ASRS-5 Schnell-Screener
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
              <div
                className="flex size-28 items-center justify-center rounded-full border-4 border-background shadow-lg"
                style={{ backgroundColor: asrs5Color }}
                role="img"
                aria-label={`ASRS-5 Ergebnis: ${asrs5Score} von 24 Punkten, Level ${asrs5Level}`}
              >
                <span className="text-5xl font-medium text-white">
                  {asrs5Score}
                </span>
              </div>
              <div className="text-center sm:text-left">
                <p
                  className="text-3xl font-medium tracking-tight"
                  style={{ color: asrs5Color }}
                >
                  {getASRS5DisplayLabel(asrs5Level)}
                </p>
                <p className="text-sm text-muted-foreground">
                  Von maximal 24 Punkten
                </p>
              </div>
            </div>

            {asrs5Level === "erhöht" && (
              <div className="mt-6 rounded-xl border border-destructive/20 bg-destructive/5 p-4" role="alert">
                <div className="flex items-start gap-3">
                  <AlertTriangle
                    className="mt-0.5 size-5 shrink-0"
                    style={{ color: asrs5Color }}
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-relaxed text-foreground">
                    Ein Wert von 14 oder mehr Punkten ist ein Hinweis auf eine
                    erhöhte Wahrscheinlichkeit von ADHS. Sprich mit einer Fachkraft
                    über eine Abklärung.
                  </p>
                </div>
              </div>
            )}

            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              {getASRS5Interpretation(asrs5Score)}
            </p>

            <div className="mt-4 flex items-start gap-3 text-sm text-muted-foreground">
              <Info className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <p>
                Der ASRS-5 ist ein wissenschaftlich validiertes Screening-Instrument
                der WHO. Er ersetzt keine Diagnose.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <ResponseReview answers={localAnswers} />

      <Card className="mt-16 border-l-4 border-l-primary">
        <CardContent className="flex gap-4 py-6">
          <AlertTriangle className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
          <div>
            <h3 className="font-medium text-foreground">Wichtiger Hinweis</h3>
            <p className="mt-1 leading-relaxed text-muted-foreground">
              Dieses Tool ersetzt keine Diagnose durch eine Fachkraft. Wenn du
              dich stark beeinträchtigt fühlst oder anhaltend leidest, sprich
              mit einer Ärztin/einem Arzt oder Psychotherapeuten.
            </p>
          </div>
        </CardContent>
      </Card>

      <section className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-border bg-card p-6 sm:flex-row">
        <div>
          <h3 className="text-lg font-medium text-foreground">
            Möchtest du das Profil wiederholen?
          </h3>
          <p className="text-muted-foreground">
            Das Profil umfasst {allQuestions.length} Fragen entlang {dimensions.length} Dimensionen.
          </p>
        </div>
        <div className="flex gap-3">
          <Button asChild variant="outline" className="rounded-full gap-2">
            <Link href="/screener">
              <ArrowLeft className="size-4" aria-hidden="true" />
              Zurück zum Screener
            </Link>
          </Button>
          <Button
            variant="outline"
            className="rounded-full gap-2"
            onClick={() => {
              if (typeof window !== "undefined") {
                window.localStorage.removeItem(STORAGE_KEY);
                window.localStorage.removeItem(PROGRESS_KEY);
                window.localStorage.removeItem(ASRS_TRANSITION_SHOWN_KEY);
              }
              router.push("/screener");
            }}
          >
            <RotateCcw className="size-4" aria-hidden="true" />
            Neu beginnen
          </Button>
        </div>
      </section>
    </div>
  );
}
