const steps = [
  {
    number: "01",
    title: "Screener ausfüllen",
    description:
      "Beantworte den ASRS-5 und weitere Fragen zu deinem Erleben.",
  },
  {
    number: "02",
    title: "Profil erhalten",
    description:
      "Erhalte dein individuelles Profil – ohne Diagnose, aber mit klaren Hinweisen.",
  },
  {
    number: "03",
    title: "Strategien entdecken",
    description:
      "Entdecke Strategien und Quellen, die zu dir passen.",
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
