import type { MonsterRank } from "@/data/type/MonsterRank";
import type { VariantId } from "@/data/type/VariantId";

export class TrackedItemMonster {
  public id: string;
  public rank: MonsterRank;
  public variant: VariantId;

  constructor(id: string, rank: MonsterRank, variant: VariantId) {
    this.id = id;
    this.rank = rank;
    this.variant = variant;
  }
}
