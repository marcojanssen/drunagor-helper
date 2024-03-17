import type { ContentData } from "@/data/store/ContentData";
import type { ContentId } from "@/data/type/ContentId";

export class TheShadowWorld implements ContentData {
  public readonly id: ContentId = "the-shadow-world";
  public readonly title = "The Shadow World";
  public readonly heroes = false;
  public readonly monsters = true;
  public readonly items = false;
  public readonly translation_key = "content.the-shadow-world";
}
