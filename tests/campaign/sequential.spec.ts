import { test, expect } from "@playwright/test";
import { CampaignPage } from "./campaign.page";

test.beforeEach(async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.goto();
});

test("stores sequential adventures", async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.startNewCampaign("core");

  await page.getByRole("button", { name: "Sequential Adventure" }).click();
  await campaignPage.addHero("Arkhanos");

  await expect(page.locator("#runes")).toBeVisible();
  await page.locator("#runes button").first().click();
  await page.getByRole("spinbutton").click();
  await page.getByRole("spinbutton").click();
  await page.locator("#runes button").first().click();
  await expect(page.getByRole("spinbutton")).toHaveValue("2");
  await expect(page.getByText("Curse Cubes")).toBeVisible();
  await expect(page.getByText("Trauma Cubes")).toBeVisible();
  await expect(page.getByText("Resources", { exact: true })).toBeVisible();

  await page.getByText("Curse Cubes").click();

  await page.locator("#curse-cubes").getByRole("spinbutton").fill("5");
  await page.locator("#trauma-cube").getByRole("spinbutton").fill("1");
  await page.locator("#focus").getByRole("spinbutton").fill("1");
  await page.locator("#fruit-of-life").getByRole("spinbutton").fill("2");
  await page.locator("#ki").getByRole("spinbutton").fill("3");
  await page.locator("#shield").getByRole("spinbutton").fill("4");
  await page.getByRole("button", { name: "Back" }).click();

  await expect(page.locator("#curse-cubes")).toContainText("5");
  await expect(page.locator("#trauma-cubes")).toContainText("1");
  await expect(page.locator("#resources")).toContainText("1 Focus");
  await expect(page.locator("#resources")).toContainText("2 Fruit of Life");
  await expect(page.locator("#resources")).toContainText("3 KI");
  await expect(page.locator("#resources")).toContainText("4 Shield");
});
