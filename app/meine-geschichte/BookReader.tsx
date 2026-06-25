"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Book } from "@/lib/book";

interface BookReaderProps {
  book: Book;
}

export function BookReader({ book }: BookReaderProps) {
  const { meta, chapters } = book;
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const index = chapters.findIndex((chapter) => chapter.id === hash);
    if (index !== -1) {
      setActiveIndex(index);
    }
  }, [chapters]);

  useEffect(() => {
    const chapter = chapters[activeIndex];
    if (chapter) {
      window.history.replaceState(null, "", `#${chapter.id}`);
    }
  }, [activeIndex, chapters]);

  const goTo = (index: number, dir: number) => {
    if (index < 0 || index >= chapters.length) return;
    setDirection(dir);
    setActiveIndex(index);
  };

  const activeChapter = chapters[activeIndex];
  const lastEditedLabel = meta.lastEdited
    ? new Date(meta.lastEdited).toLocaleDateString("de-DE", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    : null;

  return (
    <main className="flex flex-1 flex-col px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-2xl">
        <article className="rounded-2xl bg-[#faf9f7] p-8 shadow-lg sm:p-12">
          <header className="text-center">
            <h1 className="font-heading text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              {meta.title}
            </h1>
            {meta.subtitle && (
              <p className="mt-2 text-lg text-muted-foreground">
                {meta.subtitle}
              </p>
            )}
            {lastEditedLabel && (
              <span className="mt-5 inline-block -rotate-2 rounded border-2 border-primary px-3 py-1 font-mono text-xs font-medium text-primary">
                Zuletzt bearbeitet: {lastEditedLabel}
              </span>
            )}
          </header>

          <nav
            className="mt-8 flex flex-wrap justify-center gap-2"
            aria-label="Kapitel"
          >
            {chapters.map((chapter, index) => (
              <button
                key={chapter.id}
                type="button"
                onClick={() => goTo(index, index > activeIndex ? 1 : -1)}
                aria-current={index === activeIndex ? "page" : undefined}
                className={`rounded-full px-3 py-1 text-sm transition-colors ${
                  index === activeIndex
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {chapter.title}
              </button>
            ))}
          </nav>

          <div className="mt-10 min-h-[16rem]">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={activeChapter.id}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="[&_h2]:mb-4 [&_h2]:mt-8 [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-medium [&_h2]:tracking-tight [&_p]:mb-4 [&_p]:leading-relaxed [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-1"
              >
                <ReactMarkdown>{`## ${activeChapter.title}\n\n${activeChapter.content}`}</ReactMarkdown>
              </motion.div>
            </AnimatePresence>
          </div>

          <footer className="mt-12 flex items-center justify-between border-t border-border pt-6">
            <Button
              variant="ghost"
              onClick={() => goTo(activeIndex - 1, -1)}
              disabled={activeIndex === 0}
              className="gap-1"
              aria-label="Vorheriges Kapitel"
            >
              <ChevronLeft className="size-4" aria-hidden="true" />
              Vorheriges
            </Button>
            <span className="font-mono text-sm text-muted-foreground">
              Seite {activeIndex + 1} / {chapters.length}
            </span>
            <Button
              variant="ghost"
              onClick={() => goTo(activeIndex + 1, 1)}
              disabled={activeIndex === chapters.length - 1}
              className="gap-1"
              aria-label="Nächstes Kapitel"
            >
              Nächstes
              <ChevronRight className="size-4" aria-hidden="true" />
            </Button>
          </footer>
        </article>
      </div>
    </main>
  );
}
