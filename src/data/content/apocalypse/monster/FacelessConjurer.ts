import ImageUrl from "@/assets/monster/big/FacelessConjurerBig.webp";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class FacelessConjurer implements MonsterData {
  id = "faceless-conjurer";
  name = "Faceless Conjurer";
  content: ContentId = "apocalypse";
  variants: VariantId[] = ["standard", "alternate"];
  images = {
    big: ImageUrl,
    miniature: "",
  };
  color: MonsterColor = "gray";
  translation_key = "monster.faceless-conjurer";
}
