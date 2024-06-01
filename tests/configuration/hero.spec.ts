import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("./configuration");
});

test("has all hero content", async ({ page }) => {
  const content = page.getByTestId("configuration-content-hero").locator("div");

  await expect(content).toContainText([
    "Core",
    "Spoils of War",
    "Rise of the Undead Dragon",
    "Handuriel",
    "Lordwrath",
    "Hero Pack 1",
    "Lorien",
  ]);
});

test("default selection", async ({ page }) => {
  const content = {
    core: true,
    "spoils-of-war": true,
    "desert-of-hellscar": true,
    "rise-of-the-undead-dragon": true,
    handuriel: true,
    lordwrath: true,
    awakenings: false,
    "hero-pack-1": false,
    lorien: false,
  };

  for (const key in content) {
    const isChecked = content[key];
    const testId = "configuration-content-hero-" + key;
    if (isChecked) {
      await expect(page.getByTestId(testId).getByRole("checkbox")).toBeChecked();
    } else {
      await expect(page.getByTestId(testId).getByRole("checkbox")).not.toBeChecked();
    }
  }
});

test("selection is saved", async ({ page }) => {
  await page.getByTestId("configuration-content-hero-core").getByRole("checkbox").uncheck();
  await page.getByTestId("configuration-content-hero-awakenings").getByRole("checkbox").check();
  await page.getByTestId("configuration-content-hero-rise-of-the-undead-dragon").getByRole("checkbox").uncheck();

  await page.reload();

  await expect(page.getByTestId("configuration-content-hero-core").getByRole("checkbox")).not.toBeChecked();
  await expect(page.getByTestId("configuration-content-hero-awakenings").getByRole("checkbox")).toBeChecked();
  await expect(
    page.getByTestId("configuration-content-hero-rise-of-the-undead-dragon").getByRole("checkbox")
  ).not.toBeChecked();
});

test("not allowed to uncheck everything", async ({ page }) => {
  await page.getByTestId("configuration-content-hero-core").getByRole("checkbox").uncheck();
  await page.getByTestId("configuration-content-hero-spoils-of-war").getByRole("checkbox").uncheck();
  await page.getByTestId("configuration-content-hero-desert-of-hellscar").getByRole("checkbox").uncheck();
  await page.getByTestId("configuration-content-hero-rise-of-the-undead-dragon").getByRole("checkbox").uncheck();
  await page.getByTestId("configuration-content-hero-handuriel").getByRole("checkbox").uncheck();
  await page.getByTestId("configuration-content-hero-lordwrath").getByRole("checkbox").uncheck();

  await expect(page.getByText("Error")).toBeVisible();
  await page.reload();
  await expect(page.getByTestId("configuration-content-hero-lordwrath").getByRole("checkbox")).toBeChecked();
});
