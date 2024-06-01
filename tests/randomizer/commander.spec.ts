import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("./");
});

test("randomizes commander", async ({ page }) => {
  await page.getByLabel("Commander").click();
  await expect(page.locator("#swappable-title")).toHaveText(/Bane|Archon/);
  await expect(page.locator("#swappable-sub-title")).toContainText("Commander");
});

test("randomizes commander from other content", async ({ page }) => {
  await page.getByRole("button", { name: "Enabled variant / content" }).click();
  await page.getByTestId("configuration-content-monster-spoils-of-war").getByRole("checkbox").check();
  await page.getByTestId("configuration-content-monster-core").getByRole("checkbox").uncheck();

  await page.getByLabel("Commander").click();
  await expect(page.locator("#swappable-title")).toHaveText(/Twin|Thern/);
  await expect(page.locator("#swappable-sub-title")).toContainText("Commander");
});
