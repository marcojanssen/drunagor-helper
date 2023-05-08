import type { HeroData } from "@/data/repository/HeroData";
import type { KeywordData } from "@/data/repository/KeywordData";
import type { Aura } from "@/data/repository/campaign/Aura";
import type { Outcome } from "@/data/repository/campaign/Outcome";
import type { Status } from "@/data/repository/campaign/Status";
import type { ItemData } from "@/data/repository/ItemData";

export interface DataRepository {
  find(id: string): Aura | ItemData | HeroData | Outcome | Status | KeywordData | undefined;
  findAll(): Object[];
}
