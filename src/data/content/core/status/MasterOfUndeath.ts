import type { StatusData } from "@/data/repository/StatusData";

export class MasterOfUndeath implements StatusData {
  id = "master-of-undeath";
  name = "Master of undeath";
  effect =
    "Whenever you take a Recall Action, after you resolve it, you may: SELF, CURSE 1. If you do, activate a small based Apparition of your choice. You control its turn during that activation (you may ignore its targeting priorities and force it to attack another Monster instead).";
}
