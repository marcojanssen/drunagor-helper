import ImageUrl from "@/assets/monster/big/GremlinHordeBig.webp";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class GremlinHorde implements MonsterData {
  id = "gremlin-horde";
  name = "Gremlin Horde";
  content: ContentId = "awakenings";
  variants: VariantId[] = ["standard", "alternate"];
  images = {
    big: ImageUrl,
    miniature: "",
  };
  color: MonsterColor = "white";
  translation_key = "monster.gremlin-horde";
}
