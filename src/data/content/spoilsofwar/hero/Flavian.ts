import AvatarImageUrl from "@/assets/hero/avatar/FlavianAvatar.webp";
import type { HeroData } from "@/data/repository/HeroData";
import type { ArmorType } from "@/data/type/ArmorType";
import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";
import type { OffHandType } from "@/data/type/OffHandType";
import type { WeaponType } from "@/data/type/WeaponType";

export class Flavian implements HeroData {
  id = "flavian";
  name = "Flavian";
  content: ContentId = "spoils-of-war";
  class: HeroClass = "Bard";
  path: HeroPath = "Nature";
  race: HeroRace = "Halfling";
  proficiencies = {
    weapon: ["Implement"] as WeaponType[],
    offHand: ["Relic"] as OffHandType[],
    armor: ["Cloth"] as ArmorType[],
  };
  images = {
    avatar: AvatarImageUrl,
  };
}
