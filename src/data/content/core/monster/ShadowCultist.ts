import ImageUrl from "@/assets/monster/big/ShadowCultistBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/ShadowCultistMiniature.webp";
import RookieStandard from "@/assets/monster/cards/shadow-cultist/rookie/standard.jpg";
import RookieAlternate from "@/assets/monster/cards/shadow-cultist/rookie/alternate.jpg";
import RookieSideA from "@/assets/monster/cards/shadow-cultist/rookie/sidea.jpg";
import RookieSideB from "@/assets/monster/cards/shadow-cultist/rookie/sideb.jpg";
import FighterStandard from "@/assets/monster/cards/shadow-cultist/fighter/standard.jpg";
import FighterAlternate from "@/assets/monster/cards/shadow-cultist/fighter/alternate.jpg";
import FighterSideA from "@/assets/monster/cards/shadow-cultist/fighter/sidea.jpg";
import FighterSideB from "@/assets/monster/cards/shadow-cultist/fighter/sideb.jpg";
import VeteranStandard from "@/assets/monster/cards/shadow-cultist/veteran/standard.jpg";
import VeteranAlternate from "@/assets/monster/cards/shadow-cultist/veteran/alternate.jpg";
import VeteranSideA from "@/assets/monster/cards/shadow-cultist/veteran/sidea.jpg";
import VeteranSideB from "@/assets/monster/cards/shadow-cultist/veteran/sideb.jpg";
import ChampionStandard from "@/assets/monster/cards/shadow-cultist/champion/standard.jpg";
import ChampionAlternate from "@/assets/monster/cards/shadow-cultist/champion/alternate.jpg";
import ChampionSideA from "@/assets/monster/cards/shadow-cultist/champion/sidea.jpg";
import ChampionSideB from "@/assets/monster/cards/shadow-cultist/champion/sideb.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class ShadowCultist implements MonsterData {
  id = "shadow-cultist";
  name = "Shadow Cultist";
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
  color: MonsterColor = "white";
  size: string = "small";
  initiative: number = InitiativePlaces.TOP_RED;
  translation_key = "monster.shadow-cultist";
}
