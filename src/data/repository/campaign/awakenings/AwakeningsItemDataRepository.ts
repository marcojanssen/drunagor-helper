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

export class AwakeningsItemDataRepository implements ItemDataRepository {
  private cards = [
    {
      id: "accuracy-ring",
      itemType: "Trinket",
      cardType: "Camp Item",
      translation_key: "trinket.awakenings.accuracy-ring",
    } as ItemData,
    {
      id: "arcabalest",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Ranged", "Implement"],
      translation_key: "weapon.awakenings.arcabalest",
    } as WeaponItemData,
    {
      id: "astral-symbol",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Relic"],
      translation_key: "offhand.awakenings.astral-symbol",
    } as OffHandItemData,
    {
      id: "buckler",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Off Hand Weapon", "Shield"],
      translation_key: "offhand.awakenings.buckler",
    } as OffHandItemData,
    {
      id: "chaos-staff",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Implement"],
      translation_key: "weapon.awakenings.chaos-staff",
    } as WeaponItemData,
    {
      id: "cleavescythe",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Heavy"],
      translation_key: "weapon.awakenings.cleavescythe",
    } as WeaponItemData,
    {
      id: "cornucopia",
      itemType: "Trinket",
      cardType: "Camp Item",
      translation_key: "trinket.awakenings.cornucopia",
    } as ItemData,
    {
      id: "artisans-tools",
      itemType: "Consumable",
      cardType: "Chest",
      consumableType: "Tools",
      translation_key: "consumable.awakenings.artisans-tools",
    } as ConsumableItemData,
    {
      id: "azure-robins-knife",
      itemType: "Off Hand",
      cardType: "Adventure",
      offHandTypes: ["Off Hand Weapon", "Relic"],
      translation_key: "offhand.awakenings.azure-robins-knife",
    } as OffHandItemData,
    {
      id: "arcane-glove",
      itemType: "Trinket",
      cardType: "Adventure",
      translation_key: "trinket.awakenings.arcane-glove",
    } as ItemData,
    {
      id: "battle-plate",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Plate"],
      translation_key: "armor.awakenings.battle-plate",
    } as ArmorItemData,
    {
      id: "black-harpoon",
      itemType: "Trinket",
      cardType: "Adventure",
      translation_key: "trinket.awakenings.black-harpoon",
    } as ItemData,
    {
      id: "bright-crest",
      itemType: "Trinket",
      cardType: "Adventure",
      translation_key: "trinket.awakenings.bright-crest",
    } as ItemData,
    {
      id: "captains-brooch",
      itemType: "Trinket",
      cardType: "Adventure",
      translation_key: "trinket.awakenings.captains-brooch",
    } as ItemData,
    {
      id: "christis-kitten",
      itemType: "Trinket",
      cardType: "Adventure",
      translation_key: "trinket.awakenings.christis-kitten",
    } as ItemData,
    {
      id: "combustible-grenade",
      itemType: "Consumable",
      cardType: "Chest",
      consumableType: "Potion",
      translation_key: "consumable.awakenings.combustible-grenade",
    } as ConsumableItemData,
    {
      id: "cosmic-heart-chipped",
      itemType: "Trinket",
      cardType: "Adventure",
      translation_key: "trinket.awakenings.cosmic-heart-chipped",
    } as ItemData,
    {
      id: "cosmic-heart-flawless",
      itemType: "Trinket",
      cardType: "Adventure",
      translation_key: "trinket.awakenings.cosmic-heart-flawless",
    } as ItemData,
    {
      id: "defenders-buckler-back",
      itemType: "Off Hand",
      cardType: "Adventure",
      offHandTypes: ["Off Hand Weapon", "Shield", "Relic"],
      translation_key: "offhand.awakenings.defenders-buckler-back",
    } as OffHandItemData,
    {
      id: "defenders-buckler-front",
      itemType: "Off Hand",
      cardType: "Adventure",
      offHandTypes: ["Off Hand Weapon", "Shield", "Relic"],
      translation_key: "offhand.awakenings.defenders-buckler-front",
    } as OffHandItemData,
    {
      id: "dragons-breath",
      itemType: "Consumable",
      cardType: "Adventure",
      consumableType: "Potion",
      translation_key: "consumable.awakenings.dragons-breath",
    } as ConsumableItemData,
    {
      id: "eradrens-lamp",
      itemType: "Trinket",
      cardType: "Adventure",
      translation_key: "trinket.awakenings.eradrens-lamp",
    } as ItemData,
    {
      id: "exquisite-mail",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Cloth", "Plate"],
      translation_key: "armor.awakenings.exquisite-mail",
    } as ArmorItemData,
    {
      id: "felix-felis",
      itemType: "Trinket",
      cardType: "Adventure",
      translation_key: "trinket.awakenings.felix-felis",
    } as ItemData,
    {
      id: "fighters-ring-back",
      itemType: "Trinket",
      cardType: "Adventure",
      translation_key: "trinket.awakenings.fighters-ring-back",
    } as ItemData,
    {
      id: "fighters-ring-front",
      itemType: "Trinket",
      cardType: "Adventure",
      translation_key: "trinket.awakenings.fighters-ring-front",
    } as ItemData,
    {
      id: "grimoire",
      itemType: "Trinket",
      cardType: "Camp Item",
      translation_key: "trinket.awakenings.grimoire",
    } as ItemData,
    {
      id: "hack-slash",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Light", "Heavy"],
      translation_key: "weapon.awakenings.hack-slash",
    } as WeaponItemData,
    {
      id: "heart-of-the-ocean",
      itemType: "Off Hand",
      cardType: "Adventure",
      offHandTypes: ["Off Hand Weapon", "Shield", "Relic"],
      translation_key: "offhand.awakenings.heart-of-the-ocean",
    } as OffHandItemData,
    {
      id: "heavy-shield",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Shield"],
      translation_key: "offhand.awakenings.heavy-shield",
    } as OffHandItemData,

    {
      id: "hippocampus-banner",
      itemType: "Off Hand",
      cardType: "Adventure",
      offHandTypes: ["Off Hand Weapon", "Shield", "Relic"],
      translation_key: "offhand.awakenings.hippocampus-banner",
    } as OffHandItemData,
    {
      id: "holy-aegis",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Relic", "Shield"],
      translation_key: "offhand.awakenings.holy-aegis",
    } as OffHandItemData,
    {
      id: "huntmasters-whistle",
      itemType: "Trinket",
      cardType: "Adventure",
      translation_key: "trinket.awakenings.huntmasters-whistle",
    } as ItemData,
    {
      id: "improved-mystics-robe",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Cloth"],
      translation_key: "armor.awakenings.improved-mystics-robe",
    } as ArmorItemData,
    {
      id: "improved-rogues-vest",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Leather"],
      translation_key: "armor.awakenings.improved-rogues-vest",
    } as ArmorItemData,
    {
      id: "improved-battle-plate",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Plate"],
      translation_key: "armor.awakenings.improved-battle-plate",
    } as ArmorItemData,
    {
      id: "improved-exquisite-mail",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Cloth", "Plate"],
      translation_key: "armor.awakenings.improved-exquisite-mail",
    } as ArmorItemData,
    {
      id: "improved-quilted-doublet",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Cloth", "Leather"],
      translation_key: "armor.awakenings.improved-quilted-doublet",
    } as ArmorItemData,
    {
      id: "improved-astral-symbol",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Relic"],
      translation_key: "offhand.awakenings.improved-astral-symbol",
    } as OffHandItemData,
    {
      id: "improved-heavy-shield",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Shield"],
      translation_key: "offhand.awakenings.improved-heavy-shield",
    } as OffHandItemData,
    {
      id: "improved-skull-piercer",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Off Hand Weapon"],
      translation_key: "offhand.awakenings.improved-skull-piercer",
    } as OffHandItemData,
    {
      id: "improved-holy-aegis",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Relic", "Shield"],
      translation_key: "offhand.awakenings.improved-holy-aegis",
    } as OffHandItemData,
    {
      id: "improved-buckler",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Off Hand Weapon", "Shield"],
      translation_key: "offhand.awakenings.improved-buckler",
    } as OffHandItemData,
    {
      id: "improved-hack-slash",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Light", "Heavy"],
      translation_key: "weapon.awakenings.improved-hack-slash",
    } as WeaponItemData,
    {
      id: "improved-twin-blades",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Light"],
      translation_key: "weapon.awakenings.improved-twin-blades",
    } as WeaponItemData,
    {
      id: "improved-cleavescythe",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Heavy"],
      translation_key: "weapon.awakenings.improved-cleavescythe",
    } as WeaponItemData,
    {
      id: "improved-chaos-staff",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Implement"],
      translation_key: "weapon.awakenings.improved-chaos-staff",
    } as WeaponItemData,
    {
      id: "improved-war-bow",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Ranged"],
      translation_key: "weapon.awakenings.improved-war-bow",
    } as WeaponItemData,
    {
      id: "improved-arcabalest",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Ranged", "Implement"],
      translation_key: "weapon.awakenings.improved-arcabalest",
    } as WeaponItemData,
    {
      id: "improved-accuracy-ring",
      itemType: "Trinket",
      cardType: "Camp Item",
      translation_key: "trinket.awakenings.improved-accuracy-ring",
    } as ItemData,
    {
      id: "improved-tracker-boots",
      itemType: "Trinket",
      cardType: "Camp Item",
      translation_key: "trinket.awakenings.improved-tracker-boots",
    } as ItemData,
    {
      id: "improved-cornucopia",
      itemType: "Trinket",
      cardType: "Camp Item",
      translation_key: "trinket.awakenings.improved-cornucopia",
    } as ItemData,
    {
      id: "improved-grimoire",
      itemType: "Trinket",
      cardType: "Camp Item",
      translation_key: "trinket.awakenings.improved-grimoire",
    } as ItemData,
    {
      id: "loriens-flute",
      itemType: "Trinket",
      cardType: "Adventure",
      translation_key: "trinket.awakenings.loriens-flute",
    } as ItemData,
    {
      id: "mind-gem",
      itemType: "Trinket",
      cardType: "Adventure",
      translation_key: "trinket.awakenings.mind-gem",
    } as ItemData,
    {
      id: "mystics-robe",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Cloth"],
      translation_key: "armor.awakenings.mystics-robe",
    } as ArmorItemData,
    {
      id: "ominous-spearhead",
      itemType: "Off Hand",
      cardType: "Adventure",
      offHandTypes: ["Off Hand Weapon", "Shield", "Relic"],
      translation_key: "offhand.awakenings.ominous-spearhead",
    } as OffHandItemData,
    {
      id: "potion-of-haste",
      itemType: "Consumable",
      cardType: "Chest",
      consumableType: "Potion",
      translation_key: "consumable.awakenings.potion-of-haste",
    } as ConsumableItemData,
    {
      id: "potion-of-strength",
      itemType: "Consumable",
      cardType: "Chest",
      consumableType: "Potion",
      translation_key: "consumable.awakenings.potion-of-strength",
    } as ConsumableItemData,
    {
      id: "polished-helmet",
      itemType: "Trinket",
      cardType: "Adventure",
      translation_key: "trinket.awakenings.polished-helmet",
    } as ItemData,
    {
      id: "scroll-of-beguile",
      itemType: "Consumable",
      cardType: "Chest",
      consumableType: "Scroll",
      translation_key: "consumable.awakenings.scroll-of-beguile",
    } as ConsumableItemData,
    {
      id: "scroll-of-polymorph",
      itemType: "Consumable",
      cardType: "Chest",
      consumableType: "Scroll",
      translation_key: "consumable.awakenings.scroll-of-polymorph",
    } as ConsumableItemData,
    {
      id: "scroll-of-protection",
      itemType: "Consumable",
      cardType: "Chest",
      consumableType: "Scroll",
      translation_key: "consumable.awakenings.scroll-of-protection",
    } as ConsumableItemData,
    {
      id: "skull-piercer",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Off Hand Weapon"],
      translation_key: "offhand.awakenings.skull-piercer",
    } as OffHandItemData,

    {
      id: "token-of-friendship",
      itemType: "Trinket",
      cardType: "Adventure",
      translation_key: "trinket.awakenings.token-of-friendship",
    } as ItemData,
    {
      id: "tracker-boots",
      itemType: "Trinket",
      cardType: "Camp Item",
      translation_key: "trinket.awakenings.tracker-boots",
    } as ItemData,
    {
      id: "trappers-toolkit",
      itemType: "Trinket",
      cardType: "Adventure",
      translation_key: "trinket.awakenings.trappers-toolkit",
    } as ItemData,
    {
      id: "treasure-trove",
      itemType: "Consumable",
      cardType: "Chest",
      consumableType: "Treasure",
      translation_key: "consumable.awakenings.treasure-trove",
    } as ConsumableItemData,
    {
      id: "twin-blades",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Light"],
      translation_key: "weapon.awakenings.twin-blades",
    } as WeaponItemData,
    {
      id: "quilted-doublet",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Cloth", "Leather"],
      translation_key: "armor.awakenings.quilted-doublet",
    } as ArmorItemData,
    {
      id: "rancor-blade",
      itemType: "Weapon",
      cardType: "Adventure",
      weaponTypes: ["Heavy", "Light"],
      translation_key: "weapon.awakenings.rancor-blade",
    } as WeaponItemData,
    {
      id: "rogues-vest",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Leather"],
      translation_key: "armor.awakenings.rogues-vest",
    } as ArmorItemData,
    {
      id: "ultimate-mystics-robe",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Cloth"],
      translation_key: "armor.awakenings.ultimate-mystics-robe",
    } as ArmorItemData,
    {
      id: "ultimate-rogues-vest",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Leather"],
      translation_key: "armor.awakenings.ultimate-rogues-vest",
    } as ArmorItemData,
    {
      id: "ultimate-battle-plate",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Plate"],
      translation_key: "armor.awakenings.ultimate-battle-plate",
    } as ArmorItemData,
    {
      id: "ultimate-exquisite-mail",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Cloth", "Plate"],
      translation_key: "armor.awakenings.ultimate-exquisite-mail",
    } as ArmorItemData,
    {
      id: "ultimate-quilted-doublet",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Cloth", "Leather"],
      translation_key: "armor.awakenings.ultimate-quilted-doublet",
    } as ArmorItemData,
    {
      id: "ultimate-astral-symbol",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Relic"],
      translation_key: "offhand.awakenings.ultimate-astral-symbol",
    } as OffHandItemData,
    {
      id: "ultimate-heavy-shield",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Shield"],
      translation_key: "offhand.awakenings.ultimate-heavy-shield",
    } as OffHandItemData,
    {
      id: "ultimate-skull-piercer",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Off Hand Weapon"],
      translation_key: "offhand.awakenings.ultimate-skull-piercer",
    } as OffHandItemData,
    {
      id: "ultimate-holy-aegis",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Relic", "Shield"],
      translation_key: "offhand.awakenings.ultimate-holy-aegis",
    } as OffHandItemData,
    {
      id: "ultimate-buckler",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Off Hand Weapon", "Shield"],
      translation_key: "offhand.awakenings.ultimate-buckler",
    } as OffHandItemData,
    {
      id: "ultimate-hack-slash",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Light", "Heavy"],
      translation_key: "weapon.awakenings.ultimate-hack-slash",
    } as WeaponItemData,
    {
      id: "ultimate-twin-blades",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Light"],
      translation_key: "weapon.awakenings.ultimate-twin-blades",
    } as WeaponItemData,
    {
      id: "ultimate-cleavescythe",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Heavy"],
      translation_key: "weapon.awakenings.ultimate-cleavescythe",
    } as WeaponItemData,
    {
      id: "ultimate-chaos-staff",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Implement"],
      translation_key: "weapon.awakenings.ultimate-chaos-staff",
    } as WeaponItemData,
    {
      id: "ultimate-war-bow",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Ranged"],
      translation_key: "weapon.awakenings.ultimate-war-bow",
    } as WeaponItemData,
    {
      id: "ultimate-arcabalest",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Ranged", "Implement"],
      translation_key: "weapon.awakenings.ultimate-arcabalest",
    } as WeaponItemData,
    {
      id: "ultimate-accuracy-ring",
      itemType: "Trinket",
      cardType: "Camp Item",
      translation_key: "trinket.awakenings.ultimate-accuracy-ring",
    } as ItemData,
    {
      id: "ultimate-tracker-boots",
      itemType: "Trinket",
      cardType: "Camp Item",
      translation_key: "trinket.awakenings.ultimate-tracker-boots",
    } as ItemData,
    {
      id: "ultimate-cornucopia",
      itemType: "Trinket",
      cardType: "Camp Item",
      translation_key: "trinket.awakenings.ultimate-cornucopia",
    } as ItemData,
    {
      id: "ultimate-grimoire",
      itemType: "Trinket",
      cardType: "Camp Item",
      translation_key: "trinket.awakenings.ultimate-grimoire",
    } as ItemData,
    {
      id: "war-bow",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Ranged"],
      translation_key: "weapon.awakenings.war-bow",
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
