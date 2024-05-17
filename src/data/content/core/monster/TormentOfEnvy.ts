import ImageUrl from "@/assets/monster/big/AbominationBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/AbominationMiniature.webp";
import Card from "@/assets/monster/cards/scenario-monsters/torment-of-envy.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class TormentOfEnvy implements MonsterData {
  id = "torment-of-envy";
  name = "Torment of Envy";
  content: ContentId = "core";
  variants: VariantId[] = ["standard"];
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
  size: string = "small";
  initiative: number = InitiativePlaces.BOTTOM_ORANGE;
  translation_key = "monster.torment-of-envy";
}
