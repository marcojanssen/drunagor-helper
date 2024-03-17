import ImageUrl from "@/assets/monster/big/FellAsterisBig.webp";
import type { CommanderData } from "@/data/store/CommanderData";
import type { ContentId } from "@/data/type/ContentId";

export class Ox implements CommanderData {
  id = "commander-ox";
  name = "Ox";
  content: ContentId = "awakenings";
  images = {
    big: ImageUrl,
    miniature: "",
  };
  translation_key = "monster.commander-ox";
}
