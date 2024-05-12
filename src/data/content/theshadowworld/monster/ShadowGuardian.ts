import ImageUrl from "@/assets/monster/big/ShadowGuardianBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/ShadowGuardianMiniature.webp";
import RookieStandard from "@/assets/monster/cards/shadow-guardian/rookie/standard.jpg";
import RookieAlternate from "@/assets/monster/cards/shadow-guardian/rookie/alternate.jpg";
import FighterStandard from "@/assets/monster/cards/shadow-guardian/fighter/standard.jpg";
import FighterAlternate from "@/assets/monster/cards/shadow-guardian/fighter/alternate.jpg";
import VeteranStandard from "@/assets/monster/cards/shadow-guardian/veteran/standard.jpg";
import VeteranAlternate from "@/assets/monster/cards/shadow-guardian/veteran/alternate.jpg";
import ChampionStandard from "@/assets/monster/cards/shadow-guardian/champion/standard.jpg";
import ChampionAlternate from "@/assets/monster/cards/shadow-guardian/champion/alternate.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class ShadowGuardian implements MonsterData {
  id = "shadow-guardian";
  name = "Shadow Guardian";
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
  color: MonsterColor = "gray";
  size: string = "small";
  initiative: number = InitiativePlaces.TOP_GRAY;
  translation_key = "monster.shadow-guardian";
}
