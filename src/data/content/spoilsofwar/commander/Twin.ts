import AvatarUrl from "@/assets/monster/avatar/TwinAvatar.webp";
import ImageUrl from "@/assets/monster/big/TwinBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/TwinMiniature.webp";
import type { CommanderData } from "@/data/store/CommanderData";
import type { ContentId } from "@/data/type/ContentId";

export class Twin implements CommanderData {
  id = "commander-twin";
  name = "Twin";
  content: ContentId = "spoils-of-war";
  variants = [];
  images = {
    avatar: AvatarUrl,
    big: ImageUrl,
    miniature: MiniatureUrl,
    list: "",
  };
}
