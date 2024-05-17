import ImageUrl from "@/assets/monster/big/ExecutionerBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/ExecutionerMiniature.webp";
import CardSideA from "@/assets/monster/cards/scenario-monsters/drifting-apparition-sidea.jpg";
import CardSideB from "@/assets/monster/cards/scenario-monsters/drifting-apparition-sideb.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class DriftingApparition implements MonsterData {
  id = "drifting-apparition";
  name = "Drifting Apparition";
  content: ContentId = "core";
  variants: VariantId[] = ["standard"];
  images = {
    big: ImageUrl,
    miniature: MiniatureUrl,
    cards: {
      rookie: [CardSideA, CardSideB,],
      fighter: [CardSideA, CardSideB,],
      veteran: [CardSideA, CardSideB,],
      champion: [CardSideA, CardSideB,],
    },
  };
  color: MonsterColor = "other";
  size: string = "small";
  initiative: number = InitiativePlaces.TOP_RED;
  translation_key = "monster.drifting-apparition";
}
