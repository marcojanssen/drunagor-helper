import type { AuraData } from "@/data/repository/campaign/AuraData";

export interface AuraRepository {
  find(id: string): AuraData | undefined;
  findAll(): AuraData[];
}
