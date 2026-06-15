import { Shield, Brain, Lock } from "lucide-react";

const items = [
  {
    icon: Brain,
    title: "Wissenschaftlich fundiert",
    description: "Basierend auf ASRS-5, DSM-5-TR und aktueller ADHS-Forschung.",
  },
  {
    icon: Shield,
    title: "Keine Diagnose",
    description: "Ein Selbsterkundungs-Tool. Kein Ersatz für eine Fachkraft.",
  },
  {
    icon: Lock,
    title: "Anonym & lokal",
    description: "Deine Antworten werden nur in deinem Browser gespeichert.",
  },
];

export function Trust() {
  return (
    <section className="border-y border-border bg-card/50 px-6 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className="flex flex-col items-center text-center">
            <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <item.icon className="size-6" />
            </div>
            <h3 className="text-base font-medium text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
