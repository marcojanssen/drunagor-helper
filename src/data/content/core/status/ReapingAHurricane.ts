import type { StatusData } from "@/data/store/StatusData";

export class ReapingAHurricane implements StatusData {
  id = "reaping-a-hurricane";
  name = "Reaping a hurricane";
  effect =
    "At the beginning of their turn: SELF, CURSE 1. Instead of placing the CC they receive in a Skill Slot, they hold as if it were also an AC and it can be used that turn as a Wild Cube (it still counts toward the CC limit the Hero can hold).";
}
