import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("./configuration");
});

test("has all variant content", async ({ page }) => {
  const content = page.getByTestId("configuration-variant").locator("div");

  await expect(content).toContainText(["Standard", "Alternate", "Complex (A / B)"]);
});

test("default selection", async ({ page }) => {
  const content = {
    standard: true,
    alternate: false,
    complex: false,
  };

  for (const key in content) {
    const isChecked = content[key];
    const testId = "configuration-variant-" + key;
    if (isChecked) {
      await expect(page.getByTestId(testId).getByRole("checkbox")).toBeChecked();
    } else {
      await expect(page.getByTestId(testId).getByRole("checkbox")).not.toBeChecked();
    }
  }
});

test("selection is saved", async ({ page }) => {
  await page.getByTestId("configuration-variant-alternate").getByRole("checkbox").check();
  await page.getByTestId("configuration-variant-standard").getByRole("checkbox").uncheck();
  await page.getByTestId("configuration-variant-complex").getByRole("checkbox").check();

  await page.reload();

  await expect(page.getByTestId("configuration-variant-alternate").getByRole("checkbox")).toBeChecked();
  await expect(page.getByTestId("configuration-variant-standard").getByRole("checkbox")).not.toBeChecked();
  await expect(page.getByTestId("configuration-variant-complex").getByRole("checkbox")).toBeChecked();
});

test("not allowed to uncheck everything", async ({ page }) => {
  await page.getByTestId("configuration-variant-standard").getByRole("checkbox").uncheck();

  await expect(page.getByText("Error")).toBeVisible();
  await page.reload();
  await expect(page.getByTestId("configuration-variant-standard").getByRole("checkbox")).toBeChecked();
});
