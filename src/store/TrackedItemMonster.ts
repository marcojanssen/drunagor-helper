export class TrackedItemMonster {
  public id: string;
  public health: number = 20;
  public rank: "rookie" | "fighter" | "veteran" | "champion";

  constructor(id: string, rank: "rookie" | "fighter" | "veteran" | "champion") {
    this.id = id;
    this.rank = rank;
  }

  public spawn() {}

  public kill() {}
}
