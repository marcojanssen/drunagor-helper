import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("./");
});

test("randomizes standard gray monster", async ({ page }) => {
  await page.getByLabel("Gray").click();
  await expect(page.locator("#swappable-title")).toHaveText(/Shadow Vampire|Executioner|Rotten Flesh/);
  await expect(page.locator("#swappable-sub-title")).toContainText("Standard");
});

test("randomizes alternate gray monster", async ({ page }) => {
  await page.getByRole("button", { name: "Enabled variant / content" }).click();
  await page.getByTestId("configuration-variant-alternate").getByRole("checkbox").check();
  await page.getByTestId("configuration-variant-standard").getByRole("checkbox").uncheck();

  await page.getByLabel("Gray").click();
  await expect(page.locator("#swappable-title")).toHaveText(/Shadow Vampire|Executioner|Rotten Flesh/);
  await expect(page.locator("#swappable-sub-title")).toContainText("Alternate");
});

test("randomizes complex gray monster", async ({ page }) => {
  await page.getByRole("button", { name: "Enabled variant / content" }).click();
  await page.getByTestId("configuration-variant-complex").getByRole("checkbox").check();
  await page.getByTestId("configuration-variant-standard").getByRole("checkbox").uncheck();

  await page.getByLabel("Gray").click();
  await expect(page.locator("#swappable-title")).toHaveText("Rotten Flesh");
  await expect(page.locator("#swappable-sub-title")).toContainText("Complex (A / B)");
});

test("randomizes gray monster from other content", async ({ page }) => {
  await page.getByRole("button", { name: "Enabled variant / content" }).click();
  await page.getByTestId("configuration-content-monster-spoils-of-war").getByRole("checkbox").check();
  await page.getByTestId("configuration-content-monster-core").getByRole("checkbox").uncheck();

  await page.getByLabel("Gray").click();
  await expect(page.locator("#swappable-title")).toHaveText("Bone Reaper");
  await expect(page.locator("#swappable-sub-title")).toContainText("Standard");
});
