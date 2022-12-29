import type { AuraData } from "@/data/repository/AuraData";

export class BlessingoftheGuardian implements AuraData {
  id = "blessing-of-the-guardian";
  name = "Blessing of the guardian";
  effect =
    "Whenever any Hero Expends an AC for any effect other than FATIGUE (as to gain an additional Move Action in a turn, for example) they also gain SHIELD 2.";
}
