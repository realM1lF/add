"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Compass, X, AlertTriangle } from "lucide-react";

interface ResultDisclaimerDialogProps {
  open: boolean;
  onConfirm: () => void;
  onCancel?: () => void;
}

export function ResultDisclaimerDialog({
  open,
  onConfirm,
  onCancel,
}: ResultDisclaimerDialogProps) {
  const [acknowledged, setAcknowledged] = React.useState(false);
  const dialogRef = React.useRef<HTMLDivElement>(null);
  const initialFocusRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  React.useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onCancel?.();
      }
      if (event.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        const elements = Array.from(focusable).filter(
          (el) => !el.hasAttribute("disabled"),
        );
        if (elements.length === 0) return;
        const first = elements[0];
        const last = elements[elements.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    initialFocusRef.current?.focus();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onCancel]);

  if (!open) return null;

  return (
    <div
      role="presentation"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onCancel?.();
        }
      }}
    >
      <div
        className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
        aria-hidden="true"
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="disclaimer-title"
        className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl border border-border bg-card/95 p-6 shadow-2xl backdrop-blur-xl sm:p-10"
      >
        <button
          ref={initialFocusRef}
          onClick={onCancel}
          className="absolute top-4 right-4 inline-flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label="Schließen"
        >
          <X className="size-5" aria-hidden="true" />
        </button>

        <div className="mb-8 flex flex-col items-center text-center">
          <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-secondary/10 text-secondary">
            <Compass className="size-8" aria-hidden="true" />
          </div>
          <h2
            id="disclaimer-title"
            className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl"
          >
            Lesen!
          </h2>
        </div>

        <div className="space-y-5 text-base leading-relaxed text-foreground sm:text-lg">
          <p>
            Jeder interpretiert Fragen anders.
            <br />
            Jeder gewichtet Antworten anders.
          </p>
          <p>
            Nutze diesen Test als{" "}
            <strong className="text-secondary">Selbsterkundung</strong>.
            <br />
            Das ist <strong className="text-secondary">KEINE Diagnose</strong>.
          </p>
          <p>
            Das folgende Ergebnis ist dein Ergebnis, vergleiche dich nicht mit
            anderen. Nutze dies oder eine spätere, echte Diagnose nicht für
            Rechtfertigungen – nutze es für dein eigenes Verständnis und das
            Verständnis anderer für dich.
          </p>
          <Alert className="border-primary/30 bg-primary/5 text-foreground">
            <AlertTriangle className="size-4 text-primary" aria-hidden="true" />
            <AlertTitle className="text-foreground">Wichtig</AlertTitle>
            <AlertDescription>
              Wichtiger und aussagekräftiger als deine Punktzahl ist, wie
              belastend die befragten Themen für dich im Alltag sind. Sind sie
              das für dich und/oder andere? Dann hoffe ich, du findest hier und
              unter den verlinkten Quellen Unterstützung. Sind sie es nicht, ist
              die Wahrscheinlichkeit für ein ausgeprägtes ADHS meiner Meinung
              nach eher ausgeschlossen.
            </AlertDescription>
          </Alert>
        </div>

        <div className="mt-8 border-t border-border pt-6">
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={acknowledged}
              onChange={(e) => setAcknowledged(e.target.checked)}
              className="mt-1 size-5 shrink-0 cursor-pointer rounded border-border text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
            <span className="text-base leading-snug text-foreground">
              Ich habe den Hinweis gelesen und verstanden.
            </span>
          </label>

          <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <Button
              variant="outline"
              onClick={onCancel}
              className="min-h-11 gap-2 rounded-full"
            >
              Zurück zum Screener
            </Button>
            <Button
              onClick={onConfirm}
              disabled={!acknowledged}
              className="min-h-11 gap-2 rounded-full"
            >
              Ergebnis ansehen
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
