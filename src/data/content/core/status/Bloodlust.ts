import type { StatusData } from "@/data/repository/StatusData";

export class Bloodlust implements StatusData {
  id = "bloodlust";
  name = "Bloodlust";
  effect =
    "Whenever you kill a Monster during your turn, after you resolve the current Action, you may take an additional Cube Action. This effect can trigger only once per turn. Otherwise, if no Hero has it, you gain FOCUS 2.";
}
