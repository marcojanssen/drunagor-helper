import type { StatusData } from "@/data/store/StatusData";

export class Challenger implements StatusData {
  id = "challenger";
  name = "Challenger";
  effect =
    "Whenever you suffer 4 or more damage from an attack (damage suffered is calculated after PREVENTs): RETALIATE 2.";
}
