import { allQuestions, asrsQuestions, dimensions } from "./data/dimensions";

export interface Answers {
  [questionId: string]: number;
}

export interface DimensionScore {
  id: string;
  name: string;
  shortName: string;
  value: number; // 0–100
  color: string;
  fill: string;
}

export interface AsrsResult {
  score: number;
  level: "low" | "moderate" | "elevated";
  label: string;
  interpretation: string;
}

export function calculateAsrsScore(answers: Answers): AsrsResult {
  const score = asrsQuestions.reduce((sum, q) => {
    return sum + (answers[q.id] ?? 0);
  }, 0);

  let level: AsrsResult["level"];
  let label: string;
  let interpretation: string;

  if (score <= 9) {
    level = "low";
    label = "Niedrig";
    interpretation =
      "Deine Antworten deuten nicht auf auffällige ADHS-Symptome hin. Das bedeutet nicht, dass du keine Unterstützung verdienst – nur dass die typischen ADHS-Muster in diesem Screening nicht stark ausgeprägt sind.";
  } else if (score <= 13) {
    level = "moderate";
    label = "Mittel";
    interpretation =
      "Einige deiner Antworten passen zu ADHS-typischen Mustern. Das ist ein guter Anlass, genauer hinzuschauen – entweder mit dem erweiterten Profil hier oder im Gespräch mit einer Fachkraft.";
  } else {
    level = "elevated";
    label = "Erhöht";
    interpretation =
      "Deine Antworten decken sich stark mit ADHS-typischen Mustern. Wir empfehlen dir, das erweiterte Profil auszufüllen und mit einer Fachkraft über eine mögliche Abklärung zu sprechen.";
  }

  return { score, level, label, interpretation };
}

export function calculateDimensionScores(answers: Answers): DimensionScore[] {
  const scores: Record<string, number> = {};
  const counts: Record<string, number> = {};

  for (const question of allQuestions) {
    const value = answers[question.id];
    if (value === undefined) continue;

    scores[question.dimensionId] = (scores[question.dimensionId] ?? 0) + value;
    counts[question.dimensionId] = (counts[question.dimensionId] ?? 0) + 1;
  }

  return dimensions.map((dim) => {
    const answeredCount = counts[dim.id] ?? 0;
    const maxPoints = answeredCount * 4;

    let value: number;
    if (maxPoints === 0) {
      // No data for this dimension yet; show a subtle neutral value so the
      // radar chart still renders, but clearly distinct from real scores.
      value = 15;
    } else {
      value = Math.round((scores[dim.id] / maxPoints) * 100);
    }

    return {
      id: dim.id,
      name: dim.name,
      shortName: dim.shortName,
      value,
      color: dim.color,
      fill: dim.fill,
    };
  });
}

export function encodeScores(scores: DimensionScore[]): string {
  try {
    const payload = scores.map((s) => [s.id, s.value]);
    return btoa(JSON.stringify(payload));
  } catch {
    return "";
  }
}

export function decodeScores(hash: string): DimensionScore[] | null {
  try {
    const parsed = JSON.parse(atob(hash)) as [string, number][];
    const map = new Map(parsed);

    return dimensions.map((dim) => ({
      id: dim.id,
      name: dim.name,
      shortName: dim.shortName,
      value: map.get(dim.id) ?? 15,
      color: dim.color,
      fill: dim.fill,
    }));
  } catch {
    return null;
  }
}

// Neurotypical (community) reference values used for the "compare" overlay.
// - ASRS-5 Part A community mean from Adler et al. (2018), n=22,397:
//   M = 10.88 / 24 max = ~45%.
//   This applies to the three ASRS-5 dimensions (U, H, I).
// - Because newer data (e.g. NHS England 2023/24; Nivins et al. 2026) suggest
//   a modest population-level rise in ADHD-like symptoms, we nudge these
//   reference values up slightly to ~50% and use ~30% for the extended
//   dimensions (no normed data exist for those; this is a conservative estimate
//   that corresponds to "seldom" to "sometimes" on average).
const NEUROTYPICAL_AVERAGE: Record<string, number> = {
  unaufmerksamkeit: 50,
  hyperaktivitaet: 50,
  impulsivitaet: 50,
  "exekutive-funktionen": 30,
  "emotionale-dysregulation": 30,
  rsd: 30,
  zeitwahrnehmung: 30,
  interozeption: 30,
  hyperfokus: 30,
  sensorik: 30,
  masking: 30,
};

export const exampleAverageScores: DimensionScore[] = dimensions.map((dim) => ({
  id: dim.id,
  name: dim.name,
  shortName: dim.shortName,
  value: NEUROTYPICAL_AVERAGE[dim.id] ?? 25,
  color: dim.color,
  fill: dim.fill,
}));

export function getAverageScore<T extends { value: number }>(scores: T[]): number {
  if (scores.length === 0) return 0;
  return scores.reduce((sum, s) => sum + s.value, 0) / scores.length;
}

export function getLevelColor(average: number): string {
  const clamped = Math.max(0, Math.min(100, average));
  // Grün (142°) → Rot (0°)
  const hue = 142 - (clamped / 100) * 142;
  return `hsl(${hue}, 76%, 44%)`;
}

export function getLevelFill(average: number): string {
  const clamped = Math.max(0, Math.min(100, average));
  const hue = 142 - (clamped / 100) * 142;
  return `hsla(${hue}, 76%, 44%, 0.22)`;
}

export function getLevelLabel(average: number): string {
  if (average < 20) return "Unauffällig";
  if (average < 40) return "Leicht erhöht";
  if (average < 60) return "Mäßig erhöht";
  if (average < 80) return "Deutlich erhöht";
  return "Stark erhöht";
}
