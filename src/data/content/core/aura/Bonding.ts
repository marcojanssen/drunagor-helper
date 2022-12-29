import type { AuraData } from "@/data/repository/AuraData";

export class Bonding implements AuraData {
  id = "bonding";
  name = "Bonding";
  effect = "Whenever a Companion ends its turn adjacent to you, they gain SHIELD 4.";
}
