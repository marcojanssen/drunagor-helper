import type { StatusData } from "@/data/store/StatusData";

export class DoubleCheck implements StatusData {
  id = "double-check";
  name = "Double check";
  effect = "As a Minor Action, you may: SELF, CURSE 1 to remove one Darkness tile you are on top of and gain FOCUS 1.";
}
