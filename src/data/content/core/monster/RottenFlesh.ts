import ImageUrl from "@/assets/monster/big/RottenFleshBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/RottenFleshMiniature.webp";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class RottenFlesh implements MonsterData {
  id = "rotten-flesh";
  name = "Rotten Flesh";
  content: ContentId = "core";
  variants: VariantId[] = ["standard", "alternate", "complex"];
  images = {
    big: ImageUrl,
    miniature: MiniatureUrl,
  };
  color: MonsterColor = "gray";
  translation_key = "monster.rotten-flesh";
}
