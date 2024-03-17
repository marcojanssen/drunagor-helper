import ImageUrl from "@/assets/monster/big/GorgonHexerBig.webp";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class GorgonHexer implements MonsterData {
  id = "gorgon-hexer";
  name = "Gorgon Hexer";
  content: ContentId = "awakenings";
  variants: VariantId[] = ["standard", "alternate"];
  images = {
    big: ImageUrl,
    miniature: "",
  };
  color: MonsterColor = "gray";
  translation_key = "monster.gorgon-hexer";
}
