import type { Outcome } from "@/data/repository/campaign/Outcome";
import type { OutcomeRepository } from "@/data/repository/campaign/OutcomeRepository";
import * as _ from "lodash-es";

export class CampaignLogOutcomeRepository implements OutcomeRepository {
  private outcomes: Outcome[] = [
    {
      id: "a-couriers-job",
      name: "A courier's job",
      effect: "",
      translationKey: "outcome.a-couriers-job",
    },
    {
      id: "adamant",
      name: "Adamant",
      effect: "",
      translationKey: "outcome.adamant",
    },
    {
      id: "a-hideous-act",
      name: "A hideous act",
      effect: "",
      translationKey: "outcome.a-hideous-act",
    },
    {
      id: "a-lovers-request",
      name: "A lover's request",
      effect: "",
      translationKey: "outcome.a-lovers-request",
    },
    {
      id: "corrupted-hero",
      name: "Corrupted hero",
      effect: "",
      translationKey: "outcome.corrupted-hero",
    },
    {
      id: "curse-breaker",
      name: "Curse breaker",
      effect: "",
      translationKey: "outcome.curse-breaker",
    },
    {
      id: "dynamic-duo",
      name: "Dynamic duo",
      effect: "",
      translationKey: "outcome.dynamic-duo",
    },
    {
      id: "gentle-dismissal",
      name: "Gentle dismissal",
      effect: "",
      translationKey: "outcome.gentle-dismissal",
    },
    {
      id: "guardians-curse",
      name: "Guardian's curse",
      effect: "As long as you have Guardian's Curse, you cannot unequip the Cursed Bracelet.",
      translationKey: "outcome.guardians-curse",
    },
    {
      id: "humbled",
      name: "Humbled",
      effect: "",
      translationKey: "outcome.humbled",
    },
    {
      id: "lovebirds-reunited",
      name: "Lovebird reunited",
      effect: "",
      translationKey: "outcome.lovebirds-reunited",
    },
    {
      id: "relic-breaker",
      name: "Relic breaker",
      effect: "",
      translationKey: "outcome.relic-breaker",
    },
    {
      id: "sowing-winds",
      name: "Sowing winds",
      effect: "",
      translationKey: "outcome.sowing-winds",
    },
    {
      id: "storyteller",
      name: "Storyteller",
      effect: "",
      translationKey: "outcome.storyteller",
    },
    {
      id: "unbroken",
      name: "Unbroken",
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
