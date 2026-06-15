const steps = [
  {
    number: "01",
    title: "Schnell einschätzen",
    description:
      "Beantworte den ASRS-5-Screener und das erweiterte Profil. Ein Fragebogen, ein Schritt nach dem anderen.",
  },
  {
    number: "02",
    title: "Dein Profil sehen",
    description:
      "Ein interaktives Radar-Chart zeigt deine Ausprägungen entlang elf ADHS-relevanter Dimensionen.",
  },
  {
    number: "03",
    title: "Nächste Schritte finden",
    description:
      "Erhalte eine erste Einschätzung und erfahre, ob eine Abklärung durch eine Fachkraft sinnvoll sein könnte.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="so-funktioniert-es"
      className="px-6 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            So funktioniert es
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Drei klare Schritte von der ersten Einschätzung bis zu deinem persönlichen Profil.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <span className="font-mono text-sm font-medium text-primary">
                {step.number}
              </span>
              <h3 className="mt-4 text-xl font-medium text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
