import type { Status } from "@/data/repository/campaign/Status";
import type { StatusRepository } from "@/data/repository/campaign/StatusRepository";
import * as _ from "lodash-es";

export class CampaignLogStatusRepository implements StatusRepository {
  private status: Status[] = [
    {
      id: "acquaintance",
      name: "Acquaintance",
      effect: "",
    },
    {
      id: "better-judgment",
      name: "Better Judgment",
      effect:
        "Once per turn, after you miss with a Weapon Attack made from a Skill, you may Recall the cube you just spent to use that Skill.",
    },
    {
      id: "corrupt-power",
      name: "Corrupt Power",
      effect:
        "Heroes may never have fewer than 2 Curse Cubes in their boards and, once per turn, they may roll the d20 if they disliked a move’s outcome.",
    },
    {
      id: "haunted",
      name: "Haunted",
      effect:
        "Whenever you roll 1 on the d20 while attacking, if an Ally is in that attack's Range, they are hit by it instead of a Monster (this happens even if you have abilities that turn 1 rolls into hits or critical hits).",
    },
    {
      id: "lifesaver",
      name: "Lifesaver",
      effect:
        "As a Cube Action, you may Expend 1 Action Cube to take 2 Curse Cubes (taking a Curse Cube is different from suffering CURSE) and remove a Trauma Cube from a Knocked Out Hero who is adjacent to you. If that Hero has already Regained their Breath, you can't remove their Trauma Cube in this way.",
    },
    {
      id: "power-of-hate",
      name: "Power of Hate",
      effect: "Heroes can take 1 additional Cube Action on their turns.",
    },
    {
      id: "shadow-crown",
      name: "Shadow Crown",
      effect: "Heroes are not affected by Darkness (they suffer neither the damage nor the penalties).",
    },
    {
      id: "soft-heart",
      name: "Soft Heart",
      effect:
        'While there is another Hero adjacent to you, that Hero will receive the benefits of the "Dour" Aura (the Aura benefits will only apply while you are still adjacent to them).',
    },
    {
      id: "sweet-scent",
      name: "Sweet Scent",
      effect:
        "Minions are bewitched by its pleasant smell and are unable to attack you (they don't consider you as a target) and the Wild Boar that roams the island (if still alive) will no longer try to escape. Instead, it will move towards you, trying to stay adjacent to you.",
    },
  ];

  public find(statusId: string): Status | undefined {
    return _.find(this.status, { id: statusId });
  }

  public findAll(): Status[] {
    return this.status;
  }
}
