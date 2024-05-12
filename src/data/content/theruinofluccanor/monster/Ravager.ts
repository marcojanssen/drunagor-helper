import ImageUrl from "@/assets/monster/big/RavagerBig.webp";
import RookieStandard from "@/assets/monster/cards/ravager/rookie/standard.jpg";
import RookieAlternate from "@/assets/monster/cards/ravager/rookie/alternate.jpg";
import FighterStandard from "@/assets/monster/cards/ravager/fighter/standard.jpg";
import FighterAlternate from "@/assets/monster/cards/ravager/fighter/alternate.jpg";
import VeteranStandard from "@/assets/monster/cards/ravager/veteran/standard.jpg";
import VeteranAlternate from "@/assets/monster/cards/ravager/veteran/alternate.jpg";
import ChampionStandard from "@/assets/monster/cards/ravager/champion/standard.jpg";
import ChampionAlternate from "@/assets/monster/cards/ravager/champion/alternate.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class Ravager implements MonsterData {
  id = "ravager";
  name = "Ravager";
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
  color: MonsterColor = "white";
  size: string = "small";
  initiative: number = InitiativePlaces.TOP_BLUE;
  translation_key = "monster.ravager";
}
