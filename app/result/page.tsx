import { Suspense } from "react";
import type { Metadata } from "next";
import { ResultClient } from "./ResultClient";

export const metadata: Metadata = {
  title: "Dein ADHS-Profil – ADHS-Spektrum",
  description:
    "Sieh dein individuelles ADHS-Profil als interaktives Radar-Chart. Keine Diagnose, sondern ein Spiegel zur Selbsterkundung.",
};

export default function ResultPage() {
  return (
    <main className="flex flex-1 flex-col px-6 py-16 sm:px-8 lg:px-12">
      <Suspense
        fallback={
          <div className="flex min-h-[60vh] items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          </div>
        }
      >
        <ResultClient />
      </Suspense>
    </main>
  );
}
