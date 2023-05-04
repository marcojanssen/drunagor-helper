import AvatarImageUrl from "@/assets/hero/avatar/TorkAvatar.webp";
import ImageUrl from "@/assets/hero/big/TorkBig.webp";
import MiniatureImageUrl from "@/assets/hero/miniature/TorkMiniature.webp";
import type { HeroData } from "@/data/repository/HeroData";
import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";
import type { WeaponType } from "@/data/type/WeaponType";
import type { OffHandType } from "@/data/type/OffHandType";
import type { ArmorType } from "@/data/type/ArmorType";

export class Tork implements HeroData {
  id = "tork";
  name = "Tork";
  content: ContentId = "desert-of-hellscar";
  class: HeroClass = "Barbarian";
  path: HeroPath = "Strength";
  race: HeroRace = "Orc";
  proficiencies = {
    weapon: ["Heavy"] as WeaponType[],
    offHand: ["Off Hand Weapon"] as OffHandType[],
    armor: ["Leather"] as ArmorType[],
  };
  images = {
    big: ImageUrl,
    avatar: AvatarImageUrl,
    miniature: MiniatureImageUrl,
  };
}
