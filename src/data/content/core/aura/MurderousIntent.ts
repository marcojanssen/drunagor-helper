import type { AuraData } from "@/data/repository/AuraData";

export class MurderousIntent implements AuraData {
  id = "murderous-intent";
  name = "Murderous intent";
  effect = "Whenever you kill a creature with an Attack (Spell or Weapon), you gain: SELF, FOCUS 1.";
}
