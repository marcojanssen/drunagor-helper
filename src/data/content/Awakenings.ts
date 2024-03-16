import type { ContentData } from "@/data/store/ContentData";
import type { ContentId } from "@/data/type/ContentId";

export class Awakenings implements ContentData {
  public readonly id: ContentId = "awakenings";
  public readonly title = "Awakenings";
  public readonly heroes = true;
  public readonly monsters = true;
  public readonly translation_key = "content.awakenings";
}
