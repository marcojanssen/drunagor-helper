import type { StatusData } from "@/data/store/StatusData";

export class Steadfast implements StatusData {
  id = "steadfast";
  name = "Steadfast";
  effect =
    "Whenever any Hero drops to 0 HP or less, that Hero may make a Strength (yellow) Skill Challenge of Difficulty 15. Each Melee cube they have gives them a +2 bonus to their roll. If they succeed, they drop to 1 HP instead.";
}
