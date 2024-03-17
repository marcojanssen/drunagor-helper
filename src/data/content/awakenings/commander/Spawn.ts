import ImageUrl from "@/assets/monster/big/HellspawnBruteBig.webp";
import type { CommanderData } from "@/data/store/CommanderData";
import type { ContentId } from "@/data/type/ContentId";

export class Spawn implements CommanderData {
  id = "commander-spawn";
  name = "Spawn";
  content: ContentId = "awakenings";
  images = {
    big: ImageUrl,
    miniature: "",
  };
  translation_key = "monster.commander-spawn";
}
