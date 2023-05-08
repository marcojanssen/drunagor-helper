import AvatarImageUrl from "@/assets/hero/avatar/KellamAvatar.webp";
import type { HeroData } from "@/data/repository/HeroData";
import type { ArmorType } from "@/data/type/ArmorType";
import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";
import type { OffHandType } from "@/data/type/OffHandType";
import type { WeaponType } from "@/data/type/WeaponType";

export class Kellam implements HeroData {
  id = "kellam";
  name = "Kellam";
  content: ContentId = "spoils-of-war";
  class: HeroClass = "Bard";
  path: HeroPath = "Nature";
  race: HeroRace = "Human";
  proficiencies = {
    weapon: ["Ranged"] as WeaponType[],
    offHand: ["Off Hand Weapon"] as OffHandType[],
    armor: ["Leather"] as ArmorType[],
  };
  images = {
    avatar: AvatarImageUrl,
  };
}
