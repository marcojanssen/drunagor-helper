import type { ContentData } from "@/data/store/ContentData";
import type { ContentId } from "@/data/type/ContentId";

export class DesertOfHellscar implements ContentData {
  public readonly id: ContentId = "desert-of-hellscar";
  public readonly title = "Desert of Hellscar";
  public readonly heroes = true;
  public readonly monsters = true;
  public readonly items = true;
  public readonly translation_key = "content.desert-of-hellscar";
}
