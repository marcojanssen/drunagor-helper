import type { Outcome } from "@/data/repository/campaign/Outcome";
import type { OutcomeRepository } from "@/data/repository/campaign/OutcomeRepository";
import * as _ from "lodash-es";

export class CampaignLogOutcomeRepository implements OutcomeRepository {
  private outcomes: Outcome[] = [
    {
      id: "bitten",
      name: "Bitten",
      effect:
        "Whenever you take a Recall Action, you suffer STUN. This STUN pierces any kind of immunity you have, since it represents your difficulty in handling your actions after sustaining such a serious injury and not a mental disorder due to physical trauma.",
      translationKey: "outcome.bitten",
    },
    {
      id: "deep-wound",
      name: "Deep Wound",
      effect: "You can hold one less Trauma Cube",
      translationKey: "outcome.deep-wound",
    },
  ];

  public find(outcomeId: string): Outcome | undefined {
    return _.find(this.outcomes, { id: outcomeId });
  }

  public findAll(): Outcome[] {
    return this.outcomes;
  }
}
