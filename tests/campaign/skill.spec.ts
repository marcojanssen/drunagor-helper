import { test, expect } from "@playwright/test";
import { CampaignPage } from "./campaign.page";

test("skills setting", async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.goto();
  await campaignPage.startNewCampaign("core");
  await campaignPage.addHero("Arkhanos");
  await page.getByLabel("Equipment & Skills").click();

  await page.getByTestId("melee-1").getByLabel("Level").check();
  await expect(page.getByTestId("melee-1").getByLabel("Level")).toBeChecked();

  await page.getByTestId("dungeon-role-1").getByLabel("Level").check();
  await page.getByText("Green").click();
  await expect(page.locator("#hero-card")).toContainText("Level 1 (Green)");

  await page.getByTestId("dungeon-role-2").getByLabel("Level").check();
  await page.getByText("Blue").click();
  await expect(page.locator("#hero-card")).toContainText("Level 2 (Blue)");

  await page.reload();
  await expect(page.getByTestId("melee-1").getByLabel("Level")).toBeChecked();
  await expect(page.locator("#hero-card")).toContainText("Level 1 (Green)");
  await expect(page.locator("#hero-card")).toContainText("Level 2 (Blue)");
});
