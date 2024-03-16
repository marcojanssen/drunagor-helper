import type { ContentData } from "@/data/store/ContentData";
import type { ContentId } from "@/data/type/ContentId";

export class Handuriel implements ContentData {
  public readonly id: ContentId = "handuriel";
  public readonly title = "Handuriel";
  public readonly heroes = true;
  public readonly monsters = false;
  public readonly items = false;
  public readonly translation_key = "content.handuriel";
}
