import AvatarUrl from "@/assets/monster/avatar/ThernAvatar.webp";
import ImageUrl from "@/assets/monster/big/ThernBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/ThernMiniature.webp";
import type { CommanderData } from "@/data/store/CommanderData";
import type { ContentId } from "@/data/type/ContentId";

export class Thern implements CommanderData {
  id = "commander-thern";
  name = "Thern";
  content: ContentId = "spoils-of-war";
  variants = [];
  images = {
    avatar: AvatarUrl,
    big: ImageUrl,
    miniature: MiniatureUrl,
    list: "",
  };
}
