import type { StatusData } from "@/data/store/StatusData";

export class Practical implements StatusData {
  id = "practical";
  name = "Practical";
  effect =
    "Whenever any Hero would receive an Attack that would drop their HP to 0 or less; as a Reaction that Hero may make an Agility (green) Skill Challenge of Difficulty 15. Each Agility cube they have gives them a +2 bonus to their roll. If they succeed, they JUMP 2 and PREVENT ALL DMG they would take.";
}
