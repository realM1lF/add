"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { Strategy, Effort } from "@/lib/data/strategies";

interface StrategyCardProps {
  strategy: Strategy;
  dimensionColors: Record<string, string>;
  dimensionNames: Record<string, string>;
}

const effortVariant: Record<Effort, "default" | "secondary" | "outline"> = {
  low: "default",
  medium: "secondary",
  high: "outline",
};

export function StrategyCard({ strategy, dimensionColors, dimensionNames }: StrategyCardProps) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card className="flex flex-col border-0 shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex flex-wrap gap-2">
          {strategy.dimensionIds.map((id) => (
            <Badge
              key={id}
              variant="outline"
              className="text-xs"
              style={{
                borderColor: `${dimensionColors[id]}40`,
                color: dimensionColors[id],
                backgroundColor: `${dimensionColors[id]}10`,
              }}
            >
              {dimensionNames[id] ?? id}
            </Badge>
          ))}
          <Badge variant={effortVariant[strategy.effort]} className="text-xs">
            {strategy.effort === "low" && "Leichter Einstieg"}
            {strategy.effort === "medium" && "Mittlerer Aufwand"}
            {strategy.effort === "high" && "Mehr Aufwand"}
          </Badge>
        </div>
        <CardTitle className="mt-2 text-lg font-medium leading-snug">
          {strategy.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {strategy.description}
        </p>

        {expanded && (
          <div className="rounded-lg bg-muted/30 p-4">
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              So gehst du vor
            </p>
            <ol className="list-decimal space-y-2 pl-4 text-sm text-muted-foreground">
              {strategy.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        )}

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setExpanded((s) => !s)}
          className="mt-auto w-fit gap-1.5 text-sm"
        >
          {expanded ? (
            <>
              Weniger anzeigen <ChevronUp className="size-4" />
            </>
          ) : (
            <>
              Schritte anzeigen <ChevronDown className="size-4" />
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
