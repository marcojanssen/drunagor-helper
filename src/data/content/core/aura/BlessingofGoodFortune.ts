import type { AuraData } from "@/data/repository/AuraData";

export class BlessingofGoodFortune implements AuraData {
  id = "blessing-of-good-fortune";
  name = "Blessing of good fortune";
  effect =
    "Whenever any Hero Expends an AC for any effect other than FATIGUE (as to gain an additional Move Action in a turn, for example) they also recall 1 AC.";
}
