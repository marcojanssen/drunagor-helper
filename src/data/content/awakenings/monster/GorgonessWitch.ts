import ImageUrl from "@/assets/monster/big/GorgonessWitchBig.webp";
import RookieStandard from "@/assets/monster/cards/gorgoness-witch/rookie/standard.jpg";
import RookieAlternate from "@/assets/monster/cards/gorgoness-witch/rookie/alternate.jpg";
import FighterStandard from "@/assets/monster/cards/gorgoness-witch/fighter/standard.jpg";
import FighterAlternate from "@/assets/monster/cards/gorgoness-witch/fighter/alternate.jpg";
import VeteranStandard from "@/assets/monster/cards/gorgoness-witch/veteran/standard.jpg";
import VeteranAlternate from "@/assets/monster/cards/gorgoness-witch/veteran/alternate.jpg";
import ChampionStandard from "@/assets/monster/cards/gorgoness-witch/champion/standard.jpg";
import ChampionAlternate from "@/assets/monster/cards/gorgoness-witch/champion/alternate.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class GorgonessWitch implements MonsterData {
  id = "gorgoness-witch";
  name = "Gorgoness Witch";
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
  size: string = "small";
  initiative: number = InitiativePlaces.BOTTOM_GREEN;
  translation_key = "monster.gorgoness-witch";
}
