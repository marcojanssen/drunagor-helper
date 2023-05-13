import type { Aura } from "@/data/repository/campaign/Aura";
import type { AuraRepository } from "@/data/repository/campaign/AuraRepository";
import * as _ from "lodash-es";

export class CampaignLogAuraRepository implements AuraRepository {
  private auras: Aura[] = [
    {
      id: "brute-force",
      name: "Brute Force",
      effect: "As a Minor Action, you may Expend 1 AC to: SELF, EMPOWER.",
    },
    {
      id: "burden-of-guilt",
      name: "Burden of Guilt",
      effect:
        "Whenever you take a Recall Action: You suffer INTIMIDATE 4. This INTIMIDATE overcomes any kind of immunity your Hero might have.",
    },
    {
      id: "dried-tears",
      name: "Dried Tears",
      effect: "Whenever you take a Recall Action: You receive CLEANSE 1.",
    },
    {
      id: "grievous-wound",
      name: "Grievous Wound",
      effect:
        "Whenever you take a Recall Action: You suffer BLEED 4. This BLEED overcomes any kind of immunity your Hero might have.",
    },
    {
      id: "helpful",
      name: "Helpful",
      effect: "Whenever you defeat a Monster (you must be the one delivering the final blow): SELF, INSPIRE.",
    },
    {
      id: "inobtrusive",
      name: "Inobtrusive",
      effect:
        "A Monster can't attack you unless you or an NPC from your party (your Pets included) have already attacked them or affected them with an effect of any sort.",
    },
    {
      id: "justiciar",
      name: "Justiciar",
      effect: "Whenever a Hero takes a Recall Action, after resolving it, that Hero receives CLEANSE 1 or FOCUS 1.",
    },
    {
      id: "last-stand",
      name: "Last Stand",
      effect:
        "Whenever you would drop to 0 Health, make a Strength (yellow) Skill Challenge of Difficulty 11. Each Melee cube you have grants a +2 bonus to your roll. Also, each “Effort” Status you have noted on your Campaign Log carries a -5 penalty to your roll. If you succeed, you drop to 1 Health and write down one “Effort” Status on your Campaign Log instead. If you fail, you are Knocked Out as usual (which will cause this Aura to be removed from your Campaign Log.)",
    },
    {
      id: "like-water",
      name: "Like Water",
      effect: "As a Minor Action, you may Expend 1 AC to: SELF, SHIELD 4.",
    },
    {
      id: "overwhelming-power",
      name: "Overwhelming Power",
      effect: "As a Minor Action you may Expend 1 AC to: Range 1, 4 Spell Attack DMG.",
    },
    {
      id: "peace-broker",
      name: "Peace Broker",
      effect: "Whenever a Hero takes a Recall Action, after resolving it, that Hero gains SHIELD 4.",
    },
    {
      id: "steadfast",
      name: "Steadfast",
      effect: "Whenever a Hero takes a Recall Action, that Hero gains FOCUS 2.",
    },
    {
      id: "stern",
      name: "Stern",
      effect: "Whenever a Monster attacks you: before taking any damage, you gain SHIELD 1.",
    },
  ];

  public find(auraId: string): Aura | undefined {
    return _.find(this.auras, { id: auraId });
  }

  public findAll(): Aura[] {
    return this.auras;
  }
}
