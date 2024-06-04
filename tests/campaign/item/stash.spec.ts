import { test, expect } from "@playwright/test";
import { CampaignPage } from "../campaign.page";
import { DropdownComponent } from "../dropdown.component";

test.beforeEach(async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.goto();
});

test("stash items", async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.startNewCampaign("core");
  await campaignPage.addHero("Arkhanos");
  await page.getByRole("button", { name: "Equipment & Skills" }).click();

  const dropdownWeapon = new DropdownComponent(page, "item-Weapon");
  await dropdownWeapon.selectOption("Dreampiercer Bow");

  await page.locator(".hero-item-stash").first().click();
  await expect(page.locator("#hero-card")).toContainText("Dreampiercer Bow");

  const dropdownOffhand = new DropdownComponent(page, "item-Off Hand");
  await dropdownOffhand.selectOption("Dragonclaw Shield");

  await page.locator(".hero-offhand-wrapper > .flex > .hero-item-stash").click();
  await expect(page.locator("#hero-card")).toContainText("Dragonclaw Shield");

  await page.reload();
  await expect(page.locator("#hero-card")).toContainText("Dreampiercer Bow");
  await expect(page.locator("#hero-card")).toContainText("Dragonclaw Shield");
});
