import type { Metadata } from "next";
import { readFileSync } from "fs";
import { join } from "path";
import { parseBook } from "@/lib/book";
import { BookReader } from "./BookReader";

export const metadata: Metadata = {
  title: "Meine Geschichte",
  description: "Ein Buch im Werden – Geschichten aus dem Leben mit ADHS.",
};

export default function MeineGeschichtePage() {
  const filePath = join(process.cwd(), "content", "book", "index.md");
  const source = readFileSync(filePath, "utf-8");
  const book = parseBook(source);

  return <BookReader book={book} />;
}
