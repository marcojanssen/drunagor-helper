import ImageUrl from "@/assets/monster/big/NightStalkerBig.webp";
import RookieStandard from "@/assets/monster/cards/night-stalker/rookie/standard.jpg";
import RookieAlternate from "@/assets/monster/cards/night-stalker/rookie/alternate.jpg";
import FighterStandard from "@/assets/monster/cards/night-stalker/fighter/standard.jpg";
import FighterAlternate from "@/assets/monster/cards/night-stalker/fighter/alternate.jpg";
import VeteranStandard from "@/assets/monster/cards/night-stalker/veteran/standard.jpg";
import VeteranAlternate from "@/assets/monster/cards/night-stalker/veteran/alternate.jpg";
import ChampionStandard from "@/assets/monster/cards/night-stalker/champion/standard.jpg";
import ChampionAlternate from "@/assets/monster/cards/night-stalker/champion/alternate.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class NightStalker implements MonsterData {
  id = "night-stalker";
  name = "Night Stalker";
  content: ContentId = "awakenings";
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
  translation_key = "monster.night-stalker";
  size: string = "small";
  initiative: number = InitiativePlaces.TOP_RED;
}
