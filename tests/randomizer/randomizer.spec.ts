import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("./");
});

test("toggles monster image between main and miniature", async ({ page }) => {
  await page.getByLabel("White").click();

  await expect(page.locator("img#swappable-image")).toHaveAttribute("src", /ShadowCultistBig|SkeletonArcherBig/);

  await page.getByLabel("Swap").click();

  await expect(page.locator("img#swappable-image")).toHaveAttribute(
    "src",
    /ShadowCultistMiniature|SkeletonArcherMiniature/
  );
});

test("quick select is in sync", async ({ page }) => {
  await page.getByRole("button", { name: "Enabled variant / content" }).click();
  await page.getByTestId("configuration-content-monster-spoils-of-war").getByRole("checkbox").check();
  await page.getByTestId("configuration-content-monster-core").getByRole("checkbox").uncheck();

  await page.goto("./configuration");
  await expect(page.getByTestId("configuration-content-monster-spoils-of-war").getByRole("checkbox")).toBeChecked();
  await expect(page.getByTestId("configuration-content-monster-core").getByRole("checkbox")).not.toBeChecked();
});
