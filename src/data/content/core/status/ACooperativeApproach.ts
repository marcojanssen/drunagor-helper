import type { StatusData } from "@/data/store/StatusData";

export class ACooperativeApproach implements StatusData {
  id = "a-cooperative-approach";
  name = "A cooperative approach";
  effect =
    "Whenever a Hero searches a Chest, they may draw one additional card and choose one of the two they draw to keep. They must shuffle the other card back into the deck.";
}
