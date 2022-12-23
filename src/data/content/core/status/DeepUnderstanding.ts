import type { StatusData } from "@/data/store/StatusData";

export class DeepUnderstanding implements StatusData {
  id = "deep-understanding";
  name = "Deep understanding";
  effect =
    "Whenever any Hero chooses an Interaction, they may: SELF, CURSE 1. If they do, they may undo the Interaction they just read and choose another Interaction from that same scene again. They may use this ability only once per Interaction, and the Interaction that is backtracked in this way becomes available again.";
}
