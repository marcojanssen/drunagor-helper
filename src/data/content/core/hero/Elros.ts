import AvatarImageUrl from "@/assets/hero/avatar/ElrosAvatar.webp";
import ImageUrl from "@/assets/hero/big/ElrosBig.webp";
import MiniatureImageUrl from "@/assets/hero/miniature/ElrosMiniature.webp";
import type { HeroData } from "@/data/repository/HeroData";
import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";
import type { WeaponType } from "@/data/type/WeaponType";
import type { OffHandType } from "@/data/type/OffHandType";
import type { ArmorType } from "@/data/type/ArmorType";

export class Elros implements HeroData {
  id = "elros";
  name = "Elros";
  content: ContentId = "core";
  class: HeroClass = "Assasin";
  path: HeroPath = "Cunning";
  race: HeroRace = "Elf";
  proficiencies = {
    weapon: ["Light"] as WeaponType[],
    offHand: ["Off Hand Weapon"] as OffHandType[],
    armor: ["Leather"] as ArmorType[],
  };
  images = {
    big: ImageUrl,
    avatar: AvatarImageUrl,
    miniature: MiniatureImageUrl,
  };
}
