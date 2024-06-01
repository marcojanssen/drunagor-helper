import { test } from "@playwright/test";
import { CampaignPage } from "../campaign.page";
import { MultiselectComponent } from "../multiselect.component";

test.beforeEach(async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.goto();
});

async function testFollowers(page, followers) {
  const multiselectComponent = new MultiselectComponent(page, "story-record-follower");

  await multiselectComponent.selectOption(followers.first.name);
  await multiselectComponent.verifyOption(followers.first.name);

  await page.reload();
  await multiselectComponent.verifyOption(followers.first.name);

  await multiselectComponent.selectOption(followers.second.name);
  await multiselectComponent.verifyOption(followers.first.name);
  await multiselectComponent.verifyOption(followers.second.name);

  await page.reload();
  await multiselectComponent.verifyOption(followers.first.name);
  await multiselectComponent.verifyOption(followers.second.name);

  await multiselectComponent.selectOption(followers.first.name);
  await page.reload();
  await multiselectComponent.verifyOption(followers.second.name);
}

test("apocalypse follower can be selected, stored and reselected", async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.startNewCampaign("apocalypse");

  const followers = {
    first: {
      name: "Amsterd deHanse",
    },
    second: {
      name: "Dunedancer Khadija",
    },
  };

  await testFollowers(page, followers);
});

test("awakenings follower can be selected, stored and reselected", async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.startNewCampaign("awakenings");

  const followers = {
    first: {
      name: "Elros, the Assassin",
    },
    second: {
      name: "Minerva",
    },
  };

  await testFollowers(page, followers);
});
