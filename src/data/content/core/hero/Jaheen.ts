import AvatarImageUrl from "@/assets/hero/avatar/JaheenAvatar.webp";
import ImageUrl from "@/assets/hero/big/JaheenBig.webp";
import MiniatureImageUrl from "@/assets/hero/miniature/JaheenMiniature.webp";
import type { HeroData } from "@/data/repository/HeroData";
import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";

export class Jaheen implements HeroData {
  id = "jaheen";
  name = "Jaheen";
  content: ContentId = "core";
  class: HeroClass = "Cleric";
  path: HeroPath = "Devotion";
  race: HeroRace = "Human";
  images = {
    big: ImageUrl,
    avatar: AvatarImageUrl,
    miniature: MiniatureImageUrl,
  };
}
