import { test } from "@playwright/test";
import { CampaignPage } from "../campaign.page";
import { DropdownComponent } from "../dropdown.component";

test.beforeEach(async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.goto();
});

async function testTrinket(page, trinket) {
  const dropdownComponent = new DropdownComponent(page, "item-Trinket");

  await dropdownComponent.selectOption(trinket.first.name);
  await dropdownComponent.verifyOption(trinket.first.name);

  await page.reload();
  await dropdownComponent.verifyOption(trinket.first.name);

  await dropdownComponent.reset();

  await dropdownComponent.selectOption(trinket.second.name);
  await dropdownComponent.verifyOption(trinket.second.name);

  await page.reload();
  await dropdownComponent.verifyOption(trinket.second.name);
}

test("core trinket can be selected, stored and reselected", async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.startNewCampaign("core");
  await campaignPage.addHero("Arkhanos");
  await page.getByRole("button", { name: "Equipment & Skills" }).click();

  const trinket = {
    first: {
      name: "Badge Of The Wardens",
    },
    second: {
      name: "Dragon Eye Of Memory",
    },
  };

  await testTrinket(page, trinket);
});

test("apocalypse trinket can be selected, stored and reselected", async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.startNewCampaign("apocalypse");
  await campaignPage.addHero("Arkhanos");
  await page.getByRole("button", { name: "Equipment & Skills" }).click();

  const trinket = {
    first: {
      name: "Improved Eldritch Mask",
    },
    second: {
      name: "Sapphire Pendant",
    },
  };

  await testTrinket(page, trinket);
});

test("awakenings trinket can be selected, stored and reselected", async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.startNewCampaign("awakenings");
  await campaignPage.addHero("Arkhanos");
  await page.getByRole("button", { name: "Equipment & Skills" }).click();

  const trinket = {
    first: {
      name: "Felix Felis",
    },
    second: {
      name: "Mind Gem",
    },
  };

  await testTrinket(page, trinket);
});
