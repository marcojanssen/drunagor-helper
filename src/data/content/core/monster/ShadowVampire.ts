import ImageUrl from "@/assets/monster/big/ShadowVampireBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/ShadowVampireMiniature.webp";
import RookieStandard from "@/assets/monster/cards/shadow-vampire/rookie/standard.jpg";
import RookieAlternate from "@/assets/monster/cards/shadow-vampire/rookie/alternate.jpg";
import FighterStandard from "@/assets/monster/cards/shadow-vampire/fighter/standard.jpg";
import FighterAlternate from "@/assets/monster/cards/shadow-vampire/fighter/alternate.jpg";
import VeteranStandard from "@/assets/monster/cards/shadow-vampire/veteran/standard.jpg";
import VeteranAlternate from "@/assets/monster/cards/shadow-vampire/veteran/alternate.jpg";
import ChampionStandard from "@/assets/monster/cards/shadow-vampire/champion/standard.jpg";
import ChampionAlternate from "@/assets/monster/cards/shadow-vampire/champion/alternate.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class ShadowVampire implements MonsterData {
  id = "shadow-vampire";
  name = "Shadow Vampire";
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
  color: MonsterColor = "gray";
  size: string = "small";
  initiative: number = InitiativePlaces.TOP_GREEN;
  translation_key = "monster.shadow-vampire";
}
