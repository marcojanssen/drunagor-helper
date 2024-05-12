import ImageUrl from "@/assets/monster/big/ShadowKnightBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/ShadowKnightMiniature.webp";
import RookieStandard from "@/assets/monster/cards/shadow-knight/rookie/standard.jpg";
import RookieAlternate from "@/assets/monster/cards/shadow-knight/rookie/alternate.jpg";
import RookieSideA from "@/assets/monster/cards/shadow-knight/rookie/sidea.jpg";
import RookieSideB from "@/assets/monster/cards/shadow-knight/rookie/sideb.jpg";
import FighterStandard from "@/assets/monster/cards/shadow-knight/fighter/standard.jpg";
import FighterAlternate from "@/assets/monster/cards/shadow-knight/fighter/alternate.jpg";
import FighterSideA from "@/assets/monster/cards/shadow-knight/fighter/sidea.jpg";
import FighterSideB from "@/assets/monster/cards/shadow-knight/fighter/sideb.jpg";
import VeteranStandard from "@/assets/monster/cards/shadow-knight/veteran/standard.jpg";
import VeteranAlternate from "@/assets/monster/cards/shadow-knight/veteran/alternate.jpg";
import VeteranSideA from "@/assets/monster/cards/shadow-knight/veteran/sidea.jpg";
import VeteranSideB from "@/assets/monster/cards/shadow-knight/veteran/sideb.jpg";
import ChampionStandard from "@/assets/monster/cards/shadow-knight/champion/standard.jpg";
import ChampionAlternate from "@/assets/monster/cards/shadow-knight/champion/alternate.jpg";
import ChampionSideA from "@/assets/monster/cards/shadow-knight/champion/sidea.jpg";
import ChampionSideB from "@/assets/monster/cards/shadow-knight/champion/sideb.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class ShadowKnight implements MonsterData {
  id = "shadow-knight";
  name = "Shadow Knight";
  content: ContentId = "core";
  variants: VariantId[] = ["standard", "alternate", "complex"];
  images = {
    big: ImageUrl,
    miniature: MiniatureUrl,
    cards: {
      rookie: [RookieStandard, RookieAlternate, RookieSideA, RookieSideB,],
      fighter: [FighterStandard, FighterAlternate, FighterSideA, FighterSideB,],
      veteran: [VeteranStandard, VeteranAlternate, VeteranSideA, VeteranSideB,],
      champion: [ChampionStandard, ChampionAlternate, ChampionSideA, ChampionSideB,],
    },
  };
  color: MonsterColor = "black";
  size: string = "large";
  initiative: number = InitiativePlaces.TOP_GRAY;
  translation_key = "monster.shadow-knight";
}
