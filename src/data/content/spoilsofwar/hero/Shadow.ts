import AvatarImageUrl from "@/assets/hero/avatar/ShadowAvatar.webp";
import ImageUrl from "@/assets/hero/big/ShadowBig.webp";
import MiniatureImageUrl from "@/assets/hero/miniature/ShadowMiniature.webp";
import type { HeroData } from "@/data/repository/HeroData";
import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";

export class Shadow implements HeroData {
  id = "shadow";
  name = "Shadow";
  content: ContentId = "spoils-of-war";
  class: HeroClass = "Assasin";
  path: HeroPath = "Cunning";
  race: HeroRace = "Efreet";
  images = {
    big: ImageUrl,
    avatar: AvatarImageUrl,
    miniature: MiniatureImageUrl,
  };
}
