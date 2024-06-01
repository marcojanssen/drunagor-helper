import { test } from "@playwright/test";
import { CampaignPage } from "../campaign.page";
import { MultiselectComponent } from "../multiselect.component";

test.beforeEach(async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.goto();
});

async function testOutcomes(page, outcomes) {
  const multiselectComponent = new MultiselectComponent(page, "story-record-outcome");

  await multiselectComponent.selectOption(outcomes.first.name);
  await multiselectComponent.verifyOption(outcomes.first.name, outcomes.first.effect);

  await page.reload();
  await multiselectComponent.verifyOption(outcomes.first.name, outcomes.first.effect);

  await multiselectComponent.selectOption(outcomes.second.name);
  await multiselectComponent.verifyOption(outcomes.first.name, outcomes.first.effect);
  await multiselectComponent.verifyOption(outcomes.second.name, outcomes.second.effect);

  await page.reload();
  await multiselectComponent.verifyOption(outcomes.first.name, outcomes.first.effect);
  await multiselectComponent.verifyOption(outcomes.second.name, outcomes.second.effect);

  await multiselectComponent.selectOption(outcomes.first.name);
  await page.reload();
  await multiselectComponent.verifyOption(outcomes.second.name, outcomes.second.effect);
}

test("apocalypse outcome can be selected, stored and reselected", async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.startNewCampaign("apocalypse");

  const outcomes = {
    first: {
      name: "Gal's Fate",
      effect: null,
    },
    second: {
      name: "Wounded Eye",
      effect: null,
    },
  };

  await testOutcomes(page, outcomes);
});

test("awakenings outcome can be selected, stored and reselected", async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.startNewCampaign("awakenings");

  const outcomes = {
    first: {
      name: "Promised Reward",
      effect: null,
    },
    second: {
      name: "Untangled",
      effect: null,
    },
  };

  await testOutcomes(page, outcomes);
});
