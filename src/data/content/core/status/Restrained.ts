import type { StatusData } from "@/data/repository/StatusData";

export class Restrained implements StatusData {
  id = "restrained";
  name = "Restrained";
  effect =
    "All Heroes can use their green cubes as if they were blue or yellow cubes. Whenever a Hero uses a green cube to activate a Melee Skill that is NOT a Weapon Attack in this way, that Skill gains unlimited Range.";
}
