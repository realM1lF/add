"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, X } from "lucide-react";

export function ResultPageDisclaimer() {
  const [open, setOpen] = React.useState(true);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex max-w-[calc(100vw-2rem)] flex-col items-end sm:bottom-6 sm:right-6 sm:max-w-sm">
      <AnimatePresence mode="wait">
        {open ? (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            role="alert"
            className="overflow-hidden rounded-3xl border border-primary/30 bg-card/95 p-5 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex items-start gap-3">
              <AlertTriangle
                className="mt-0.5 size-5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <div className="flex-1">
                <h3 className="font-medium text-foreground">Wichtig</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Wichtiger und aussagekräftiger als deine Punktzahl ist, wie
                  belastend die befragten Themen für dich im Alltag sind. Sind
                  sie das für dich und/oder andere? Dann hoffe ich, du findest
                  hier und unter den verlinkten Quellen Unterstützung. Sind sie
                  es nicht, ist die Wahrscheinlichkeit für ein ausgeprägtes ADHS
                  meiner Meinung nach eher ausgeschlossen.
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="inline-flex size-8 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label="Hinweis einklappen"
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.button
            key="button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            onClick={() => setOpen(true)}
            className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label="Wichtiger Hinweis anzeigen"
          >
            <AlertTriangle className="size-6" aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
