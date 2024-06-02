import { test } from "@playwright/test";
import { CampaignPage } from "../campaign.page";
import { DropdownComponent } from "../dropdown.component";

test.beforeEach(async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.goto();
});

async function testArmor(page, armor) {
  const dropdownComponent = new DropdownComponent(page, "item-Armor");

  await dropdownComponent.selectOption(armor.first.name);
  await dropdownComponent.verifyOption(armor.first.name);

  await page.reload();
  await dropdownComponent.verifyOption(armor.first.name);

  await dropdownComponent.reset();

  await dropdownComponent.selectOption(armor.second.name);
  await dropdownComponent.verifyOption(armor.second.name);

  await page.reload();
  await dropdownComponent.verifyOption(armor.second.name);
}

test("core armor can be selected, stored and reselected", async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.startNewCampaign("core");
  await campaignPage.addHero("Arkhanos");
  await page.getByRole("button", { name: "Equipment & Skills" }).click();

  const armor = {
    first: {
      name: "Greater Displacement Cloak",
    },
    second: {
      name: "Runecarved Cloak",
    },
  };

  await testArmor(page, armor);
});

test("apocalypse armor can be selected, stored and reselected", async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.startNewCampaign("apocalypse");
  await campaignPage.addHero("Arkhanos");
  await page.getByRole("button", { name: "Equipment & Skills" }).click();

  const armor = {
    first: {
      name: "Masterpiece Armor",
    },
    second: {
      name: "Standard Cape of the Magi",
    },
  };

  await testArmor(page, armor);
});

test("awakenings armor can be selected, stored and reselected", async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.startNewCampaign("awakenings");
  await campaignPage.addHero("Arkhanos");
  await page.getByRole("button", { name: "Equipment & Skills" }).click();

  const armor = {
    first: {
      name: "Improved Quilted Doublet",
    },
    second: {
      name: "Ultimate Exquisite Mail",
    },
  };

  await testArmor(page, armor);
});
