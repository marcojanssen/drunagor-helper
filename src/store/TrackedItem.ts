import type { TrackedItemMonster } from "./TrackedItemMonster";

export class TrackedItem {
  public id: string;
  public position: string = "";
  public type: string;
  public trackedItem: TrackedItemMonster;

  constructor(id: string, position: string, type: "monster", trackedItem: TrackedItemMonster) {
    this.id = id;
    this.type = type;
    this.position = position;
    this.trackedItem = trackedItem;
  }
}
