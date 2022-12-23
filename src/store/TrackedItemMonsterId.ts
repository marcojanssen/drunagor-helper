export class TrackedItemMonsterId {
  public id: string;

  constructor(monsterId: string, rank: "rookie" | "fighter" | "veteran" | "champion") {
    this.id = monsterId + "-" + rank;
  }

  public toString() {
    return this.id;
  }
}
