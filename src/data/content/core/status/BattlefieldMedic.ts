import type { StatusData } from "@/data/repository/StatusData";

export class BattlefieldMedic implements StatusData {
  id = "battlefield-medic";
  name = "Battlefield medic";
  effect =
    "As a Cube Action, you may: Expend 1 AC while adjacent to a Knocked Out Hero to remove the Trauma Cube they just received from their board (this action can't remove a Trauma Cube from a Hero after they have regained their breath).";
}
