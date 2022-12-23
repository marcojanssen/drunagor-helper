import type { StatusData } from "@/data/store/StatusData";

export class ASuspiciousApproach implements StatusData {
  id = "a-suspicious-approach";
  name = "A suspicious approach";
  effect = "All Chests are considered safe and the Heroes do not need to roll the Trap die when searching them.";
}
