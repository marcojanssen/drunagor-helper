import type { AuraData } from "@/data/repository/campaign/AuraData";
import type { AuraRepository } from "@/data/repository/campaign/AuraRepository";
import * as _ from "lodash-es";

export class CampaignLogAuraRepository implements AuraRepository {
  private auras: AuraData[] = [
    {
      id: "blessing-of-good-fortune",
      name: "Blessing of good fortune",
      effect:
        "Whenever any Hero Expends an AC for any effect other than FATIGUE (as to gain an additional Move Action in a turn, for example) they also recall 1 AC.",
    },
    {
      id: "blessing-of-the-guardian",
      name: "Blessing of the guardian",
      effect:
        "Whenever any Hero Expends an AC for any effect other than FATIGUE (as to gain an additional Move Action in a turn, for example) they also gain SHIELD 2.",
    },
    {
      id: "bloodlust",
      name: "Bloodlust",
      effect:
        "Whenever you kill a Monster during your turn: After you resolve the current Action, you may take an additional Cube Action. This ability can trigger only once per turn.",
    },
    {
      id: "bonding",
      name: "Bonding",
      effect: "Whenever a Companion ends its turn adjacent to you, they gain SHIELD 4.",
    },
    {
      id: "boon-of-empathy",
      name: "Boon of empathy",
      effect:
        "As a Minor Action, you may take a Trauma Cube from a Hero that is adjacent to you and place it on your board. Receiving a Trauma Cube this way does not end the effects of this Boon.",
    },
    {
      id: "boon-of-gratitude",
      name: "Boon of gratitude",
      effect: "PREVENTS gain a +1 bonus",
    },
    {
      id: "brave-hearted",
      name: "Brave hearted",
      effect:
        "The Darkness always treats you as the Strongest Hero (unless you are already on top of Darkness) and you take no damage from Darkness.",
    },
    {
      id: "clear-conscious",
      name: "Clear conscious",
      effect: "Whenever you kill a creature with an attack (Spell or Weapon), you gain: SELF, CLEANSE 1.",
    },
    {
      id: "cold-hearted",
      name: "Cold hearted",
      effect:
        "The Darkness always treats you as the Strongest Hero (unless you are already on top of Darkness) and while you are on top of Darkness, whenever you hit a Monster with a Weapon Attack or Spell Attack for the first time during your turn, that attack deals +2 damage.",
    },
    {
      id: "disdained",
      name: "Disdained",
      effect: "Whenever you take a Recall Action you suffer FATIGUE 1 after you resolve it.",
    },
    {
      id: "determined",
      name: "Determined",
      effect: "You are immune to SLOW and STUN.",
    },
    {
      id: "grandeur",
      name: "Grandeur",
      effect: "Whenever any Hero scores a Critical Hit, they gain: SELF, CLEANSE 2.",
    },
    {
      id: "hellbent",
      name: "Hellbent",
      effect:
        "Whenever any Hero scores a Critical Hit, the attack gains +1 DMG (do not double it due to the critical) per Curse Cube that Hero is holding.",
    },
    {
      id: "inspiring-leadership",
      name: "Inspiring leadership",
      effect:
        "All Heroes from the party score a Critical Hit instead of a Critical Failure whenever they roll 1 on the d20.",
    },
    {
      id: "intoxicated",
      name: "Intoxicated",
      effect: "Whenever you take a Recall Action, you suffer POISON 4",
    },
    {
      id: "murderous-intent",
      name: "Murderous intent",
      effect: "Whenever you kill a creature with an Attack (Spell or Weapon), you gain: SELF, FOCUS 1.",
    },
    {
      id: "over-the-edge",
      name: "Over the edge",
      effect: "Whenever any Hero scores a Critical Hit, they gain: SELF, FOCUS 1.",
    },
    {
      id: "soulmates-reunited",
      name: "Soulmates reunited",
      effect:
        "Whenever you roll 1 on the d20, you score a Critical Hit instead of a Critical Failure and gain FOCUS 2.",
    },
    {
      id: "spellshock",
      name: "Spellshock",
      effect: "Whenever you take a Reaction, you suffer FATIGUE 1.",
    },
    {
      id: "true-hearted-blessing",
      name: "True-hearted blessing",
      effect:
        "Whenever any Hero Expends an AC for any effect other than FATIGUE (as to gain an additional Move Action in a turn, for example) they also gain FOCUS 1.",
    },
    {
      id: "well-meaning",
      name: "Well meaning",
      effect: "Whenever you use a CLEANSE effect on any Hero, that Hero may also Recall up to one Action Cube.",
    },
  ];

  public find(auraId: string): AuraData | undefined {
    return _.find(this.auras, { id: auraId });
  }

  public findAll(): AuraData[] {
    return this.auras;
  }
}
