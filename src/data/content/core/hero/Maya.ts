import AvatarImageUrl from "@/assets/hero/avatar/MayaAvatar.webp";
import ImageUrl from "@/assets/hero/big/MayaBig.webp";
import MiniatureImageUrl from "@/assets/hero/miniature/MayaMiniature.webp";
import type { HeroData } from "@/data/store/HeroData";
import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";

export class Maya implements HeroData {
  id = "maya";
  name = "Maya";
  content: ContentId = "core";
  class: HeroClass = "Ranger";
  path: HeroPath = "Nature";
  race: HeroRace = "Human";
  images = {
    big: ImageUrl,
    avatar: AvatarImageUrl,
    miniature: MiniatureImageUrl,
    list: "",
  };
}
