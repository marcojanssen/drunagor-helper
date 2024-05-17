import ImageUrl from "@/assets/monster/big/SkeletonKnightBig.webp";
import Card from "@/assets/monster/cards/scenario-monsters/garothian-marksman.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class GarothianMarksman implements MonsterData {
  id = "garothian-marksman";
  name = "Garothian Marksman";
  content: ContentId = "apocalypse";
  variants: VariantId[] = ["standard"];
  images = {
    big: ImageUrl,
    miniature: '',
    cards: {
      rookie: [Card,],
      fighter: [Card,],
      veteran: [Card,],
      champion: [Card,],
    },
  };
  color: MonsterColor = "other";
  size: string = "small";
  initiative: number = InitiativePlaces.BOTTOM_GRAY;
  translation_key = "monster.garothian-marksman";
}
