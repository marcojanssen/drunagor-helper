import type { StatusData } from "@/data/store/StatusData";

export class Proud implements StatusData {
  id = "proud";
  name = "Proud";
  effect =
    "Whenever any Hero drops to 0 HP or less, that Hero may make a Dexterity (red) Skill Challenge of Difficulty 15. Each Ranged cube they have gives them a +2 bonus to their roll. If they succeed, RETALIATE 10.";
}
