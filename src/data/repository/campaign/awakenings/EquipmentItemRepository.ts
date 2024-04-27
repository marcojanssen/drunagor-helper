import type {
  ArmorItemData,
  ConsumableItemData,
  ItemData,
  OffHandItemData,
  WeaponItemData,
} from "@/data/repository/ItemData";
import {
  instanceOfArmorCardData,
  instanceOfConsumableCardData,
  instanceOfOffHandCardData,
  instanceOfWeaponCardData,
} from "@/data/repository/ItemData";
import type { ItemDataRepository } from "@/data/repository/ItemDataRepository";
import type { ArmorType } from "@/data/type/ArmorType";
import type { ConsumableType } from "@/data/type/ConsumableType";
import type { ItemType } from "@/data/type/ItemType";
import type { OffHandType } from "@/data/type/OffHandType";
import type { WeaponType } from "@/data/type/WeaponType";
import * as _ from "lodash-es";

export class EquipmentItemRepository implements ItemDataRepository {
  private cards = [
    {
      id: "scholars-robe",
      name: "Scholar's Robe",
      content: "apocalypse",
      cardType: "Starting Gear",
      cardRank: null,
      cardRarity: "Normal",
      itemType: "Armor",
      armorTypes: ["Cloth"],
      translation_key: "armor.apocalypse.scholars-robe",
    } as ArmorItemData,
    {
      id: "warworn-breastplate",
      name: "Warworn Breastplate",
      content: "apocalypse",
      cardType: "Starting Gear",
      cardRank: null,
      cardRarity: "Normal",
      itemType: "Armor",
      armorTypes: ["Plate"],
      translation_key: "armor.apocalypse.warworn-breastplate",
    } as ArmorItemData,
    {
      id: "veteran-cuirass",
      name: "Veteran Cuirass",
      content: "apocalypse",
      cardType: "Starting Gear",
      cardRank: null,
      cardRarity: "Normal",
      itemType: "Armor",
      armorTypes: ["Leather"],
      translation_key: "armor.apocalypse.veteran-cuirass",
    } as ArmorItemData,
    {
      id: "hunting-shortbow",
      name: "Hunting Shortbow",
      content: "apocalypse",
      cardType: "Starting Gear",
      cardRank: null,
      cardRarity: "Normal",
      itemType: "Weapon",
      weaponTypes: ["Ranged"],
      translation_key: "weapon.apocalypse.hunting-shortbow",
    } as WeaponItemData,
    {
      id: "axe-of-the-steppes",
      name: "Axe of the Steppes",
      content: "apocalypse",
      cardType: "Starting Gear",
      cardRank: null,
      cardRarity: "Normal",
      itemType: "Weapon",
      weaponTypes: ["Heavy"],
      translation_key: "weapon.apocalypse.axe-of-the-steppes",
    } as WeaponItemData,
    {
      id: "hellscarian-falchions",
      name: "Hellscarian Falchion",
      content: "apocalypse",
      cardType: "Starting Gear",
      cardRank: null,
      cardRarity: "Normal",
      itemType: "Weapon",
      weaponTypes: ["Light"],
      translation_key: "weapon.apocalypse.hellscarian-falchions",
    } as WeaponItemData,
    {
      id: "counselors-staff",
      name: "Counselor's Staff",
      content: "apocalypse",
      cardType: "Starting Gear",
      cardRank: null,
      cardRarity: "Normal",
      itemType: "Weapon",
      weaponTypes: ["Implement"],
      translation_key: "weapon.apocalypse.counselors-staff",
    } as WeaponItemData,
  ];

  find(cardId: string): ItemData | undefined {
    return _.find(this.cards, { id: cardId });
  }

  findAll(): ItemData[] {
    return this.cards;
  }

  findByType(type: ItemType, subType: ArmorType | ConsumableType | OffHandType | WeaponType | null = null): ItemData[] {
    const cards: ItemData[] = [];

    const isSubType = function (
      item: ItemData,
      st: ArmorType | ConsumableType | OffHandType | WeaponType | null
    ): boolean {
      if (st === null) {
        return true;
      }

      if (instanceOfArmorCardData(item)) {
        return (item as ArmorItemData).armorTypes.some((value) => value === st);
      }
      if (instanceOfConsumableCardData(item)) {
        return (item as ConsumableItemData).consumableType === st;
      }
      if (instanceOfOffHandCardData(item)) {
        return (item as OffHandItemData).offHandTypes.some((value) => value === st);
      }
      if (instanceOfWeaponCardData(item)) {
        return (item as WeaponItemData).weaponTypes.some((value) => value === st);
      }
      return false;
    };

    this.cards.forEach((card) => {
      const c = card as ItemData;
      if (c.itemType === type && (subType == null || isSubType(c, subType))) {
        cards.push(c);
      }
    });

    return cards;
  }
}
