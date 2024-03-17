import ImageUrl from "@/assets/monster/big/ShadowPainBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/ShadowPainMiniature.webp";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class ShadowPain implements MonsterData {
  id = "shadow-pain";
  name = "Shadow Pain";
  content: ContentId = "the-shadow-world";
  variants: VariantId[] = ["standard", "alternate"];
  images = {
    big: ImageUrl,
    miniature: MiniatureUrl,
  };
  color: MonsterColor = "white";
  translation_key = "monster.shadow-pain";
}
