import type { StatusData } from "@/data/store/StatusData";

export class Focused implements StatusData {
  id = "focused";
  name = "Focused";
  effect = "Whenever any Hero scores a Crit, that Hero gains FOCUS 1.";
}
