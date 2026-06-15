"use client";

import * as React from "react";
import {
  strategies,
  dimensions,
  situationTags,
  effortLabels,
  type Effort,
} from "@/lib/data/strategies";
import { topics } from "@/lib/data/topics";
import { StrategyCard } from "./StrategyCard";
import { StrategyFilter } from "./StrategyFilter";
import { RotateCcw, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const dimensionColors = Object.fromEntries(
  topics.map((t) => [t.id, t.color])
);

const dimensionNames = Object.fromEntries(
  dimensions.map((d) => [d.id, d.name])
);

const effortOptions: { value: Effort; label: string }[] = [
  { value: "low", label: effortLabels.low },
  { value: "medium", label: effortLabels.medium },
  { value: "high", label: effortLabels.high },
];

export default function StrategiesPage() {
  const [selectedDimensions, setSelectedDimensions] = React.useState<string[]>([]);
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
  const [selectedEffort, setSelectedEffort] = React.useState<Effort[]>([]);

  const filtered = strategies.filter((strategy) => {
    const matchesDimension =
      selectedDimensions.length === 0 ||
      strategy.dimensionIds.some((id) => selectedDimensions.includes(id));
    const matchesTag =
      selectedTags.length === 0 ||
      strategy.situationTags.some((tag) => selectedTags.includes(tag));
    const matchesEffort =
      selectedEffort.length === 0 || selectedEffort.includes(strategy.effort);
    return matchesDimension && matchesTag && matchesEffort;
  });

  const hasFilters =
    selectedDimensions.length > 0 ||
    selectedTags.length > 0 ||
    selectedEffort.length > 0;

  const reset = () => {
    setSelectedDimensions([]);
    setSelectedTags([]);
    setSelectedEffort([]);
  };

  return (
    <main className="flex flex-1 flex-col px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-5xl">
        <section className="space-y-6 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Werkzeuge
          </p>
          <h1 className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
            Strategie-Toolbox
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Wähle deine aktuelle Herausforderung und finde passende Ansätze –
            wissenschaftlich fundiert, aber für den Alltag gemacht.
          </p>
        </section>

        <section className="mt-12 space-y-6 rounded-2xl border border-border bg-card p-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <StrategyFilter
              label="Dimension"
              options={dimensions.map((d) => ({ value: d.id, label: d.name }))}
              selected={selectedDimensions}
              onChange={setSelectedDimensions}
            />
            {hasFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={reset}
                className="gap-1.5"
              >
                <RotateCcw className="size-4" />
                Filter zurücksetzen
              </Button>
            )}
          </div>

          <StrategyFilter
            label="Situation"
            options={situationTags.map((t) => ({ value: t, label: t }))}
            selected={selectedTags}
            onChange={setSelectedTags}
          />

          <StrategyFilter
            label="Aufwand"
            options={effortOptions}
            selected={selectedEffort}
            onChange={setSelectedEffort}
          />
        </section>

        <section className="mt-12">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-muted/20 py-16 text-center">
              <Lightbulb className="size-8 text-muted-foreground" />
              <p className="mt-4 text-lg font-medium text-foreground">
                Keine Strategien gefunden
              </p>
              <p className="mt-1 max-w-sm text-sm text-muted-foreground">
                Probiere andere Filter oder setze sie zurück, um alle Strategien zu sehen.
              </p>
              <Button variant="outline" onClick={reset} className="mt-4 rounded-full">
                Filter zurücksetzen
              </Button>
            </div>
          ) : (
            <>
              <p className="mb-6 text-sm text-muted-foreground">
                {filtered.length} {filtered.length === 1 ? "Strategie" : "Strategien"} gefunden
              </p>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((strategy) => (
                  <StrategyCard
                    key={strategy.id}
                    strategy={strategy}
                    dimensionColors={dimensionColors}
                    dimensionNames={dimensionNames}
                  />
                ))}
              </div>
            </>
          )}
        </section>
      </div>
    </main>
  );
}
