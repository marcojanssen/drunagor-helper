import ImageUrl from "@/assets/monster/big/NagianHunterBig.webp";
import type { CommanderData } from "@/data/store/CommanderData";
import type { ContentId } from "@/data/type/ContentId";

export class Hunter implements CommanderData {
  id = "commander-hunter";
  name = "Hunter";
  content: ContentId = "awakenings";
  images = {
    big: ImageUrl,
    miniature: "",
  };
  translation_key = "monster.commander-hunter";
}
