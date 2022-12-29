import type { AuraData } from "@/data/repository/AuraData";

export class Hellbent implements AuraData {
  id = "hellbent";
  name = "Hellbent";
  effect =
    "Whenever any Hero scores a Critical Hit, the attack gains +1 DMG (do not double it due to the critical) per Curse Cube that Hero is holding.";
}
