import AvatarUrl from "@/assets/monster/avatar/RavagerAvatar.png";
import ImageUrl from "@/assets/monster/big/RavagerBig.webp";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class Ravager implements MonsterData {
  id = "ravager";
  name = "Ravager";
  content: ContentId = "the-ruin-of-luccanor";
  variants: VariantId[] = ["standard", "alternate"];
  images = {
    avatar: AvatarUrl,
    big: ImageUrl,
    miniature: "",
    list: "",
  };
  color: MonsterColor = "white";
  rank = {
    rookie: {},
    fighter: {},
    veteran: {},
    champion: {},
  };
}
