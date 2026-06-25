"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { effortLabels, evidenceLabels, type Strategy, type Effort, type EvidenceLevel } from "@/lib/data/strategies";

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

const evidenceStyles: Record<
  EvidenceLevel,
  { className: string; dot: string }
> = {
  strong: {
    className: "bg-green-100 text-green-800 hover:bg-green-100",
    dot: "bg-green-600",
  },
  moderate: {
    className: "bg-blue-100 text-blue-800 hover:bg-blue-100",
    dot: "bg-blue-600",
  },
  emerging: {
    className: "bg-amber-100 text-amber-800 hover:bg-amber-100",
    dot: "bg-amber-600",
  },
  "lived-experience": {
    className: "bg-purple-100 text-purple-800 hover:bg-purple-100",
    dot: "bg-purple-600",
  },
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
            {effortLabels[strategy.effort]}
          </Badge>
          <Badge
            variant="outline"
            className={`gap-1.5 text-xs ${evidenceStyles[strategy.evidenceLevel].className}`}
          >
            <span
              aria-hidden="true"
              className={`inline-block size-1.5 rounded-full ${evidenceStyles[strategy.evidenceLevel].dot}`}
            />
            {evidenceLabels[strategy.evidenceLevel]}
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
              Weniger anzeigen <ChevronUp className="size-4" aria-hidden="true" />
            </>
          ) : (
            <>
              Schritte anzeigen <ChevronDown className="size-4" aria-hidden="true" />
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
