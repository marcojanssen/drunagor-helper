import AvatarImageUrl from "@/assets/hero/avatar/SunAvatar.webp";
import ImageUrl from "@/assets/hero/big/SunBig.webp";
import MiniatureImageUrl from "@/assets/hero/miniature/SunMiniature.webp";
import type { HeroData } from "@/data/repository/HeroData";
import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";
import type { WeaponType } from "@/data/type/WeaponType";
import type { OffHandType } from "@/data/type/OffHandType";
import type { ArmorType } from "@/data/type/ArmorType";

export class Sun implements HeroData {
  id = "sun";
  name = "Sun";
  content: ContentId = "spoils-of-war";
  class: HeroClass = "Monk";
  path: HeroPath = "Cunning";
  race: HeroRace = "Human";
  proficiencies = {
    weapon: ["Light"] as WeaponType[],
    offHand: ["Off Hand Weapon"] as OffHandType[],
    armor: ["Cloth"] as ArmorType[],
  };
  images = {
    big: ImageUrl,
    avatar: AvatarImageUrl,
    miniature: MiniatureImageUrl,
  };
}
