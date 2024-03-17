import type { ContentData } from "@/data/store/ContentData";
import type { ContentId } from "@/data/type/ContentId";

export class Lordwrath implements ContentData {
  public readonly id: ContentId = "lordwrath";
  public readonly title = "Lordwrath";
  public readonly heroes = true;
  public readonly monsters = false;
  public readonly items = false;
  public readonly translation_key = "content.lord-wrath";
}
