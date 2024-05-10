import ImageUrl from "@/assets/monster/big/GremlinHordeBig.webp";
import CardStandard from "@/assets/monster/cards/gremlin-horde/rookie/standard.jpg";
import CardAlternate from "@/assets/monster/cards/gremlin-horde/rookie/alternate.jpg";
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
    cards: [CardStandard, CardAlternate,],
  };
  color: MonsterColor = "white";
  size: string = "large";
  initiative: number = InitiativePlaces.BOTTOM_RED;
  translation_key = "monster.gremlin-horde";
}
