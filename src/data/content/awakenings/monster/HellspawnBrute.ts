import ImageUrl from "@/assets/monster/big/HellspawnBruteBig.webp";
import RookieStandard from "@/assets/monster/cards/hellspawn-brute/rookie/standard.jpg";
import RookieAlternate from "@/assets/monster/cards/hellspawn-brute/rookie/alternate.jpg";
import FighterStandard from "@/assets/monster/cards/hellspawn-brute/fighter/standard.jpg";
import FighterAlternate from "@/assets/monster/cards/hellspawn-brute/fighter/alternate.jpg";
import VeteranStandard from "@/assets/monster/cards/hellspawn-brute/veteran/standard.jpg";
import VeteranAlternate from "@/assets/monster/cards/hellspawn-brute/veteran/alternate.jpg";
import ChampionStandard from "@/assets/monster/cards/hellspawn-brute/champion/standard.jpg";
import ChampionAlternate from "@/assets/monster/cards/hellspawn-brute/champion/alternate.jpg";
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
    cards: {
      rookie: [RookieStandard, RookieAlternate,],
      fighter: [FighterStandard, FighterAlternate,],
      veteran: [VeteranStandard, VeteranAlternate,],
      champion: [ChampionStandard, ChampionAlternate,],
    },
  };
  color: MonsterColor = "gray";
  size: string = "small";
  initiative: number = InitiativePlaces.BOTTOM_ORANGE;
  translation_key = "monster.hellspawn-brute";
}
