import { test } from "@playwright/test";
import { CampaignPage } from "../campaign.page";
import { MultiselectComponent } from "../multiselect.component";

test.beforeEach(async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.goto();
});

async function testStatus(page, status) {
  const multiselectComponent = new MultiselectComponent(page, "story-record-status");

  await multiselectComponent.selectOption(status.first.name);
  await multiselectComponent.verifyOption(status.first.name, status.first.effect);

  await page.reload();
  await multiselectComponent.verifyOption(status.first.name, status.first.effect);

  await multiselectComponent.selectOption(status.second.name);
  await multiselectComponent.verifyOption(status.first.name, status.first.effect);
  await multiselectComponent.verifyOption(status.second.name, status.second.effect);

  await page.reload();
  await multiselectComponent.verifyOption(status.first.name, status.first.effect);
  await multiselectComponent.verifyOption(status.second.name, status.second.effect);

  await multiselectComponent.selectOption(status.first.name);
  await page.reload();
  await multiselectComponent.verifyOption(status.second.name, status.second.effect);
}

test("apocalypse status can be selected, stored and reselected", async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.startNewCampaign("apocalypse");

  const status = {
    first: {
      name: "Betrayed (Condottieri)",
      effect: "Whenever a Hero defeats a Condottieri, they gain either FOCUS 2 or CLEANSE 2.",
    },
    second: {
      name: "Even Number ",
      effect: null,
    },
  };

  await testStatus(page, status);
});

test("awakenings status can be selected, stored and reselected", async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.startNewCampaign("awakenings");

  const status = {
    first: {
      name: "Christi's Aid",
      effect: "Whenever a Hero in your party takes a Recall Action, that Hero gains an Inspiration token",
    },
    second: {
      name: "Salamander's Sweat",
      effect:
        "Whenever a Hero rolls 16+ during an attack with a Weapon Attack or they cast a Spell Attack: the attack gains BURN 2.",
    },
  };

  await testStatus(page, status);
});
