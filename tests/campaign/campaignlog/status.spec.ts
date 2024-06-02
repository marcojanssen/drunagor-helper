import { test } from "@playwright/test";
import { CampaignPage } from "../campaign.page";
import { MultiselectComponent } from "../multiselect.component";

test.beforeEach(async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.goto();
});

async function testStatus(page, status) {
  const multiselectComponent = new MultiselectComponent(page, "campaign-log-status-arkhanos");

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

test("core status can be selected, stored and reselected", async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.startNewCampaign("core");
  await campaignPage.addHero("Arkhanos");

  const status = {
    first: {
      name: "Bloodlust",
      effect:
        "Whenever you kill a Monster during your turn, after you resolve the current Action, you may take an additional Cube Action. This effect can trigger only once per turn. Otherwise, if no Hero has it, you gain FOCUS 2.",
    },
    second: {
      name: "Double check",
      effect:
        "As a Minor Action, you may: SELF, CURSE 1 to remove one Darkness tile you are on top of and gain FOCUS 1.",
    },
  };

  await testStatus(page, status);
});

test("apocalypse status can be selected, stored and reselected", async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.startNewCampaign("apocalypse");
  await campaignPage.addHero("Arkhanos");

  const status = {
    first: {
      name: "Bloodlust",
      effect: "Whenever you defeat a Monster, you receive INSPIRE.",
    },
    second: {
      name: "Heartbroken",
      effect: "Whenever you or another Hero from your party suffers damage: you gain FURY 1.",
    },
  };

  await testStatus(page, status);
});

test("awakenings status can be selected, stored and reselected", async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.startNewCampaign("awakenings");
  await campaignPage.addHero("Arkhanos");

  const status = {
    first: {
      name: "Soft Heart",
      effect:
        'While there is another Hero adjacent to you, that Hero will receive the benefits of the "Dour" Aura (the Aura benefits will only apply while you are still adjacent to them).',
    },
    second: {
      name: "Corrupt Power",
      effect:
        "Heroes may never have fewer than 2 Curse Cubes in their boards and, once per turn, they may roll the d20 if they disliked a move’s outcome.",
    },
  };

  await testStatus(page, status);
});
