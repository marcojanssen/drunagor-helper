import type { Outcome } from "@/data/repository/campaign/Outcome";
import type { OutcomeRepository } from "@/data/repository/campaign/OutcomeRepository";
import * as _ from "lodash-es";
import { useI18n } from "vue-i18n";

export class CampaignLogOutcomeRepository implements OutcomeRepository {
  private outcomes: Outcome[] = [];

  public find(outcomeId: string): Outcome | undefined {
    return _.find(this.outcomes, { id: outcomeId });
  }

  public findAll(): Outcome[] {
    return this.outcomes;
  }

  public load(locale: string) {
    const i18n = useI18n();
    const outcomeList: any = i18n.messages.value[locale].outcome;
    this.outcomes = outcomeList["apocalypse"].campaign as Outcome[];
    this.outcomes = _.sortBy(this.outcomes, ["name"]);
  }
}
