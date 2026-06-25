import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import Epub from "epub-gen";

const bookDir = join(process.cwd(), "content", "book");
const outputPath = join(process.cwd(), "public", "about.epub");

function toHtml(markdown) {
  return remark().use(remarkHtml).processSync(markdown).toString();
}

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

const indexSource = readFileSync(join(bookDir, "index.md"), "utf-8");
const { data: meta, content: forewordContent } = matter(indexSource);

const chapterFiles = readdirSync(join(bookDir, "kapitel"))
  .filter((name) => name.endsWith(".md"))
  .sort();

const content = [
  {
    title: "Vorwort",
    data: toHtml(forewordContent),
  },
  ...chapterFiles.map((fileName) => {
    const source = readFileSync(join(bookDir, "kapitel", fileName), "utf-8");
    const { data, content } = matter(source);
    const title = typeof data.title === "string" ? data.title : fileName.replace(/\.md$/, "");
    return {
      title,
      data: `<h1>${title}</h1>\n${toHtml(content)}`,
    };
  }),
];

const epub = new Epub(
  {
    title: meta.title || "About",
    author: "ADHS-Spektrum",
    publisher: "ADHS-Spektrum",
    description: meta.subtitle || "",
    lang: "de",
    tocTitle: "Inhalt",
    content,
  },
  outputPath
);

epub
  .promise
  .then(() => {
    console.log(`EPUB generated: ${outputPath}`);
  })
  .catch((error) => {
    console.error("Failed to generate EPUB:", error);
    process.exit(1);
  });
