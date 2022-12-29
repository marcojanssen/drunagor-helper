import type { AuraData } from "@/data/repository/AuraData";

export class Intoxicated implements AuraData {
  id = "intoxicated";
  name = "Intoxicated";
  effect = "Whenever you take a Recall Action, you suffer POISON 4";
}
