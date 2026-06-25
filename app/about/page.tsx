import type { Metadata } from "next";
import { join } from "path";
import { loadBook } from "@/lib/book";
import { BookReader } from "./BookReader";

export const metadata: Metadata = {
  title: "About",
  description: "Ein Buch im Werden – Gedanken aus dem Leben mit ADHS.",
};

export default function AboutPage() {
  const bookDir = join(process.cwd(), "content", "book");
  const book = loadBook(bookDir);

  return <BookReader book={book} />;
}
