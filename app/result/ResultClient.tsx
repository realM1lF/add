"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { RadarChart } from "@/components/RadarChart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  calculateAsrsScore,
  calculateDimensionScores,
  decodeScores,
  exampleAverageScores,
  getAverageScore,
  getLevelColor,
  getLevelLabel,
  type AsrsResult,
} from "@/lib/score";
import { asrsQuestions } from "@/lib/data/dimensions";
import { STORAGE_KEY } from "@/hooks/useScreener";
import {
  ArrowLeft,
  RotateCcw,
  Sparkles,
  AlertTriangle,
  Info,
} from "lucide-react";
import { ResultActionGuide } from "./ResultActionGuide";

function loadAnswers(): Record<string, number> {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function ResultClient() {
  const searchParams = useSearchParams();

  const [scores, setScores] = React.useState(() => {
    const hash = searchParams.get("scores");
    if (hash) {
      const decoded = decodeScores(hash);
      if (decoded) return decoded;
    }
    // Konsistenter Server/Client-Default, wenn keine URL-Daten vorliegen.
    // Die echten LocalStorage-Daten werden nach der Hydration geladen.
    return calculateDimensionScores({});
  });

  const [asrs, setAsrs] = React.useState<AsrsResult>({
    score: 0,
    level: "low",
    label: "–",
    interpretation: "",
  });

  React.useEffect(() => {
    const hash = searchParams.get("scores");
    if (hash) return; // URL-Daten haben Vorrang

    const answers = loadAnswers();
    setScores(calculateDimensionScores(answers));

    const valid = asrsQuestions.every((q) => answers[q.id] !== undefined);
    if (valid) {
      setAsrs(calculateAsrsScore(answers));
    }
  }, [searchParams]);

  const ownPoints = scores.map((s) => ({
    subject: s.shortName,
    fullName: s.name,
    id: s.id,
    value: s.value,
    color: s.color,
  }));

  const comparePoints = exampleAverageScores.map((s) => ({
    subject: s.shortName,
    fullName: s.name,
    id: s.id,
    value: s.value,
    color: s.color,
  }));

  const topDimensions = [...scores]
    .filter((s) => s.value > 15)
    .sort((a, b) => b.value - a.value)
    .slice(0, 3);

  const averageScore = getAverageScore(scores);
  const levelColor = getLevelColor(averageScore);
  const levelLabel = getLevelLabel(averageScore);

  const scaleSteps = [
    { label: "Unauffällig", threshold: 0 },
    { label: "Leicht", threshold: 20 },
    { label: "Mäßig", threshold: 40 },
    { label: "Deutlich", threshold: 60 },
    { label: "Stark", threshold: 80 },
  ];

  return (
    <div className="mx-auto max-w-4xl">
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
        <RadarChart
          ownScores={ownPoints}
          compareScores={comparePoints}
          className="w-full"
          animate
          showAverageInfo={false}
          showToggleAll={false}
        />
      </section>

      <section className="mt-16 grid gap-6 sm:grid-cols-2">
        <Card className="border-0 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-base font-medium">
              <Sparkles className="size-4 text-primary" />
              Deine Schwerpunkte
            </CardTitle>
          </CardHeader>
          <CardContent>
            {topDimensions.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                Der Screener deckt nur drei Dimensionen ab. Fülle das erweiterte
                Profil aus, um alle Bereiche zu sehen.
              </p>
            ) : (
              <ul className="space-y-3">
                {topDimensions.map((dim) => (
                  <li key={dim.id} className="flex items-center gap-3">
                    <span
                      className="size-2.5 rounded-full"
                      style={{ backgroundColor: dim.color }}
                    />
                    <span className="flex-1 text-sm font-medium">{dim.name}</span>
                    <span className="font-mono text-sm text-muted-foreground">
                      {Math.round(dim.value)}%
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-base font-medium">ASRS-5 Einschätzung</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-medium tracking-tight text-foreground">
                {asrs.score}
              </span>
              <span className="text-sm text-muted-foreground">/ 24 Punkte</span>
            </div>
            <p
              className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${
                asrs.level === "elevated"
                  ? "bg-primary/10 text-primary"
                  : asrs.level === "moderate"
                  ? "bg-secondary/10 text-secondary"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {asrs.label}
            </p>
            {asrs.interpretation && (
              <p className="text-sm leading-relaxed text-muted-foreground">
                {asrs.interpretation}
              </p>
            )}
          </CardContent>
        </Card>
      </section>

      <section className="mt-16">
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-foreground">Einschätzungs-Skala</span>
            <span className="text-muted-foreground">ASRS-5-Cutoff bei ca. 60 %</span>
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
            {scaleSteps.map((step) => (
              <span
                key={step.label}
                className="absolute -translate-x-1/2"
                style={{ left: `${step.threshold}%` }}
              >
                {step.label}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-start gap-3 text-sm text-muted-foreground">
          <Info className="mt-0.5 size-4 shrink-0" />
          <p>
            Die Skala zeigt Orientierungswerte. Ab etwa 60 % entspricht das in etwa
            dem ASRS-5-Cutoff (14/24 Punkte), ab dem eine weiterführende Abklärung
            sinnvoll ist. Die finale Beurteilung obliegt aber immer einer Fachkraft.
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

      <Card className="mt-16 border-l-4 border-l-primary">
        <CardContent className="flex gap-4 py-6">
          <AlertTriangle className="mt-0.5 size-5 shrink-0 text-primary" />
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
            Möchtest du tiefer blicken?
          </h3>
          <p className="text-muted-foreground">
            Das erweiterte Profil umfasst 60 Fragen entlang elf Dimensionen.
          </p>
        </div>
        <div className="flex gap-3">
          <Button asChild variant="outline" className="rounded-full gap-2">
            <Link href="/screener">
              <ArrowLeft className="size-4" />
              Zurück zum Screener
            </Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full gap-2">
            <Link href="/">
              <RotateCcw className="size-4" />
              Neu beginnen
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
