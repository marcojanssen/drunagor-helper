import { test, expect } from "@playwright/test";
import { CampaignPage } from "../campaign.page";

test.beforeEach(async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.goto();
});

test("stash items", async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.startNewCampaign("core");
  await campaignPage.addHero("Arkhanos");
  await page.getByRole("button", { name: "Equipment & Skills" }).click();

  await page.getByLabel("Select Weapon").click();
  await page.getByRole("option", { name: "Dreampiercer Bow Implement |" }).click();
  await page.locator(".hero-item-stash").first().click();
  await expect(page.locator("#hero-card")).toContainText("Dreampiercer Bow");

  await page.getByLabel("Select Off Hand").click();
  await page.getByRole("option", { name: "Dragonclaw Shield Relic |" }).click();
  await page.locator(".hero-offhand-wrapper > .flex > .hero-item-stash").click();

  await expect(page.locator("#hero-card")).toContainText("Dragonclaw Shield");

  await page.reload();
  await expect(page.locator("#hero-card")).toContainText("Dreampiercer Bow");
  await expect(page.locator("#hero-card")).toContainText("Dragonclaw Shield");
});
