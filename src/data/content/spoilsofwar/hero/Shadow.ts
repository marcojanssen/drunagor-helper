import AvatarImageUrl from "@/assets/hero/avatar/ShadowAvatar.webp";
import type { HeroData } from "@/data/repository/HeroData";
import type { ArmorType } from "@/data/type/ArmorType";
import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";
import type { OffHandType } from "@/data/type/OffHandType";
import type { WeaponType } from "@/data/type/WeaponType";

export class Shadow implements HeroData {
  id = "shadow";
  name = "Shadow";
  content: ContentId = "spoils-of-war";
  class: HeroClass = "Assasin";
  path: HeroPath = "Cunning";
  race: HeroRace = "Efreet";
  proficiencies = {
    weapon: ["Light"] as WeaponType[],
    offHand: ["Off Hand Weapon"] as OffHandType[],
    armor: ["Leather"] as ArmorType[],
  };
  images = {
    avatar: AvatarImageUrl,
  };
}
