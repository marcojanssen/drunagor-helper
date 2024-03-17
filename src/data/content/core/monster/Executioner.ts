import ImageUrl from "@/assets/monster/big/ExecutionerBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/ExecutionerMiniature.webp";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class Executioner implements MonsterData {
  id = "executioner";
  name = "Executioner";
  content: ContentId = "core";
  variants: VariantId[] = ["standard", "alternate"];
  images = {
    big: ImageUrl,
    miniature: MiniatureUrl,
  };
  color: MonsterColor = "gray";
  translation_key = "monster.executioner";
}
