import { test } from "@playwright/test";
import { CampaignPage } from "../campaign.page";
import { DropdownComponent } from "../dropdown.component";

test.beforeEach(async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.goto();
});

async function testBagSlot(page, bagslot) {
  const dropdownComponent = new DropdownComponent(page, "item-bag-slot-1");

  await dropdownComponent.selectOption(bagslot.first.name);
  await dropdownComponent.verifyOption(bagslot.first.name);

  await page.reload();
  await dropdownComponent.verifyOption(bagslot.first.name);

  await dropdownComponent.reset();

  await dropdownComponent.selectOption(bagslot.second.name);
  await dropdownComponent.verifyOption(bagslot.second.name);

  await page.reload();
  await dropdownComponent.verifyOption(bagslot.second.name);
}

test("core bag slot can be selected, stored and reselected", async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.startNewCampaign("core");
  await campaignPage.addHero("Arkhanos");
  await page.getByRole("button", { name: "Equipment & Skills" }).click();

  const bagslot = {
    first: {
      name: "Amulet Of Power",
    },
    second: {
      name: "Potion Of Fortitude",
    },
  };

  await testBagSlot(page, bagslot);
});

test("apocalypse bag slot can be selected, stored and reselected", async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.startNewCampaign("apocalypse");
  await campaignPage.addHero("Arkhanos");
  await page.getByRole("button", { name: "Equipment & Skills" }).click();

  const bagslot = {
    first: {
      name: "Scroll of the Copy Cat",
    },
    second: {
      name: "Improved Pact Blade",
    },
  };

  await testBagSlot(page, bagslot);
});

test("awakenings bag slot can be selected, stored and reselected", async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.startNewCampaign("awakenings");
  await campaignPage.addHero("Arkhanos");
  await page.getByRole("button", { name: "Equipment & Skills" }).click();

  const bagslot = {
    first: {
      name: "Potion of Haste",
    },
    second: {
      name: "Ultimate Battle Plate",
    },
  };

  await testBagSlot(page, bagslot);
});
