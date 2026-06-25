import { describe, it, expect } from "vitest";
import { parseIndex, parseChapter } from "./book";

const indexSource = `---
title: "Meine Gedanken"
subtitle: "Ein Buch im Werden"
lastEdited: "2026-06-25"
---

Dies ist das Vorwort.
`;

const chapterSource = `---
title: "Kapitel 1"
---

Erster Kapiteltext.
`;

describe("parseIndex", () => {
  it("parses frontmatter metadata", () => {
    const { meta } = parseIndex(indexSource);
    expect(meta.title).toBe("Meine Gedanken");
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
    expect(chapter.id).toBe("kapitel-1");
    expect(chapter.title).toBe("Kapitel 1");
    expect(chapter.content).toBe("Erster Kapiteltext.");
  });

  it("falls back to the file name when no title is given", () => {
    const chapter = parseChapter("Ohne Titel.", "02-alltag");
    expect(chapter.id).toBe("02-alltag");
    expect(chapter.title).toBe("02-alltag");
    expect(chapter.content).toBe("Ohne Titel.");
  });
});
