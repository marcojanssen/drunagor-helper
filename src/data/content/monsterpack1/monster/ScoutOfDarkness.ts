import ImageUrl from "@/assets/monster/big/ScoutOfDarknessBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/ScoutOfDarknessMiniature.webp";
import RookieStandard from "@/assets/monster/cards/scout-of-darkness/rookie/standard.jpg";
import RookieAlternate from "@/assets/monster/cards/scout-of-darkness/rookie/alternate.jpg";
import FighterStandard from "@/assets/monster/cards/scout-of-darkness/fighter/standard.jpg";
import FighterAlternate from "@/assets/monster/cards/scout-of-darkness/fighter/alternate.jpg";
import VeteranStandard from "@/assets/monster/cards/scout-of-darkness/veteran/standard.jpg";
import VeteranAlternate from "@/assets/monster/cards/scout-of-darkness/veteran/alternate.jpg";
import ChampionStandard from "@/assets/monster/cards/scout-of-darkness/champion/standard.jpg";
import ChampionAlternate from "@/assets/monster/cards/scout-of-darkness/champion/alternate.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class ScoutOfDarkness implements MonsterData {
  id = "scout-of-darkness";
  name = "Scout Of Darkness";
  content: ContentId = "monster-pack-1";
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
  initiative: number = InitiativePlaces.BOTTOM_ORANGE;
  translation_key = "monster.scout-of-darkness";
}
