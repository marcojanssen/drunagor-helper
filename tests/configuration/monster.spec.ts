import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("./configuration");
});

test("has all monster content", async ({ page }) => {
  const content = page.getByTestId("configuration-content-monster").locator("div");

  await expect(content).toContainText([
    "Core",
    "Spoils of War",
    "Monster Pack 1",
    "The Ruin of Luccanor",
    "The Shadow World",
    "Desert of Hellscar",
    "Rise of the Undead Dragon",
    "Apocalypse",
    "Awakenings",
    "Fallen Sisters",
  ]);
});

test("default selection", async ({ page }) => {
  const content = {
    core: true,
    "spoils-of-war": false,
    "monster-pack-1": false,
    "the-ruin-of-luccanor": false,
    "the-shadow-world": false,
    "desert-of-hellscar": false,
    "rise-of-the-undead-dragon": false,
    apocalypse: false,
    awakenings: false,
    "fallen-sisters": false,
  };

  for (const key in content) {
    const isChecked = content[key];
    const testId = "configuration-content-monster-" + key;
    if (isChecked) {
      await expect(page.getByTestId(testId).getByRole("checkbox")).toBeChecked();
    } else {
      await expect(page.getByTestId(testId).getByRole("checkbox")).not.toBeChecked();
    }
  }
});

test("selection is saved", async ({ page }) => {
  await page.getByTestId("configuration-content-monster-spoils-of-war").getByRole("checkbox").check();
  await page.getByTestId("configuration-content-monster-the-shadow-world").getByRole("checkbox").check();
  await page.getByTestId("configuration-content-monster-rise-of-the-undead-dragon").getByRole("checkbox").check();
  await page.getByTestId("configuration-content-monster-core").getByRole("checkbox").uncheck();

  await page.reload();

  await expect(page.getByTestId("configuration-content-monster-spoils-of-war").getByRole("checkbox")).toBeChecked();
  await expect(page.getByTestId("configuration-content-monster-the-shadow-world").getByRole("checkbox")).toBeChecked();
  await expect(
    page.getByTestId("configuration-content-monster-rise-of-the-undead-dragon").getByRole("checkbox")
  ).toBeChecked();
  await expect(page.getByTestId("configuration-content-monster-core").getByRole("checkbox")).not.toBeChecked();
});

test("not allowed to uncheck everything", async ({ page }) => {
  await page.getByTestId("configuration-content-monster-core").getByRole("checkbox").uncheck();

  await expect(page.getByText("Error")).toBeVisible();
  await page.reload();
  await expect(page.getByTestId("configuration-content-monster-core").getByRole("checkbox")).toBeChecked();
});
