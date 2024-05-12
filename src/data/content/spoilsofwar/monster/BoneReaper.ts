import ImageUrl from "@/assets/monster/big/BoneReaperBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/BoneReaperMiniature.webp";
import RookieStandard from "@/assets/monster/cards/bone-reaper/rookie/standard.jpg";
import RookieAlternate from "@/assets/monster/cards/bone-reaper/rookie/alternate.jpg";
import FighterStandard from "@/assets/monster/cards/bone-reaper/fighter/standard.jpg";
import FighterAlternate from "@/assets/monster/cards/bone-reaper/fighter/alternate.jpg";
import VeteranStandard from "@/assets/monster/cards/bone-reaper/veteran/standard.jpg";
import VeteranAlternate from "@/assets/monster/cards/bone-reaper/veteran/alternate.jpg";
import ChampionStandard from "@/assets/monster/cards/bone-reaper/champion/standard.jpg";
import ChampionAlternate from "@/assets/monster/cards/bone-reaper/champion/alternate.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class BoneReaper implements MonsterData {
  id = "bone-reaper";
  name = "Bone Reaper";
  content: ContentId = "spoils-of-war";
  variants: VariantId[] = ["standard", "alternate"];
  images = {
    big: ImageUrl,
    miniature: MiniatureUrl,
    cards: {
      rookie: [RookieStandard, RookieAlternate,],
      fighter: [FighterStandard, FighterAlternate,],
      veteran: [VeteranStandard, VeteranAlternate,],
      champion: [ChampionStandard, ChampionAlternate,],
    },
  };
  color: MonsterColor = "gray";
  size: string = "small";
  initiative: number = InitiativePlaces.BOTTOM_GRAY;
  translation_key = "monster.bone-reaper";
}
