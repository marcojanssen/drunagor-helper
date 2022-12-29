import type { StatusData } from "@/data/repository/StatusData";

export class Invincible implements StatusData {
  id = "invincible";
  name = "Invincible";
  effect =
    "As a Minor Action, you may: SELF, Remove a Trauma Cube to either make the next Weapon Attack (a single attack, not the entire Cube Action) or Spell Attack they make that turn deal double damage.";
}
