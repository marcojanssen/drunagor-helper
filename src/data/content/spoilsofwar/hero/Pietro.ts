import AvatarImageUrl from "@/assets/hero/avatar/PietroAvatar.webp";
import ImageUrl from "@/assets/hero/big/PietroBig.webp";
import ListImageUrl from "@/assets/hero/list/PietroList.webp";
import MiniatureImageUrl from "@/assets/hero/miniature/PietroMiniature.webp";
import type { HeroData } from "@/data/repository/HeroData";
import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";

export class Pietro implements HeroData {
  id = "pietro";
  name = "Pietro";
  content: ContentId = "spoils-of-war";
  class: HeroClass = "Cleric";
  path: HeroPath = "Devotion";
  race: HeroRace = "Human";
  images = {
    big: ImageUrl,
    avatar: AvatarImageUrl,
    miniature: MiniatureImageUrl,
    list: ListImageUrl,
  };
}
