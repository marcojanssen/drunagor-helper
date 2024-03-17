import ImageUrl from "@/assets/monster/big/GremlinHordeBig.webp";
import type { CommanderData } from "@/data/store/CommanderData";
import type { ContentId } from "@/data/type/ContentId";

export class Horde implements CommanderData {
  id = "commander-horde";
  name = "Horde";
  content: ContentId = "awakenings";
  images = {
    big: ImageUrl,
    miniature: "",
  };
  translation_key = "monster.commander-horde";
}
