import type { HeroData } from "@/data/repository/HeroData";
import type { KeywordData } from "@/data/repository/KeywordData";
import type { Aura } from "@/data/repository/campaign/Aura";
import type { Outcome } from "@/data/repository/campaign/Outcome";
import type { Status } from "@/data/repository/campaign/Status";

export interface DataRepository {
  find(id: string): Aura | HeroData | Outcome | Status | KeywordData | undefined;
  findAll(): Object[];
}
