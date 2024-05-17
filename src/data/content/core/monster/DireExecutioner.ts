import ImageUrl from "@/assets/monster/big/ExecutionerBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/ExecutionerMiniature.webp";import Card from "@/assets/monster/cards/scenario-monsters/dire-executioner.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class DireExecutioner implements MonsterData {
  id = "dire-executioner";
  name = "Dire Executioner";
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
  initiative: number = InitiativePlaces.BOTTOM_GRAY;
  translation_key = "monster.dire-executioner";
}
