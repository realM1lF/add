import Image from "next/image";
import { ExternalLink, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { YouTubeSource } from "@/lib/data/sources";

interface YouTubeCardProps {
  source: YouTubeSource;
  accent: string;
}

export function YouTubeCard({ source, accent }: YouTubeCardProps) {
  const thumbnailUrl = source.videoId
    ? `https://img.youtube.com/vi/${source.videoId}/mqdefault.jpg`
    : undefined;

  return (
    <a
      href={source.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-foreground/20 hover:bg-background focus-ring"
    >
      <div
        className="relative aspect-video w-full overflow-hidden bg-muted"
        style={{ backgroundColor: `${accent}15` }}
      >
        {thumbnailUrl ? (
          <Image
            src={thumbnailUrl}
            alt={`Vorschaubild für ${source.title}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            unoptimized
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <Play className="size-10 text-muted-foreground/40" />
          </div>
        )}

        <span
          className="absolute left-3 top-3 rounded-full px-2 py-0.5 text-[10px] font-medium text-white shadow-sm"
          style={{ backgroundColor: accent }}
        >
          {source.channelName}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-base font-medium leading-snug text-foreground">
            {source.title}
          </h3>
          <ExternalLink className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
        </div>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {source.description}
        </p>

        {source.tags && source.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
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
