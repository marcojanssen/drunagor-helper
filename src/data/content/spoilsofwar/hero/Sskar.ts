import AvatarImageUrl from "@/assets/hero/avatar/SskarAvatar.webp";
import ImageUrl from "@/assets/hero/big/SskarBig.webp";
import MiniatureImageUrl from "@/assets/hero/miniature/SskarMiniature.webp";
import type { HeroData } from "@/data/repository/HeroData";
import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";
import type { WeaponType } from "@/data/type/WeaponType";
import type { OffHandType } from "@/data/type/OffHandType";
import type { ArmorType } from "@/data/type/ArmorType";

export class Sskar implements HeroData {
  id = "sskar";
  name = "Sskar";
  content: ContentId = "spoils-of-war";
  class: HeroClass = "Sorcerer";
  path: HeroPath = "Mystics";
  race: HeroRace = "Draconian";
  proficiencies = {
    weapon: ["Implement"] as WeaponType[],
    offHand: ["Off Hand Weapon"] as OffHandType[],
    armor: ["Cloth"] as ArmorType[],
  };
  images = {
    big: ImageUrl,
    avatar: AvatarImageUrl,
    miniature: MiniatureImageUrl,
  };
}
