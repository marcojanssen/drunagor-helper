import ImageUrl from "@/assets/monster/big/HellspawnBruteBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/ExecutionerMiniature.webp";
import Card from "@/assets/monster/cards/scenario-monsters/fell-woodman.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class FellWoodman implements MonsterData {
  id = "fell-woodman";
  name = "Fell Woodman";
  content: ContentId = "awakenings";
  variants: VariantId[] = ["standard", "alternate"];
  images = {
    big: ImageUrl,
    miniature: MiniatureUrl,
    cards: {
      rookie: [Card,],
      fighter: [Card,],
      veteran: [Card,],
      champion: [Card,],
    },
  };
  color: MonsterColor = "other";
  translation_key = "monster.fell-woodman";
  size: string = "small";
  initiative: number = InitiativePlaces.TOP_RED;
}
