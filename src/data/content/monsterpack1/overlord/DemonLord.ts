import ImageUrl from "@/assets/monster/big/DemonLordBig.webp";
import type { CommanderData } from "@/data/store/CommanderData";
import type { ContentId } from "@/data/type/ContentId";

export class DemonLord implements CommanderData {
  id = "demon-lord";
  name = "Demon Lord";
  content: ContentId = "monster-pack-1";
  images = {
    big: ImageUrl,
    miniature: "",
  };
  translation_key = "monster.demon-lord";
}
