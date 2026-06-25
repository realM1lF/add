"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useScreener } from "@/hooks/useScreener";
import { calculateDimensionScores, encodeScores } from "@/lib/score";
import { allQuestions, answerLabels } from "@/lib/data/dimensions";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, RotateCcw, AlertCircle } from "lucide-react";

const TOTAL_QUESTIONS = allQuestions.length;
const ANSWER_TRANSITION_DELAY_MS = 220;
const ASRS_TRANSITION_SHOWN_KEY = "adhs-screener-asrs-transition-shown";

function useIsClient() {
  return React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export function ScreenerClient() {
  const router = useRouter();
  const isClient = useIsClient();
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

  const [showAsrsTransition, setShowAsrsTransition] = React.useState(() => {
    if (typeof window === "undefined") return false;
    return (
      currentIndex === 6 &&
      window.localStorage.getItem(ASRS_TRANSITION_SHOWN_KEY) !== "true"
    );
  });
  const transitionRef = React.useRef<HTMLDivElement>(null);
  const questionHeadingRef = React.useRef<HTMLHeadingElement>(null);
  const answerTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const focusSkipRef = React.useRef(true);

  const isInAsrsBlock = currentIndex <= 5;

  const clearPendingTransition = React.useCallback(() => {
    if (answerTimeoutRef.current) {
      clearTimeout(answerTimeoutRef.current);
      answerTimeoutRef.current = null;
    }
  }, []);

  React.useEffect(() => {
    return () => {
      clearPendingTransition();
    };
  }, [clearPendingTransition]);

  React.useEffect(() => {
    if (showAsrsTransition && transitionRef.current) {
      transitionRef.current.focus();
    }
  }, [showAsrsTransition]);

  React.useEffect(() => {
    if (focusSkipRef.current) {
      focusSkipRef.current = false;
      return;
    }
    if (!showAsrsTransition && questionHeadingRef.current) {
      questionHeadingRef.current.focus();
    }
  }, [currentIndex, showAsrsTransition]);

  const handleAnswer = (value: number) => {
    clearPendingTransition();
    answer(value);
    if (currentIndex === 5) {
      next();
      setShowAsrsTransition(true);
      return;
    }
    if (!isLast) {
      answerTimeoutRef.current = setTimeout(next, ANSWER_TRANSITION_DELAY_MS);
    }
  };

  const handleNext = () => {
    if (currentIndex === 5) {
      next();
      setShowAsrsTransition(true);
      return;
    }
    next();
  };

  const handleTransitionContinue = () => {
    setShowAsrsTransition(false);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(ASRS_TRANSITION_SHOWN_KEY, "true");
    }
  };

  const handlePrevious = () => {
    clearPendingTransition();
    setShowAsrsTransition(false);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(ASRS_TRANSITION_SHOWN_KEY, "false");
    }
    previous();
  };

  const handleFinish = () => {
    const dimensionScores = calculateDimensionScores(answers);
    const hash = encodeScores(dimensionScores);
    router.push(`/result?scores=${encodeURIComponent(hash)}`);
  };

  const handleRestart = () => {
    clearPendingTransition();
    reset();
    setShowAsrsTransition(false);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(ASRS_TRANSITION_SHOWN_KEY, "false");
    }
  };

  if (!isClient || !currentQuestion) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    );
  }

  if (isComplete) {
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
            Jetzt kannst du dein Profil als interaktives Radar-Chart ansehen.
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
          <span>Zwölf Dimensionen</span>
        </div>
        <Progress
          value={progress}
          aria-label="Fortschritt"
          aria-valuetext={`Frage ${currentIndex + 1} von ${TOTAL_QUESTIONS}`}
          className="h-2"
        />
      </div>

      <Card className="overflow-hidden">
        {showAsrsTransition ? (
          <>
            <CardContent className="pt-8 pb-4 text-center">
              <div
                ref={transitionRef}
                tabIndex={-1}
                role="status"
                aria-live="polite"
                className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <AlertCircle className="size-8" />
                </div>
                <h2 className="text-2xl font-medium tracking-tight">
                  Danke. Im nächsten Teil geht es um weitere ADHS-relevante
                  Bereiche.
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Du hast den ASRS-5 Schnell-Check abgeschlossen.
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-3 pb-8">
              <div className="flex w-full items-center justify-between pt-4">
                <Button
                  variant="ghost"
                  onClick={handlePrevious}
                  className="gap-2 rounded-full"
                >
                  <ArrowLeft className="size-4" />
                  Zurück
                </Button>
                <Button
                  onClick={handleTransitionContinue}
                  className="gap-2 rounded-full"
                >
                  Weiter
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </CardFooter>
          </>
        ) : (
          <>
            <CardContent className="pt-8 pb-4">
              {isInAsrsBlock && (
                <p
                  role="status"
                  className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  aria-label="ASRS-5 Schnell-Check"
                >
                  ASRS-5 Schnell-Check
                </p>
              )}
              <h2
                ref={questionHeadingRef}
                tabIndex={-1}
                className="text-2xl font-medium leading-snug tracking-tight focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:text-3xl"
              >
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
                {([0, 1, 2, 3, 4] as const).map((value) => {
                  const selected = answers[currentQuestion.id] === value;
                  return (
                    <Button
                      key={value}
                      variant={selected ? "default" : "outline"}
                      aria-pressed={selected}
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
                  variant="ghost"
                  onClick={handlePrevious}
                  disabled={isFirst}
                  className="gap-2 rounded-full"
                >
                  <ArrowLeft className="size-4" />
                  Zurück
                </Button>

                {isLast ? (
                  <Button
                    onClick={handleFinish}
                    disabled={answers[currentQuestion.id] === undefined}
                    className="gap-2 rounded-full"
                  >
                    Ergebnis ansehen
                    <ArrowRight className="size-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleNext}
                    disabled={answers[currentQuestion.id] === undefined}
                    className="gap-2 rounded-full"
                  >
                    Weiter
                    <ArrowRight className="size-4" />
                  </Button>
                )}
              </div>
            </CardFooter>
          </>
        )}
      </Card>

      <p className="mt-6 text-center text-xs text-muted-foreground">
        Du kannst jederzeit pausieren und später zurückkehren. Dein Fortschritt
        wird automatisch in diesem Browser gespeichert. Das vollständige Profil
        umfasst {TOTAL_QUESTIONS} Fragen entlang zwölf Dimensionen.
      </p>
    </div>
  );
}
