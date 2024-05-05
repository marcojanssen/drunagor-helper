import ImageUrl from "@/assets/monster/big/FellAsterisBig.webp";
import CardStandard from "@/assets/monster/cards/fell-asteris/rookie/standard.jpg";
import CardAlternate from "@/assets/monster/cards/fell-asteris/rookie/alternate.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
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
    cards: [CardStandard, CardAlternate,],
  };
  color: MonsterColor = "gray";
  size: string = "small";
  initiative: number = InitiativePlaces.TOP_GREEN;
  translation_key = "monster.fell-asteris";
}
