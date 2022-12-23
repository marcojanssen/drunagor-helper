import type { StatusData } from "@/data/store/StatusData";

export class PlayDumb implements StatusData {
  id = "play-dumb";
  name = "Play dumb";
  effect = "You may choose not to gain any Curse Cubes when you take a Recall Action.";
}
