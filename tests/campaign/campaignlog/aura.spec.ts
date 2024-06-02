import { test } from "@playwright/test";
import { CampaignPage } from "../campaign.page";
import { DropdownComponent } from "../dropdown.component";

test.beforeEach(async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.goto();
});

async function testAuras(page, auras) {
  const dropdownComponent = new DropdownComponent(page, "campaign-log-aura-arkhanos");

  await dropdownComponent.selectOption(auras.first.name);
  await dropdownComponent.verifyOption(auras.first.name, auras.first.effect);

  await page.reload();
  await dropdownComponent.verifyOption(auras.first.name, auras.first.effect);

  await dropdownComponent.reset();

  await dropdownComponent.selectOption(auras.second.name);
  await dropdownComponent.verifyOption(auras.second.name, auras.second.effect);

  await page.reload();
  await dropdownComponent.verifyOption(auras.second.name, auras.second.effect);
}

test("core aura can be selected, stored and reselected", async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.startNewCampaign("core");
  await campaignPage.addHero("Arkhanos");

  const auras = {
    first: {
      name: "Determined",
      effect: "You are immune to SLOW and STUN.",
    },
    second: {
      name: "Spellshock",
      effect: "Whenever you take a Reaction, you suffer FATIGUE 1.",
    },
  };

  await testAuras(page, auras);
});

test("apocalypse aura can be selected, stored and reselected", async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.startNewCampaign("apocalypse");
  await campaignPage.addHero("Arkhanos");

  const auras = {
    first: {
      name: "Steadfast",
      effect: "Whenever a Hero takes a Recall Action, that Hero gains FOCUS 2.",
    },
    second: {
      name: "Dried Tears",
      effect: "Whenever you take a Recall Action: You receive CLEANSE 1.",
    },
  };

  await testAuras(page, auras);
});

test("awakenings aura can be selected, stored and reselected", async ({ page }) => {
  const campaignPage = new CampaignPage(page);
  await campaignPage.startNewCampaign("awakenings");
  await campaignPage.addHero("Arkhanos");

  const auras = {
    first: {
      name: "Ancient Spell",
      effect: "At the beginning of your turn, you gain SHIELD 1.",
    },
    second: {
      name: "Inspired",
      effect:
        "Once per turn and only during your turn, you may reroll a d20 you just rolled if you disliked the result.",
    },
  };

  await testAuras(page, auras);
});
