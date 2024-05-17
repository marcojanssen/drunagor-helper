import ImageUrl from "@/assets/monster/big/FlickeringBoarBig.png";
import Card from "@/assets/monster/cards/scenario-monsters/flickering-boar.jpg";
import CardBack from "@/assets/monster/cards/scenario-monsters/flickering-boar-back.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class FlickeringBoar implements MonsterData {
  id = "flickering-boar";
  name = "FlickeringBoar";
  content: ContentId = "awakenings";
  variants: VariantId[] = ["standard", "alternate"];
  images = {
    big: ImageUrl,
    miniature: '',
    cards: {
      rookie: [Card, CardBack,],
      fighter: [Card, CardBack,],
      veteran: [Card, CardBack,],
      champion: [Card, CardBack,],
    },
  };
  color: MonsterColor = "other";
  translation_key = "monster.flickering-boar";
  size: string = "small";
  initiative: number = InitiativePlaces.BOTTOM_ORANGE;
}
