import type { StatusData } from "@/data/repository/StatusData";

export class TrickOrTreat implements StatusData {
  id = "trick-or-treat";
  name = "Trick or treat";
  effect =
    "Whenever you take a Recall Action, choose one: inflict BURN 2 on a Target within Range 1; or, Target Hero within Range 1, HEAL 2.";
}
