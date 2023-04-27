import type { HeroData } from "@/data/repository/HeroData";
import type { KeywordData } from "@/data/repository/KeywordData";
import type { AuraData } from "@/data/repository/campaign/AuraData";
import type { OutcomeData } from "@/data/repository/campaign/OutcomeData";
import type { StatusData } from "@/data/repository/campaign/StatusData";

export interface DataRepository {
  find(id: string): AuraData | HeroData | OutcomeData | StatusData | KeywordData | undefined;
  findAll(): Object[];
}
