import type { AuraData } from "@/data/repository/AuraData";

export class Disdained implements AuraData {
  id = "disdained";
  name = "Disdained";
  effect = "Whenever you take a Recall Action you suffer FATIGUE 1 after you resolve it.";
}
