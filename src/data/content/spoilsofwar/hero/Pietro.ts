import AvatarImageUrl from "@/assets/hero/avatar/PietroAvatar.webp";
import type { HeroData } from "@/data/repository/HeroData";
import type { ArmorType } from "@/data/type/ArmorType";
import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";
import type { OffHandType } from "@/data/type/OffHandType";
import type { WeaponType } from "@/data/type/WeaponType";

export class Pietro implements HeroData {
  id = "pietro";
  name = "Pietro";
  content: ContentId = "spoils-of-war";
  class: HeroClass = "Cleric";
  path: HeroPath = "Devotion";
  race: HeroRace = "Human";
  proficiencies = {
    weapon: ["Implement"] as WeaponType[],
    offHand: ["Relic"] as OffHandType[],
    armor: ["Plate"] as ArmorType[],
  };
  images = {
    avatar: AvatarImageUrl,
  };
}
