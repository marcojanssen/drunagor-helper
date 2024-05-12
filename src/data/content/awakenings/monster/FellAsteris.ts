import ImageUrl from "@/assets/monster/big/FellAsterisBig.webp";
import RookieStandard from "@/assets/monster/cards/fell-asteris/rookie/standard.jpg";
import RookieAlternate from "@/assets/monster/cards/fell-asteris/rookie/alternate.jpg";
import FighterStandard from "@/assets/monster/cards/fell-asteris/fighter/standard.jpg";
import FighterAlternate from "@/assets/monster/cards/fell-asteris/fighter/alternate.jpg";
import VeteranStandard from "@/assets/monster/cards/fell-asteris/veteran/standard.jpg";
import VeteranAlternate from "@/assets/monster/cards/fell-asteris/veteran/alternate.jpg";
import ChampionStandard from "@/assets/monster/cards/fell-asteris/champion/standard.jpg";
import ChampionAlternate from "@/assets/monster/cards/fell-asteris/champion/alternate.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class FellAsteris implements MonsterData {
  id = "fell-asteris";
  name = "Fell Asteris";
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
  initiative: number = InitiativePlaces.TOP_GREEN;
  translation_key = "monster.fell-asteris";
}
