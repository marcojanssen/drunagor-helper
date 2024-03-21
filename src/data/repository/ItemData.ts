import type { ArmorType } from "@/data/type/ArmorType";
import type { ConsumableType } from "@/data/type/ConsumableType";
import type { ItemType } from "@/data/type/ItemType";
import type { OffHandType } from "@/data/type/OffHandType";
import type { WeaponType } from "@/data/type/WeaponType";
import type { CardType } from "@/data/type/CardType";

export interface ItemData {
  id: string;
  itemType: ItemType;
  cardType: CardType;
  translation_key: string;
}

export interface ArmorItemData extends ItemData {
  armorTypes: ArmorType[];
}

export interface ConsumableItemData extends ItemData {
  consumableType: ConsumableType;
}

export interface OffHandItemData extends ItemData {
  offHandTypes: OffHandType[];
}

export interface WeaponItemData extends ItemData {
  weaponTypes: WeaponType[];
}

export function instanceOfArmorCardData(object: any): object is ArmorItemData {
  return "armorTypes" in object;
}

export function instanceOfConsumableCardData(object: any): object is ConsumableItemData {
  return "consumableType" in object;
}

export function instanceOfOffHandCardData(object: any): object is OffHandItemData {
  return "offHandTypes" in object;
}

export function instanceOfWeaponCardData(object: any): object is WeaponItemData {
  return "weaponTypes" in object;
}
