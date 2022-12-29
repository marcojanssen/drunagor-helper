import type { AuraData } from "@/data/repository/AuraData";

export class Spellshock implements AuraData {
  id = "spellshock";
  name = "Spellshock";
  effect = "Whenever you take a Reaction, you suffer FATIGUE 1.";
}
