import AvatarImageUrl from "@/assets/hero/avatar/VornAvatar.png";
import ImageUrl from "@/assets/hero/big/VornBig.webp";
import MiniatureImageUrl from "@/assets/hero/miniature/VornMiniature.webp";
import type { HeroData } from "@/data/store/HeroData";
import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";

export class Vorn implements HeroData {
  id = "vorn";
  name = "Vorn";
  content: ContentId = "core";
  class: HeroClass = "Warrior";
  path: HeroPath = "Strength";
  race: HeroRace = "Dwarf";
  images = {
    big: ImageUrl,
    avatar: AvatarImageUrl,
    miniature: MiniatureImageUrl,
    list: "",
  };
}
