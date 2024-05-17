import ImageUrl from "@/assets/monster/big/FellAsterisBig.webp";
import Card from "@/assets/monster/cards/scenario-monsters/foul-shooter.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class FoulShooter implements MonsterData {
  id = "foul-shooter";
  name = "Foul Shooter";
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
  translation_key = "monster.foul-shooter";
  size: string = "small";
  initiative: number = InitiativePlaces.BOTTOM_GRAY;
}
