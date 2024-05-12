import ImageUrl from "@/assets/monster/big/GremlinHordeBig.webp";
import RookieStandard from "@/assets/monster/cards/gremlin-horde/rookie/standard.jpg";
import RookieAlternate from "@/assets/monster/cards/gremlin-horde/rookie/alternate.jpg";
import FighterStandard from "@/assets/monster/cards/gremlin-horde/fighter/standard.jpg";
import FighterAlternate from "@/assets/monster/cards/gremlin-horde/fighter/alternate.jpg";
import VeteranStandard from "@/assets/monster/cards/gremlin-horde/veteran/standard.jpg";
import VeteranAlternate from "@/assets/monster/cards/gremlin-horde/veteran/alternate.jpg";
import ChampionStandard from "@/assets/monster/cards/gremlin-horde/champion/standard.jpg";
import ChampionAlternate from "@/assets/monster/cards/gremlin-horde/champion/alternate.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class GremlinHorde implements MonsterData {
  id = "gremlin-horde";
  name = "Gremlin Horde";
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
  color: MonsterColor = "white";
  size: string = "large";
  initiative: number = InitiativePlaces.BOTTOM_RED;
  translation_key = "monster.gremlin-horde";
}
