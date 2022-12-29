import type { StatusData } from "@/data/repository/StatusData";

export class Bullied implements StatusData {
  id = "bullied";
  name = "Bullied";
  effect = "Whenever you roll 5 or less on the d20, you score a critical failure.";
}
