import ImageUrl from "@/assets/monster/big/SkeletonKnightBig.webp";
import Card from "@/assets/monster/cards/scenario-monsters/garothian-revenant.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class GarothianRevenant implements MonsterData {
  id = "garothian-revenant";
  name = "Garothian Revenant";
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
  initiative: number = InitiativePlaces.TOP_RED;
  translation_key = "monster.garothian-revenant";
}
