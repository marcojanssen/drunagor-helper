import type { Outcome } from "@/data/repository/campaign/Outcome";
import type { OutcomeRepository } from "@/data/repository/campaign/OutcomeRepository";
import * as _ from "lodash-es";

export class StoryRecordOutcomeRepository implements OutcomeRepository {
  private outcomes: Outcome[] = [
    {
      id: "ancient-book",
      name: "Ancient Book",
      effect: "",
      translationKey: "outcome.ancient-book",
    },
    {
      id: "counting-kittens",
      name: "Counting Kittens",
      effect: "",
      translationKey: "outcome.counting-kittens",
    },
    {
      id: "defenders-fate",
      name: "Defender's Fate",
      effect: "",
      translationKey: "outcome.defenders-fate",
    },
    {
      id: "drinking-pal",
      name: "Drinking Pal",
      effect: "",
      translationKey: "outcome.drinking-pal",
    },
    {
      id: "entangled",
      name: "Entangled",
      effect: "",
      translationKey: "outcome.entangled",
    },
    {
      id: "farewell",
      name: "Farewell",
      effect: "",
      translationKey: "outcome.farewell",
    },
    {
      id: "full-house",
      name: "Full House",
      effect: "",
      translationKey: "outcome.full-house",
    },
    {
      id: "minervas-diary",
      name: "Minerva's Diary",
      effect: "",
      translationKey: "outcome.minervas-diary",
    },
    {
      id: "pirates-gift",
      name: "Pirate's Gift",
      effect: "",
      translationKey: "outcome.pirates-gift",
    },
    {
      id: "promised-reward",
      name: "Promised Reward",
      effect: "",
      translationKey: "outcome.promised-reward",
    },
    {
      id: "reunited",
      name: "Reunited",
      effect: "",
      translationKey: "outcome.reunited",
    },
    {
      id: "selfish",
      name: "Selfish",
      effect: "",
      translationKey: "outcome.selfish",
    },
    {
      id: "selfless",
      name: "Selfless",
      effect: "",
      translationKey: "outcome.selfless",
    },
    {
      id: "threats-or-treats",
      name: "Threats or Treats",
      effect: "",
      translationKey: "outcome.threats-or-treats",
    },
    {
      id: "untangled",
      name: "Untangled",
      effect: "",
      translationKey: "outcome.untangled",
    },
    {
      id: "watcher",
      name: "Watcher",
      effect: "",
      translationKey: "outcome.watcher",
    },
  ];

  public find(outcomeId: string): Outcome | undefined {
    return _.find(this.outcomes, { id: outcomeId });
  }

  public findAll(): Outcome[] {
    return this.outcomes;
  }
}
