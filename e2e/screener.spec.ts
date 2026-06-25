import { test, expect } from "@playwright/test";

const TOTAL_QUESTIONS = 51;
const ASRS_TRANSITION_INDEX = 5; // 0-based; Frage 6 in 1-based UI

test.describe("Screener-Flow", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/screener");
    await expect(page.getByTestId("question-card")).toBeVisible();
  });

  test("vollständiger Screener-Flow endet auf der Ergebnisseite mit Radar-Chart", async ({ page }) => {
    for (let index = 0; index < TOTAL_QUESTIONS; index++) {
      await expect(page.getByTestId("question-counter")).toContainText(
        `Frage ${index + 1} / ${TOTAL_QUESTIONS}`
      );

      await page.getByTestId("answer-2").click();

      if (index === ASRS_TRANSITION_INDEX) {
        await expect(page.getByTestId("transition-continue-button")).toBeVisible();
        await page.getByTestId("transition-continue-button").click();
      }
    }

    await expect(page.getByTestId("view-result-button")).toBeVisible();
    await page.getByTestId("view-result-button").click();

    await expect(page).toHaveURL(/result\/\?scores=/);
    await expect(page.locator("h1")).toContainText("Dein individuelles Profil");
    await expect(page.locator(".recharts-wrapper")).toBeVisible();
  });

  test("Fortschritt wird im LocalStorage gespeichert und nach Pause fortgesetzt", async ({ page }) => {
    await expect(page.getByTestId("question-counter")).toContainText("Frage 1 / 51");

    await page.getByTestId("answer-2").click();
    await expect(page.getByTestId("question-counter")).toContainText("Frage 2 / 51");

    await page.getByTestId("pause-button").click();
    await page.waitForURL("/");

    await page.goto("/screener");
    await expect(page.getByTestId("question-counter")).toContainText("Frage 2 / 51");
  });
});
