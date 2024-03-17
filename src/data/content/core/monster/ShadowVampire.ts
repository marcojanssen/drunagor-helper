import ImageUrl from "@/assets/monster/big/ShadowVampireBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/ShadowVampireMiniature.webp";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class ShadowVampire implements MonsterData {
  id = "shadow-vampire";
  name = "Shadow Vampire";
  content: ContentId = "core";
  variants: VariantId[] = ["standard", "alternate"];
  images = {
    big: ImageUrl,
    miniature: MiniatureUrl,
  };
  color: MonsterColor = "gray";
  translation_key = "monster.shadow-vampire";
}
