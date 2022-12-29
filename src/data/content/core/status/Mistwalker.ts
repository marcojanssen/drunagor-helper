import type { StatusData } from "@/data/repository/StatusData";

export class Mistwalker implements StatusData {
  id = "mistwalker";
  name = "Mistwalker";
  effect =
    "Whenever a Hero takes a Move Action, they may: SELF, CURSE 1. If they do, they remove their Hero from the board and place it on any revealed square of their choice instead of moving. This is considered “taking a Move Action” for purposes of triggering abilities.";
}
