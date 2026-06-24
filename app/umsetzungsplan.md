# Umsetzungsplan: Nächste Erweiterungen

**Projekt:** ADHS-Spektrum (Next.js 16 App Router, React 19, Tailwind CSS v4, shadcn/ui)  
**Stand:** Ergebnisseite überarbeitet, 12 Themen-Seiten live, Screener mit 68 Fragen in 12 Dimensionen.  
**Ziel:** Drei gezielte Erweiterungen planen, die aus vorhandenen Inhalten und Research-Dokumenten maximalen Nutzen für die Besucher:innen ziehen.

---

## 1. „Was tun mit meinem Ergebnis?“-Leitfaden

### Ziel
Die Ergebnisseite bekommt eine klare, beruhigende Weiterleitung: Je nach Profil-Score zeigt die Seite konkrete, machbare nächste Schritte – ohne Diagnose zu suggerieren und ohne zu überfordern.

### Inhaltliche Eckpunkte

| Score-Durchschnitt | Empfohlene nächste Schritte |
|---|---|
| 0–20 % (unauffällig) | Selbstbeobachtung, ggf. einzelne Strategien aus der Toolbox ausprobieren, keine Eile. |
| 20–40 % (leicht erhöht) | Themen-Seiten zu den höchsten Dimensionen lesen, erste Kompensationsstrategien testen. |
| 40–60 % (mäßig erhöht) | Erweitertes Profil ausfüllen, Ergebnis dokumentieren, Gespräch mit Hausarzt/Fachkraft in Erwägung ziehen. |
| 60–80 % (deutlich erhöht) | Termin bei Fachkraft planen, druckbare Zusammenfassung mitnehmen, Themen-Seiten zu Schwerpunkten lesen. |
| 80–100 % (stark erhöht) | Zeitnahe Abklärung empfohlen, ggf. Krisen- oder Beratungsangebote nutzen, wenn starke Beeinträchtigung besteht. |

### Seitenstruktur

- **Route:** `/ergebnis/naechste-schritte` oder als erweiterte Sektion auf `/result`
- **Komponenten:**
  - `ResultActionGuide.tsx` – Hauptkomponente, erhält `averageScore` und `topDimensions` als Props.
  - `ActionCard.tsx` – Wiederverwendbare Karte für einen einzelnen Schritt (Icon, Titel, Beschreibung, CTA-Button).
  - `DoctorPrepChecklist.tsx` – Checkliste, was man zum Arztgespräch mitnimmt.
- **Inhalte beziehen aus:**
  - `research/04-screening-und-diagnostik.md`
  - `research/09-konsequenzen-fuer-website.md`
  - `research/05-hilfestellungen-und-interventionen.md`

### Design-Hinweise
- Keine zusätzliche Card mit dickem Rahmen; stattdessen dezente Hintergründe (`bg-muted/30`) und klare Typografie.
- Maximal drei Hauptempfehlungen pro Score-Band anzeigen, Rest hinter „Weitere Schritte“ ausblendbar.
- Primär-CTA je nach Band: „Themen entdecken“, „Erweitertes Profil starten“, „Zusammenfassung drucken“ oder „Fachkraft finden“.

### Aufwand
- **Geschätzt:** 1–2 Tage
- **Abhängigkeiten:** keine (kann rein client-seitig aus den vorhandenen Scores berechnet werden)

---

## 2. Strategie-Toolbox

### Ziel
Besucher:innen können gezielt nach ihrer aktuellen Herausforderung filtern und bekommen passende, wissenschaftlich fundierte Strategien aus den Themen-Seiten. Die vorhandenen Strategien werden damit neu nutzbar.

### Datenstruktur

Neue Datei `lib/data/strategies.ts` mit folgendem Schema:

```ts
export interface Strategy {
  id: string;
  title: string;
  dimensionIds: string[];      // z. B. ["exekutive-funktionen", "zeitwahrnehmung"]
  situationTags: string[];     // z. B. ["arbeit", "studium", "alltag", "krisen"]
  effort: "low" | "medium" | "high";
  description: string;
  steps: string[];
  source?: string;
}
```

Die `dimensionIds` verlinken die Strategien direkt mit den bestehenden Themen (`lib/data/topics.ts`).

### Seitenstruktur

