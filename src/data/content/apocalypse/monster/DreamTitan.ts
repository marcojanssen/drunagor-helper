import ImageUrl from "@/assets/monster/big/DreamTitanBig.webp";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class DreamTitan implements MonsterData {
  id = "dream-titan";
  name = "Dream Titan";
  content: ContentId = "apocalypse";
  variants: VariantId[] = ["standard", "alternate"];
  images = {
    big: ImageUrl,
    miniature: "",
  };
  color: MonsterColor = "black";
  translation_key = "monster.dream-titan";
}
