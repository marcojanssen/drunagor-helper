import AvatarImageUrl from "@/assets/hero/avatar/SunAvatar.webp";
import ImageUrl from "@/assets/hero/big/SunBig.webp";
import MiniatureImageUrl from "@/assets/hero/miniature/SunMiniature.webp";
import type { HeroData } from "@/data/repository/HeroData";
import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";

export class Sun implements HeroData {
  id = "sun";
  name = "Sun";
  content: ContentId = "spoils-of-war";
  class: HeroClass = "Monk";
  path: HeroPath = "Cunning";
  race: HeroRace = "Human";
  images = {
    big: ImageUrl,
    avatar: AvatarImageUrl,
    miniature: MiniatureImageUrl,
  };
}
