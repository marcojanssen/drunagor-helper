import type { OutcomeData } from "@/data/repository/campaign/OutcomeData";

export interface OutcomeRepository {
  find(id: string): OutcomeData | undefined;
  findAll(): OutcomeData[];
}
