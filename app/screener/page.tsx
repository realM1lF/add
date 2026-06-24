import type { Metadata } from "next";
import { ScreenerClient } from "./ScreenerClient";

export const metadata: Metadata = {
  title: "ADHS-Profil – ADHS-Spektrum",
  description:
    "Beantworte 68 Fragen entlang zwölf Dimensionen, um dein individuelles ADHS-Profil zu erkunden.",
};

export default function ScreenerPage() {
  return (
    <main className="flex flex-1 flex-col px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="mb-2 text-center text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          Dein ADHS-Profil
        </h1>
        <p className="mb-12 text-center text-lg text-muted-foreground">
          68 Fragen entlang zwölf Dimensionen. Nimm dir die Zeit, die du brauchst.
        </p>
        <ScreenerClient />
      </div>
    </main>
  );
}
