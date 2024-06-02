import { test, expect } from "@playwright/test";
import { CampaignPage } from "./campaign.page";

test.beforeEach(async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.goto();
});

test("start a new campaign, name it and remove", async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.startNewCampaign("core");

  await expect(page.getByLabel("Party name")).toBeVisible();
  await page.getByLabel("Party name").click();
  await page.getByLabel("Party name").fill("The Party");

  await page.goto("./campaign");

  await expect(page.getByRole("link", { name: "core - The Party" })).toBeVisible();

  await page.getByRole("link", { name: "core - The Party" }).click();
  await page.getByLabel("Remove campaign").click();
  await page.getByLabel("Yes").click();

  await expect(page).toHaveURL("campaign/");

  await expect(page.getByText("Campaign removed")).toBeVisible();
  await expect(page.getByRole("link", { name: "core - The Party" })).not.toBeVisible();
});
