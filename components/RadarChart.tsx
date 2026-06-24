"use client";

import * as React from "react";
import {
  Radar as RadarShape,
  RadarChart as RechartsRadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { dimensions } from "@/lib/data/dimensions";
import { cn } from "@/lib/utils";
import {
  getAverageScore,
  getLevelColor,
  getLevelFill,
  getLevelLabel,
} from "@/lib/score";
import { Button } from "@/components/ui/button";
import {
  Tooltip as UiTooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Eye, EyeOff, Users, User, Info, HelpCircle } from "lucide-react";

export interface RadarChartPoint {
  subject: string;
  fullName: string;
  id: string;
  value: number;
  color: string;
}

interface AngleAxisTickProps {
  x: string | number;
  y: string | number;
  payload: { value: string };
  textAnchor?: "start" | "middle" | "end" | "inherit";
}

function AngleAxisTick({ x, y, payload, textAnchor }: AngleAxisTickProps) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={textAnchor}
      className="fill-foreground text-[10px] font-mono uppercase tracking-wider sm:text-xs"
    >
      {payload.value}
    </text>
  );
}

interface TooltipPayloadItem {
  payload: {
    fullName: string;
    own: number;
    compare: number;
  };
}

interface ChartTooltipProps {
  active?: boolean;
  payload?: TooltipPayloadItem[];
  showCompare?: boolean;
  hasCompare?: boolean;
}

function ChartTooltip({
  active,
  payload,
  showCompare,
  hasCompare,
}: ChartTooltipProps) {
  if (!active || !payload || payload.length === 0) return null;
  const point = payload[0].payload;
  return (
    <div className="rounded-lg border bg-card px-3 py-2 text-sm shadow-sm">
      <p className="font-medium">{point.fullName}</p>
      <p className="text-muted-foreground">Mein Profil: {Math.round(point.own)}%</p>
      {hasCompare && showCompare && (
        <p className="text-muted-foreground">
          Neurotypischer Mittelwert: {Math.round(point.compare)}%
        </p>
      )}
    </div>
  );
}

interface RadarChartProps {
  ownScores: RadarChartPoint[];
  compareScores?: RadarChartPoint[];
  className?: string;
  animate?: boolean;
  showAverageInfo?: boolean;
  showToggleAll?: boolean;
}

