import ImageUrl from "@/assets/monster/big/ExecutionerBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/ExecutionerMiniature.webp";
import RookieStandard from "@/assets/monster/cards/executioner/rookie/standard.jpg";
import RookieAlternate from "@/assets/monster/cards/executioner/rookie/alternate.jpg";
import FighterStandard from "@/assets/monster/cards/executioner/fighter/standard.jpg";
import FighterAlternate from "@/assets/monster/cards/executioner/fighter/alternate.jpg";
import VeteranStandard from "@/assets/monster/cards/executioner/veteran/standard.jpg";
import VeteranAlternate from "@/assets/monster/cards/executioner/veteran/alternate.jpg";
import ChampionStandard from "@/assets/monster/cards/executioner/champion/standard.jpg";
import ChampionAlternate from "@/assets/monster/cards/executioner/champion/alternate.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class Executioner implements MonsterData {
  id = "executioner";
  name = "Executioner";
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
    }
  };
  color: MonsterColor = "gray";
  size: string = "small";
  initiative: number = InitiativePlaces.BOTTOM_GREEN;
  translation_key = "monster.executioner";
}
