import type { StatusData } from "@/data/repository/StatusData";

export class Safeguard implements StatusData {
  id = "safeguard";
  name = "Safeguard";
  effect = "Your Spell Attacks gain '; SHIELD 2' and your Weapon Attacks gain 'Whenever you roll 16+: SHIELD 2.'";
}
