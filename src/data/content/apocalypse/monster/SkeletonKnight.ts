import ImageUrl from "@/assets/monster/big/SkeletonKnightBig.webp";
import RookieStandard from "@/assets/monster/cards/skeleton-knight/rookie/standard.jpg";
import RookieAlternate from "@/assets/monster/cards/skeleton-knight/rookie/alternate.jpg";
import FighterStandard from "@/assets/monster/cards/skeleton-knight/fighter/standard.jpg";
import FighterAlternate from "@/assets/monster/cards/skeleton-knight/fighter/alternate.jpg";
import VeteranStandard from "@/assets/monster/cards/skeleton-knight/veteran/standard.jpg";
import VeteranAlternate from "@/assets/monster/cards/skeleton-knight/veteran/alternate.jpg";
import ChampionStandard from "@/assets/monster/cards/skeleton-knight/champion/standard.jpg";
import ChampionAlternate from "@/assets/monster/cards/skeleton-knight/champion/alternate.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class SkeletonKnight implements MonsterData {
  id = "skeleton-knight";
  name = "Skeleton Knight";
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
    }
  };
  color: MonsterColor = "white";
  size: string = "small";
  initiative: number = InitiativePlaces.BOTTOM_RED;
  translation_key = "monster.skeleton-knight";
}
