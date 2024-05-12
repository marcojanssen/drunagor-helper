import ImageUrl from "@/assets/monster/big/GrimDoctorBig.webp";
import RookieStandard from "@/assets/monster/cards/grim-doctor/rookie/standard.jpg";
import RookieAlternate from "@/assets/monster/cards/grim-doctor/rookie/alternate.jpg";
import FighterStandard from "@/assets/monster/cards/grim-doctor/fighter/standard.jpg";
import FighterAlternate from "@/assets/monster/cards/grim-doctor/fighter/alternate.jpg";
import VeteranStandard from "@/assets/monster/cards/grim-doctor/veteran/standard.jpg";
import VeteranAlternate from "@/assets/monster/cards/grim-doctor/veteran/alternate.jpg";
import ChampionStandard from "@/assets/monster/cards/grim-doctor/champion/standard.jpg";
import ChampionAlternate from "@/assets/monster/cards/grim-doctor/champion/alternate.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class GrimDoctor implements MonsterData {
  id = "grim-doctor";
  name = "Grim Doctor";
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
  initiative: number = InitiativePlaces.TOP_BLUE;
  translation_key = "monster.grim-doctor";
}
