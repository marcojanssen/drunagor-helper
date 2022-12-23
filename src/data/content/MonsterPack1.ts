import type { ContentData } from "@/data/store/ContentData";
import type { ContentId } from "@/data/type/ContentId";

export class MonsterPack1 implements ContentData {
  public readonly id: ContentId = "monster-pack-1";
  public readonly title = "Monster Pack 1";
  public readonly heroes = false;
  public readonly monsters = true;
}
