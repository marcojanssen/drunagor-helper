import AvatarImageUrl from "@/assets/hero/avatar/SiffAvatar.webp";
import type { HeroData } from "@/data/repository/HeroData";
import type { ArmorType } from "@/data/type/ArmorType";
import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";
import type { OffHandType } from "@/data/type/OffHandType";
import type { WeaponType } from "@/data/type/WeaponType";

export class Siff implements HeroData {
  id = "siff";
  name = "Siff";
  content: ContentId = "hero-pack-1";
  class: HeroClass = "Necromancer";
  path: HeroPath = "Mystics";
  race: HeroRace = "Azurean";
  proficiencies = {
    weapon: ["Heavy"] as WeaponType[],
    offHand: ["Off Hand Weapon"] as OffHandType[],
    armor: ["Cloth"] as ArmorType[],
  };
  images = {
    avatar: AvatarImageUrl,
  };
}
