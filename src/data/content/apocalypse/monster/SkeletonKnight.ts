import ImageUrl from "@/assets/monster/big/SkeletonKnightBig.webp";
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
  };
  color: MonsterColor = "white";
  translation_key = "monster.skeleton-knight";
}
