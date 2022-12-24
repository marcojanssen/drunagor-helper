import AvatarImageUrl from "@/assets/hero/avatar/DrasekAvatar.webp";
import ImageUrl from "@/assets/hero/big/DrasekBig.webp";
import type { HeroData } from "@/data/store/HeroData";
import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";

export class Drasek implements HeroData {
  id = "drasek";
  name = "Drasek";
  content: ContentId = "rise-of-the-undead-dragon";
  class: HeroClass = "Paladin";
  path: HeroPath = "Devotion";
  race: HeroRace = "Draconian";
  images = {
    big: ImageUrl,
    avatar: AvatarImageUrl,
    miniature: "",
    list: "",
  };
}
