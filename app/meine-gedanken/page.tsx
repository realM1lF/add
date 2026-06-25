import type { Metadata } from "next";
import { join } from "path";
import { loadBook } from "@/lib/book";
import { BookReader } from "./BookReader";

export const metadata: Metadata = {
  title: "Meine Gedanken",
  description: "Ein Buch im Werden – Gedanken aus dem Leben mit ADHS.",
};

export default function MeineGedankenPage() {
  const bookDir = join(process.cwd(), "content", "book");
  const book = loadBook(bookDir);

  return <BookReader book={book} />;
}
