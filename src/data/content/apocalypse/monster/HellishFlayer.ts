import ImageUrl from "@/assets/monster/big/HellishFlayerBig.webp";
import RookieStandard from "@/assets/monster/cards/hellish-flayer/rookie/standard.jpg";
import RookieAlternate from "@/assets/monster/cards/hellish-flayer/rookie/alternate.jpg";
import FighterStandard from "@/assets/monster/cards/hellish-flayer/fighter/standard.jpg";
import FighterAlternate from "@/assets/monster/cards/hellish-flayer/fighter/alternate.jpg";
import VeteranStandard from "@/assets/monster/cards/hellish-flayer/veteran/standard.jpg";
import VeteranAlternate from "@/assets/monster/cards/hellish-flayer/veteran/alternate.jpg";
import ChampionStandard from "@/assets/monster/cards/hellish-flayer/champion/standard.jpg";
import ChampionAlternate from "@/assets/monster/cards/hellish-flayer/champion/alternate.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class HellishFlayer implements MonsterData {
  id = "hellish-flayer";
  name = "Hellish Flayer";
  content: ContentId = "apocalypse";
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
  initiative: number = InitiativePlaces.BOTTOM_GREEN;
  translation_key = "monster.hellish-flayer";
}
