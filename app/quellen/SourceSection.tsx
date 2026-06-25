import * as React from "react";
import {
  categoryMeta,
  newsSources,
  scienceSources,
  youtubeSources,
  instagramSources,
  scienceGroupMeta,
  scienceGroupOrder,
  type SourceCategory,
} from "@/lib/data/sources";
import { NewsCard } from "./NewsCard";
import { ScienceCard } from "./ScienceCard";
import { YouTubeCard } from "./YouTubeCard";
import { InstagramCard } from "./InstagramCard";

interface SourceSectionProps {
  category: SourceCategory;
}

function ScienceSubsections() {
  const accent = categoryMeta.science.accent;

  return (
    <div className="space-y-12">
      {scienceGroupOrder.map((group) => {
        const groupSources = scienceSources.filter((s) => s.group === group);
        const meta = scienceGroupMeta[group];

        return (
          <div key={group} id={`science-${group}`} className="scroll-mt-28">
            <div className="mb-5">
              <h3 className="text-xl font-medium tracking-tight text-foreground">
                {meta.label}
              </h3>
              <p className="mt-1.5 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                {meta.description}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {groupSources.map((source) => (
                <ScienceCard key={source.id} source={source} accent={accent} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

const sourceLists: Record<SourceCategory, React.ReactNode> = {
  news: (
    <div className="grid gap-3 sm:grid-cols-2">
      {newsSources.map((source) => (
        <NewsCard key={source.id} source={source} accent={categoryMeta.news.accent} />
      ))}
    </div>
  ),
  science: <ScienceSubsections />,
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
