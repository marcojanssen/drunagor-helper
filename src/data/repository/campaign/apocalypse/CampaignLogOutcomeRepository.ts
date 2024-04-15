import type { Outcome } from "@/data/repository/campaign/Outcome";
import type { OutcomeRepository } from "@/data/repository/campaign/OutcomeRepository";
import * as _ from "lodash-es";

export class CampaignLogOutcomeRepository implements OutcomeRepository {
  private outcomes: Outcome[] = [
    {
      id: "bitten",
      effect:
        "Whenever you take a Recall Action, you suffer STUN. This STUN pierces any kind of immunity you have, since it represents your difficulty in handling your actions after sustaining such a serious injury and not a mental disorder due to physical trauma.",
      translationKeys: {
        name: "outcome.bitten",
        effect: "outcome.bitten-effect",
      },
    },
    {
      id: "deep-wound",
      effect: "You can hold one less Trauma Cube",
      translationKeys: {
        name: "outcome.deep-wound",
        effect: "outcome.deep-wound-effect",
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
