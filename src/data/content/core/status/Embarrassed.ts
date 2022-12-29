import type { StatusData } from "@/data/repository/StatusData";

export class Embarrassed implements StatusData {
  id = "embarrassed";
  name = "Embarrassed";
  effect = "You can use only Green and Blue cubes to Activate your Skills that have a four-colored AC Slot.";
}
