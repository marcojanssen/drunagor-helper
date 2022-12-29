import type { StatusData } from "@/data/repository/StatusData";

export class EmeraldBlessing implements StatusData {
  id = "emeraldblessing";
  name = "Emerald blessing";
  effect =
    "Your Spell Attacks gain POISON 2 and your Weapon Attacks gain 'Whenever you Roll 16+: this attack gains POISON 2'";
}
