import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";
import type { WeaponType } from "@/data/type/WeaponType";
import type { OffHandType } from "@/data/type/OffHandType";
import type { ArmorType } from "@/data/type/ArmorType";

export interface HeroData {
  id: string;
  content: ContentId;
  name: string;
  class: HeroClass;
  path: HeroPath;
  race: HeroRace;
  proficiencies: {
    weapon: WeaponType[];
    offHand: OffHandType[];
    armor: ArmorType[];
  };
  images: {
    avatar: string;
    big: string;
    miniature: string;
    list: string;
  };
}
