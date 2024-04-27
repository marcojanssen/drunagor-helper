import ImageUrl from "@/assets/monster/big/GorgonessWitchBig.webp";
import type { CommanderData } from "@/data/store/CommanderData";
import type { ContentId } from "@/data/type/ContentId";

export class Witch implements CommanderData {
  id = "commander-witch";
  name = "Witch";
  content: ContentId = "awakenings";
  images = {
    big: ImageUrl,
    miniature: "",
  };
  translation_key = "monster.commander-witch";
}
