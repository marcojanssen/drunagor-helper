import type { StatusData } from "@/data/store/StatusData";

export class Apathetic implements StatusData {
  id = "apathetic";
  name = "Apathetic";
  effect =
    "Whenever you take a Recall Action during your turn, you may retrieve a Scroll card from the Chest deck discard pile and use it immediately. This does not count as a “Use Consumable Item” Minor Action. If you do, after resolving that card, shuffle it back in the Chest deck instead of putting it again in the discard pile.";
}
