import { test, expect } from "@playwright/test";
import { CampaignPage } from "./campaign.page";

test.beforeEach(async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.goto();
});

test("add and remove hero", async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.startNewCampaign("core");

  await campaignPage.addHero("Duncan");
  await expect(page.locator("#heroes").getByText("Duncan")).toBeVisible();

  await page.getByLabel("Remove hero").click();
  await page.locator("#campaign-remove-heroes").getByText("Duncan").click();
  await expect(page.locator("#heroes").getByText("Duncan")).not.toBeVisible();
});

test("add random hero", async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.startNewCampaign("core");

  await campaignPage.addHero("Random hero");
  await expect(
    page
      .locator("#heroes")
      .getByText(
        /Arkhanos|Barak|Devron|Drasek|Duncan|Elros|Flavian|Handuriel|Jade|Jaheen|Katarina|Kellam|Lordwrath|Lorelai|Maya|Pietro|Savran|Shadow|Sskar|Sun|Tork|Vorn|Willow/
      )
  ).toBeVisible();
});

test("no duplicate hero", async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.startNewCampaign("core");

  await campaignPage.addHero("Duncan");
  await expect(page.locator("#heroes").getByText("Duncan")).toBeVisible();

  await page.getByRole("button", { name: "Add hero" }).click();
  await expect(page.locator("#campaign-add-heroes").getByText("Duncan")).not.toBeVisible();
});

test("only allow enabled heroes", async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.goto();
  await campaignPage.startNewCampaign("core");
  await page.getByRole("button", { name: "Add hero" }).click();
  await expect(page.locator("#campaign-add-heroes").getByText("Lordwrath")).toBeVisible();

  page.goto("./configuration");

  await page.getByTestId("configuration-content-hero-lordwrath").getByRole("checkbox").uncheck();

  await campaignPage.goto();
  await campaignPage.startNewCampaign("core");

  await page.getByRole("button", { name: "Add hero" }).click();
  await expect(page.locator("#campaign-add-heroes").getByText("Lordwrath")).not.toBeVisible();
});
