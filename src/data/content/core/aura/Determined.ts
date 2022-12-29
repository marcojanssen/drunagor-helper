import type { AuraData } from "@/data/repository/AuraData";

export class Determined implements AuraData {
  id = "determined";
  name = "Determined";
  effect = "You are immune to SLOW and STUN.";
}
