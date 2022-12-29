import type { StatusData } from "@/data/repository/StatusData";

export class AFriendlyApproach implements StatusData {
  id = "a-friendly-approach";
  name = "A friendly approach";
  effect =
    "Whenever any Hero resolves an effect with the keyword 'SELF' on it, they may choose another character who is adjacent to them as its target instead of themselves.";
}
