import AvatarImageUrl from "@/assets/hero/avatar/DevronAvatar.webp";
import ImageUrl from "@/assets/hero/big/DevronBig.webp";
import MiniatureImageUrl from "@/assets/hero/miniature/DevronMiniature.webp";
import type { HeroData } from "@/data/repository/HeroData";
import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";
import type { WeaponType } from "@/data/type/WeaponType";
import type { OffHandType } from "@/data/type/OffHandType";
import type { ArmorType } from "@/data/type/ArmorType";

export class Devron implements HeroData {
  id = "devron";
  name = "Devron";
  content: ContentId = "spoils-of-war";
  class: HeroClass = "Shadow knight";
  path: HeroPath = "Strength";
  race: HeroRace = "Vampire";
  proficiencies = {
    weapon: ["Light"] as WeaponType[],
    offHand: ["Off Hand Weapon"] as OffHandType[],
    armor: ["Plate"] as ArmorType[],
  };
  images = {
    big: ImageUrl,
    avatar: AvatarImageUrl,
    miniature: MiniatureImageUrl,
  };
}
