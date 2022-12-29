import AvatarImageUrl from "@/assets/hero/avatar/LorelaiAvatar.webp";
import ImageUrl from "@/assets/hero/big/LorelaiBig.webp";
import ListImageUrl from "@/assets/hero/list/LorelaiList.webp";
import MiniatureImageUrl from "@/assets/hero/miniature/LorelaiMiniature.webp";
import type { HeroData } from "@/data/repository/HeroData";
import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";

export class Lorelai implements HeroData {
  id = "lorelai";
  name = "Lorelai";
  content: ContentId = "core";
  class: HeroClass = "Mage";
  path: HeroPath = "Mystics";
  race: HeroRace = "Elf";
  images = {
    big: ImageUrl,
    avatar: AvatarImageUrl,
    miniature: MiniatureImageUrl,
    list: ListImageUrl,
  };
}
