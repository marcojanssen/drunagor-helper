import type { Outcome } from "@/data/repository/campaign/Outcome";
import type { OutcomeRepository } from "@/data/repository/campaign/OutcomeRepository";
import * as _ from "lodash-es";

export class CampaignLogOutcomeRepository implements OutcomeRepository {
  private outcomes: Outcome[] = [
    {
      id: "a-couriers-job",
      effect: "",
      translationKeys: {
        name: "outcome.a-couriers-job",
        effect: "",
      },
    },
    {
      id: "adamant",
      effect: "",
      translationKeys: {
        name: "outcome.adamant",
        effect: "",
      },
    },
    {
      id: "a-hideous-act",
      effect: "",
      translationKeys: {
        name: "outcome.a-hideous-act",
        effect: "",
      },
    },
    {
      id: "a-lovers-request",
      effect: "",
      translationKeys: {
        name: "outcome.a-lovers-request",
        effect: "",
      },
    },
    {
      id: "corrupted-hero",
      effect: "",
      translationKeys: {
        name: "outcome.corrupted-hero",
        effect: "",
      },
    },
    {
      id: "curse-breaker",
      effect: "",
      translationKeys: {
        name: "outcome.curse-breaker",
        effect: "",
      },
    },
    {
      id: "dynamic-duo",
      effect: "",
      translationKeys: {
        name: "outcome.dynamic-duo",
        effect: "",
      },
    },
    {
      id: "gentle-dismissal",
      effect: "",
      translationKeys: {
        name: "outcome.gentle-dismissal",
        effect: "",
      },
    },
    {
      id: "guardians-curse",
      effect: "As long as you have Guardian's Curse, you cannot unequip the Cursed Bracelet.",
      translationKeys: {
        name: "outcome.guardians-curse",
        effect: "outcome.guardians-curse-effect",
      },
    },
    {
      id: "humbled",
      effect: "",
      translationKeys: {
        name: "outcome.humbled",
        effect: "",
      },
    },
    {
      id: "lovebirds-reunited",
      effect: "",
      translationKeys: {
        name: "outcome.lovebirds-reunited",
        effect: "",
      },
    },
    {
      id: "relic-breaker",
      effect: "",
      translationKeys: {
        name: "outcome.relic-breaker",
        effect: "",
      },
    },
    {
      id: "sowing-winds",
      effect: "",
      translationKeys: {
        name: "outcome.sowing-winds",
        effect: "",
      },
    },
    {
      id: "storyteller",
      effect: "",
      translationKeys: {
        name: "outcome.storyteller",
        effect: "",
      },
    },
    {
      id: "unbroken",
      effect: "",
      translationKeys: {
        name: "outcome.unbroken",
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
