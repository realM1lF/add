import { describe, it, expect } from "vitest";
import { parseBook } from "./book";

const sampleSource = `---
title: "Meine Geschichte"
subtitle: "Ein Buch im Werden"
authorNote: "Geschrieben von jemandem mit ADHS."
lastEdited: "2026-06-25"
---

## Vorwort

Vorwortstext.

## Kapitel 1

Erster Kapiteltext.
`;

describe("parseBook", () => {
  it("parses frontmatter metadata", () => {
    const book = parseBook(sampleSource);
    expect(book.meta.title).toBe("Meine Geschichte");
    expect(book.meta.subtitle).toBe("Ein Buch im Werden");
    expect(book.meta.authorNote).toBe("Geschrieben von jemandem mit ADHS.");
    expect(book.meta.lastEdited).toBe("2026-06-25");
  });

  it("splits chapters by h2 headings", () => {
    const book = parseBook(sampleSource);
    expect(book.chapters).toHaveLength(2);
    expect(book.chapters[0].id).toBe("vorwort");
    expect(book.chapters[0].title).toBe("Vorwort");
    expect(book.chapters[0].content.trim()).toBe("Vorwortstext.");
    expect(book.chapters[1].id).toBe("kapitel-1");
    expect(book.chapters[1].title).toBe("Kapitel 1");
  });
});
