import AvatarImageUrl from "@/assets/hero/avatar/DrasekAvatar.webp";
import type { HeroData } from "@/data/repository/HeroData";
import type { ArmorType } from "@/data/type/ArmorType";
import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";
import type { OffHandType } from "@/data/type/OffHandType";
import type { WeaponType } from "@/data/type/WeaponType";

export class Drasek implements HeroData {
  id = "drasek";
  name = "Drasek";
  content: ContentId = "rise-of-the-undead-dragon";
  class: HeroClass = "Paladin";
  path: HeroPath = "Devotion";
  race: HeroRace = "Draconian";
  proficiencies = {
    weapon: ["Heavy"] as WeaponType[],
    offHand: ["Shield", "Relic"] as OffHandType[],
    armor: ["Plate"] as ArmorType[],
  };
  images = {
    avatar: AvatarImageUrl,
  };
}
