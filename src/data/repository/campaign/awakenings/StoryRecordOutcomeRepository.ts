import type { Outcome } from "@/data/repository/campaign/Outcome";
import type { OutcomeRepository } from "@/data/repository/campaign/OutcomeRepository";
import * as _ from "lodash-es";

export class StoryRecordOutcomeRepository implements OutcomeRepository {
  private outcomes: Outcome[] = [
    {
      id: "ancient-book",
      effect: "",
      translationKeys: {
        name: "outcome.ancient-book",
        effect: "",
      },
    },
    {
      id: "counting-kittens",
      effect: "",
      translationKeys: {
        name: "outcome.counting-kittens",
        effect: "",
      },
    },
    {
      id: "defenders-fate",
      effect: "",
      translationKeys: {
        name: "outcome.defenders-fate",
        effect: "",
      },
    },
    {
      id: "drinking-pal",
      effect: "",
      translationKeys: {
        name: "outcome.drinking-pal",
        effect: "",
      },
    },
    {
      id: "entangled",
      effect: "",
      translationKeys: {
        name: "outcome.entangled",
        effect: "",
      },
    },
    {
      id: "farewell",
      effect: "",
      translationKeys: {
        name: "outcome.farewell",
        effect: "",
      },
    },
    {
      id: "full-house",
      effect: "",
      translationKeys: {
        name: "outcome.full-house",
        effect: "",
      },
    },
    {
      id: "minervas-diary",
      effect: "",
      translationKeys: {
        name: "outcome.minervas-diary",
        effect: "",
      },
    },
    {
      id: "pirates-gift",
      effect: "",
      translationKeys: {
        name: "outcome.pirates-gift",
        effect: "",
      },
    },
    {
      id: "promised-reward",
      effect: "",
      translationKeys: {
        name: "outcome.promised-reward",
        effect: "",
      },
    },
    {
      id: "reunited",
      effect: "",
      translationKeys: {
        name: "outcome.reunited",
        effect: "",
      },
    },
    {
      id: "selfish",
      effect: "",
      translationKeys: {
        name: "outcome.selfish",
        effect: "",
      },
    },
    {
      id: "selfless",
      effect: "",
      translationKeys: {
        name: "outcome.selfless",
        effect: "",
      },
    },
    {
      id: "threats-or-treats",
      effect: "",
      translationKeys: {
        name: "outcome.threats-or-treats",
        effect: "",
      },
    },
    {
      id: "untangled",
      effect: "",
      translationKeys: {
        name: "outcome.untangled",
        effect: "",
      },
    },
    {
      id: "watcher",
      effect: "",
      translationKeys: {
        name: "outcome.watcher",
        effect: "",
      },
    },
  ];

  public find(outcomeId: string): Outcome | undefined {
    return _.find(this.outcomes, { id: outcomeId });
  }

  public findAll(): Outcome[] {
    return this.outcomes;
  }
}
