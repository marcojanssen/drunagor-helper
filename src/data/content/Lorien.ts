import type { ContentData } from "@/data/store/ContentData";
import type { ContentId } from "@/data/type/ContentId";

export class Lorien implements ContentData {
  public readonly id: ContentId = "lorien";
  public readonly title = "Lorien";
  public readonly heroes = true;
  public readonly monsters = false;
  public readonly translation_key = "content.lorien";
}
