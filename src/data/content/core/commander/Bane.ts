import AvatarUrl from "@/assets/monster/avatar/ShadowVampireAvatar.webp";
import ImageUrl from "@/assets/monster/big/ShadowVampireBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/ShadowVampireMiniature.webp";
import type { CommanderData } from "@/data/store/CommanderData";
import type { ContentId } from "@/data/type/ContentId";

export class Bane implements CommanderData {
  id = "bane";
  name = "Bane";
  content: ContentId = "core";
  images = {
    avatar: AvatarUrl,
    big: ImageUrl,
    miniature: MiniatureUrl,
    list: "",
  };
}
