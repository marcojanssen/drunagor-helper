import ImageUrl from "@/assets/monster/big/HellishFlayerBig.webp";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class HellishFlayer implements MonsterData {
  id = "hellish-flayer";
  name = "Hellish Flayer";
  content: ContentId = "apocalypse";
  variants: VariantId[] = ["standard", "alternate"];
  images = {
    big: ImageUrl,
    miniature: "",
  };
  color: MonsterColor = "gray";
  translation_key = "monster.hellish-flayer";
}
