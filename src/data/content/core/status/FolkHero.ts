import type { StatusData } from "@/data/repository/StatusData";

export class FolkHero implements StatusData {
  id = "folk-hero";
  name = "Folk hero";
  effect = "Whenever you remove a Curse Cube from your board you also: SELF, HEAL 2.";
}
