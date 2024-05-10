import ImageUrl from "@/assets/monster/big/HellspawnBruteBig.webp";
import CardStandard from "@/assets/monster/cards/hellspawn-brute/rookie/standard.jpg";
import CardAlternate from "@/assets/monster/cards/hellspawn-brute/rookie/alternate.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class HellspawnBrute implements MonsterData {
  id = "hellspawn-brute";
  name = "Hellspawn Brute";
  content: ContentId = "awakenings";
  variants: VariantId[] = ["standard", "alternate"];
  images = {
    big: ImageUrl,
    miniature: "",
    cards: [CardStandard, CardAlternate,],
  };
  color: MonsterColor = "gray";
  size: string = "small";
  initiative: number = InitiativePlaces.BOTTOM_ORANGE;
  translation_key = "monster.hellspawn-brute";
}
