import type { AuraData } from "@/data/store/AuraData";

export class ClearConscious implements AuraData {
  id = "clear-conscious";
  name = "Clear conscious";
  effect = "Whenever you kill a creature with an attack (Spell or Weapon), you gain: SELF, CLEANSE 1.";
}
