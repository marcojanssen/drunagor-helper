import AvatarImageUrl from "@/assets/hero/avatar/DevronAvatar.png";
import ImageUrl from "@/assets/hero/big/DevronBig.webp";
import MiniatureImageUrl from "@/assets/hero/miniature/DevronMiniature.webp";
import type { HeroData } from "@/data/store/HeroData";
import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";

export class Devron implements HeroData {
  id = "devron";
  name = "Devron";
  content: ContentId = "spoils-of-war";
  class: HeroClass = "Shadow knight";
  path: HeroPath = "Strength";
  race: HeroRace = "Vampire";
  images = {
    big: ImageUrl,
    avatar: AvatarImageUrl,
    miniature: MiniatureImageUrl,
    list: "",
  };
}
