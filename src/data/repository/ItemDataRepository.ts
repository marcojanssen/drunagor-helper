import type { ItemData } from "@/data/repository/ItemData";
import type { ItemType } from "@/data/type/ItemType";
import type { ArmorType } from "@/data/type/ArmorType";
import type { ConsumableType } from "@/data/type/ConsumableType";
import type { OffHandType } from "@/data/type/OffHandType";
import type { WeaponType } from "@/data/type/WeaponType";

export interface ItemDataRepository {
  find(id: string): ItemData | undefined;
  findAll(): ItemData[];
  findByType(type: ItemType, subType: ArmorType | ConsumableType | OffHandType | WeaponType | null): ItemData[];
}
