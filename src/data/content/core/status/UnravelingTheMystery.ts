import type { StatusData } from "@/data/store/StatusData";

export class UnravelingTheMystery implements StatusData {
  id = "unraveling-the-mystery";
  name = "Unraveling the mystery";
  effect =
    "Whenever an effect would summon a Minion (Minions are a specific type of Monster that are not White, Grey, or Black), you may Expend 2 AC to cancel the summoning effect. You cannot cancel Minions that are added by a Setup, but you can cancel those that are summoned through your enemies abilities.";
}
