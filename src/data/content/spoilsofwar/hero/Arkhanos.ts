import AvatarImageUrl from "@/assets/hero/avatar/ArkhanosAvatar.webp";
import ImageUrl from "@/assets/hero/big/ArkhanosBig.webp";
import ListImageUrl from "@/assets/hero/list/ArkhanosList.webp";
import MiniatureImageUrl from "@/assets/hero/miniature/ArkhanosMiniature.webp";
import type { HeroData } from "@/data/repository/HeroData";
import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";

export class Arkhanos implements HeroData {
  id = "arkhanos";
  name = "Arkhanos";
  content: ContentId = "spoils-of-war";
  class: HeroClass = "Mage";
  path: HeroPath = "Mystics";
  race: HeroRace = "Human";
  images = {
    big: ImageUrl,
    avatar: AvatarImageUrl,
    miniature: MiniatureImageUrl,
    list: ListImageUrl,
  };
}
