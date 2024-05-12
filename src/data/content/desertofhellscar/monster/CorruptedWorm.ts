import ImageUrl from "@/assets/monster/big/CorruptedWormBig.webp";
import RookieStandard from "@/assets/monster/cards/corrupted-worm/rookie/standard.jpg";
import RookieAlternate from "@/assets/monster/cards/corrupted-worm/rookie/alternate.jpg";
import FighterStandard from "@/assets/monster/cards/corrupted-worm/fighter/standard.jpg";
import FighterAlternate from "@/assets/monster/cards/corrupted-worm/fighter/alternate.jpg";
import VeteranStandard from "@/assets/monster/cards/corrupted-worm/veteran/standard.jpg";
import VeteranAlternate from "@/assets/monster/cards/corrupted-worm/veteran/alternate.jpg";
import ChampionStandard from "@/assets/monster/cards/corrupted-worm/champion/standard.jpg";
import ChampionAlternate from "@/assets/monster/cards/corrupted-worm/champion/alternate.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class CorruptedWorm implements MonsterData {
  id = "corrupted-worm";
  name = "Corrupted Worm";
  content: ContentId = "desert-of-hellscar";
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
  translation_key = "monster.corrupted-worm";
}
