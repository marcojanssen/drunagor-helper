import ImageUrl from "@/assets/monster/big/RottenFleshBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/RottenFleshMiniature.webp";
import RookieStandard from "@/assets/monster/cards/rotten-flesh/rookie/standard.jpg";
import RookieAlternate from "@/assets/monster/cards/rotten-flesh/rookie/alternate.jpg";
import RookieSideA from "@/assets/monster/cards/rotten-flesh/rookie/sidea.jpg";
import RookieSideB from "@/assets/monster/cards/rotten-flesh/rookie/sideb.jpg";
import FighterStandard from "@/assets/monster/cards/rotten-flesh/fighter/standard.jpg";
import FighterAlternate from "@/assets/monster/cards/rotten-flesh/fighter/alternate.jpg";
import FighterSideA from "@/assets/monster/cards/rotten-flesh/fighter/sidea.jpg";
import FighterSideB from "@/assets/monster/cards/rotten-flesh/fighter/sideb.jpg";
import VeteranStandard from "@/assets/monster/cards/rotten-flesh/veteran/standard.jpg";
import VeteranAlternate from "@/assets/monster/cards/rotten-flesh/veteran/alternate.jpg";
import VeteranSideA from "@/assets/monster/cards/rotten-flesh/veteran/sidea.jpg";
import VeteranSideB from "@/assets/monster/cards/rotten-flesh/veteran/sideb.jpg";
import ChampionStandard from "@/assets/monster/cards/rotten-flesh/champion/standard.jpg";
import ChampionAlternate from "@/assets/monster/cards/rotten-flesh/champion/alternate.jpg";
import ChampionSideA from "@/assets/monster/cards/rotten-flesh/champion/sidea.jpg";
import ChampionSideB from "@/assets/monster/cards/rotten-flesh/champion/sideb.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class RottenFlesh implements MonsterData {
  id = "rotten-flesh";
  name = "Rotten Flesh";
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
  color: MonsterColor = "gray";
  size: string = "small";
  initiative: number = InitiativePlaces.BOTTOM_RED;
  translation_key = "monster.rotten-flesh";
}
