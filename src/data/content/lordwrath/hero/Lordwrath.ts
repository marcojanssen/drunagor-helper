import AvatarImageUrl from "@/assets/hero/avatar/LordwrathAvatar.webp";
import ImageUrl from "@/assets/hero/big/LordwrathBig.webp";
import type { HeroData } from "@/data/store/HeroData";
import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";

export class Lordwrath implements HeroData {
  id = "lordwrath";
  name = "Lordwrath";
  content: ContentId = "lordwrath";
  class: HeroClass = "Shadow knight";
  path: HeroPath = "Strength";
  race: HeroRace = "Human";
  images = {
    big: ImageUrl,
    avatar: AvatarImageUrl,
    miniature: "",
    list: "",
  };
}
