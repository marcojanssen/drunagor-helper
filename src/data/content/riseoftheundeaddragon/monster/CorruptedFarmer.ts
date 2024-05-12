import ImageUrl from "@/assets/monster/big/CorruptedFarmerBig.webp";
import RookieStandard from "@/assets/monster/cards/corrupted-farmer/rookie/standard.jpg";
import RookieAlternate from "@/assets/monster/cards/corrupted-farmer/rookie/alternate.jpg";
import FighterStandard from "@/assets/monster/cards/corrupted-farmer/fighter/standard.jpg";
import FighterAlternate from "@/assets/monster/cards/corrupted-farmer/fighter/alternate.jpg";
import VeteranStandard from "@/assets/monster/cards/corrupted-farmer/veteran/standard.jpg";
import VeteranAlternate from "@/assets/monster/cards/corrupted-farmer/veteran/alternate.jpg";
import ChampionStandard from "@/assets/monster/cards/corrupted-farmer/champion/standard.jpg";
import ChampionAlternate from "@/assets/monster/cards/corrupted-farmer/champion/alternate.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class CorruptedFarmer implements MonsterData {
  id = "corrupted-farmer";
  name = "Corrupted Farmer";
  content: ContentId = "rise-of-the-undead-dragon";
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
  color: MonsterColor = "white";
  size: string = "small";
  initiative: number = InitiativePlaces.BOTTOM_GREEN;
  translation_key = "monster.corrupted-farmer";
}
