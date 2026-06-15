"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface StrategyFilterProps<T extends string> {
  options: { value: T; label: string }[];
  selected: T[];
  onChange: (values: T[]) => void;
  label: string;
}

export function StrategyFilter<T extends string>({
  options,
  selected,
  onChange,
  label,
}: StrategyFilterProps<T>) {
  const toggle = (value: T) => {
    if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  return (
    <div className="space-y-2">
      <p className="text-sm font-medium text-muted-foreground">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const active = selected.includes(option.value);
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => toggle(option.value)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-sm transition-colors focus-ring",
                active
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-foreground hover:bg-muted"
              )}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
