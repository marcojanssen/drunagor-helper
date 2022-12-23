import AvatarImageUrl from "@/assets/hero/avatar/FlavianAvatar.png";
import ImageUrl from "@/assets/hero/big/FlavianBig.webp";
import MiniatureImageUrl from "@/assets/hero/miniature/FlavianMiniature.webp";
import type { HeroData } from "@/data/store/HeroData";
import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";

export class Flavian implements HeroData {
  id = "flavian";
  name = "Flavian";
  content: ContentId = "spoils-of-war";
  class: HeroClass = "Bard";
  path: HeroPath = "Nature";
  race: HeroRace = "Halfling";
  images = {
    big: ImageUrl,
    avatar: AvatarImageUrl,
    miniature: MiniatureImageUrl,
    list: "",
  };
}
