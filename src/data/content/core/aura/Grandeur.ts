import type { AuraData } from "@/data/store/AuraData";

export class Grandeur implements AuraData {
  id = "grandeur";
  name = "Grandeur";
  effect = "Whenever any Hero scores a Critical Hit, they gain: SELF, CLEANSE 2.";
}
