import type { StatusData } from "@/data/repository/StatusData";

export class ForTheFirstTime implements StatusData {
  id = "for-the-first-time";
  name = "For the first time";
  effect =
    "After you have spent your first AC during your turn, you may choose to immediately recall it (it still counts as one of your Cube Actions). This effect takes place before you would take an Unwilling Recall Action.";
}
