import AvatarImageUrl from "@/assets/hero/avatar/HandurielAvatar.webp";
import ImageUrl from "@/assets/hero/big/HandurielBig.webp";
import ListImageUrl from "@/assets/hero/list/HandurielList.webp";
import type { HeroData } from "@/data/store/HeroData";
import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";

export class Handuriel implements HeroData {
  id = "handuriel";
  name = "Handuriel";
  content: ContentId = "handuriel";
  class: HeroClass = "Ranger";
  path: HeroPath = "Nature";
  race: HeroRace = "Elf";
  images = {
    big: ImageUrl,
    avatar: AvatarImageUrl,
    miniature: "",
    list: ListImageUrl,
  };
}
