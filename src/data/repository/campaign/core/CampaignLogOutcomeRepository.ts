import type { OutcomeData } from "@/data/repository/campaign/OutcomeData";
import type { OutcomeRepository } from "@/data/repository/campaign/OutcomeRepository";
import * as _ from "lodash-es";

export class CampaignLogOutcomeRepository implements OutcomeRepository {
  private outcomes: OutcomeData[] = [
    {
      id: "a-couriers-job",
      name: "A courier's job",
      effect: "",
    },
    {
      id: "adamant",
      name: "Adamant",
      effect: "",
    },
    {
      id: "a-hideous-act",
      name: "A hideous act",
      effect: "",
    },
    {
      id: "a-lovers-request",
      name: "A lover's request",
      effect: "",
    },
    {
      id: "corrupted-hero",
      name: "Corrupted hero",
      effect: "",
    },
    {
      id: "curse-breaker",
      name: "Curse breaker",
      effect: "",
    },
    {
      id: "dynamic-duo",
      name: "Dynamic duo",
      effect: "",
    },
    {
      id: "gentle-dismissal",
      name: "Gentle dismissal",
      effect: "",
    },
    {
      id: "guardians-curse",
      name: "Guardian's curse",
      effect: "As long as you have Guardian's Curse, you cannot unequip the Cursed Bracelet.",
    },
    {
      id: "humbled",
      name: "Humbled",
      effect: "",
    },
    {
      id: "lovebirds-reunited",
      name: "Lovebird reunited",
      effect: "",
    },
    {
      id: "relic-breaker",
      name: "Relic breaker",
      effect: "",
    },
    {
      id: "sowing-winds",
      name: "Sowing winds",
      effect: "",
    },
    {
      id: "storyteller",
      name: "Storyteller",
      effect: "",
    },
    {
      id: "unbroken",
      name: "Unbroken",
      effect: "",
    },
  ];

  public find(outcomeId: string): OutcomeData | undefined {
    return _.find(this.outcomes, { id: outcomeId });
  }

  public findAll(): OutcomeData[] {
    return this.outcomes;
  }
}
