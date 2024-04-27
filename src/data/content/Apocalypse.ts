import type { ContentData } from "@/data/store/ContentData";
import type { ContentId } from "@/data/type/ContentId";

export class Apocalypse implements ContentData {
  public readonly id: ContentId = "apocalypse";
  public readonly title = "Apocalypse";
  public readonly heroes = false;
  public readonly monsters = true;
  public readonly translation_key = "content.apocalypse";
}
