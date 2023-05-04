import AvatarImageUrl from "@/assets/hero/avatar/MayaAvatar.webp";
import ImageUrl from "@/assets/hero/big/MayaBig.webp";
import ListImageUrl from "@/assets/hero/list/MayaList.webp";
import MiniatureImageUrl from "@/assets/hero/miniature/MayaMiniature.webp";
import type { HeroData } from "@/data/repository/HeroData";
import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";
import type { WeaponType } from "@/data/type/WeaponType";
import type { OffHandType } from "@/data/type/OffHandType";
import type { ArmorType } from "@/data/type/ArmorType";

export class Maya implements HeroData {
  id = "maya";
  name = "Maya";
  content: ContentId = "core";
  class: HeroClass = "Ranger";
  path: HeroPath = "Nature";
  race: HeroRace = "Human";
  proficiencies = {
    weapon: ["Ranged"] as WeaponType[],
    offHand: ["Off Hand Weapon"] as OffHandType[],
    armor: ["Leather"] as ArmorType[],
  };
  images = {
    big: ImageUrl,
    avatar: AvatarImageUrl,
    miniature: MiniatureImageUrl,
    list: ListImageUrl,
  };
}
