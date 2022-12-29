import type { StatusData } from "@/data/repository/StatusData";

export class BlessedSource implements StatusData {
  id = "blessed-source";
  name = "Blessed source";
  effect = "You do not receive any Curse Cubes when you take a Recall Action.";
}
