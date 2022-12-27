import AvatarImageUrl from "@/assets/hero/avatar/DuncanAvatar.webp";
import ImageUrl from "@/assets/hero/big/DuncanBig.webp";
import ListImageUrl from "@/assets/hero/list/DuncanList.webp";
import MiniatureImageUrl from "@/assets/hero/miniature/DuncanMiniature.webp";
import type { HeroData } from "@/data/store/HeroData";
import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";

export class Duncan implements HeroData {
  id = "duncan";
  name = "Duncan";
  content: ContentId = "spoils-of-war";
  class: HeroClass = "Warrior";
  path: HeroPath = "Strength";
  race: HeroRace = "Dwarf";
  images = {
    big: ImageUrl,
    avatar: AvatarImageUrl,
    miniature: MiniatureImageUrl,
    list: ListImageUrl,
  };
}
