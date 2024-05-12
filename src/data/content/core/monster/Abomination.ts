import ImageUrl from "@/assets/monster/big/AbominationBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/AbominationMiniature.webp";
import RookieStandard from "@/assets/monster/cards/abomination/rookie/standard.jpg";
import RookieAlternate from "@/assets/monster/cards/abomination/rookie/alternate.jpg";
import FighterStandard from "@/assets/monster/cards/abomination/fighter/standard.jpg";
import FighterAlternate from "@/assets/monster/cards/abomination/fighter/alternate.jpg";
import VeteranStandard from "@/assets/monster/cards/abomination/veteran/standard.jpg";
import VeteranAlternate from "@/assets/monster/cards/abomination/veteran/alternate.jpg";
import ChampionStandard from "@/assets/monster/cards/abomination/champion/standard.jpg";
import ChampionAlternate from "@/assets/monster/cards/abomination/champion/alternate.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class Abomination implements MonsterData {
  id = "abomination";
  name = "Abomination";
  content: ContentId = "core";
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
  color: MonsterColor = "black";
  size: string = "large";
  initiative: number = InitiativePlaces.BOTTOM_GRAY;
  translation_key = "monster.abomination";
}
