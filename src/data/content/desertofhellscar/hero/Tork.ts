import AvatarImageUrl from "@/assets/hero/avatar/TorkAvatar.webp";
import ImageUrl from "@/assets/hero/big/TorkBig.webp";
import ListImageUrl from "@/assets/hero/list/TorkList.webp";
import MiniatureImageUrl from "@/assets/hero/miniature/TorkMiniature.webp";
import type { HeroData } from "@/data/store/HeroData";
import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";

export class Tork implements HeroData {
  id = "tork";
  name = "Tork";
  content: ContentId = "desert-of-hellscar";
  class: HeroClass = "Barbarian";
  path: HeroPath = "Strength";
  race: HeroRace = "Orc";
  images = {
    big: ImageUrl,
    avatar: AvatarImageUrl,
    miniature: MiniatureImageUrl,
    list: ListImageUrl,
  };
}
