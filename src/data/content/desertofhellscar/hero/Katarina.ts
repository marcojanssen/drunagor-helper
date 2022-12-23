import AvatarImageUrl from "@/assets/hero/avatar/KatarinaAvatar.png";
import ImageUrl from "@/assets/hero/big/KatarinaBig.webp";
import MiniatureImageUrl from "@/assets/hero/miniature/KatarinaMiniature.webp";
import type { HeroData } from "@/data/store/HeroData";
import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";

export class Katarina implements HeroData {
  id = "katarina";
  name = "Katarina";
  content: ContentId = "desert-of-hellscar";
  class: HeroClass = "Barbarian";
  path: HeroPath = "Strength";
  race: HeroRace = "Human";
  images = {
    big: ImageUrl,
    avatar: AvatarImageUrl,
    miniature: MiniatureImageUrl,
    list: "",
  };
}
