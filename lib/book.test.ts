import { describe, it, expect } from "vitest";
import { parseIndex, parseChapter, paginate } from "./book";

const indexSource = `---
title: "About"
subtitle: "Ein Buch im Werden"
lastEdited: "2026-06-25"
---

Dies ist das Vorwort.
`;

const chapterSource = `---
title: "Kapitel 1"
---

Erster Abschnitt.

Zweiter Abschnitt.

Dritter Abschnitt.
`;

describe("parseIndex", () => {
  it("parses frontmatter metadata", () => {
    const { meta } = parseIndex(indexSource);
    expect(meta.title).toBe("About");
    expect(meta.subtitle).toBe("Ein Buch im Werden");
    expect(meta.lastEdited).toBe("2026-06-25");
  });

  it("returns the foreword content", () => {
    const { content } = parseIndex(indexSource);
    expect(content).toBe("Dies ist das Vorwort.");
  });
});

describe("parseChapter", () => {
  it("parses chapter frontmatter and content", () => {
    const chapter = parseChapter(chapterSource, "01-kapitel-1");
    expect(chapter.title).toBe("Kapitel 1");
    expect(chapter.content).toBe("Erster Abschnitt.\n\nZweiter Abschnitt.\n\nDritter Abschnitt.");
  });

  it("falls back to the file name when no title is given", () => {
    const chapter = parseChapter("Ohne Titel.", "02-alltag");
    expect(chapter.title).toBe("02-alltag");
    expect(chapter.content).toBe("Ohne Titel.");
  });
});

describe("paginate", () => {
  it("keeps a short chapter on a single page", () => {
    const { chapters, pages } = paginate([
      { id: "vorwort", title: "Vorwort", content: "Eins zwei drei." },
      { id: "kapitel-1", title: "Kapitel 1", content: "Vier fünf sechs." },
    ]);
    expect(chapters).toHaveLength(2);
    expect(pages).toHaveLength(2);
    expect(pages[0].id).toBe("vorwort");
    expect(pages[1].id).toBe("kapitel-1");
  });

  it("splits a long chapter into multiple pages", () => {
    // Foreword is 3 words, so target words per page is 3.
    const { chapters, pages } = paginate([
      { id: "vorwort", title: "Vorwort", content: "Eins zwei drei." },
      {
        id: "kapitel-1",
        title: "Kapitel 1",
        content: "Vier fünf sechs.\n\nSieben acht neun zehn.\n\nElf zwölf dreizehn.",
      },
    ]);
    expect(chapters[1].pageIndex).toBe(1);
    expect(pages.length).toBeGreaterThan(2);
    expect(pages[1].title).toBe("Kapitel 1");
    expect(pages[1].id).toBe("kapitel-1-seite-1");
  });
});
