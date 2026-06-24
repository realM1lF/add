import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { topics, getTopicBySlug } from "@/lib/data/topics";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Brain,
  Heart,
  Lightbulb,
  BookOpen,
  Quote,
} from "lucide-react";

interface TopicPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return topics.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({
  params,
}: TopicPageProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);
  if (!topic) return {};
  return {
    title: `${topic.name} – ADHS-Spektrum`,
    description: `${topic.description} ${topic.tagline}`,
  };
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);
  if (!topic) {
    notFound();
  }

  const sectionLinks = [
    { id: "fuehlen", label: "Fühlen", icon: Heart },
    { id: "verstehen", label: "Verstehen", icon: Brain },
    { id: "handeln", label: "Handeln", icon: Lightbulb },
    { id: "quellen", label: "Quellen", icon: BookOpen },
  ];

  return (
    <main className="flex flex-1 flex-col">
      {/* Hero */}
      <section
        className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-12"
        style={{ backgroundColor: topic.fill }}
      >
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute -right-20 -top-20 size-80 rounded-full blur-3xl"
            style={{ backgroundColor: topic.color }}
          />
        </div>

        <div className="relative mx-auto max-w-4xl">
          <Button
            asChild
            variant="ghost"
            className="mb-6 gap-2 rounded-full pl-0 hover:bg-transparent hover:underline"
          >
            <Link href="/themen">
              <ArrowLeft className="size-4" />
              Zurück zur Übersicht
            </Link>
          </Button>

          <div className="flex items-center gap-4">
            <span
              className="flex size-14 items-center justify-center rounded-2xl text-xl font-bold text-white shadow-sm"
              style={{ backgroundColor: topic.color }}
            >
              {topic.shortName}
            </span>
            <Badge variant="secondary" className="rounded-full">
              ADHS-Dimension
            </Badge>
          </div>

          <h1 className="mt-6 text-balance text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
            {topic.name}
          </h1>
          <p className="mt-4 max-w-2xl text-xl leading-relaxed text-muted-foreground">
            {topic.tagline}
          </p>

          {/* Signature: Fühlen → Verstehen → Handeln */}
          <nav className="mt-10 hidden rounded-2xl border border-border/60 bg-background/70 p-2 backdrop-blur-sm sm:flex">
            <div className="flex w-full items-center justify-between gap-2">
              {sectionLinks.map((section, index) => {
                const Icon = section.icon;
                return (
                  <div key={section.id} className="flex flex-1 items-center">
                    <a
                      href={`#${section.id}`}
                      className="group flex flex-1 items-center gap-2 rounded-xl px-4 py-3 transition-colors hover:bg-muted"
                    >
                      <span
                        className="flex size-8 items-center justify-center rounded-full text-white"
                        style={{ backgroundColor: topic.color }}
                      >
                        <Icon className="size-4" />
                      </span>
                      <span className="font-medium text-foreground">
                        {section.label}
                      </span>
                    </a>
                    {index < sectionLinks.length - 1 && (
                      <span
                        className="mx-2 hidden text-lg text-muted-foreground lg:inline"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </nav>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto w-full max-w-4xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="space-y-16">
          {/* Fühlen */}
          <section id="fuehlen">
            <div className="mb-6 flex items-center gap-3">
              <span
                className="flex size-10 items-center justify-center rounded-xl text-white"
                style={{ backgroundColor: topic.color }}
              >
                <Heart className="size-5" />
              </span>
              <h2 className="text-2xl font-medium tracking-tight text-foreground">
                So fühlt sich das an
              </h2>
            </div>

            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              {topic.description}
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {topic.examples.map((example, index) => (
                <Card key={index} className="border-l-4" style={{ borderLeftColor: topic.color }}>
                  <CardContent className="pt-6">
                    <p className="font-medium text-foreground">
                      {example.question}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {example.situation}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {topic.livedExperienceQuotes.length > 0 && (
              <div className="mt-8 rounded-2xl border border-border bg-card/50 p-6">
                <Quote
                  className="size-6 text-muted-foreground"
                  aria-hidden="true"
                />
                <blockquote className="mt-3 text-lg font-medium italic leading-relaxed text-foreground">
                  „{topic.livedExperienceQuotes[0]}“
                </blockquote>
                {topic.livedExperienceQuotes[1] && (
                  <p className="mt-3 text-sm text-muted-foreground">
                    {topic.livedExperienceQuotes[1]}
                  </p>
                )}
              </div>
            )}
          </section>

          <Separator />

          {/* Verstehen */}
          <section id="verstehen">
            <div className="mb-6 flex items-center gap-3">
              <span
                className="flex size-10 items-center justify-center rounded-xl text-white"
                style={{ backgroundColor: topic.color }}
              >
                <Brain className="size-5" />
              </span>
              <h2 className="text-2xl font-medium tracking-tight text-foreground">
                Warum passiert das?
              </h2>
            </div>

            <Card>
              <CardContent className="space-y-6 pt-6">
                <div>
                  <h3 className="text-base font-medium text-foreground">
                    Was dahintersteckt
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {topic.neurobiology.intro}
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-medium text-foreground">
                    Neurobiologischer Mechanismus
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {topic.neurobiology.mechanism}
                  </p>
                </div>

                <div className="rounded-xl bg-muted/40 p-4">
                  <h3 className="text-base font-medium text-foreground">
                    Einordnung
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {topic.neurobiology.context}
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator />

          {/* Handeln */}
          <section id="handeln">
            <div className="mb-6 flex items-center gap-3">
              <span
                className="flex size-10 items-center justify-center rounded-xl text-white"
                style={{ backgroundColor: topic.color }}
              >
                <Lightbulb className="size-5" />
              </span>
              <h2 className="text-2xl font-medium tracking-tight text-foreground">
                Was hilft?
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {topic.strategies.map((strategy, index) => (
                <Card key={index}>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-start gap-3 text-base">
                      <span
                        className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                        style={{ backgroundColor: topic.color }}
                      >
                        {index + 1}
                      </span>
                      {strategy.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {strategy.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <Separator />

          {/* Quellen */}
          <section id="quellen">
            <div className="mb-6 flex items-center gap-3">
              <span
                className="flex size-10 items-center justify-center rounded-xl text-white"
                style={{ backgroundColor: topic.color }}
              >
                <BookOpen className="size-5" />
              </span>
              <h2 className="text-2xl font-medium tracking-tight text-foreground">
                Quellen & Weiterführendes
              </h2>
            </div>

            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {topic.sources.map((source, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <span
                        className="mt-1.5 size-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: topic.color }}
                      />
                      {source.url ? (
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline-offset-2 hover:text-foreground hover:underline"
                        >
                          {source.title}
                        </a>
                      ) : (
                        <span>{source.title}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Bottom CTA */}
          <div className="rounded-2xl border border-border bg-card p-8 text-center">
            <h3 className="text-xl font-medium text-foreground">
              Möchtest du wissen, wie stark diese Dimension bei dir ausgeprägt ist?
            </h3>
            <p className="mt-2 text-muted-foreground">
              Der Screener erstellt dein persönliches Profil entlang aller zwölf Dimensionen.
            </p>
            <Button asChild className="mt-6 gap-2 rounded-full">
              <Link href="/screener">
                Zum Screener
                <ArrowLeft className="size-4 rotate-180" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
