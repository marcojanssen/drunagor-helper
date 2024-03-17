import ImageUrl from "@/assets/monster/big/FallenSistersBig.webp";
import type { CommanderData } from "@/data/store/CommanderData";
import type { ContentId } from "@/data/type/ContentId";

export class FallenSisters implements CommanderData {
  id = "fallen-sisters";
  name = "Fallen Sisters";
  content: ContentId = "fallen-sisters";
  images = {
    big: ImageUrl,
    miniature: "",
  };
  translation_key = "monster.fallen-sisters";
}
