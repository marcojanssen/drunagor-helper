import AvatarImageUrl from "@/assets/hero/avatar/SaharaAvatar.webp";
import type { HeroData } from "@/data/repository/HeroData";
import type { ArmorType } from "@/data/type/ArmorType";
import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";
import type { OffHandType } from "@/data/type/OffHandType";
import type { WeaponType } from "@/data/type/WeaponType";

export class Sahara implements HeroData {
  id = "sahara";
  name = "Sahara";
  content: ContentId = "hero-pack-1";
  class: HeroClass = "Shaman";
  path: HeroPath = "Nature";
  race: HeroRace = "Draconian";
  proficiencies = {
    weapon: ["Claws"] as WeaponType[],
    offHand: ["Off Hand Weapon"] as OffHandType[],
    armor: ["Leather"] as ArmorType[],
  };
  images = {
    avatar: AvatarImageUrl,
  };
}
