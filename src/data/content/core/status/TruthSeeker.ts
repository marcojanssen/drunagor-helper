import type { StatusData } from "@/data/repository/StatusData";

export class TruthSeeker implements StatusData {
  id = "truth-seeker";
  name = "Truthseeker";
  effect = "Whenever you remove a Curse Cube from your board you also: SELF, SHIELD 2.";
}
