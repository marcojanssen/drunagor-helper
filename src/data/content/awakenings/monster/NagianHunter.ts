import ImageUrl from "@/assets/monster/big/NagianHunterBig.webp";
import RookieStandard from "@/assets/monster/cards/nagian-hunter/rookie/standard.jpg";
import RookieAlternate from "@/assets/monster/cards/nagian-hunter/rookie/alternate.jpg";
import FighterStandard from "@/assets/monster/cards/nagian-hunter/fighter/standard.jpg";
import FighterAlternate from "@/assets/monster/cards/nagian-hunter/fighter/alternate.jpg";
import VeteranStandard from "@/assets/monster/cards/nagian-hunter/veteran/standard.jpg";
import VeteranAlternate from "@/assets/monster/cards/nagian-hunter/veteran/alternate.jpg";
import ChampionStandard from "@/assets/monster/cards/nagian-hunter/champion/standard.jpg";
import ChampionAlternate from "@/assets/monster/cards/nagian-hunter/champion/alternate.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class NagianHunter implements MonsterData {
  id = "nagian-hunter";
  name = "Nagian Hunter";
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
    }
  };
  color: MonsterColor = "white";
  size: string = "small";
  initiative: number = InitiativePlaces.TOP_ORANGE;
  translation_key = "monster.nagian-hunter";
}
