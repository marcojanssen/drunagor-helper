import type { AuraData } from "@/data/store/AuraData";

export class BoonofEmpathy implements AuraData {
  id = "boon-of-empathy";
  name = "Boon of empathy";
  effect =
    "As a Minor Action, you may take a Trauma Cube from a Hero that is adjacent to you and place it on your board. Receiving a Trauma Cube this way does not end the effects of this Boon.";
}
