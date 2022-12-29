import type { StatusData } from "@/data/repository/StatusData";

export class Meek implements StatusData {
  id = "meek";
  name = "Meek";
  effect =
    "Whenever any Hero would drop to 0 HP or less, up to one other Hero may make a Wisdom (blue) Skill Challenge of Difficulty 15. Each Wisdom cube they have gives them a +2 bonus to their roll. If they succeed, they redirect the damage that would knock out that Hero to themselves (this damage can't be prevented or reacted to).";
}
