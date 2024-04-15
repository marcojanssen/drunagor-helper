import type { Outcome } from "@/data/repository/campaign/Outcome";
import type { OutcomeRepository } from "@/data/repository/campaign/OutcomeRepository";
import * as _ from "lodash-es";

export class CampaignLogOutcomeRepository implements OutcomeRepository {
  private outcomes: Outcome[] = [
    {
      id: "a-couriers-job",
      effect: "",
      translationKey: "outcome.a-couriers-job",
    },
    {
      id: "adamant",
      effect: "",
      translationKey: "outcome.adamant",
    },
    {
      id: "a-hideous-act",
      effect: "",
      translationKey: "outcome.a-hideous-act",
    },
    {
      id: "a-lovers-request",
      effect: "",
      translationKey: "outcome.a-lovers-request",
    },
    {
      id: "corrupted-hero",
      effect: "",
      translationKey: "outcome.corrupted-hero",
    },
    {
      id: "curse-breaker",
      effect: "",
      translationKey: "outcome.curse-breaker",
    },
    {
      id: "dynamic-duo",
      effect: "",
      translationKey: "outcome.dynamic-duo",
    },
    {
      id: "gentle-dismissal",
      effect: "",
      translationKey: "outcome.gentle-dismissal",
    },
    {
      id: "guardians-curse",
      effect: "As long as you have Guardian's Curse, you cannot unequip the Cursed Bracelet.",
      translationKey: "outcome.guardians-curse",
    },
    {
      id: "humbled",
      effect: "",
      translationKey: "outcome.humbled",
    },
    {
      id: "lovebirds-reunited",
      effect: "",
      translationKey: "outcome.lovebirds-reunited",
    },
    {
      id: "relic-breaker",
      effect: "",
      translationKey: "outcome.relic-breaker",
    },
    {
      id: "sowing-winds",
      effect: "",
      translationKey: "outcome.sowing-winds",
    },
    {
      id: "storyteller",
      effect: "",
      translationKey: "outcome.storyteller",
    },
    {
      id: "unbroken",
      effect: "",
      translationKey: "outcome.unbroken",
    },
  ];

  public find(outcomeId: string): Outcome | undefined {
    return _.find(this.outcomes, { id: outcomeId });
  }

  public findAll(): Outcome[] {
    return this.outcomes;
  }
}
