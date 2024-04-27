import type { ContentData } from "@/data/store/ContentData";
import type { ContentId } from "@/data/type/ContentId";

export class HeroPack1 implements ContentData {
  public readonly id: ContentId = "hero-pack-1";
  public readonly title = "Hero Pack 1";
  public readonly heroes = true;
  public readonly monsters = false;
  public readonly translation_key = "content.hero-pack-1";
}
