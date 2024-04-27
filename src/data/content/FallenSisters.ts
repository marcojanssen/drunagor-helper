import type { ContentData } from "@/data/store/ContentData";
import type { ContentId } from "@/data/type/ContentId";

export class FallenSisters implements ContentData {
  public readonly id: ContentId = "fallen-sisters";
  public readonly title = "Fallen Sisters";
  public readonly heroes = false;
  public readonly monsters = true;
  public readonly translation_key = "content.fallen-sisters";
}
