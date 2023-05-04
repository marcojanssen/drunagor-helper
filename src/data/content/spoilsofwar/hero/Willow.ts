import AvatarImageUrl from "@/assets/hero/avatar/WillowAvatar.webp";
import ImageUrl from "@/assets/hero/big/WillowBig.webp";
import ListImageUrl from "@/assets/hero/list/WillowList.webp";
import MiniatureImageUrl from "@/assets/hero/miniature/WillowMiniature.webp";
import type { HeroData } from "@/data/repository/HeroData";
import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";
import type { WeaponType } from "@/data/type/WeaponType";
import type { OffHandType } from "@/data/type/OffHandType";
import type { ArmorType } from "@/data/type/ArmorType";

export class Willow implements HeroData {
  id = "Willow";
  name = "Willow";
  content: ContentId = "spoils-of-war";
  class: HeroClass = "Druid";
  path: HeroPath = "Nature";
  race: HeroRace = "Halfling";
  proficiencies = {
    weapon: ["Implement"] as WeaponType[],
    offHand: ["Relic"] as OffHandType[],
    armor: ["Cloth"] as ArmorType[],
  };
  images = {
    big: ImageUrl,
    avatar: AvatarImageUrl,
    miniature: MiniatureImageUrl,
    list: ListImageUrl,
  };
}
