"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useScreener } from "@/hooks/useScreener";
import { calculateAsrsScore, calculateDimensionScores, encodeScores } from "@/lib/score";
import { allQuestions, answerLabels } from "@/lib/data/dimensions";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, RotateCcw, AlertCircle } from "lucide-react";

const TOTAL_QUESTIONS = allQuestions.length;

export function ScreenerClient() {
  const router = useRouter();
  const {
    currentQuestion,
    currentIndex,
    answers,
    progress,
    isFirst,
    isLast,
    isComplete,
    answer,
    next,
    previous,
    reset,
  } = useScreener(allQuestions);

  const showResume = isComplete;

  const handleAnswer = (value: number) => {
    answer(value);
    if (!isLast) {
      setTimeout(next, 220);
    }
  };

  const handleFinish = () => {
    const dimensionScores = calculateDimensionScores(answers);
    const hash = encodeScores(dimensionScores);
    router.push(`/result?scores=${encodeURIComponent(hash)}`);
  };

  const handleRestart = () => {
    reset();
  };

  if (!currentQuestion) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    );
  }

  if (showResume) {
    const asrs = calculateAsrsScore(answers);
    return (
      <Card className="mx-auto max-w-2xl">
        <CardContent className="pt-8 text-center">
          <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <AlertCircle className="size-8" />
          </div>
          <h2 className="text-2xl font-medium tracking-tight">
            Du hast alle Fragen beantwortet
          </h2>
          <p className="mt-3 text-muted-foreground">
            ASRS-5-Score: <strong className="text-foreground">{asrs.score} / 24</strong> ({asrs.label})
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button onClick={handleFinish} className="gap-2 rounded-full">
              Ergebnis ansehen
              <ArrowRight className="size-4" />
            </Button>
            <Button variant="outline" onClick={handleRestart} className="gap-2 rounded-full">
              <RotateCcw className="size-4" />
              Neu starten
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8">
        <div className="mb-3 flex items-center justify-between text-sm text-muted-foreground">
          <span className="font-mono">Frage {currentIndex + 1} / {TOTAL_QUESTIONS}</span>
          <span>ASRS-5 + erweitertes Profil</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Card className="overflow-hidden">
        <CardContent className="pt-8 pb-4">
          <h2 className="text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
            {currentQuestion.text}
          </h2>
          <div className="mt-4 space-y-3">
            {currentQuestion.examples.map((example, index) => (
              <p
                key={index}
                className="text-lg leading-relaxed text-muted-foreground"
              >
                <span className="text-primary">
                  {currentQuestion.examples.length > 1
                    ? `Beispiel ${index + 1}:`
                    : "Beispiel:"}
                </span>{" "}
                {example}
              </p>
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex-col gap-3 pb-8">
          <div className="grid w-full gap-2 sm:grid-cols-5">
            {[0, 1, 2, 3, 4].map((value) => {
              const selected = answers[currentQuestion.id] === value;
              return (
                <Button
                  key={value}
                  type="button"
                  variant={selected ? "default" : "outline"}
                  onClick={() => handleAnswer(value)}
                  className="h-auto min-h-[3.5rem] flex-col gap-1 rounded-xl px-2 py-3 text-sm"
                >
                  <span className="font-mono text-xs opacity-70">{value}</span>
                  <span>{answerLabels[value]}</span>
                </Button>
              );
            })}
          </div>

          <div className="flex w-full items-center justify-between pt-4">
            <Button
              type="button"
              variant="ghost"
              onClick={previous}
              disabled={isFirst}
              className="gap-2 rounded-full"
            >
              <ArrowLeft className="size-4" />
              Zurück
            </Button>

            {isLast ? (
              <Button
                type="button"
                onClick={handleFinish}
                disabled={answers[currentQuestion.id] === undefined}
                className="gap-2 rounded-full"
              >
                Ergebnis ansehen
                <ArrowRight className="size-4" />
              </Button>
            ) : (
              <Button
                type="button"
                onClick={next}
                disabled={answers[currentQuestion.id] === undefined}
                className="gap-2 rounded-full"
              >
                Weiter
                <ArrowRight className="size-4" />
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>

      <p className="mt-6 text-center text-xs text-muted-foreground">
        Du kannst jederzeit pausieren und später zurückkehren. Dein Fortschritt
        wird automatisch in diesem Browser gespeichert. Das vollständige Profil
        umfasst {TOTAL_QUESTIONS} Fragen.
      </p>
    </div>
  );
}
