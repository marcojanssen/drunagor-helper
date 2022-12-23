import type { AttackType } from "@/data/type/AttackType";
import type { MonsterRank } from "@/data/type/MonsterRank";
import type { Rune } from "@/data/type/Rune";
import type { VariantId } from "@/data/type/VariantId";
import type { Condition } from "@/data/type/Condition";

export class Monster {
  public id: string;
  public health: number = 20;
  public immunities: Condition[] = [];
  public move: number = 20;
  public damage: number = 20;
  public attack: string = "";
  public attackType: AttackType = "melee";
  public rank: MonsterRank;
  public variant: VariantId = "standard";
  public rune: Rune = "blue";

  constructor(id: string, rank: MonsterRank) {
    this.id = id;
    this.rank = rank;
  }

  public spawn() {}

  public kill() {}
}
