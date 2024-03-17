import ImageUrl from "@/assets/monster/big/GorgonHexerBig.webp";
import type { CommanderData } from "@/data/store/CommanderData";
import type { ContentId } from "@/data/type/ContentId";

export class Hexer implements CommanderData {
  id = "commander-hexer";
  name = "Hexer";
  content: ContentId = "awakenings";
  images = {
    big: ImageUrl,
    miniature: "",
  };
  translation_key = "monster.commander-hexer";
}
