import type { StatusData } from "@/data/store/StatusData";

export class FairAndSquare implements StatusData {
  id = "fair-and-square";
  name = "Fair and square";
  effect = "You score a Critical Hit whenever you roll 4 or 16 on the d20.";
}
