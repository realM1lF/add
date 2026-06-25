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

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function splitIntoPages(content: string, targetWords: number): string[] {
  const paragraphs = content.split(/\n\s*\n/).filter((p) => p.trim() !== "");
  if (paragraphs.length === 0) return [""];

  const pages: string[] = [];
  let current: string[] = [];
  let currentWords = 0;

  for (const paragraph of paragraphs) {
    const words = countWords(paragraph);
    if (currentWords > 0 && currentWords + words > targetWords) {
      pages.push(current.join("\n\n"));
      current = [paragraph];
      currentWords = words;
    } else {
      current.push(paragraph);
      currentWords += words;
    }
  }

  if (current.length > 0) {
    pages.push(current.join("\n\n"));
  }

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
  const targetWords = countWords(rawChapters[0]?.content ?? "");
  const chapters: ChapterInfo[] = [];
  const pages: Page[] = [];

  for (const chapter of rawChapters) {
    const chapterPages = splitIntoPages(chapter.content, Math.max(targetWords, 1));
    chapters.push({
      id: chapter.id,
      title: chapter.title,
      pageIndex: pages.length,
    });

    for (let i = 0; i < chapterPages.length; i++) {
      const pageId = chapterPages.length === 1 ? chapter.id : `${chapter.id}-seite-${i + 1}`;
      pages.push({
        id: pageId,
        title: chapter.title,
        content: chapterPages[i],
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
