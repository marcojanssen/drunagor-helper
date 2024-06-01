import { test } from "@playwright/test";
import { CampaignPage } from "../campaign.page";
import { MultiselectComponent } from "../multiselect.component";

test.beforeEach(async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.goto();
});

async function testOutcomes(page, outcomes) {
  const multiselectComponent = new MultiselectComponent(page, "campaign-log-outcome-arkhanos");

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

test("core outcome can be selected, stored and reselected", async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.startNewCampaign("core");
  await campaignPage.addHero("Arkhanos");

  const outcomes = {
    first: {
      name: "Guardian's curse",
      effect: "As long as you have Guardian's Curse, you cannot unequip the Cursed Bracelet.",
    },
    second: {
      name: "A lover's request",
      effect: null,
    },
  };

  await testOutcomes(page, outcomes);
});

test("apocalypse outcome can be selected, stored and reselected", async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.startNewCampaign("apocalypse");
  await campaignPage.addHero("Arkhanos");

  const outcomes = {
    first: {
      name: "Bitten",
      effect:
        "Whenever you take a Recall Action, you suffer STUN. This STUN pierces any kind of immunity you have, since it represents your difficulty in handling your actions after sustaining such a serious injury and not a mental disorder due to physical trauma.",
    },
    second: {
      name: "Deep Wound",
      effect: "You can hold one less Trauma Cube",
    },
  };

  await testOutcomes(page, outcomes);
});
