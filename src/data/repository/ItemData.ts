import type { ContentId } from "@/data/type/ContentId";
import type { CardType } from "@/data/type/CardType";
import type { ItemType } from "@/data/type/ItemType";
import type { ArmorType } from "@/data/type/ArmorType";
import type { ConsumableType } from "@/data/type/ConsumableType";
import type { WeaponType } from "@/data/type/WeaponType";
import type { OffHandType } from "@/data/type/OffHandType";
import type { CartRarity } from "@/data/type/CardRarity";

export interface ItemData {
  id: string;
  content: ContentId;
  name: string;
  cardType: CardType;
  cardRank: number | null;
  cardRarity: CartRarity;
  itemType: ItemType;
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
