import ImageUrl from "@/assets/monster/big/ShadowMistressBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/ShadowMistressMiniature.webp";
import RookieStandard from "@/assets/monster/cards/shadow-mistress/rookie/standard.jpg";
import RookieAlternate from "@/assets/monster/cards/shadow-mistress/rookie/alternate.jpg";
import FighterStandard from "@/assets/monster/cards/shadow-mistress/fighter/standard.jpg";
import FighterAlternate from "@/assets/monster/cards/shadow-mistress/fighter/alternate.jpg";
import VeteranStandard from "@/assets/monster/cards/shadow-mistress/veteran/standard.jpg";
import VeteranAlternate from "@/assets/monster/cards/shadow-mistress/veteran/alternate.jpg";
import ChampionStandard from "@/assets/monster/cards/shadow-mistress/champion/standard.jpg";
import ChampionAlternate from "@/assets/monster/cards/shadow-mistress/champion/alternate.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class ShadowMistress implements MonsterData {
  id = "shadow-mistress";
  name = "Shadow Mistress";
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
  initiative: number = InitiativePlaces.TOP_ORANGE;
  translation_key = "monster.shadow-mistress";
}
