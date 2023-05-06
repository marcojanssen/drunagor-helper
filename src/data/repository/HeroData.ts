import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";
import type { WeaponType } from "@/data/type/WeaponType";
import type { OffHandType } from "@/data/type/OffHandType";
import type { ArmorType } from "@/data/type/ArmorType";
import type { CardData } from "@/data/repository/CardData";
import type { ArmorCardData, OffHandCardData, WeaponCardData } from "@/data/repository/CardData";
import {
  instanceOfArmorCardData,
  instanceOfOffHandCardData,
  instanceOfWeaponCardData,
} from "@/data/repository/CardData";

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
  };
}

export function heroCanUse(hero: HeroData, item: CardData): boolean {
  if (instanceOfArmorCardData(item)) {
    return (item as ArmorCardData).armorTypes.some((armorType) =>
      hero.proficiencies.armor.some((armorProficiency) => armorProficiency === armorType)
    );
  }
  if (instanceOfOffHandCardData(item)) {
    return (item as OffHandCardData).offHandTypes.some((offHandType) =>
      hero.proficiencies.offHand.some((offHandProficiency) => offHandProficiency === offHandType)
    );
  }
  if (instanceOfWeaponCardData(item)) {
    return (item as WeaponCardData).weaponTypes.some((weaponType) =>
      hero.proficiencies.weapon.some((weaponProficiency) => weaponProficiency === weaponType)
    );
  }
  return true;
}
