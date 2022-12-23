import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export interface MonsterData {
  id: string;
  content: ContentId;
  name: string;
  variants: VariantId[];
  images: {
    avatar: string;
    big: string;
    miniature: string;
    list: string;
  };
  color: MonsterColor;
  rank: {
    rookie: {};
    fighter: {};
    veteran: {};
    champion: {};
  };
}
