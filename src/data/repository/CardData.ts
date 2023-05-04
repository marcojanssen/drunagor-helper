import type { ContentId } from "@/data/type/ContentId";
import type { CardType } from "@/data/type/CardType";
import type { ItemType } from "@/data/type/ItemType";
import type { ArmorType } from "@/data/type/ArmorType";
import type { ConsumableType } from "@/data/type/ConsumableType";
import type { WeaponType } from "@/data/type/WeaponType";
import type { OffHandType } from "@/data/type/OffHandType";

export interface CardData {
  id: string;
  content: ContentId;
  name: string;
  cardType: CardType;
  cardRank: number | null;
  itemType: ItemType;
}

export interface ArmorCardData extends CardData {
  armorTypes: ArmorType[];
}

export interface ConsumableCardData extends CardData {
  consumableType: ConsumableType;
}

export interface OffHandCardData extends CardData {
  offHandTypes: OffHandType[];
}

export interface WeaponCardData extends CardData {
  weaponTypes: WeaponType[];
}

export function instanceOfArmorCardData(object: any): object is ArmorCardData {
  return "armorTypes" in object;
}

export function instanceOfConsumableCardData(object: any): object is ConsumableCardData {
  return "consumableType" in object;
}

export function instanceOfOffHandCardData(object: any): object is OffHandCardData {
  return "offHandTypes" in object;
}

export function instanceOfWeaponCardData(object: any): object is WeaponCardData {
  return "weaponTypes" in object;
}
