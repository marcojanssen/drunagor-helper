import type { Outcome } from "@/data/repository/campaign/Outcome";
import type { OutcomeRepository } from "@/data/repository/campaign/OutcomeRepository";
import * as _ from "lodash-es";

export class StoryRecordOutcomeRepository implements OutcomeRepository {
  private outcomes: Outcome[] = [
    {
      id: "ancient-book",
      name: "Ancient Book",
      effect: "",
    },
    {
      id: "counting-kittens",
      name: "Counting Kittens",
      effect: "",
    },
    {
      id: "defenders-fate",
      name: "Defender's Fate",
      effect: "",
    },
    {
      id: "drinking-pal",
      name: "Drinking Pal",
      effect: "",
    },
    {
      id: "entangled",
      name: "Entangled",
      effect: "",
    },
    {
      id: "farewell",
      name: "Farewell",
      effect: "",
    },
    {
      id: "full-house",
      name: "Full House",
      effect: "",
    },
    {
      id: "minervas-diary",
      name: "Minerva's Diary",
      effect: "",
    },
    {
      id: "pirates-gift",
      name: "Pirate's Gift",
      effect: "",
    },
    {
      id: "promised-reward",
      name: "Promised Reward",
      effect: "",
    },
    {
      id: "reunited",
      name: "Reunited",
      effect: "",
    },
    {
      id: "selfish",
      name: "Selfish",
      effect: "",
    },
    {
      id: "selfless",
      name: "Selfless",
      effect: "",
    },
    {
      id: "threats-or-treats",
      name: "Threats or Treats",
      effect: "",
    },
    {
      id: "untangled",
      name: "Untangled",
      effect: "",
    },
    {
      id: "watcher",
      name: "Watcher",
      effect: "",
    },
  ];

  public find(outcomeId: string): Outcome | undefined {
    return _.find(this.outcomes, { id: outcomeId });
  }

  public findAll(): Outcome[] {
    return this.outcomes;
  }
}
