import type { ContentData } from "@/data/store/ContentData";
import type { ContentId } from "@/data/type/ContentId";

export class RiseOfTheUndeadDragon implements ContentData {
  public readonly id: ContentId = "rise-of-the-undead-dragon";
  public readonly title = "Rise of the Undead Dragon";
  public readonly heroes = true;
  public readonly monsters = true;
  public readonly items = true;
  public readonly translation_key = "content.rise-of-the-undead-dragon";
}
