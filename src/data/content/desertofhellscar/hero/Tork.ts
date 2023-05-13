import AvatarImageUrl from "@/assets/hero/avatar/TorkAvatar.webp";
import type { HeroData } from "@/data/repository/HeroData";
import type { ArmorType } from "@/data/type/ArmorType";
import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";
import type { OffHandType } from "@/data/type/OffHandType";
import type { WeaponType } from "@/data/type/WeaponType";

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
    avatar: AvatarImageUrl,
  };
}
