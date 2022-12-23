import type { StatusData } from "@/data/store/StatusData";

export class TruthSeeker implements StatusData {
  id = "truth-seeker";
  name = "Truthseeker";
  effect = "Whenever you remove a Curse Cube from your board you also: SELF, SHIELD 2.";
}
