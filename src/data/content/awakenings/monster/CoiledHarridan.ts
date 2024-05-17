import ImageUrl from "@/assets/monster/big/GorgonessWitchBig.webp";
import Card from "@/assets/monster/cards/scenario-monsters/coiled-harridan.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class CoiledHarridan implements MonsterData {
  id = "coiled-harridan";
  name = "Coiled Harridan";
  content: ContentId = "awakenings";
  variants: VariantId[] = ["standard", "alternate"];
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
  translation_key = "monster.coiled-harridan";
  size: string = "small";
  initiative: number = InitiativePlaces.TOP_BLUE;
}
