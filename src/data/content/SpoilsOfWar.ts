import type { ContentData } from "@/data/store/ContentData";
import type { ContentId } from "@/data/type/ContentId";

export class SpoilsOfWar implements ContentData {
  public readonly id: ContentId = "spoils-of-war";
  public readonly title = "Spoils of War";
  public readonly heroes = true;
  public readonly monsters = true;
  public readonly items = false;
  public readonly translation_key = "content.spoils-of-war";
}
