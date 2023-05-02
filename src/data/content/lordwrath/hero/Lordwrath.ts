import AvatarImageUrl from "@/assets/hero/avatar/LordwrathAvatar.webp";
import ImageUrl from "@/assets/hero/big/LordwrathBig.webp";
import ListImageUrl from "@/assets/hero/list/LordwrathList.webp";
import type { HeroData } from "@/data/repository/HeroData";
import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";
import type { WeaponType } from "@/data/type/WeaponType";
import type { OffHandType } from "@/data/type/OffHandType";
import type { ArmorType } from "@/data/type/ArmorType";

export class Lordwrath implements HeroData {
  id = "lordwrath";
  name = "Lordwrath";
  content: ContentId = "lordwrath";
  class: HeroClass = "Shadow knight";
  path: HeroPath = "Strength";
  race: HeroRace = "Human";
  proficiencies = {
    weapon: ["Heavy"] as WeaponType[],
    offHand: ["Off Hand Weapon"] as OffHandType[],
    armor: ["Plate"] as ArmorType[],
  };
  images = {
    big: ImageUrl,
    avatar: AvatarImageUrl,
    miniature: "",
    list: ListImageUrl,
  };
}
