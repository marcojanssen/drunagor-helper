import type { AuraData } from "@/data/repository/AuraData";
import type { HeroData } from "@/data/repository/HeroData";
import type { KeywordData } from "@/data/repository/KeywordData";
import type { OutcomeData } from "@/data/repository/OutcomeData";
import type { StatusData } from "@/data/repository/StatusData";
import type { ItemData } from "@/data/repository/ItemData";

export interface DataRepository {
  find(id: string): AuraData | ItemData | HeroData | OutcomeData | StatusData | KeywordData | undefined;
  findAll(): Object[];
}
