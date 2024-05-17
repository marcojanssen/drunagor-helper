import ImageUrl from "@/assets/monster/big/SkeletonArcherBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/SkeletonArcherMiniature.webp";
import Card from "@/assets/monster/cards/scenario-monsters/skeleton-archer-minion.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class SkeletonArcherMinion implements MonsterData {
  id = "skeleton-archer-minion";
  name = "Skeleton Archer Minion";
  content: ContentId = "core";
  variants: VariantId[] = ["standard", "alternate"];
  images = {
    big: ImageUrl,
    miniature: MiniatureUrl,
    cards: {
      rookie: [Card,],
      fighter: [Card,],
      veteran: [Card,],
      champion: [Card,],
    },
  };
  color: MonsterColor = "other";
  size: string = "small";
  initiative: number = InitiativePlaces.BOTTOM_GRAY; // InitiativePlaces.OTHER
  translation_key = "monster.skeleton-archer";
}
