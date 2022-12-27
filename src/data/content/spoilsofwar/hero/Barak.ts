import AvatarImageUrl from "@/assets/hero/avatar/BarakAvatar.webp";
import ImageUrl from "@/assets/hero/big/BarakBig.webp";
import ListImageUrl from "@/assets/hero/list/BarakList.webp";
import MiniatureImageUrl from "@/assets/hero/miniature/BarakMiniature.webp";
import type { HeroData } from "@/data/store/HeroData";
import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";

export class Barak implements HeroData {
  id = "barak";
  name = "Barak";
  content: ContentId = "spoils-of-war";
  class: HeroClass = "Sorcerer";
  path: HeroPath = "Mystics";
  race: HeroRace = "Orc";
  images = {
    big: ImageUrl,
    avatar: AvatarImageUrl,
    miniature: MiniatureImageUrl,
    list: ListImageUrl,
  };
}
