import AvatarImageUrl from "@/assets/hero/avatar/ElrosAvatar.webp";
import ImageUrl from "@/assets/hero/big/ElrosBig.webp";
import ListImageUrl from "@/assets/hero/list/ElrosList.webp";
import MiniatureImageUrl from "@/assets/hero/miniature/ElrosMiniature.webp";
import type { HeroData } from "@/data/store/HeroData";
import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";

export class Elros implements HeroData {
  id = "elros";
  name = "Elros";
  content: ContentId = "core";
  class: HeroClass = "Assasin";
  path: HeroPath = "Cunning";
  race: HeroRace = "Elf";
  images = {
    big: ImageUrl,
    avatar: AvatarImageUrl,
    miniature: MiniatureImageUrl,
    list: ListImageUrl,
  };
}
