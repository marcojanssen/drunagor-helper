import type { AuraData } from "@/data/store/AuraData";

export class TrueheartedBlessing implements AuraData {
  id = "true-hearted-blessing";
  name = "True-hearted blessing";
  effect =
    "Whenever any Hero Expends an AC for any effect other than FATIGUE (as to gain an additional Move Action in a turn, for example) they also gain FOCUS 1.";
}
