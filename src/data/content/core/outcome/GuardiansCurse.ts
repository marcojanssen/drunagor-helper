import type { OutcomeData } from "@/data/store/OutcomeData";

export class GuardiansCurse implements OutcomeData {
  id = "guardians-curse";
  name = "Guardian's curse";
  effect = "As long as you have Guardian's Curse, you cannot unequip the Cursed Bracelet.";
}
