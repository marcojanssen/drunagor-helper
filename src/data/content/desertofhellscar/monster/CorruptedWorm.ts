import ImageUrl from "@/assets/monster/big/CorruptedWormBig.webp";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class CorruptedWorm implements MonsterData {
  id = "corrupted-worm";
  name = "Corrupted Worm";
  content: ContentId = "desert-of-hellscar";
  variants: VariantId[] = ["standard", "alternate"];
  images = {
    big: ImageUrl,
    miniature: "",
  };
  color: MonsterColor = "gray";
  translation_key = "monster.corrupted-worm";
}
