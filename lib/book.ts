import matter from "gray-matter";

export interface BookMeta {
  title: string;
  subtitle?: string;
  authorNote?: string;
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

export function parseBook(source: string): Book {
  const { data, content: markdownContent } = matter(source);
  const lines = markdownContent.split("\n");
  const chapters: Chapter[] = [];
  let currentTitle: string | null = null;
  let currentLines: string[] = [];

  const flush = () => {
    if (currentTitle !== null) {
      chapters.push({
        id: slugify(currentTitle),
        title: currentTitle,
        content: currentLines.join("\n").trim(),
      });
    }
  };

  for (const line of lines) {
    const match = line.match(/^##\s+(.+)$/);
    if (match) {
      flush();
      currentTitle = match[1].trim();
      currentLines = [];
    } else if (currentTitle !== null) {
      currentLines.push(line);
    }
  }
  flush();

  return {
    meta: {
      title: data.title ?? "",
      subtitle: data.subtitle,
      authorNote: data.authorNote,
      lastEdited: data.lastEdited,
    },
    chapters,
  };
}
