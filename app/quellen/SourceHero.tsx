import * as React from "react";
import {
  categoryMeta,
  scienceGroupMeta,
  categoryOrder,
  scienceGroupOrder,
} from "@/lib/data/sources";

export function SourceHero() {
  return (
    <section className="relative isolate px-6 pb-8 pt-16 sm:px-8 sm:pt-20 lg:px-12 lg:pt-24">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            Quellen & Community
          </p>

          <h1 className="text-balance text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Vertrauen entsteht durch Transparenz.
          </h1>

          <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
            Hier sammeln wir die Organisationen, Studien, Videos und Stimmen, auf die
            die Inhalte dieser Website fußen. Jede Quelle wurde darauf geprüft, ob sie
            wissenschaftlich fundiert, verständlich und respektvoll ist.
          </p>
        </div>

        <nav className="mt-12 flex flex-wrap items-center gap-2">
          {categoryOrder.map((key) => {
            const meta = categoryMeta[key];
            const isScience = key === "science";

            return (
              <React.Fragment key={key}>
                <a
                  href={`#${key}`}
                  className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition-colors hover:border-foreground/20 hover:bg-background focus-ring"
                  style={{ borderLeftColor: meta.accent, borderLeftWidth: "3px" }}
                >
                  <span
                    className="inline-block size-2 rounded-full"
                    style={{ backgroundColor: meta.accent }}
                  />
                  {meta.label}
                </a>

                {isScience &&
                  scienceGroupOrder.map((group) => (
                    <a
                      key={`science-${group}`}
                      href={`#science-${group}`}
                      className="inline-flex items-center rounded-full border border-border bg-card/50 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-foreground/20 hover:bg-background hover:text-foreground focus-ring"
                      title={scienceGroupMeta[group].label}
                    >
                      {scienceGroupMeta[group].label}
                    </a>
                  ))}
              </React.Fragment>
            );
          })}
        </nav>
      </div>
    </section>
  );
}
