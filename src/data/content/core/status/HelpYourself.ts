import type { StatusData } from "@/data/repository/StatusData";

export class HelpYourself implements StatusData {
  id = "help-yourself";
  name = "Help yourself";
  effect =
    "As a Minor Action, you may: SELF, CURSE 1 to return an entire revealed Pile of Runes (that is on the board, not the Initiative Track) to the bag and gain FOCUS 1.";
}
