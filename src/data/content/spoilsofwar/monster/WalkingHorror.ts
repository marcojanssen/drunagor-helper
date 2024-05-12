import ImageUrl from "@/assets/monster/big/WalkingHorrorBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/WalkingHorrorMiniature.webp";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import RookieStandard from "@/assets/monster/cards/walking-horror/rookie/standard.jpg";
import RookieAlternate from "@/assets/monster/cards/walking-horror/rookie/alternate.jpg";
import FighterStandard from "@/assets/monster/cards/walking-horror/fighter/standard.jpg";
import FighterAlternate from "@/assets/monster/cards/walking-horror/fighter/alternate.jpg";
import VeteranStandard from "@/assets/monster/cards/walking-horror/veteran/standard.jpg";
import VeteranAlternate from "@/assets/monster/cards/walking-horror/veteran/alternate.jpg";
import ChampionStandard from "@/assets/monster/cards/walking-horror/champion/standard.jpg";
import ChampionAlternate from "@/assets/monster/cards/walking-horror/champion/alternate.jpg";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class WalkingHorror implements MonsterData {
  id = "walking-horror";
  name = "Walking Horror";
  content: ContentId = "spoils-of-war";
  variants: VariantId[] = ["standard", "alternate"];
  images = {
    big: ImageUrl,
    miniature: MiniatureUrl,
    cards: {
      rookie: [RookieStandard, RookieAlternate,],
      fighter: [FighterStandard, FighterAlternate,],
      veteran: [VeteranStandard, VeteranAlternate,],
      champion: [ChampionStandard, ChampionAlternate,],
    },
  };
  color: MonsterColor = "white";
  size: string = "small";
  initiative: number = InitiativePlaces.BOTTOM_RED;
  translation_key = "monster.walking-horror";
}
