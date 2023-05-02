import AvatarImageUrl from "@/assets/hero/avatar/JadeAvatar.webp";
import ImageUrl from "@/assets/hero/big/JadeBig.webp";
import ListImageUrl from "@/assets/hero/list/JadeList.webp";
import type { HeroData } from "@/data/repository/HeroData";
import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";
import type { WeaponType } from "@/data/type/WeaponType";
import type { OffHandType } from "@/data/type/OffHandType";
import type { ArmorType } from "@/data/type/ArmorType";

export class Jade implements HeroData {
  id = "jade";
  name = "Jade";
  content: ContentId = "rise-of-the-undead-dragon";
  class: HeroClass = "Paladin";
  path: HeroPath = "Devotion";
  race: HeroRace = "Human";
  proficiencies = {
    weapon: ["Heavy"] as WeaponType[],
    offHand: ["Shield", "Relic"] as OffHandType[],
    armor: ["Plate"] as ArmorType[],
  };
  images = {
    big: ImageUrl,
    avatar: AvatarImageUrl,
    miniature: "",
    list: ListImageUrl,
  };
}
