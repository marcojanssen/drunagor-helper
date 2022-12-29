import type { StatusData } from "@/data/repository/StatusData";

export class Cautious implements StatusData {
  id = "cautious";
  name = "Cautious";
  effect =
    "Whenever a Hero without the 'Warned' Status would be knocked out, that Hero may: SELF, CURSE 1. If they do, they must write down the 'Warned' Status on their Campaign Log and drop to 1 Health instead.";
}
