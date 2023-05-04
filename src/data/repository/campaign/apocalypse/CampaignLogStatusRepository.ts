import type { Status } from "@/data/repository/campaign//Status";
import type { StatusRepository } from "@/data/repository/campaign//StatusRepository";
import * as _ from "lodash-es";

export class CampaignLogStatusRepository implements StatusRepository {
  private statuses: Status[] = [
    { id: "a-strange-rod", name: "A Strange Rod", effect: "" },
    {
      id: "bloodlust",
      name: "Bloodlust",
      effect: "Whenever you defeat a Monster, you receive INSPIRE.",
    },
    {
      id: "bully",
      name: "Bully",
      effect: "Wwhenever you score a Critical Hit: You gain an INSPIRATION token.",
    },
    {
      id: "chaotic-wheel",
      name: "Chaotic Wheel",
      effect:
        "Whenever you cast a Spell attack, roll the D20: If you roll an even number, it deals DOUBLE DAMAGE; If you roll an odd number, the attack fails.",
    },
    {
      id: "crystal-clear",
      name: "Crystal Clear",
      effect:
        "If you would draw a Chest card, search the deck for a card of your choice and pick it instead. Shuffle the Chest deck afterwards.",
    },
    {
      id: "disappointed",
      name: "Disappointed",
      effect: "Whenever you roll 1 on the d20, you score a Critical Hit and then you may RECYCLE.",
    },
    {
      id: "disgusted",
      name: "Disgusted",
      effect:
        "Whenever you Search a Chest, draw an additional card, choose one of those cards to keep, and put the other on the bottom of the Chest deck.",
    },
    {
      id: "dismembered",
      name: "Dismembered",
      effect:
        "Whenever you take a Recall Action, you suffer STUN. This STUN pierces any kind of immunity you have, since it represents your difficulty in handling your actions after the recent loss of a limb.",
    },
    { id: "effort", name: "Effort", effect: "" },
    {
      id: "empathetic",
      name: "Empathetic",
      effect:
        "Whenever a Hero from their party receives a Curse Cube, they may take it instead (they may choose individually if they receive more than one in a single effect).",
    },
    {
      id: "exquisite-attunement",
      name: "Exquisite Attunement",
      effect:
        'Whenever you take the "Tie-Breaker Special Rule" Action, you gain both FOCUS 1 and CLEANSE 1 instead of choosing one of them.',
    },
    {
      id: "guess-what",
      name: "Guess What",
      effect:
        "At the beginning of each of your turns, you may rearange the Skills being blocked by the Curse Cubes and Trauma Cubes you are holding.",
    },
    {
      id: "heartbroken",
      name: "Heartbroken",
      effect: "Whenever you or another Hero from your party suffers damage: you gain FURY 1.",
    },
    {
      id: "lash-out",
      name: "Lash Out",
      effect:
        "Whenever you roll 1 on the d20, you fail the current Accuracy check or Skill Challenge you are taking and suffer FATIGUE 4. This FATIGUE pierces any kind of immunity your Hero might have.",
    },
    {
      id: "orcish-perseverance",
      name: "Orcish Perseverance",
      effect: "You can hold one additional Trauma Cube.",
    },
    {
      id: "possession",
      name: "Possession",
      effect:
        "Whenever you move the third space in a turn, you must make an Agility (green) Skill Challenge of Difficulty 11. Each Agility cube you have gives you a +2 bonus to your roll. If you fail, you suffer KNOCK DOWN. If you succed, you gain EMPOWER instead.",
    },
    {
      id: "queen-slayer",
      name: "Queen Slayer",
      effect:
        "Whenever you take a Willing or Unwilling Recall Action, the next Weapon or Spell attack you make this turn does not require an Accuracy check and is considered a Critical Hit.",
    },
    {
      id: "scornful",
      name: "Scornful",
      effect: "If you would suffer only 1 point of damage from an Attack, you suffer no damage instead.",
    },
    {
      id: "second-thoughts",
      name: "Second Thoughts",
      effect:
        "At the beginning of your turn, you may recall one AC spent in one of your Hero or Role Skills. If you do, you must place a different AC in one of your available Skills; This effect does not activate any of your Skills.",
    },
    {
      id: "shielded-mind",
      name: "Shielded Mind",
      effect:
        "You and every Hero within Range 1 of you are immune to INTIMIDATE. Also, whenever a Character tries to cast an INTIMIDATE effect against you or any other Hero within Range 1 of you, the target of that INTIMIDATE effect receives INSPIRE instead.",
    },
    {
      id: "veteran-s-sorrow",
      name: "Veteran's Sorrow",
      effect: "Whenever you miss a Weapon attack, you may: SELF, CURSE 1. If you do, the attack hits instead.",
    },
  ];

  public find(statusId: string): Status | undefined {
    return _.find(this.statuses, { id: statusId });
  }

  public findAll(): Status[] {
    return this.statuses;
  }
}
