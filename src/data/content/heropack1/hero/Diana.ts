import AvatarImageUrl from "@/assets/hero/avatar/DianaAvatar.webp";
import type { HeroData } from "@/data/repository/HeroData";
import type { ArmorType } from "@/data/type/ArmorType";
import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";
import type { OffHandType } from "@/data/type/OffHandType";
import type { WeaponType } from "@/data/type/WeaponType";

export class Diana implements HeroData {
  id = "diana";
  name = "Diana";
  content: ContentId = "hero-pack-1";
  class: HeroClass = "Swordmage";
  path: HeroPath = "Devotion";
  race: HeroRace = "Valkyrie";
  proficiencies = {
    weapon: ["Heavy"] as WeaponType[],
    offHand: ["Relic"] as OffHandType[],
    armor: ["Plate"] as ArmorType[],
  };
  images = {
    avatar: AvatarImageUrl,
  };
}
