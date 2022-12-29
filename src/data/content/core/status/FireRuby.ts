import type { StatusData } from "@/data/repository/StatusData";

export class FireRuby implements StatusData {
  id = "fire-ruby";
  name = "Fire ruby";
  effect =
    "Your Spell Attacks gain BURN 2 and your Weapon Attacks gain “Whenever you roll 16+: This attack gains BURN 2.”";
}
