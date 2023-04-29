import type { Status } from "@/data/repository/campaign/Status";
import type { StatusRepository } from "@/data/repository/campaign/StatusRepository";
import * as _ from "lodash-es";

export class StoryRecordStatusRepository implements StatusRepository {
  private status: Status[] = [
    { id: "acquaintance", name: "Acquaintance", effect: "" },
    { id: "acquainted", name: "Acquainted", effect: "" },
    { id: "bright-pupil", name: "Bright Pupil", effect: "" },
    { id: "careful", name: "Careful", effect: "" },
    {
      id: "christi-s-aid",
      name: "Christi's Aid",
      effect: "Whenever a Hero in your party takes a Recall Action, that Hero gains an Inspiration token",
    },
    { id: "dark-past", name: "Dark Past", effect: "" },
    { id: "guided", name: "Guided", effect: "" },
    { id: "heirloom", name: "Heirloom", effect: "" },
    { id: "imminent-danger", name: "Imminent Danger", effect: "" },
    { id: "karsten-freed", name: "Karsten Freed", effect: "" },
    { id: "king-s-cause", name: "King's Cause", effect: "" },
    { id: "loose-arm", name: "Loose Arm", effect: "" },
    { id: "nautical-empathy", name: "Nautical Empathy", effect: "" },
    { id: "painful-memories", name: "Painful Memories", effect: "" },
    { id: "pirate-s-gift", name: "Pirate's Gift", effect: "" },
    { id: "pushover", name: "Pushover", effect: "" },
    { id: "remorse", name: "Remorse", effect: "" },
    {
      id: "salamander-s-sweat",
      name: "Salamander's Sweat",
      effect:
        "Whenever a Hero rolls 16+ during an attack with a Weapon Attack or they cast a Spell Attack: the attack gains BURN 2.",
    },
    {
      id: "sea-fighter",
      name: "Sea Fighter",
      effect:
        "At the end of the Rune turn, after the Rune card effects are resolved, each Hero may take a SIDESTEP. A SIDESTEP is a MOVE 1 effect that is not affected by any movement bonuses or penalties you might have. In addition, it can be taken even if you are SLOWED or KNOCKED DOWN, however, these Conditions are not removed.",
    },
    {
      id: "search-party",
      name: "Search Party",
      effect: "Whenever a Hero in your party draws an Eradren Surprises Special Event card, that Hero gains FOCUS 2",
    },
    { id: "sunken-relic", name: "Sunken Relic", effect: "" },
    {
      id: "suspicious",
      name: "Suspicious",
      effect:
        "Whenever a Hero Search a Chest, they draw an additional card, choose one of those cards to keep, and put the other on the bottom of the Chest deck.",
    },
    {
      id: "the-x-mark-the-spot",
      name: "The X Mark the Spot",
      effect:
        "Whenever a Hero delivers the killing blow through a Critical Hit, the defeated Monster drops a Loot token on its space.",
    },
    {
      id: "turn-around",
      name: "Turn Around",
      effect:
        "Any Weapon Attack bonus to HIT your Attacks would have or receive becomes DMG bonus instead. Example: Vorn's Arching Swing reads: “CLEAVE 2, +3 HIT”; therefore, it becomes: “CLEAVE 2, +0 HIT, +3 DMG”. Any HIT bonus your Hero has from Equipment, Class Abilities, or Special Effects also turns into bonus damage.",
    },
    { id: "wrong-foot", name: "Wrong Foot", effect: "" },
  ];

  public find(statusId: string): Status | undefined {
    return _.find(this.status, { id: statusId });
  }

  public findAll(): Status[] {
    return this.status;
  }
}
