import ImageUrl from "@/assets/monster/big/SkeletonArcherBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/SkeletonArcherMiniature.webp";
import RookieStandard from "@/assets/monster/cards/skeleton-archer/rookie/standard.jpg";
import RookieAlternate from "@/assets/monster/cards/skeleton-archer/rookie/alternate.jpg";
import FighterStandard from "@/assets/monster/cards/skeleton-archer/fighter/standard.jpg";
import FighterAlternate from "@/assets/monster/cards/skeleton-archer/fighter/alternate.jpg";
import VeteranStandard from "@/assets/monster/cards/skeleton-archer/veteran/standard.jpg";
import VeteranAlternate from "@/assets/monster/cards/skeleton-archer/veteran/alternate.jpg";
import ChampionStandard from "@/assets/monster/cards/skeleton-archer/champion/standard.jpg";
import ChampionAlternate from "@/assets/monster/cards/skeleton-archer/champion/alternate.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class SkeletonArcher implements MonsterData {
  id = "skeleton-archer";
  name = "Skeleton Archer";
  content: ContentId = "core";
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
  color: MonsterColor = "white";
  size: string = "small";
  initiative: number = InitiativePlaces.TOP_BLUE;
  translation_key = "monster.skeleton-archer";
}
