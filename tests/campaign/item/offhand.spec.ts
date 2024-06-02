import { test } from "@playwright/test";
import { CampaignPage } from "../campaign.page";
import { DropdownComponent } from "../dropdown.component";

test.beforeEach(async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.goto();
});

async function testOffhand(page, offhand) {
  const dropdownComponent = new DropdownComponent(page, "item-Off Hand");

  await dropdownComponent.selectOption(offhand.first.name);
  await dropdownComponent.verifyOption(offhand.first.name);

  await page.reload();
  await dropdownComponent.verifyOption(offhand.first.name);

  await dropdownComponent.reset();

  await dropdownComponent.selectOption(offhand.second.name);
  await dropdownComponent.verifyOption(offhand.second.name);

  await page.reload();
  await dropdownComponent.verifyOption(offhand.second.name);
}

test("core off hand can be selected, stored and reselected", async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.startNewCampaign("core");
  await campaignPage.addHero("Arkhanos");
  await page.getByRole("button", { name: "Equipment & Skills" }).click();

  const offhand = {
    first: {
      name: "Dragonbone Wand",
    },
    second: {
      name: "Greater Symbol Of Light",
    },
  };

  await testOffhand(page, offhand);
});

test("apocalypse off hand can be selected, stored and reselected", async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.startNewCampaign("apocalypse");
  await campaignPage.addHero("Arkhanos");
  await page.getByRole("button", { name: "Equipment & Skills" }).click();

  const offhand = {
    first: {
      name: "Draconian War-Gauntlet",
    },
    second: {
      name: "Rod of the Prince",
    },
  };

  await testOffhand(page, offhand);
});

test("awakenings off hand can be selected, stored and reselected", async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.startNewCampaign("awakenings");
  await campaignPage.addHero("Arkhanos");
  await page.getByRole("button", { name: "Equipment & Skills" }).click();

  const offhand = {
    first: {
      name: "Azure Robins Knife",
    },
    second: {
      name: "Ominous Spearhead",
    },
  };

  await testOffhand(page, offhand);
});
