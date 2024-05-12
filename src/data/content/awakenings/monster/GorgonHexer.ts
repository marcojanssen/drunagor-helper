import ImageUrl from "@/assets/monster/big/GorgonHexerBig.webp";
import RookieStandard from "@/assets/monster/cards/gorgon-hexer/rookie/standard.jpg";
import RookieAlternate from "@/assets/monster/cards/gorgon-hexer/rookie/alternate.jpg";
import FighterStandard from "@/assets/monster/cards/gorgon-hexer/fighter/standard.jpg";
import FighterAlternate from "@/assets/monster/cards/gorgon-hexer/fighter/alternate.jpg";
import VeteranStandard from "@/assets/monster/cards/gorgon-hexer/veteran/standard.jpg";
import VeteranAlternate from "@/assets/monster/cards/gorgon-hexer/veteran/alternate.jpg";
import ChampionStandard from "@/assets/monster/cards/gorgon-hexer/champion/standard.jpg";
import ChampionAlternate from "@/assets/monster/cards/gorgon-hexer/champion/alternate.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class GorgonHexer implements MonsterData {
  id = "gorgon-hexer";
  name = "Gorgon Hexer";
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
  size: string = "small";
  initiative: number = InitiativePlaces.BOTTOM_BLUE;
  translation_key = "monster.gorgon-hexer";
}
