import type { AuraData } from "@/data/repository/AuraData";

export class Bloodlust implements AuraData {
  id = "bloodlust";
  name = "Bloodlust";
  effect =
    "Whenever you kill a Monster during your turn: After you resolve the current Action, you may take an additional Cube Action. This ability can trigger only once per turn.";
}
