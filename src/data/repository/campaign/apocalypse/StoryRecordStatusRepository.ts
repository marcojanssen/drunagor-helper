import type { Status } from "@/data/repository/campaign/Status";
import type { StatusRepository } from "@/data/repository/campaign/StatusRepository";
import * as _ from "lodash-es";

export class StoryRecordStatusRepository implements StatusRepository {
  private statuses: Status[] = [
    { id: "a-hard-bargain", name: "A Hard Bargain", effect: "" },
    {
      id: "afterlife-mysteries",
      name: "Afterlife Mysteries",
      effect: "Whenever any Hero scores a Critical Hit, they may Recall up to one AC.",
    },
    {
      id: "aftermath",
      name: "Aftermath",
      effect:
        "Whenever a Hero from your party takes a Recall Action, after resolving it, they receive CLEANSE 1 or FOCUS 1.",
    },
    {
      id: "aggressive-negotiations",
      name: "Aggressive Negotiations",
      effect: "",
    },
    { id: "anchor-locked", name: "Anchor Locked", effect: "" },
    { id: "anchor-sunk", name: "Anchor Sunk", effect: "" },
    {
      id: "anger-management",
      name: "Anger Management",
      effect: "Whenever a Hero suffers damage from an Attack card, they gain INSPIRE.",
    },
    {
      id: "angered-entrepreneur",
      name: "Angered Entrepreneur",
      effect: "Whenever a Hero rolls 16+: Activate Carmilla Reinard. This Ability can trigger only once per turn.",
    },
    {
      id: "back-to-back",
      name: "Back-to-Back",
      effect: "All Heroes in your party gain the WARDEN trait.",
    },
    { id: "bad-hosting", name: "Bad Hosting", effect: "" },
    {
      id: "betrayed",
      name: "Betrayed",
      effect: "Whenever a Hero defeats a Condottieri, they gain either FOCUS 2 or CLEANSE 2.",
    },
    {
      id: "bloody-mess",
      name: "Bloody Mess",
      effect: "Whenever a Hero drops to 0 Health, each other Hero suffers CURSE 1.",
    },
    {
      id: "bricklayer-s-assistant",
      name: "Bricklayer's Assistant",
      effect: "",
    },
    { id: "broken-man", name: "Broken Man", effect: "" },
    {
      id: "clean-conscience",
      name: "Clean Conscience",
      effect: "At the beginning of each Hero's turn, if they are holding no Curse Cubes, they receive INSPIRE.",
    },
    {
      id: "compassion",
      name: "Compassion",
      effect: "Heroes do not roll the Trap Die when opening Chests.",
    },
    {
      id: "contempt",
      name: "Contempt",
      effect:
        "Whenever a Hero inflicts damage to the Plague Horseman with a Weapon or Spell attack, they gain CLEANSE 1.",
    },
    { id: "damsel-in-distress", name: "Damsel in Distress", effect: "" },
    { id: "declawed-beast", name: "Declawed Beast", effect: "" },
    {
      id: "deep-understanding",
      name: "Deep Understanding",
      effect:
        "Whenever a Hero takes a Willing Recall Action, they may immediately take an additional Cube Action before ending their turn.",
    },
    {
      id: "desert-knight",
      name: "Desert Knight",
      effect: "Whenever a Hero defeats a Condottieri, they gain either FOCUS 2 or CLEANSE 2.",
    },
    { id: "disarmed-father", name: "Disarmed Father", effect: "" },
    {
      id: "downer",
      name: "Downer",
      effect: "Critical Hits no longer double the damage of an attack.",
    },
    { id: "drowned-prayer", name: "Drowned Prayer", effect: "" },
    { id: "element-collection", name: "Element Collection", effect: "" },
    { id: "even-number", name: "Even Number", effect: "" },
    { id: "frozen-to-death", name: "Frozen to Death", effect: "" },
    {
      id: "ghostly-plunder",
      name: "Ghostly Plunder",
      effect:
        "As a Cube Action, a Hero may Expend 1 AC to: If there are three or fewer Chests on the board, place a Chest in a square that is adjacent to them.",
    },
    { id: "give-or-take", name: "Give or Take", effect: "" },
    { id: "glyph-unraveled", name: "Glyph Unraveled", effect: "" },
    {
      id: "gold-digger",
      name: "Gold Digger",
      effect: "Whenever a Monster is defeated for the first time in a round, it drops a Loot token.",
    },
    {
      id: "head-start",
      name: "Head Start",
      effect: `Heroes can take the following Reaction by Expending 1 AC: "SELF, PREVENT ALL DMG AND FATIGUE Y where Y is the number of Time tokens on the Famine Horseman's Boss Monster Status Board; Then the Famine Horseman receives a Time token (this is just a reminder, not a Condition or Resource)."`,
    },
    { id: "healed-wound", name: "Healed Wound", effect: "" },
    { id: "heirloom-blade", name: "Heirloom Blade", effect: "" },
    {
      id: "herosplaining",
      name: "Herosplaining",
      effect:
        "Whenever a Hero rolls 1 on the d20 while attacking, they score a Critical Hit instead of a Critical Failure.",
    },
    {
      id: "improvisation-time",
      name: "Improvisation Time",
      effect: "Wwhenever a Hero defeats a Minion, they gain either FOCUS 1 or CLEANSE 1.",
    },
    {
      id: "initiative",
      name: "Initiative",
      effect:
        "Whenever a Hero from your party takes a Reaction, roll the 20: If they roll 16+: Recall the AC they just spent.",
    },
    {
      id: "it-takes-two",
      name: "It Takes Two",
      effect: "The Cohort Robin Rising activates two times during each of his turns.",
    },
    { id: "lever-pushed", name: "Lever Pushed", effect: "" },
    { id: "lifesaver", name: "Lifesaver", effect: "" },
    {
      id: "luccanor-s-revenge",
      name: "Luccanor's Revenge",
      effect:
        "Whenever a Hero inflicts damage to the Commander Betrayer with a Weapon or Spell attack, they gain FOCUS 1.",
    },
    { id: "no-maiden-fair", name: "No Maiden Fair", effect: "" },
    {
      id: "obstinate",
      name: "Obstinate",
      effect:
        "Whenever a Hero takes a Willing Recall Action, they may immediately take a Cube Action before ending their turn.",
    },
    { id: "odd-number", name: "Odd Number", effect: "" },
    {
      id: "past-life-hauntings",
      name: "Past-Life Hauntings",
      effect:
        "If the Scenario Commanders Lorennor or Uldannor receive a HEAL effect, they will take that same amount of non-preventable damage instead of regaining Health. Similarly, if they receive CLEANSE, they suffer INTIMIDATE 4 instead of removing a Curse Cube.",
    },
    { id: "perimeter-kept", name: "Perimeter Kept", effect: "" },
    {
      id: "pirate-s-luck",
      name: "Pirate's Luck",
      effect:
        "Whenever the first Monster is defeated on each new Setup your party makes, replace its miniature with a Loot token. If that Monster is a Large Monster, Commander, or Overlord, replace it with two of these tokens instead",
    },
    {
      id: "post-traumatic-stress",
      name: "Post-Traumatic Stress",
      effect:
        "Whenever a Hero is Knocked Out, each other Hero in your party gains FOCUS 1 and suffers CURSE 1. This effect pierces any kind of immunity a Hero might have.",
    },
    { id: "questioning", name: "Questioning", effect: "" },
    { id: "removed-helmet", name: "Removed Helmet", effect: "" },
    { id: "removed-necklace", name: "Removed Necklace", effect: "" },
    { id: "removed-shield", name: "Removed Shield", effect: "" },
    {
      id: "righteous",
      name: "Righteous",
      effect: "Heroes from your party can hold one additional Trauma Cube.",
    },
    { id: "royal-outrage", name: "Royal Outrage", effect: "" },
    { id: "sealed-fate", name: "Sealed Fate", effect: "" },
    { id: "ship-s-on", name: "Ship's On", effect: "" },
    {
      id: "suspicious",
      name: "Suspicious",
      effect: "Heroes that are being threatened can take one additional Reaction against their threats.",
    },
    {
      id: "swallowed-pride",
      name: "Swallowed Pride",
      effect: "Whenever a Hero scores a Crit, that Hero also gains FOCUS 2.",
    },
    { id: "terrible-fate", name: "Terrible Fate", effect: "" },
    { id: "the-heirloom-blade", name: "The Heirloom Blade", effect: "" },
    { id: "thy-kingdom-come", name: "Thy Kingdom Come", effect: "" },
    { id: "two-words", name: "Two Words", effect: "" },
    {
      id: "umbralian-knight",
      name: "Umbralian Knight",
      effect: "Whenever a Hero defeats a Dunedancer, they gain either FOCUS 2 or CLEANSE 2.",
    },
    {
      id: "until-the-end",
      name: "Until the End",
      effect:
        "Whenever a Hero takes the Tie Breaker Special Mechanic action, the War Horsewoman loses 2 Health per Rune removed.",
    },
    {
      id: "varatash-terror",
      name: "Varatash Terror",
      effect: "At the beginning of each Hero's turn, they gain: SELF, INSPIRE.",
    },
    {
      id: "weak-spot",
      name: "Weak Spot",
      effect:
        "Whenever any Hero hits the Famine Horseman with a Weapon attack or a Critical Hit, they choose one of his Attack cards to receive INTIMIDATE 2 (up to a maximum of 4 per card). The next time that card is activated, remove all of these tokens from it. The activated Attack deals -1 damage per token removed this way.",
    },
    {
      id: "well-fed",
      name: "Well Fed",
      effect: "Heroes receive only two Curse Cubes as a penalty when taking a Recall Action.",
    },
  ];

  public find(statusId: string): Status | undefined {
    return _.find(this.statuses, { id: statusId });
  }

  public findAll(): Status[] {
    return this.statuses;
  }
}
