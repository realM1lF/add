import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import matter from "gray-matter";

export interface BookMeta {
  title: string;
  subtitle?: string;
  intro?: string;
  lastEdited?: string;
}

export interface ChapterInfo {
  id: string;
  title: string;
  pageIndex: number;
}

export interface Page {
  id: string;
  title: string;
  content: string;
  showTitle: boolean;
}

export interface Book {
  meta: BookMeta;
  chapters: ChapterInfo[];
  pages: Page[];
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function parseMeta(data: Record<string, unknown>): BookMeta {
  return {
    title: typeof data.title === "string" ? data.title : "",
    subtitle: typeof data.subtitle === "string" ? data.subtitle : undefined,
    intro: typeof data.intro === "string" ? data.intro : undefined,
    lastEdited: typeof data.lastEdited === "string" ? data.lastEdited : undefined,
  };
}

function splitTextAtWordBoundary(
  text: string,
  targetLength: number
): [string, string] {
  if (text.length <= targetLength) return [text, ""];

  const before = text.lastIndexOf(" ", targetLength);
  const after = text.indexOf(" ", targetLength);

  const beforeValid = before > 0 ? before : 0;
  const afterValid = after !== -1 ? after : text.length;

  const beforeDistance = targetLength - beforeValid;
  const afterDistance = afterValid - targetLength;

  const splitAt =
    before === -1
      ? afterValid
      : beforeDistance <= afterDistance
        ? beforeValid
        : afterValid;

  return [text.slice(0, splitAt).trimEnd(), text.slice(splitAt).trimStart()];
}

const MIN_CHARS_PER_PAGE = 1700;
const MAX_CHARS_PER_PAGE = 1750;

function splitIntoPages(content: string): string[] {
  const paragraphs = content.split(/\n\s*\n/).filter((p) => p.trim() !== "");
  if (paragraphs.length === 0) return [""];

  const totalChars = paragraphs.reduce((sum, p) => sum + p.length, 0);
  if (totalChars <= MAX_CHARS_PER_PAGE) {
    return [paragraphs.join("\n\n")];
  }

  const pages: string[] = [];
  let current: string[] = [];
  let currentChars = 0;

  const flushCurrent = () => {
    if (current.length === 0) return;
    pages.push(current.join("\n\n"));
    current = [];
    currentChars = 0;
  };

  for (const paragraph of paragraphs) {
    let remaining = paragraph;

    while (remaining.length > 0) {
      if (current.length === 0) {
        if (remaining.length <= MAX_CHARS_PER_PAGE) {
          current.push(remaining);
          currentChars = remaining.length;
          remaining = "";
        } else {
          const [piece, rest] = splitTextAtWordBoundary(
            remaining,
            MAX_CHARS_PER_PAGE
          );
          current.push(piece);
          currentChars = piece.length;
          remaining = rest;
        }
        continue;
      }

      const separatorChars = 2; // "\n\n"
      const projectedChars = currentChars + separatorChars + remaining.length;

      if (projectedChars <= MAX_CHARS_PER_PAGE) {
        current.push(remaining);
        currentChars = projectedChars;
        remaining = "";
        continue;
      }

      if (currentChars < MIN_CHARS_PER_PAGE) {
        const needed = MIN_CHARS_PER_PAGE - currentChars - separatorChars;
        const [piece, rest] = splitTextAtWordBoundary(
          remaining,
          Math.max(needed, 1)
        );
        current.push(piece);
        pages.push(current.join("\n\n"));
        current = [];
        currentChars = 0;
        remaining = rest;
      } else {
        flushCurrent();
      }
    }
  }

  flushCurrent();

  return pages;
}

export function parseIndex(source: string): { meta: BookMeta; content: string } {
  const { data, content } = matter(source);
  return { meta: parseMeta(data), content: content.trim() };
}

export function parseChapter(source: string, fallbackTitle: string): { title: string; content: string } {
  const { data, content } = matter(source);
  const title = typeof data.title === "string" ? data.title : fallbackTitle;
  return { title, content: content.trim() };
}

export function paginate(rawChapters: { id: string; title: string; content: string }[]): {
  chapters: ChapterInfo[];
  pages: Page[];
} {
  const chapters: ChapterInfo[] = [];
  const pages: Page[] = [];

  for (const chapter of rawChapters) {
    const chapterPages = splitIntoPages(chapter.content);
    chapters.push({
      id: chapter.id,
      title: chapter.title,
      pageIndex: pages.length,
    });

    for (let i = 0; i < chapterPages.length; i++) {
      const pageId =
        chapterPages.length === 1 ? chapter.id : `${chapter.id}-seite-${i + 1}`;
      pages.push({
        id: pageId,
        title: chapter.title,
        content: chapterPages[i],
        showTitle: i === 0,
      });
    }
  }

  return { chapters, pages };
}

export function loadBook(bookDir: string): Book {
  const indexPath = join(bookDir, "index.md");
  const indexSource = readFileSync(indexPath, "utf-8");
  const { meta, content: foreword } = parseIndex(indexSource);

  const chaptersDir = join(bookDir, "kapitel");
  const chapterFiles = readdirSync(chaptersDir)
    .filter((name) => name.endsWith(".md"))
    .sort();

  const rawChapters = [
    { id: "vorwort", title: "Vorwort", content: foreword },
    ...chapterFiles.map((fileName) => {
      const filePath = join(chaptersDir, fileName);
      const source = readFileSync(filePath, "utf-8");
      const fallbackTitle = fileName.replace(/\.md$/, "");
      const { title, content } = parseChapter(source, fallbackTitle);
      return { id: slugify(title), title, content };
    }),
  ];

  const { chapters, pages } = paginate(rawChapters);

  return { meta, chapters, pages };
}
