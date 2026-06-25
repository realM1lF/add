"use client";

import * as React from "react";
import { Question } from "@/lib/data/dimensions";

export interface Answers {
  [questionId: string]: number;
}

export const STORAGE_KEY = "adhs-screener-answers-v2";
export const PROGRESS_KEY = "adhs-screener-progress-v2";
export const ASRS_TRANSITION_SHOWN_KEY = "adhs-screener-asrs-transition-shown";

function loadAnswers(): Answers {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Answers) : {};
  } catch {
    return {};
  }
}

function saveAnswers(answers: Answers) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
  } catch {
    // ignore
  }
}

function loadIndex(): number {
  if (typeof window === "undefined") return 0;
  try {
    const raw = window.localStorage.getItem(PROGRESS_KEY);
    return raw ? Math.max(0, parseInt(raw, 10)) : 0;
  } catch {
    return 0;
  }
}

function saveIndex(index: number) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(PROGRESS_KEY, String(index));
  } catch {
    // ignore
  }
}

export function useScreener(questions: Question[]) {
  const questionIds = React.useMemo(
    () => new Set(questions.map((q) => q.id)),
    [questions]
  );

  const [answers, setAnswers] = React.useState<Answers>(() => {
    const loaded = loadAnswers();
    // Nur Antworten zu Fragen behalten, die im aktuellen Fragebogen existieren.
    // Das verhindert Probleme nach Fragebogen-Updates (z. B. geänderte IDs).
    const filtered: Answers = {};
    for (const id of questionIds) {
      if (loaded[id] !== undefined) {
        filtered[id] = loaded[id];
      }
    }
    return filtered;
  });

  const [currentIndex, setCurrentIndex] = React.useState(() => {
    const loaded = loadIndex();
    if (questions.length === 0) return 0;
    return Math.min(loaded, questions.length - 1);
  });

  React.useEffect(() => {
    saveAnswers(answers);
  }, [answers]);

  React.useEffect(() => {
    saveIndex(currentIndex);
  }, [currentIndex]);

  const currentQuestion = questions[currentIndex];
  const progress =
    questions.length > 0
      ? ((currentIndex + 1) / questions.length) * 100
      : 0;
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === questions.length - 1;
  const isComplete =
    questions.length > 0 &&
    questions.every((q) => answers[q.id] !== undefined);

  const answer = (value: number) => {
    if (!currentQuestion) return;
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }));
  };

  const next = () => {
    setCurrentIndex((i) => Math.min(questions.length - 1, i + 1));
  };

  const previous = () => {
    setCurrentIndex((i) => Math.max(0, i - 1));
  };

  const goTo = (index: number) => {
    setCurrentIndex(Math.max(0, Math.min(questions.length - 1, index)));
  };

  const reset = () => {
    setAnswers({});
    setCurrentIndex(0);
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(STORAGE_KEY);
      window.localStorage.removeItem(PROGRESS_KEY);
    }
  };

  return {
    answers,
    currentIndex,
    currentQuestion,
    progress,
    isFirst,
    isLast,
    isComplete,
    answer,
    next,
    previous,
    goTo,
    reset,
  };
}

