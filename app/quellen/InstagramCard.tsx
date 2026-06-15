import { ExternalLink, AtSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { InstagramSource } from "@/lib/data/sources";

interface InstagramCardProps {
  source: InstagramSource;
  accent: string;
}

function initials(title: string) {
  return title
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export function InstagramCard({ source, accent }: InstagramCardProps) {
  return (
    <a
      href={source.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center transition-colors hover:border-foreground/20 hover:bg-background focus-ring"
    >
      <div
        className="flex size-20 items-center justify-center rounded-full border-2 border-dashed text-lg font-medium text-foreground"
        style={{ borderColor: accent, backgroundColor: `${accent}15` }}
      >
        {initials(source.title)}
      </div>

      <h3 className="mt-5 font-heading text-base font-medium leading-snug text-foreground">
        {source.title}
      </h3>

      <p
        className="mt-1 inline-flex items-center gap-1 font-mono text-xs"
        style={{ color: accent }}
      >
        <AtSign className="size-3" />
        {source.handle}
      </p>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {source.description}
      </p>

      {source.tags && source.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5">
          {source.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-[10px] font-normal">
              {tag}
            </Badge>
          ))}
        </div>
      )}

      <ExternalLink className="mt-5 size-4 text-muted-foreground transition-colors group-hover:text-foreground" />
    </a>
  );
}
