import {
  allQuestions,
  dimensions,
  ASRS5_QUESTION_IDS,
  type DimensionCategory,
} from "./data/dimensions";

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
  category: DimensionCategory;
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
      category: dim.category,
    };
  });
}

// ASRS-5 (WHO Adult ADHD Self-Report Scale, 6 Items).
// We use the unweighted 0–4 sum scoring recommended by Ron Kessler to avoid
// overestimating prevalence. Range 0–24. Cut-off ≥ 14 indicates an elevated
// likelihood of ADHD (research/04, research/10, research/13).
export function calculateASRS5Score(answers: Answers): number {
  return ASRS5_QUESTION_IDS.reduce((sum, id) => sum + (answers[id] ?? 0), 0);
}

export type ASRS5Level = "niedrig" | "mittel" | "erhöht";

export function getASRS5Level(score: number): ASRS5Level {
  if (score <= 9) return "niedrig";
  if (score <= 13) return "mittel";
  return "erhöht";
}

export function getASRS5Interpretation(score: number): string {
  const level = getASRS5Level(score);
  switch (level) {
    case "niedrig":
      return "Deine Antworten auf den validierten ASRS-5 Schnell-Screener liegen im niedrigen Bereich.";
    case "mittel":
      return "Deine Antworten auf den ASRS-5 liegen im mittleren Bereich. Beobachte weiter, in welchen Situationen du Unterstützung brauchst.";
    case "erhöht":
      return "Deine Antworten auf den ASRS-5 liegen im erhöhten Bereich. Das ist ein Hinweis, mit einer Fachkraft über eine Abklärung zu sprechen.";
  }
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
      category: dim.category,
    }));
  } catch {
    return null;
  }
}

// Neurotypical (community) reference values used for the "compare" overlay.
// These are simplified estimates, not clinical norms. Core dimensions use a
// slightly higher baseline; experience/context dimensions and comorbidities
// use a conservative ~30% estimate. Always label this transparently in the UI.
const NEUROTYPICAL_AVERAGE: Record<string, number> = {
  unaufmerksamkeit: 50,
  hyperaktivitaet: 50,
  impulsivitaet: 50,
  "exekutive-funktionen": 30,
  "emotionale-dysregulation": 30,
  zeitwahrnehmung: 30,
  interozeption: 30,
  hyperfokus: 30,
  sensorik: 30,
  masking: 30,
  schlaf: 30,
};

export const exampleAverageScores: DimensionScore[] = dimensions.map((dim) => ({
  id: dim.id,
  name: dim.name,
  shortName: dim.shortName,
  value: NEUROTYPICAL_AVERAGE[dim.id] ?? 25,
  color: dim.color,
  fill: dim.fill,
  category: dim.category,
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
