import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import matter from "gray-matter";

export interface BookMeta {
  title: string;
  subtitle?: string;
  lastEdited?: string;
}

export interface Chapter {
  id: string;
  title: string;
  content: string;
}

export interface Book {
  meta: BookMeta;
  chapters: Chapter[];
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
    lastEdited: typeof data.lastEdited === "string" ? data.lastEdited : undefined,
  };
}

export function parseIndex(source: string): { meta: BookMeta; content: string } {
  const { data, content } = matter(source);
  return { meta: parseMeta(data), content: content.trim() };
}

export function parseChapter(source: string, fallbackTitle: string): Chapter {
  const { data, content } = matter(source);
  const title = typeof data.title === "string" ? data.title : fallbackTitle;
  return {
    id: slugify(title),
    title,
    content: content.trim(),
  };
}

export function loadBook(bookDir: string): Book {
  const indexPath = join(bookDir, "index.md");
  const indexSource = readFileSync(indexPath, "utf-8");
  const { meta, content: foreword } = parseIndex(indexSource);

  const chaptersDir = join(bookDir, "kapitel");
  const chapterFiles = readdirSync(chaptersDir)
    .filter((name) => name.endsWith(".md"))
    .sort();

  const chapters: Chapter[] = [
    {
      id: "vorwort",
      title: "Vorwort",
      content: foreword,
    },
    ...chapterFiles.map((fileName) => {
      const filePath = join(chaptersDir, fileName);
      const source = readFileSync(filePath, "utf-8");
      const fallbackTitle = fileName.replace(/\.md$/, "");
      return parseChapter(source, fallbackTitle);
    }),
  ];

  return { meta, chapters };
}
