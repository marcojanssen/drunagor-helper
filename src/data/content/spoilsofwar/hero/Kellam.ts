import AvatarImageUrl from "@/assets/hero/avatar/KellamAvatar.webp";
import ImageUrl from "@/assets/hero/big/KellamBig.webp";
import ListImageUrl from "@/assets/hero/list/KellamList.webp";
import MiniatureImageUrl from "@/assets/hero/miniature/KellamMiniature.webp";
import type { HeroData } from "@/data/store/HeroData";
import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";

export class Kellam implements HeroData {
  id = "kellam";
  name = "Kellam";
  content: ContentId = "spoils-of-war";
  class: HeroClass = "Bard";
  path: HeroPath = "Nature";
  race: HeroRace = "Human";
  images = {
    big: ImageUrl,
    avatar: AvatarImageUrl,
    miniature: MiniatureImageUrl,
    list: ListImageUrl,
  };
}
