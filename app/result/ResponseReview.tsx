"use client";

import * as React from "react";
import { ChevronDown, LayoutGrid, ListOrdered } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  allQuestions,
  answerLabels,
  dimensions,
  type Question,
} from "@/lib/data/dimensions";
import { cn } from "@/lib/utils";

interface ResponseReviewProps {
  answers: Record<string, number>;
}

type ViewMode = "dimensions" | "order";

function buildDimensionGroups(answers: Record<string, number>) {
  return dimensions
    .map((dim) => {
      const questions = allQuestions.filter(
        (q) => q.dimensionId === dim.id && answers[q.id] !== undefined
      );
      const average =
        questions.length > 0
          ? questions.reduce((sum, q) => sum + answers[q.id], 0) /
            questions.length
          : 0;
      return { dim, questions, average };
    })
    .filter((g) => g.questions.length > 0)
    .sort((a, b) => b.average - a.average);
}

export function ResponseReview({ answers }: ResponseReviewProps) {
  const [viewMode, setViewMode] = React.useState<ViewMode>("dimensions");
  const [expanded, setExpanded] = React.useState<Set<string>>(() => {
    const groups = buildDimensionGroups(answers);
    return new Set(groups.slice(0, 2).map((g) => g.dim.id));
  });

  const answeredQuestions = React.useMemo(
    () => allQuestions.filter((q) => answers[q.id] !== undefined),
    [answers]
  );

  const dimensionGroups = React.useMemo(
    () => buildDimensionGroups(answers),
    [answers]
  );

  const orderedQuestions = React.useMemo(
    () =>
      answeredQuestions.map((q, index) => ({
        ...q,
        order: index + 1,
      })),
    [answeredQuestions]
  );

  const toggleDimension = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  if (answeredQuestions.length === 0) return null;

  return (
    <section className="mt-16">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Rückblick
          </p>
          <h2 className="mt-1 font-heading text-2xl font-medium tracking-tight">
            Deine Antworten
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {answeredQuestions.length} von {allQuestions.length} Fragen
            beantwortet
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant={viewMode === "dimensions" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("dimensions")}
            className="gap-1.5 rounded-full"
          >
            <LayoutGrid className="size-4" aria-hidden="true" />
            Nach Dimension
          </Button>
          <Button
            variant={viewMode === "order" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("order")}
            className="gap-1.5 rounded-full"
          >
            <ListOrdered className="size-4" aria-hidden="true" />
            Nach Reihenfolge
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {viewMode === "dimensions" ? (
          dimensionGroups.map(({ dim, questions, average }) => (
            <DimensionCard
              key={dim.id}
              dim={dim}
              questions={questions}
              average={average}
              answers={answers}
              expanded={expanded.has(dim.id)}
              onToggle={() => toggleDimension(dim.id)}
            />
          ))
        ) : (
          <div className="space-y-3">
            {orderedQuestions.map((q) => (
              <QuestionDetail
                key={q.id}
                question={q}
                answer={answers[q.id]}
                order={q.order}
                dimColor={getDimensionColor(q.dimensionId)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function DimensionCard({
  dim,
  questions,
  average,
  answers,
  expanded,
  onToggle,
}: {
  dim: (typeof dimensions)[number];
  questions: Question[];
  average: number;
  answers: Record<string, number>;
  expanded: boolean;
  onToggle: () => void;
}) {
  const intensity = Math.min(1, Math.max(0, average / 4));

  return (
    <div
      className="overflow-hidden rounded-2xl border border-border bg-card"
      style={{ borderLeftWidth: "4px", borderLeftColor: dim.color }}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-muted/30 focus-visible:bg-muted/30"
        aria-expanded={expanded}
      >
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
          <span className="font-heading text-base font-medium">
            {dim.name}
          </span>
          <span
            className="inline-flex w-fit items-center rounded-full px-2.5 py-0.5 font-mono text-xs font-medium"
            style={{
              backgroundColor: dim.fill,
              color: dim.color,
            }}
          >
            Ø {(intensity * 100).toFixed(0)}%
          </span>
        </div>
        <ChevronDown
          className={cn(
            "size-5 shrink-0 text-muted-foreground transition-transform duration-200",
            expanded && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>

      {expanded && (
        <div className="border-t border-border px-5 pb-5 pt-4">
          <ResponseTrail
            questions={questions}
            answers={answers}
            dimColor={dim.color}
          />
          <div className="mt-5 space-y-3">
            {questions.map((q) => (
              <QuestionDetail
                key={q.id}
                question={q}
                answer={answers[q.id]}
                dimColor={dim.color}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ResponseTrail({
  questions,
  answers,
  dimColor,
}: {
  questions: Question[];
  answers: Record<string, number>;
  dimColor: string;
}) {
  return (
    <div className="relative flex items-center justify-between py-2">
      <div className="absolute inset-x-0 h-px bg-border" />
      {questions.map((q) => {
        const value = answers[q.id];
        const sizeClass =
          value === 0
            ? "size-1.5"
            : value === 1
              ? "size-2"
              : value === 2
                ? "size-2.5"
                : value === 3
                  ? "size-3"
                  : "size-3.5";
        const opacity =
          value === 0 ? 0.3 : value === 1 ? 0.45 : value === 2 ? 0.6 : value === 3 ? 0.85 : 1;

        return (
          <span
            key={q.id}
            className={cn(
              "relative z-10 rounded-full transition-transform duration-150",
              sizeClass
            )}
            style={{
              backgroundColor: dimColor,
              opacity,
            }}
            title={`${answerLabels[value as 0 | 1 | 2 | 3 | 4]} (${value}/4)`}
          />
        );
      })}
    </div>
  );
}

function QuestionDetail({
  question,
  answer,
  order,
  dimColor,
}: {
  question: Question;
  answer: number;
  order?: number;
  dimColor: string;
}) {
  return (
    <div className="rounded-xl bg-muted/40 p-4">
      <div className="flex items-start justify-between gap-4">
        <p className="text-sm leading-relaxed text-foreground">
          {order !== undefined && (
            <span className="mr-2 font-mono text-xs text-muted-foreground">
              {order}.
            </span>
          )}
          {question.text}
        </p>
        <Badge
          variant="outline"
          className="shrink-0 border-current font-mono text-xs font-medium"
          style={{ color: dimColor, backgroundColor: `${dimColor}14` }}
        >
          {answerLabels[answer as 0 | 1 | 2 | 3 | 4]}
        </Badge>
      </div>
      {question.examples.length > 0 && (
        <ul className="mt-3 space-y-1.5">
          {question.examples.map((example, index) => (
            <li
              key={index}
              className="flex gap-2 text-xs text-muted-foreground"
            >
              <span className="select-none">→</span>
              <span>{example}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function getDimensionColor(dimensionId: string): string {
  return dimensions.find((d) => d.id === dimensionId)?.color ?? "#6B6577";
}
