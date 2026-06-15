import { Hero } from "./sections/Hero";
import { Trust } from "./sections/Trust";
import { HowItWorks } from "./sections/HowItWorks";
import { Cta } from "./sections/Cta";
import { SeoAccordion } from "./sections/SeoAccordion";

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <HowItWorks />
      <Cta />
      <SeoAccordion />
    </>
  );
}
