import * as React from "react";
import {
  categoryMeta,
  newsSources,
  scienceSources,
  youtubeSources,
  instagramSources,
  type SourceCategory,
} from "@/lib/data/sources";
import { NewsCard } from "./NewsCard";
import { ScienceCard } from "./ScienceCard";
import { YouTubeCard } from "./YouTubeCard";
import { InstagramCard } from "./InstagramCard";

interface SourceSectionProps {
  category: SourceCategory;
}

const sourceLists: Record<SourceCategory, React.ReactNode> = {
  news: (
    <div className="grid gap-3 sm:grid-cols-2">
      {newsSources.map((source) => (
        <NewsCard key={source.id} source={source} accent={categoryMeta.news.accent} />
      ))}
    </div>
  ),
  science: (
    <div className="grid gap-3 sm:grid-cols-2">
      {scienceSources.map((source) => (
        <ScienceCard key={source.id} source={source} accent={categoryMeta.science.accent} />
      ))}
    </div>
  ),
  youtube: (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {youtubeSources.map((source) => (
        <YouTubeCard key={source.id} source={source} accent={categoryMeta.youtube.accent} />
      ))}
    </div>
  ),
  instagram: (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {instagramSources.map((source) => (
        <InstagramCard key={source.id} source={source} accent={categoryMeta.instagram.accent} />
      ))}
    </div>
  ),
};

export function SourceSection({ category }: SourceSectionProps) {
  const meta = categoryMeta[category];

  return (
    <section id={category} className="scroll-mt-28">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p
            className="mb-2 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest"
            style={{ color: meta.accent }}
          >
            <span
              className="inline-block size-2 rounded-full"
              style={{ backgroundColor: meta.accent }}
            />
            {meta.eyebrow}
          </p>
          <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
            {meta.label}
          </h2>
          <p className="mt-2 text-base leading-relaxed text-muted-foreground">
            {meta.description}
          </p>
        </div>
      </div>

      {sourceLists[category]}
    </section>
  );
}
