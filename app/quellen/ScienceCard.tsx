import { ExternalLink, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Source } from "@/lib/data/sources";

interface ScienceCardProps {
  source: Source;
  accent: string;
}

export function ScienceCard({ source, accent }: ScienceCardProps) {
  return (
    <a
      href={source.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-start gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-foreground/20 hover:bg-background focus-ring"
    >
      <span
        className="absolute left-0 top-0 h-full w-1 rounded-l-xl"
        style={{ backgroundColor: accent }}
      />

      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors group-hover:text-foreground">
        <BookOpen className="size-5" aria-hidden="true" />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-base font-medium leading-snug text-foreground">
            {source.title}
          </h3>
          <ExternalLink className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" aria-hidden="true" />
        </div>

        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          {source.description}
        </p>

        {source.tags && source.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {source.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-[10px] font-normal">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </a>
  );
}