export function RadarChart({
  ownScores,
  compareScores,
  className,
  animate = true,
  showAverageInfo = true,
  showToggleAll = true,
}: RadarChartProps) {
  const [visibleIds, setVisibleIds] = React.useState<Set<string>>(
    () => new Set(dimensions.map((d) => d.id))
  );
  const [showCompare, setShowCompare] = React.useState(false);

  const allVisible = visibleIds.size === dimensions.length;

  const averageScore = React.useMemo(() => getAverageScore(ownScores), [ownScores]);
  const levelColor = getLevelColor(averageScore);
  const levelFill = getLevelFill(averageScore);
  const levelLabel = getLevelLabel(averageScore);

  const data = React.useMemo(() => {
    return dimensions
      .filter((dim) => visibleIds.has(dim.id))
      .map((dim) => {
        const own = ownScores.find((s) => s.id === dim.id);
        const compare = compareScores?.find((s) => s.id === dim.id);
        return {
          subject: dim.shortName,
          fullName: dim.name,
          id: dim.id,
          own: own?.value ?? 0,
          compare: compare?.value ?? 0,
          color: dim.color,
        };
      });
  }, [ownScores, compareScores, visibleIds]);

  const toggleDimension = (id: string) => {
    setVisibleIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const toggleAll = () => {
    setVisibleIds(
      allVisible ? new Set<string>() : new Set(dimensions.map((d) => d.id))
    );
  };

  const hasCompare = compareScores && compareScores.length > 0;

  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <div className="relative aspect-square w-full max-w-lg mx-auto">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsRadarChart
            data={data}
            margin={{ top: 24, right: 24, bottom: 24, left: 24 }}
          >
            <PolarGrid stroke="rgba(30, 35, 48, 0.12)" />
            <PolarAngleAxis dataKey="subject" tick={AngleAxisTick} />
            <PolarRadiusAxis
              angle={90}
              domain={[0, 100]}
              tick={false}
              axisLine={false}
            />
            {hasCompare && showCompare && (
              <RadarShape
                name="Neurotypischer Mittelwert"
                dataKey="compare"
                stroke="rgba(30, 35, 48, 0.35)"
                fill="rgba(30, 35, 48, 0.06)"
                fillOpacity={1}
                strokeWidth={1.5}
                isAnimationActive={animate}
              />
            )}
            <RadarShape
              name="Mein Profil"
              dataKey="own"
              stroke={levelColor}
              fill={levelFill}
              fillOpacity={1}
              strokeWidth={2.5}
              isAnimationActive={animate}
            />
            <Tooltip
              content={
                <ChartTooltip
                  showCompare={showCompare}
                  hasCompare={!!hasCompare}
                />
              }
            />
          </RechartsRadarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {hasCompare && (
          <TooltipProvider delayDuration={100}>
            <UiTooltip>
              <TooltipTrigger asChild>
                <Button
                  type="button"
                  variant={showCompare ? "default" : "outline"}
                  size="sm"
                  onClick={() => setShowCompare((s) => !s)}
                  className="gap-1.5"
                >
                  {showCompare ? (
                    <Users className="size-4" />
                  ) : (
                    <User className="size-4" />
                  )}
                  {showCompare
                    ? "Neurotypischen Mittelwert ausblenden"
                    : "Neurotypischen Mittelwert zeigen"}
                  <HelpCircle className="size-3.5 text-muted-foreground" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top" className="max-w-xs text-center">
                Orientierungswert für Erwachsene ohne ADHS-Diagnose. Für
                Unaufmerksamkeit, Hyperaktivität und Impulsivität angelehnt an
                Screening-Forschung zu erwachsenem ADHS, leicht angehoben wegen
                aktueller Bevölkerungstrends. Für die weiteren Dimensionen liegt
                keine Normierung vor; hier wurde ein konservativer Schätzwert
                verwendet.
              </TooltipContent>
            </UiTooltip>
          </TooltipProvider>
        )}

        {showToggleAll && (
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={toggleAll}
            className="gap-1.5"
          >
            {allVisible ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
            {allVisible ? "Alle ausblenden" : "Alle zeigen"}
          </Button>
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {dimensions.map((dim) => {
          const visible = visibleIds.has(dim.id);
          return (
            <button
              key={dim.id}
              type="button"
              onClick={() => toggleDimension(dim.id)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium transition-colors focus-ring",
                visible
                  ? "bg-background text-foreground border-border"
                  : "bg-muted/50 text-muted-foreground border-transparent"
              )}
            >
              <span
                className="size-2 rounded-full"
                style={{ backgroundColor: dim.color }}
                aria-hidden="true"
              />
              {dim.shortName}
            </button>
          );
        })}
      </div>

      {showAverageInfo && (
        <div className="rounded-xl border bg-muted/20 p-4">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-2 text-sm">
              <Info className="size-4 text-muted-foreground" />
              <span className="text-muted-foreground">
                Profilfärbung basiert auf dem Durchschnitt aller Dimensionen:
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span
                className="size-4 rounded-full border"
                style={{ backgroundColor: levelColor }}
                aria-hidden="true"
              />
              <span className="text-sm font-medium">{levelLabel}</span>
              <span className="font-mono text-xs text-muted-foreground">
                {Math.round(averageScore)}%
              </span>
            </div>
          </div>
        </div>
      )}

      <div className="grid gap-3 sm:grid-cols-2">
        {dimensions.map((dim) => (
          <div
            key={dim.id}
            className="flex items-start gap-3 rounded-lg border bg-card p-3"
          >
            <span
              className="mt-0.5 size-3 rounded-full shrink-0"
              style={{ backgroundColor: dim.color }}
              aria-hidden="true"
            />
            <div className="min-w-0">
              <p className="text-sm font-medium">
                <span className="font-mono uppercase">{dim.shortName}</span>
                <span className="mx-1.5 text-muted-foreground">—</span>
                {dim.name}
              </p>
              <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                {dim.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