- **Route:** `/strategien` oder `/toolbox`
- **Komponenten:**
  - `StrategyFilter.tsx` – Filter nach Dimension, Situation und Aufwand.
  - `StrategyCard.tsx` – Karte mit Titel, Aufwand-Badge, Kurzbeschreibung und ausklappbaren Schritten.
  - `StrategyEmptyState.tsx` – wenn Filter kein Ergebnis liefern.
- **Inhalte beziehen aus:**
  - `lib/data/topics.ts` → `strategies`-Array jeder Themen-Seite
  - `research/05-hilfestellungen-und-interventionen.md`
  - `research/02-wissenschaftliche-grundlagen.md`

### Design-Hinweise
- Filter als horizontale Chip-Leiste, nicht als Sidebar (mobilfreundlicher).
- Karten in einem gleichmäßigen Grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).
- „Für dich passend“-Badge, wenn Strategie zu den höchsten Dimensionen des eigenen Profils passt (falls LocalStorage-Daten vorhanden).

### Aufwand
- **Geschätzt:** 2–3 Tage
- **Abhängigkeiten:**
  - Extraktion der Strategien aus `lib/data/topics.ts` in `lib/data/strategies.ts`
  - Optional: Verknüpfung mit gespeichertem Screener-Profil aus LocalStorage

---

## 3. Vertrauen & Orientierung – „So funktioniert der Screener“

### Ziel
Transparenz schaffen: Besucher:innen sollen verstehen, wie der Screener arbeitet, woher die Fragen kommen, was die Skala bedeutet und wo die Grenzen liegen. Das stärkt Glaubwürdigkeit und senkt Ängste vor Fehldiagnosen.

### Seitenstruktur

- **Route:** `/so-funktioniert-es`
- **Unterseiten / Abschnitte:**
  1. **Die 12 Dimensionen** – kurze Erklärung, warum diese gewählt wurden (Bezug zu `research/03-adhs-typen-und-spektrum.md`).
  2. **ASRS-5 im Kontext** – Herkunft der 6 Kerfragen, Cutoff, Sensitivität/ Spezifität.
  3. **Neurotypischer Mittelwert** – Erklärung der Vergleichswerte aus Adler et al. (2018) und dem aktuellen Trend-Anpassung.
  4. **Grenzen des Screenings** – Selbstbericht, keine Diagnose, Kontextabhängigkeit.
  5. **Quellen** – öffentliche Version von `research/07-quellenverzeichnis.md`.

### Komponenten

- `MethodPage.tsx` – Layout mit sticky Inhaltsverzeichnis auf Desktop.
- `SourceList.tsx` – formatierte Literatur-Liste mit DOI/Link, falls vorhanden.
- `LimitationCallout.tsx` – dezenter Hinweis-Block (verwendet bestehende `Alert`-Komponente).

### Design-Hinweise
- Ruhige, sachliche Ästhetik: viel Weißraum, kleine Kapitelnummern nur dort, wo sie tatsächlich eine Reihenfolge markieren.
- Keine zusätzlichen Animationen; Fokus auf Lesbarkeit.
- Quellen nicht als Fußnoten-Wüste, sondern als kuratierte Liste mit Kurzbeschreibungen.

### Aufwand
- **Geschätzt:** 1,5–2 Tage
- **Abhängigkeiten:**
  - Übernahme und Aufbereitung von `research/07-quellenverzeichnis.md`
  - Klärung, ob alle Research-Dokumente öffentlich werden sollen

---

## Vorgeschlagene Reihenfolge

1. **„Was tun mit meinem Ergebnis?“** (schneller Gewinn, schließt Ergebnisseite ab)
2. **Vertrauen & Orientierung** (bauet auf vorhandenen Research-Dokumenten auf, geringer Aufwand)
3. **Strategie-Toolbox** (mehr Aufwand, aber höchster Langzeitnutzen)

## Gemeinsame technische Grundlagen

- Alle drei Features nutzen bestehende UI-Komponenten (`Card`, `Button`, `Badge`, `Alert`).
- Keine neuen Dependencies nötig.
- Inhalte werden als statische Daten in `lib/data/` abgelegt und mit `generateStaticParams` bzw. Static Rendering ausgeliefert.

## Offene Entscheidungen

- Soll der Leitfaden als eigene Seite oder als erweiterte Sektion auf `/result` umgesetzt werden?
- Sollen die Quellen vollständig öffentlich sein oder nur eine Auswahl?
- Soll die Strategie-Toolbox eine „Für dich passend“-Funktion bekommen, die das gespeicherte Profil ausliest?
