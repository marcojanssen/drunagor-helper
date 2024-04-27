import ImageUrl from "@/assets/monster/big/ShadowCultistBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/ShadowCultistMiniature.webp";
import type { CommanderData } from "@/data/store/CommanderData";
import type { ContentId } from "@/data/type/ContentId";

export class Archon implements CommanderData {
  id = "archon";
  name = "Archon";
  content: ContentId = "core";
  images = {
    big: ImageUrl,
    miniature: MiniatureUrl,
  };
  translation_key = "monster.archon";
}
