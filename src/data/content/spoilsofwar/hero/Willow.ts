import AvatarImageUrl from "@/assets/hero/avatar/WillowAvatar.png";
import ImageUrl from "@/assets/hero/big/WillowBig.webp";
import MiniatureImageUrl from "@/assets/hero/miniature/WillowMiniature.webp";
import type { HeroData } from "@/data/store/HeroData";
import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";

export class Willow implements HeroData {
  id = "Willow";
  name = "Willow";
  content: ContentId = "spoils-of-war";
  class: HeroClass = "Druid";
  path: HeroPath = "Nature";
  race: HeroRace = "Halfling";
  images = {
    big: ImageUrl,
    avatar: AvatarImageUrl,
    miniature: MiniatureImageUrl,
    list: "",
  };
}
