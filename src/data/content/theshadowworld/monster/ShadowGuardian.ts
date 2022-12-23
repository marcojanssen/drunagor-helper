import AvatarUrl from "@/assets/monster/avatar/ShadowGuardianAvatar.png";
import ImageUrl from "@/assets/monster/big/ShadowGuardianBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/ShadowGuardianMiniature.webp";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class ShadowGuardian implements MonsterData {
  id = "shadow-guardian";
  name = "Shadow Guardian";
  content: ContentId = "the-shadow-world";
  variants: VariantId[] = ["standard", "alternate"];
  images = {
    avatar: AvatarUrl,
    big: ImageUrl,
    miniature: MiniatureUrl,
    list: "",
  };
  color: MonsterColor = "gray";
  rank = {
    rookie: {},
    fighter: {},
    veteran: {},
    champion: {},
  };
}
