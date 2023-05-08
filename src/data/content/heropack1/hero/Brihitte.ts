import AvatarImageUrl from "@/assets/hero/avatar/BrihitteAvatar.webp";
import type { HeroData } from "@/data/repository/HeroData";
import type { ArmorType } from "@/data/type/ArmorType";
import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";
import type { OffHandType } from "@/data/type/OffHandType";
import type { WeaponType } from "@/data/type/WeaponType";

export class Brihitte implements HeroData {
  id = "brihitte";
  name = "Brihitte";
  content: ContentId = "hero-pack-1";
  class: HeroClass = "Warlord";
  path: HeroPath = "Strength";
  race: HeroRace = "Dwarf";
  proficiencies = {
    weapon: ["Heavy"] as WeaponType[],
    offHand: ["Shield"] as OffHandType[],
    armor: ["Plate"] as ArmorType[],
  };
  images = {
    avatar: AvatarImageUrl,
  };
}
