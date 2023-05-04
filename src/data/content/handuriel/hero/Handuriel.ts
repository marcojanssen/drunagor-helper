import AvatarImageUrl from "@/assets/hero/avatar/HandurielAvatar.webp";
import ImageUrl from "@/assets/hero/big/HandurielBig.webp";
import ListImageUrl from "@/assets/hero/list/HandurielList.webp";
import type { HeroData } from "@/data/repository/HeroData";
import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";
import type { WeaponType } from "@/data/type/WeaponType";
import type { OffHandType } from "@/data/type/OffHandType";
import type { ArmorType } from "@/data/type/ArmorType";

export class Handuriel implements HeroData {
  id = "handuriel";
  name = "Handuriel";
  content: ContentId = "handuriel";
  class: HeroClass = "Ranger";
  path: HeroPath = "Nature";
  race: HeroRace = "Elf";
  proficiencies = {
    weapon: ["Ranged"] as WeaponType[],
    offHand: ["Off Hand Weapon"] as OffHandType[],
    armor: ["Leather"] as ArmorType[],
  };
  images = {
    big: ImageUrl,
    avatar: AvatarImageUrl,
    miniature: "",
    list: ListImageUrl,
  };
}
