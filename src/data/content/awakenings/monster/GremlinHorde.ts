import ImageUrl from "@/assets/monster/big/GremlinHordeBig.webp";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
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
  size: string = "large";
  initiative: number = InitiativePlaces.BOTTOM_RED;
  translation_key = "monster.gremlin-horde";
}
