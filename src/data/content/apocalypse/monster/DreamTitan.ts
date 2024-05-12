import ImageUrl from "@/assets/monster/big/DreamTitanBig.webp";
import RookieStandard from "@/assets/monster/cards/dream-titan/rookie/standard.jpg";
import RookieAlternate from "@/assets/monster/cards/dream-titan/rookie/alternate.jpg";
import FighterStandard from "@/assets/monster/cards/dream-titan/fighter/standard.jpg";
import FighterAlternate from "@/assets/monster/cards/dream-titan/fighter/alternate.jpg";
import VeteranStandard from "@/assets/monster/cards/dream-titan/veteran/standard.jpg";
import VeteranAlternate from "@/assets/monster/cards/dream-titan/veteran/alternate.jpg";
import ChampionStandard from "@/assets/monster/cards/dream-titan/champion/standard.jpg";
import ChampionAlternate from "@/assets/monster/cards/dream-titan/champion/alternate.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class DreamTitan implements MonsterData {
  id = "dream-titan";
  name = "Dream Titan";
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
  color: MonsterColor = "black";
  size: string = "large";
  initiative: number = InitiativePlaces.TOP_GRAY;
  translation_key = "monster.dream-titan";
}
