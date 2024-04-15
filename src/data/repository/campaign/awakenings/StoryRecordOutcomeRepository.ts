import type { Outcome } from "@/data/repository/campaign/Outcome";
import type { OutcomeRepository } from "@/data/repository/campaign/OutcomeRepository";
import * as _ from "lodash-es";

export class StoryRecordOutcomeRepository implements OutcomeRepository {
  private outcomes: Outcome[] = [
    {
      id: "ancient-book",
      effect: "",
      translationKey: "outcome.ancient-book",
    },
    {
      id: "counting-kittens",
      effect: "",
      translationKey: "outcome.counting-kittens",
    },
    {
      id: "defenders-fate",
      effect: "",
      translationKey: "outcome.defenders-fate",
    },
    {
      id: "drinking-pal",
      effect: "",
      translationKey: "outcome.drinking-pal",
    },
    {
      id: "entangled",
      effect: "",
      translationKey: "outcome.entangled",
    },
    {
      id: "farewell",
      effect: "",
      translationKey: "outcome.farewell",
    },
    {
      id: "full-house",
      effect: "",
      translationKey: "outcome.full-house",
    },
    {
      id: "minervas-diary",
      effect: "",
      translationKey: "outcome.minervas-diary",
    },
    {
      id: "pirates-gift",
      effect: "",
      translationKey: "outcome.pirates-gift",
    },
    {
      id: "promised-reward",
      effect: "",
      translationKey: "outcome.promised-reward",
    },
    {
      id: "reunited",
      effect: "",
      translationKey: "outcome.reunited",
    },
    {
      id: "selfish",
      effect: "",
      translationKey: "outcome.selfish",
    },
    {
      id: "selfless",
      effect: "",
      translationKey: "outcome.selfless",
    },
    {
      id: "threats-or-treats",
      effect: "",
      translationKey: "outcome.threats-or-treats",
    },
    {
      id: "untangled",
      effect: "",
      translationKey: "outcome.untangled",
    },
    {
      id: "watcher",
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
