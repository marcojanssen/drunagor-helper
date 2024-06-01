import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("./");
});

test("randomizes standard black monster", async ({ page }) => {
  await page.getByLabel("Black").click();
  await expect(page.locator("#swappable-title")).toHaveText(/Abomination|Shadow Knight/);
  await expect(page.locator("#swappable-sub-title")).toContainText("Standard");
});

test("randomizes alternate black monster", async ({ page }) => {
  await page.getByRole("button", { name: "Enabled variant / content" }).click();
  await page.getByTestId("configuration-variant-alternate").getByRole("checkbox").check();
  await page.getByTestId("configuration-variant-standard").getByRole("checkbox").uncheck();

  await page.getByLabel("Black").click();
  await expect(page.locator("#swappable-title")).toHaveText(/Abomination|Shadow Knight/);
  await expect(page.locator("#swappable-sub-title")).toContainText("Alternate");
});

test("randomizes complex black monster", async ({ page }) => {
  await page.getByRole("button", { name: "Enabled variant / content" }).click();
  await page.getByTestId("configuration-variant-complex").getByRole("checkbox").check();
  await page.getByTestId("configuration-variant-standard").getByRole("checkbox").uncheck();

  await page.getByLabel("Black").click();
  await expect(page.locator("#swappable-title")).toHaveText("Shadow Knight");
  await expect(page.locator("#swappable-sub-title")).toContainText("Complex (A / B)");
});

test("randomizes black monster from other content", async ({ page }) => {
  await page.getByRole("button", { name: "Enabled variant / content" }).click();
  await page.getByTestId("configuration-content-monster-apocalypse").getByRole("checkbox").check();
  await page.getByTestId("configuration-content-monster-core").getByRole("checkbox").uncheck();

  await page.getByLabel("Black").click();
  await expect(page.locator("#swappable-title")).toHaveText(/Dream Titan/);
  await expect(page.locator("#swappable-sub-title")).toContainText("Standard");
});
