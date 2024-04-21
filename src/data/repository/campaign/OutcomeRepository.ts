import type { Outcome } from "@/data/repository/campaign/Outcome";

export interface OutcomeRepository {
  find(id: string): Outcome | undefined;
  findAll(): Outcome[];
  load(lang: string): void;
}
