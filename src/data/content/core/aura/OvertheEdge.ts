import type { AuraData } from "@/data/repository/AuraData";

export class OvertheEdge implements AuraData {
  id = "over-the-edge";
  name = "Over the edge";
  effect = "Whenever any Hero scores a Critical Hit, they gain: SELF, FOCUS 1.";
}
