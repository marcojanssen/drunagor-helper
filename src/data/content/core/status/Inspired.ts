import type { StatusData } from "@/data/repository/StatusData";

export class Inspired implements StatusData {
  id = "inspired";
  name = "Inspired";
  effect = "Once per turn, you may reroll a D20 when you miss.";
}
