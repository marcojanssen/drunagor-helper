import { test } from "@playwright/test";
import { CampaignPage } from "../campaign.page";
import { DropdownComponent } from "../dropdown.component";

test.beforeEach(async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.goto();
});

async function testWeapons(page, weapons) {
  const dropdownComponent = new DropdownComponent(page, "item-Weapon");

  await dropdownComponent.selectOption(weapons.first.name);
  await dropdownComponent.verifyOption(weapons.first.name);

  await page.reload();
  await dropdownComponent.verifyOption(weapons.first.name);

  await dropdownComponent.reset();

  await dropdownComponent.selectOption(weapons.second.name);
  await dropdownComponent.verifyOption(weapons.second.name);

  await page.reload();
  await dropdownComponent.verifyOption(weapons.second.name);
}

test("core weapon can be selected, stored and reselected", async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.startNewCampaign("core");
  await campaignPage.addHero("Arkhanos");
  await page.getByRole("button", { name: "Equipment & Skills" }).click();

  const weapons = {
    first: {
      name: "Dreampiercer Bow",
    },
    second: {
      name: "Wooden Staff",
    },
  };

  await testWeapons(page, weapons);
});

test("apocalypse weapon can be selected, stored and reselected", async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.startNewCampaign("apocalypse");
  await campaignPage.addHero("Arkhanos");
  await page.getByRole("button", { name: "Equipment & Skills" }).click();

  const weapons = {
    first: {
      name: "Counselor's Staff",
    },
    second: {
      name: "Ultimate Arcannon",
    },
  };

  await testWeapons(page, weapons);
});

test("awakenings weapon can be selected, stored and reselected", async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.startNewCampaign("awakenings");
  await campaignPage.addHero("Arkhanos");
  await page.getByRole("button", { name: "Equipment & Skills" }).click();

  const weapons = {
    first: {
      name: "Improved Arcabalest",
    },
    second: {
      name: "Ultimate Chaos Staff",
    },
  };

  await testWeapons(page, weapons);
});
