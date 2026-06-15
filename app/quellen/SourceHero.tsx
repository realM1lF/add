import { categoryMeta, type SourceCategory } from "@/lib/data/sources";

const categoryOrder: SourceCategory[] = ["news", "science", "youtube", "instagram"];

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

        <nav className="mt-12 flex flex-wrap gap-2">
          {categoryOrder.map((key) => {
            const meta = categoryMeta[key];
            return (
              <a
                key={key}
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
            );
          })}
        </nav>
      </div>
    </section>
  );
}
