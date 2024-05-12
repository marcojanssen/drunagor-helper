import ImageUrl from "@/assets/monster/big/ShadowWitchBig.webp";
import RookieStandard from "@/assets/monster/cards/shadow-witch/rookie/standard.jpg";
import RookieAlternate from "@/assets/monster/cards/shadow-witch/rookie/alternate.jpg";
import FighterStandard from "@/assets/monster/cards/shadow-witch/fighter/standard.jpg";
import FighterAlternate from "@/assets/monster/cards/shadow-witch/fighter/alternate.jpg";
import VeteranStandard from "@/assets/monster/cards/shadow-witch/veteran/standard.jpg";
import VeteranAlternate from "@/assets/monster/cards/shadow-witch/veteran/alternate.jpg";
import ChampionStandard from "@/assets/monster/cards/shadow-witch/champion/standard.jpg";
import ChampionAlternate from "@/assets/monster/cards/shadow-witch/champion/alternate.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class ShadowWitch implements MonsterData {
  id = "shadow-witch";
  name = "Shadow Witch";
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
  color: MonsterColor = "white";
  size: string = "small";
  initiative: number = InitiativePlaces.TOP_BLUE;
  translation_key = "monster.shadow-witch";
}
