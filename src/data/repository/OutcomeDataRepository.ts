import { ACouriersJob } from "@/data/content/core/outcome/ACouriersJob";
import { AHideousAct } from "@/data/content/core/outcome/AHideousAct";
import { ALoversRequest } from "@/data/content/core/outcome/ALoversRequest";
import { Adamant } from "@/data/content/core/outcome/Adamant";
import { CorruptedHero } from "@/data/content/core/outcome/CorruptedHero";
import { CurseBreaker } from "@/data/content/core/outcome/CurseBreaker";
import { DynamicDuo } from "@/data/content/core/outcome/DynamicDuo";
import { GentleDismissal } from "@/data/content/core/outcome/GentleDismissal";
import { GuardiansCurse } from "@/data/content/core/outcome/GuardiansCurse";
import { Humbled } from "@/data/content/core/outcome/Humbled";
import { LovebirdsReunited } from "@/data/content/core/outcome/LovebirdsReunited";
import { RelicBreaker } from "@/data/content/core/outcome/RelicBreaker";
import { SowingWinds } from "@/data/content/core/outcome/SowingWinds";
import { Storyteller } from "@/data/content/core/outcome/Storyteller";
import { Unbroken } from "@/data/content/core/outcome/Unbroken";
import * as _ from "lodash-es";
import type { DataRepository } from "./DataRepository";
import type { OutcomeData } from "./OutcomeData";

export class OutcomeDataRepository implements DataRepository {
  private outcomes = [
    new ACouriersJob(),
    new Adamant(),
    new AHideousAct(),
    new ALoversRequest(),
    new CorruptedHero(),
    new CurseBreaker(),
    new DynamicDuo(),
    new GentleDismissal(),
    new GuardiansCurse(),
    new Humbled(),
    new LovebirdsReunited(),
    new RelicBreaker(),
    new SowingWinds(),
    new Storyteller(),
    new Unbroken(),
  ];

  public find(outcomeId: string): OutcomeData | undefined {
    return _.find(this.outcomes, { id: outcomeId });
  }

  public findAll(): OutcomeData[] {
    return this.outcomes;
  }
}
