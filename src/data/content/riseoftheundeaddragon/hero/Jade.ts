import AvatarImageUrl from "@/assets/hero/avatar/JadeAvatar.webp";
import ImageUrl from "@/assets/hero/big/JadeBig.webp";
import ListImageUrl from "@/assets/hero/list/JadeList.webp";
import type { HeroData } from "@/data/store/HeroData";
import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";

export class Jade implements HeroData {
  id = "jade";
  name = "Jade";
  content: ContentId = "rise-of-the-undead-dragon";
  class: HeroClass = "Paladin";
  path: HeroPath = "Devotion";
  race: HeroRace = "Human";
  images = {
    big: ImageUrl,
    avatar: AvatarImageUrl,
    miniature: "",
    list: ListImageUrl,
  };
}
