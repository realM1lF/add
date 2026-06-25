"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Book } from "@/lib/book";

interface BookReaderProps {
  book: Book;
}

export function BookReader({ book }: BookReaderProps) {
  const { meta, chapters, pages } = book;
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const index = pages.findIndex((page) => page.id === hash);
    if (index !== -1) {
      setActivePageIndex(index);
    }
  }, [pages]);

  useEffect(() => {
    const page = pages[activePageIndex];
    if (page) {
      window.history.replaceState(null, "", `#${page.id}`);
    }
  }, [activePageIndex, pages]);

  const goTo = (index: number, dir: number) => {
    if (index < 0 || index >= pages.length) return;
    setDirection(dir);
    setActivePageIndex(index);
  };

  const activePage = pages[activePageIndex];
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
          <a
            href="/about.epub"
            download
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            <Download className="size-4" aria-hidden="true" />
            Als E-Book herunterladen
          </a>
        </header>

        <nav
          className="mt-8 flex flex-wrap justify-center gap-2"
          aria-label="Kapitel"
        >
          {chapters.map((chapter, index) => {
            const endPageIndex = chapters[index + 1]?.pageIndex ?? pages.length;
            const isActive =
              activePageIndex >= chapter.pageIndex &&
              activePageIndex < endPageIndex;
            return (
              <button
                key={chapter.id}
                type="button"
                onClick={() =>
                  goTo(
                    chapter.pageIndex,
                    chapter.pageIndex > activePageIndex ? 1 : -1
                  )
                }
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full px-3 py-1 text-sm transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {chapter.title}
              </button>
            );
          })}
        </nav>

        <article className="mt-10 rounded-2xl bg-[#faf9f7] p-8 shadow-lg sm:p-12">
          <div className="min-h-[16rem]">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={activePage.id}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="[&_h2]:mb-4 [&_h2]:mt-8 [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-medium [&_h2]:tracking-tight [&_h3]:mb-3 [&_h3]:mt-6 [&_h3]:font-heading [&_h3]:text-xl [&_h3]:font-medium [&_p]:mb-4 [&_p]:leading-relaxed [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-1"
              >
                <ReactMarkdown>{`## ${activePage.title}\n\n${activePage.content}`}</ReactMarkdown>
              </motion.div>
            </AnimatePresence>
          </div>

          <footer className="mt-12 flex items-center justify-between border-t border-border pt-6">
            <Button
              variant="ghost"
              onClick={() => goTo(activePageIndex - 1, -1)}
              disabled={activePageIndex === 0}
              className="gap-1"
              aria-label="Vorherige Seite"
            >
              <ChevronLeft className="size-4" aria-hidden="true" />
              Vorheriges
            </Button>
            <span className="font-mono text-sm text-muted-foreground">
              Seite {activePageIndex + 1} / {pages.length}
            </span>
            <Button
              variant="ghost"
              onClick={() => goTo(activePageIndex + 1, 1)}
              disabled={activePageIndex === pages.length - 1}
              className="gap-1"
              aria-label="Nächste Seite"
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
