import { describe, it, expect } from "vitest";
import {
  calculateDimensionScores,
  calculateASRS5Score,
  getASRS5Level,
  getASRS5Interpretation,
  decodeScores,
  encodeScores,
  getAverageScore,
  getLevelColor,
  getLevelFill,
  getLevelLabel,
} from "./score";

describe("calculateASRS5Score", () => {
  it("returns 0 when all answers are 'never'", () => {
    const answers = {
      "asrs-1": 0,
      "asrs-2": 0,
      "asrs-3": 0,
      "asrs-4": 0,
      "asrs-5": 0,
      "asrs-6": 0,
    };
    expect(calculateASRS5Score(answers)).toBe(0);
  });

  it("returns 24 when all answers are 'very often'", () => {
    const answers = {
      "asrs-1": 4,
      "asrs-2": 4,
      "asrs-3": 4,
      "asrs-4": 4,
      "asrs-5": 4,
      "asrs-6": 4,
    };
    expect(calculateASRS5Score(answers)).toBe(24);
  });

  it("returns elevated level at the cut-off of 14", () => {
    const answers = {
      "asrs-1": 2,
      "asrs-2": 2,
      "asrs-3": 2,
      "asrs-4": 2,
      "asrs-5": 3,
      "asrs-6": 3,
    };
    const score = calculateASRS5Score(answers);
    expect(score).toBe(14);
    expect(getASRS5Level(score)).toBe("erhöht");
  });

  it("returns low level for scores up to 9", () => {
    expect(getASRS5Level(9)).toBe("niedrig");
    expect(getASRS5Level(0)).toBe("niedrig");
  });

  it("returns medium level for scores 10-13", () => {
    expect(getASRS5Level(10)).toBe("mittel");
    expect(getASRS5Level(13)).toBe("mittel");
  });

  it("treats missing ASRS answers as 0", () => {
    expect(calculateASRS5Score({})).toBe(0);
    expect(calculateASRS5Score({ "asrs-1": 4 })).toBe(4);
    expect(calculateASRS5Score({ "asrs-6": 3 })).toBe(3);
  });

  it("interpretation mentions professional evaluation for elevated scores", () => {
    const text = getASRS5Interpretation(14);
    expect(text).toContain("Fachkraft");
  });
});

describe("calculateDimensionScores", () => {
  it("returns a neutral value for unanswered dimensions", () => {
    const scores = calculateDimensionScores({});
    expect(scores.length).toBeGreaterThan(0);
    expect(scores.every((s) => s.value === 15)).toBe(true);
  });

  it("includes a category for every dimension", () => {
    const scores = calculateDimensionScores({});
    expect(scores.every((s) => ["core", "experience", "comorbidity"].includes(s.category))).toBe(true);
  });

  it("calculates the inattention dimension correctly", () => {
    // ASRS-1 (unaufmerksamkeit) + u1, u2, u3, u4 (unaufmerksamkeit)
    const answers = {
      "asrs-1": 2,
      "u1": 2,
      "u2": 2,
      "u3": 2,
      "u4": 2,
    };
    const scores = calculateDimensionScores(answers);
    const inattention = scores.find((s) => s.id === "unaufmerksamkeit");
    expect(inattention).toBeDefined();
    expect(inattention?.value).toBe(50);
  });

  it("calculates the executive functions dimension including ASRS-2 and ASRS-3", () => {
    const answers = {
      "asrs-2": 3,
      "asrs-3": 3,
      "ef1": 2,
      "ef2": 2,
      "ef3": 2,
    };
    const scores = calculateDimensionScores(answers);
    const ef = scores.find((s) => s.id === "exekutive-funktionen");
    expect(ef).toBeDefined();
    // (3+3+2+2+2) / 20 = 12/20 = 60%
    expect(ef?.value).toBe(60);
  });

  it("normalizes partial dimension answers against the answered questions only", () => {
    const answers = {
      "h2": 4,
    };
    const scores = calculateDimensionScores(answers);
    const hyperactivity = scores.find((s) => s.id === "hyperaktivitaet");
    expect(hyperactivity?.value).toBe(100);
  });

  it("no longer contains an rsd dimension", () => {
    const scores = calculateDimensionScores({});
    expect(scores.find((s) => s.id === "rsd")).toBeUndefined();
  });
});

describe("encodeScores / decodeScores", () => {
  it("round-trips dimension scores including categories", () => {
    const scores = calculateDimensionScores({
      "asrs-1": 4,
      "u1": 4,
      "u2": 4,
      "u3": 4,
      "u4": 4,
    });
    const encoded = encodeScores(scores);
    const decoded = decodeScores(encoded);
    expect(decoded).not.toBeNull();
    expect(decoded?.length).toBe(scores.length);
    expect(decoded?.every((s) => s.category)).toBe(true);
  });

  it("returns null for invalid hashes", () => {
    expect(decodeScores("not-valid")).toBeNull();
  });

  it("round-trips every dimension id and value", () => {
    const scores = calculateDimensionScores({
      "asrs-1": 4,
      "u1": 4,
      "u2": 4,
      "u3": 4,
      "u4": 4,
      "asrs-2": 0,
      "h1": 2,
      "h2": 2,
      "h3": 2,
    });
    const encoded = encodeScores(scores);
    const decoded = decodeScores(encoded);
    expect(decoded).not.toBeNull();
    for (const original of scores) {
      const match = decoded?.find((s) => s.id === original.id);
      expect(match).toBeDefined();
      expect(match?.value).toBe(original.value);
      expect(match?.category).toBe(original.category);
    }
  });
});

describe("helper functions", () => {
  it("getAverageScore returns 0 for empty arrays and the arithmetic mean otherwise", () => {
    expect(getAverageScore([])).toBe(0);
    expect(getAverageScore([{ value: 10 }, { value: 20 }, { value: 30 }])).toBe(20);
  });

  it("getLevelColor returns a valid HSL string", () => {
    expect(getLevelColor(0)).toMatch(/^hsl\(/);
    expect(getLevelColor(50)).toMatch(/^hsl\(/);
    expect(getLevelColor(100)).toMatch(/^hsl\(/);
  });

  it("getLevelFill returns a transparent HSLA string", () => {
    expect(getLevelFill(25)).toMatch(/^hsla\(/);
    expect(getLevelFill(75)).toContain("0.22");
  });

  it("getLevelLabel returns the expected labels for its ranges", () => {
    expect(getLevelLabel(0)).toBe("Unauffällig");
    expect(getLevelLabel(19)).toBe("Unauffällig");
    expect(getLevelLabel(20)).toBe("Leicht erhöht");
    expect(getLevelLabel(39)).toBe("Leicht erhöht");
    expect(getLevelLabel(40)).toBe("Mäßig erhöht");
    expect(getLevelLabel(59)).toBe("Mäßig erhöht");
    expect(getLevelLabel(60)).toBe("Deutlich erhöht");
    expect(getLevelLabel(79)).toBe("Deutlich erhöht");
    expect(getLevelLabel(80)).toBe("Stark erhöht");
    expect(getLevelLabel(100)).toBe("Stark erhöht");
  });
});
