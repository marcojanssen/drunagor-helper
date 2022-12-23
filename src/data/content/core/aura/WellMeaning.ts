import type { AuraData } from "@/data/store/AuraData";

export class WellMeaning implements AuraData {
  id = "well-meaning";
  name = "Well meaning";
  effect = "Whenever you use a CLEANSE effect on any Hero, that Hero may also Recall up to one Action Cube.";
}
