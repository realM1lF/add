import type { Metadata } from "next";
import { ScreenerClient } from "./ScreenerClient";

export const metadata: Metadata = {
  title: "ADHS-Profil – ADHS-Spektrum",
  description:
    "Beantworte den ASRS-5-Screener und das erweiterte Profil, um dein individuelles ADHS-Profil entlang elf Dimensionen zu erkunden.",
};

export default function ScreenerPage() {
  return (
    <main className="flex flex-1 flex-col px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="mb-2 text-center text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          Dein ADHS-Profil
        </h1>
        <p className="mb-12 text-center text-lg text-muted-foreground">
          Zuerst der ASRS-5-Screener, dann das erweiterte Profil. Nimm dir die Zeit, die du brauchst.
        </p>
        <ScreenerClient />
      </div>
    </main>
  );
}
