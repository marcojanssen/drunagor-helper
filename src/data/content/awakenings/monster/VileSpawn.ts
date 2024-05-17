import ImageUrl from "@/assets/monster/big/HellspawnBruteBig.webp";
import Card from "@/assets/monster/cards/scenario-monsters/vile-spawn.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class VileSpawn implements MonsterData {
  id = "vile-spawn";
  name = "Vile Spawn";
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
  translation_key = "monster.vile-spawn";
  size: string = "small";
  initiative: number = InitiativePlaces.TOP_GREEN;
}
