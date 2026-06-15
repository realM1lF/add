import { AlertCircle } from "lucide-react";

export function SourceDisclaimer() {
  return (
    <div className="rounded-2xl border border-border bg-card/50 p-6 sm:p-8">
      <div className="flex items-start gap-4">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted">
          <AlertCircle className="size-5 text-muted-foreground" />
        </div>
        <div>
          <h3 className="font-heading text-base font-medium text-foreground">
            Hinweis zu externen Inhalten
          </h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Die verlinkten Inhalte werden von unabhängigen Anbietern veröffentlicht und
            unterliegen deren Verantwortung. Diese Seite ersetzt keine medizinische
            Beratung, Diagnose oder Behandlung. Bei gesundheitlichen Fragen wende dich
            an eine Fachkraft.
          </p>
        </div>
      </div>
    </div>
  );
}
