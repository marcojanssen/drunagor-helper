import ImageUrl from "@/assets/monster/big/AbominationBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/AbominationMiniature.webp";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class Abomination implements MonsterData {
  id = "abomination";
  name = "Abomination";
  content: ContentId = "core";
  variants: VariantId[] = ["standard", "alternate"];
  images = {
    big: ImageUrl,
    miniature: MiniatureUrl,
  };
  color: MonsterColor = "black";
  translation_key = "monster.abomination";
}
