import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("./configuration");
});

test("has all the languages", async ({ page }) => {
  const content = page.getByTestId("configuration-language").locator("div");

  await expect(content).toContainText(["English", "German", "French", "Italian", "Spanish", "Portuguese", "Polish"]);
});

test("default selection", async ({ page }) => {
  await expect(page.getByTestId("configuration-language-en_US").getByRole("radio")).toBeChecked();
});

test("it switches language and saves it", async ({ page }) => {
  const content = page.getByTestId("configuration-language").locator("div");
  await page.getByTestId("configuration-language-de_DE").getByRole("radio").check();

  await expect(content).toContainText(["Englisch"]);
  await page.reload();

  await expect(page.getByTestId("configuration-language-de_DE").getByRole("radio")).toBeChecked();
  await expect(content).toContainText(["Englisch"]);
});
