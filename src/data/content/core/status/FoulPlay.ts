import type { StatusData } from "@/data/store/StatusData";

export class FoulPlay implements StatusData {
  id = "foul-play";
  name = "Foul play";
  effect = "Whenever you take a Recall Action, you suffer POISON 2.";
}
