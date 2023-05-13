import AvatarImageUrl from "@/assets/hero/avatar/LorienAvatar.webp";
import type { HeroData } from "@/data/repository/HeroData";
import type { ArmorType } from "@/data/type/ArmorType";
import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";
import type { OffHandType } from "@/data/type/OffHandType";
import type { WeaponType } from "@/data/type/WeaponType";

export class Lorien implements HeroData {
  id = "lorien";
  name = "Lorien";
  content: ContentId = "lorien";
  class: HeroClass = "Mage";
  path: HeroPath = "Mystics";
  race: HeroRace = "Elf";
  proficiencies = {
    weapon: ["Implement"] as WeaponType[],
    offHand: ["Relic"] as OffHandType[],
    armor: ["Plate"] as ArmorType[],
  };
  images = {
    avatar: AvatarImageUrl,
  };
}
