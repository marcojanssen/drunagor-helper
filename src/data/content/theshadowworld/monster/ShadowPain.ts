import ImageUrl from "@/assets/monster/big/ShadowPainBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/ShadowPainMiniature.webp";
import RookieStandard from "@/assets/monster/cards/shadow-pain/rookie/standard.jpg";
import RookieAlternate from "@/assets/monster/cards/shadow-pain/rookie/alternate.jpg";
import FighterStandard from "@/assets/monster/cards/shadow-pain/fighter/standard.jpg";
import FighterAlternate from "@/assets/monster/cards/shadow-pain/fighter/alternate.jpg";
import VeteranStandard from "@/assets/monster/cards/shadow-pain/veteran/standard.jpg";
import VeteranAlternate from "@/assets/monster/cards/shadow-pain/veteran/alternate.jpg";
import ChampionStandard from "@/assets/monster/cards/shadow-pain/champion/standard.jpg";
import ChampionAlternate from "@/assets/monster/cards/shadow-pain/champion/alternate.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class ShadowPain implements MonsterData {
  id = "shadow-pain";
  name = "Shadow Pain";
  content: ContentId = "the-shadow-world";
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
  translation_key = "monster.shadow-pain";
}
