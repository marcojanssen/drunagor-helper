import type { Aura } from "@/data/repository/campaign/Aura";
import type { AuraRepository } from "@/data/repository/campaign/AuraRepository";
import * as _ from "lodash-es";
import { useI18n } from "vue-i18n";

export class CampaignLogAuraRepository implements AuraRepository {
  private auras: Aura[] = [];

  public find(auraId: string): Aura | undefined {
    return _.find(this.auras, { id: auraId });
  }

  public findAll(): Aura[] {
    return this.auras;
  }

  public load(locale: string) {
    const i18n = useI18n();
    const auraList: any = i18n.messages.value[locale].auras;
    this.auras = auraList["apocalypse"].campaign as Aura[];
    this.auras = _.sortBy(this.auras, ["name"]);
  }
}
