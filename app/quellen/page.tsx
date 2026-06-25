import type { Metadata } from "next";
import { SourceHero } from "./SourceHero";
import { SourceSection } from "./SourceSection";
import { SourceDisclaimer } from "./SourceDisclaimer";
import { categoryOrder } from "@/lib/data/sources";

export const metadata: Metadata = {
  title: "Quellen – ADHS-Spektrum",
  description:
    "Organisationen, wissenschaftliche Quellen, YouTube-Kanäle und Instagram-Stimmen rund um ADHS – kuratiert und verständlich.",
};

export default function SourcesPage() {
  return (
    <main className="flex flex-1 flex-col">
      <SourceHero />

      <div className="mx-auto w-full max-w-5xl flex-1 px-6 pb-20 pt-8 sm:px-8 lg:px-12">
        <div className="space-y-20">
          {categoryOrder.map((category) => (
            <SourceSection key={category} category={category} />
          ))}
        </div>

        <div className="mt-20">
          <SourceDisclaimer />
        </div>
      </div>
    </main>
  );
}
