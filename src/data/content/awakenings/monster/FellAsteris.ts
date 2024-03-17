import ImageUrl from "@/assets/monster/big/FellAsterisBig.webp";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class FellAsteris implements MonsterData {
  id = "fell-asteris";
  name = "Fell Asteris";
  content: ContentId = "awakenings";
  variants: VariantId[] = ["standard", "alternate"];
  images = {
    big: ImageUrl,
    miniature: "",
  };
  color: MonsterColor = "gray";
  translation_key = "monster.fell-asteris";
}
