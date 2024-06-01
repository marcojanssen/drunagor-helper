import { test } from "@playwright/test";
import { CampaignPage } from "../campaign.page";
import { MultiselectComponent } from "../multiselect.component";

test.beforeEach(async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.goto();
});

async function testUnfoldings(page, unfoldings) {
  const multiselectComponent = new MultiselectComponent(page, "story-record-unfolding");

  await multiselectComponent.selectOption(unfoldings.first.name);
  await multiselectComponent.verifyOption(unfoldings.first.name);

  await page.reload();
  await multiselectComponent.verifyOption(unfoldings.first.name);

  await multiselectComponent.selectOption(unfoldings.second.name);
  await multiselectComponent.verifyOption(unfoldings.first.name);
  await multiselectComponent.verifyOption(unfoldings.second.name);

  await page.reload();
  await multiselectComponent.verifyOption(unfoldings.first.name);
  await multiselectComponent.verifyOption(unfoldings.second.name);

  await multiselectComponent.selectOption(unfoldings.first.name);
  await page.reload();
  await multiselectComponent.verifyOption(unfoldings.second.name);
}

test("apocalypse outcome can be selected, stored and reselected", async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.startNewCampaign("apocalypse");

  const unfoldings = {
    first: {
      name: "Comprimising",
      effect: null,
    },
    second: {
      name: "Truth Untold",
      effect: null,
    },
  };

  await testUnfoldings(page, unfoldings);
});
