import type { Aura } from "@/data/repository/campaign/Aura";

export interface AuraRepository {
  find(id: string): Aura | undefined;
  findAll(): Aura[];
  load(lang: string): void;
}
