import type { ContentData } from "@/data/store/ContentData";
import type { ContentId } from "@/data/type/ContentId";

export class Core implements ContentData {
  public readonly id: ContentId = "core";
  public readonly title = "Core";
  public readonly heroes = true;
  public readonly monsters = true;
}
