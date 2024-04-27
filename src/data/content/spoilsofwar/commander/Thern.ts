import ImageUrl from "@/assets/monster/big/ThernBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/ThernMiniature.webp";
import type { CommanderData } from "@/data/store/CommanderData";
import type { ContentId } from "@/data/type/ContentId";

export class Thern implements CommanderData {
  id = "commander-thern";
  name = "Thern";
  content: ContentId = "spoils-of-war";
  variants = [];
  images = {
    big: ImageUrl,
    miniature: MiniatureUrl,
  };
  translation_key = "monster.commander-thern";
}
