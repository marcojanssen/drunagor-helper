import type { AuraData } from "@/data/repository/AuraData";

export class InspiringLeadership implements AuraData {
  id = "inspiring-leadership";
  name = "Inspiring leadership";
  effect =
    "All Heroes from the party score a Critical Hit instead of a Critical Failure whenever they roll 1 on the d20.";
}
