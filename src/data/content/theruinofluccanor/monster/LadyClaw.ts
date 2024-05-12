import ImageUrl from "@/assets/monster/big/LadyClawBig.webp";
import RookieStandard from "@/assets/monster/cards/lady-claw/rookie/standard.jpg";
import RookieAlternate from "@/assets/monster/cards/lady-claw/rookie/alternate.jpg";
import FighterStandard from "@/assets/monster/cards/lady-claw/fighter/standard.jpg";
import FighterAlternate from "@/assets/monster/cards/lady-claw/fighter/alternate.jpg";
import VeteranStandard from "@/assets/monster/cards/lady-claw/veteran/standard.jpg";
import VeteranAlternate from "@/assets/monster/cards/lady-claw/veteran/alternate.jpg";
import ChampionStandard from "@/assets/monster/cards/lady-claw/champion/standard.jpg";
import ChampionAlternate from "@/assets/monster/cards/lady-claw/champion/alternate.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class LadyClaw implements MonsterData {
  id = "lady-claw";
  name = "Lady Claw";
  content: ContentId = "the-ruin-of-luccanor";
  variants: VariantId[] = ["standard", "alternate"];
  images = {
    big: ImageUrl,
    miniature: "",
    cards: {
      rookie: [RookieStandard, RookieAlternate,],
      fighter: [FighterStandard, FighterAlternate,],
      veteran: [VeteranStandard, VeteranAlternate,],
      champion: [ChampionStandard, ChampionAlternate,],
    }
  };
  color: MonsterColor = "gray";
  size: string = "small";
  initiative: number = InitiativePlaces.BOTTOM_BLUE;
  translation_key = "monster.lady-claw";
}
