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
      name: "Accuracy Ring",
      itemType: "Trinket",
      cardType: "Camp Item",
    } as ItemData,
    {
      id: "arcabalest",
      name: "Arcabalest",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Ranged", "Implement"],
    } as WeaponItemData,
    {
      id: "astral-symbol",
      name: "Astral Symbol",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Relic"],
    } as OffHandItemData,
    {
      id: "buckler",
      name: "Buckler",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Off Hand Weapon", "Shield"],
    } as OffHandItemData,
    {
      id: "chaos-staff",
      name: "Chaos Staff",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Implement"],
    } as WeaponItemData,
    {
      id: "cleavescythe",
      name: "Cleavescythe",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Heavy"],
    } as WeaponItemData,
    {
      id: "cornucopia",
      name: "Cornucopia",
      itemType: "Trinket",
      cardType: "Camp Item",
    } as ItemData,
    {
      id: "artisans-tools",
      name: "Artisan's Tools (Hero)",
      itemType: "Consumable",
      cardType: "Chest",
      consumableType: "Tools",
    } as ConsumableItemData,
    {
      id: "azure-robins-knife",
      name: "Azure Robins Knife",
      itemType: "Off Hand",
      cardType: "Adventure",
      offHandTypes: ["Off Hand Weapon", "Relic"],
    } as OffHandItemData,
    {
      id: "arcane-glove",
      name: "Arcane Glove",
      itemType: "Trinket",
      cardType: "Adventure",
    } as ItemData,
    {
      id: "battle-plate",
      name: "Battle Plate",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Plate"],
    } as ArmorItemData,
    {
      id: "black-harpoon",
      name: "Black Harpoon",
      itemType: "Trinket",
      cardType: "Adventure",
    } as ItemData,
    {
      id: "bright-crest",
      name: "Bright Crest",
      itemType: "Trinket",
      cardType: "Adventure",
    } as ItemData,
    {
      id: "captains-brooch",
      name: "Captain's Brooch",
      itemType: "Trinket",
      cardType: "Adventure",
    } as ItemData,
    {
      id: "christis-kitten",
      name: "Christi's Kitten",
      itemType: "Trinket",
      cardType: "Adventure",
    } as ItemData,
    {
      id: "combustible-grenade",
      name: "Combustible Grenade",
      itemType: "Consumable",
      cardType: "Chest",
      consumableType: "Potion",
    } as ConsumableItemData,
    {
      id: "cosmic-heart-chipped",
      name: "Cosmic Heart - Chipped",
      itemType: "Trinket",
      cardType: "Adventure",
    } as ItemData,
    {
      id: "cosmic-heart-flawless",
      name: "Cosmic Heart - Flawless",
      itemType: "Trinket",
      cardType: "Adventure",
    } as ItemData,
    {
      id: "defenders-buckler-back",
      name: "Defender's Buckler (Back)",
      itemType: "Off Hand",
      cardType: "Adventure",
      offHandTypes: ["Off Hand Weapon", "Shield", "Relic"],
    } as OffHandItemData,
    {
      id: "defenders-buckler-front",
      name: "Defender's Buckler (Front)",
      itemType: "Off Hand",
      cardType: "Adventure",
      offHandTypes: ["Off Hand Weapon", "Shield", "Relic"],
    } as OffHandItemData,
    {
      id: "dragons-breath",
      name: "Dragon's Breath",
      itemType: "Consumable",
      cardType: "Adventure",
      consumableType: "Potion",
    } as ConsumableItemData,
    {
      id: "eradrens-lamp",
      name: "Eradren's Lamp",
      itemType: "Trinket",
      cardType: "Adventure",
    } as ItemData,
    {
      id: "exquisite-mail",
      name: "Exquisite Mail",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Cloth", "Plate"],
    } as ArmorItemData,
    {
      id: "felix-felis",
      name: "Felix Felis",
      itemType: "Trinket",
      cardType: "Adventure",
    } as ItemData,
    {
      id: "fighters-ring-back",
      name: "Fighter's Ring (Back)",
      itemType: "Trinket",
      cardType: "Adventure",
    } as ItemData,
    {
      id: "fighters-ring-front",
      name: "Fighter's Ring (Front)",
      itemType: "Trinket",
      cardType: "Adventure",
    } as ItemData,
    {
      id: "grimoire",
      name: "Grimoire",
      itemType: "Trinket",
      cardType: "Camp Item",
    } as ItemData,
    {
      id: "hack-slash",
      name: "Hack-Slash",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Light", "Heavy"],
    } as WeaponItemData,
    {
      id: "heart-of-the-ocean",
      name: "Heart of the Ocean",
      itemType: "Off Hand",
      cardType: "Adventure",
      offHandTypes: ["Off Hand Weapon", "Shield", "Relic"],
    } as OffHandItemData,
    {
      id: "heavy-shield",
      name: "Heavy Shield",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Shield"],
    } as OffHandItemData,

    {
      id: "hippocampus-banner",
      name: "Hippocampus Banner",
      itemType: "Off Hand",
      cardType: "Adventure",
      offHandTypes: ["Off Hand Weapon", "Shield", "Relic"],
    } as OffHandItemData,
    {
      id: "holy-aegis",
      name: "Holy Aegis",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Relic", "Shield"],
    } as OffHandItemData,
    {
      id: "huntmasters-whistle",
      name: "Huntmaster's Whistle",
      itemType: "Trinket",
      cardType: "Adventure",
    } as ItemData,
    {
      id: "improved-mystics-robe",
      name: "Improved Mystic's Robe",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Cloth"],
    } as ArmorItemData,
    {
      id: "improved-rogues-vest",
      name: "Improved Rogue's Vest",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Leather"],
    } as ArmorItemData,
    {
      id: "improved-battle-plate",
      name: "Improved Battle Plate",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Plate"],
    } as ArmorItemData,
    {
      id: "improved-exquisite-mail",
      name: "Improved Exquisite Mail",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Cloth", "Plate"],
    } as ArmorItemData,
    {
      id: "improved-quilted-doublet",
      name: "Improved Quilted Doublet",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Cloth", "Leather"],
    } as ArmorItemData,
    {
      id: "improved-astral-symbol",
      name: "Improved Astral Symbol",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Relic"],
    } as OffHandItemData,
    {
      id: "improved-heavy-shield",
      name: "Improved Heavy Shield",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Shield"],
    } as OffHandItemData,
    {
      id: "improved-skull-piercer",
      name: "Improved Skull Piercer",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Off Hand Weapon"],
    } as OffHandItemData,
    {
      id: "improved-holy-aegis",
      name: "Improved Holy Aegis",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Relic", "Shield"],
    } as OffHandItemData,
    {
      id: "improved-buckler",
      name: "Improved Buckler",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Off Hand Weapon", "Shield"],
    } as OffHandItemData,
    {
      id: "improved-hack-slash",
      name: "Improved Hack-Slash",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Light", "Heavy"],
    } as WeaponItemData,
    {
      id: "improved-twin-blades",
      name: "Improved Twin-Blades",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Light"],
    } as WeaponItemData,
    {
      id: "improved-cleavescythe",
      name: "Improved Cleavescythe",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Heavy"],
    } as WeaponItemData,
    {
      id: "improved-chaos-staff",
      name: "Improved Chaos Staff",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Implement"],
    } as WeaponItemData,
    {
      id: "improved-war-bow",
      name: "Improved War Bow",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Ranged"],
    } as WeaponItemData,
    {
      id: "improved-arcabalest",
      name: "Improved Arcabalest",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Ranged", "Implement"],
    } as WeaponItemData,
    {
      id: "improved-accuracy-ring",
      name: "Improved Accuracy Ring",
      itemType: "Trinket",
      cardType: "Camp Item",
    } as ItemData,
    {
      id: "improved-tracker-boots",
      name: "Improved Tracker Boots",
      itemType: "Trinket",
      cardType: "Camp Item",
    } as ItemData,
    {
      id: "improved-cornucopia",
      name: "Improved Cornucopia",
      itemType: "Trinket",
      cardType: "Camp Item",
    } as ItemData,
    {
      id: "improved-grimoire",
      name: "Improved Grimoire",
      itemType: "Trinket",
      cardType: "Camp Item",
    } as ItemData,
    {
      id: "loriens-flute",
      name: "Lorien's Flute",
      itemType: "Trinket",
      cardType: "Adventure",
    } as ItemData,
    {
      id: "mind-gem",
      name: "Mind Gem",
      itemType: "Trinket",
      cardType: "Adventure",
    } as ItemData,
    {
      id: "mystics-robe",
      name: "Mystic's Robe",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Cloth"],
    } as ArmorItemData,
    {
      id: "ominous-spearhead",
      name: "Ominous Spearhead",
      itemType: "Off Hand",
      cardType: "Adventure",
      offHandTypes: ["Off Hand Weapon", "Shield", "Relic"],
    } as OffHandItemData,
    {
      id: "potion-of-haste",
      name: "Potion of Haste",
      itemType: "Consumable",
      cardType: "Chest",
      consumableType: "Potion",
    } as ConsumableItemData,
    {
      id: "potion-of-strength",
      name: "Potion of Strength",
      itemType: "Consumable",
      cardType: "Chest",
      consumableType: "Potion",
    } as ConsumableItemData,
    {
      id: "polished-helmet",
      name: "Polished Helmet",
      itemType: "Trinket",
      cardType: "Adventure",
    } as ItemData,
    {
      id: "scroll-of-beguile",
      name: "Scroll of Beguile",
      itemType: "Consumable",
      cardType: "Chest",
      consumableType: "Scroll",
    } as ConsumableItemData,
    {
      id: "scroll-of-polymorph",
      name: "Scroll of Polymorph",
      itemType: "Consumable",
      cardType: "Chest",
      consumableType: "Scroll",
    } as ConsumableItemData,
    {
      id: "scroll-of-protection",
      name: "Scroll of Protection",
      itemType: "Consumable",
      cardType: "Chest",
      consumableType: "Scroll",
    } as ConsumableItemData,
    {
      id: "skull-piercer",
      name: "Skull Piercer",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Off Hand Weapon"],
    } as OffHandItemData,

    {
      id: "token-of-friendship",
      name: "Token of Friendship",
      itemType: "Trinket",
      cardType: "Adventure",
    } as ItemData,
    {
      id: "tracker-boots",
      name: "Tracker Boots",
      itemType: "Trinket",
      cardType: "Camp Item",
    } as ItemData,
    {
      id: "trappers-toolkit",
      name: "Trapper's Toolkit",
      itemType: "Trinket",
      cardType: "Adventure",
    } as ItemData,
    {
      id: "treasure-trove",
      name: "Treasure Trove (Hero)",
      itemType: "Consumable",
      cardType: "Chest",
      consumableType: "Treasure",
    } as ConsumableItemData,
    {
      id: "twin-blades",
      name: "Twin-Blades",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Light"],
    } as WeaponItemData,
    {
      id: "quilted-doublet",
      name: "Quilted Doublet",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Cloth", "Leather"],
    } as ArmorItemData,
    {
      id: "rancor-blade",
      name: "Rancor Blade",
      itemType: "Weapon",
      cardType: "Adventure",
      weaponTypes: ["Heavy", "Light"],
    } as WeaponItemData,
    {
      id: "rogues-vest",
      name: "Rogue's Vest",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Leather"],
    } as ArmorItemData,
    {
      id: "ultimate-mystics-robe",
      name: "Ultimate Mystic's Robe",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Cloth"],
    } as ArmorItemData,
    {
      id: "ultimate-rogues-vest",
      name: "Ultimate Rogue's Vest",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Leather"],
    } as ArmorItemData,
    {
      id: "ultimate-battle-plate",
      name: "Ultimate Battle Plate",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Plate"],
    } as ArmorItemData,
    {
      id: "ultimate-exquisite-mail",
      name: "Ultimate Exquisite Mail",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Cloth", "Plate"],
    } as ArmorItemData,
    {
      id: "ultimate-quilted-doublet",
      name: "Ultimate Quilted Doublet",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Cloth", "Leather"],
    } as ArmorItemData,
    {
      id: "ultimate-astral-symbol",
      name: "Ultimate Astral Symbol",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Relic"],
    } as OffHandItemData,
    {
      id: "ultimate-heavy-shield",
      name: "Ultimate Heavy Shield",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Shield"],
    } as OffHandItemData,
    {
      id: "ultimate-skull-piercer",
      name: "Ultimate Skull Piercer",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Off Hand Weapon"],
    } as OffHandItemData,
    {
      id: "ultimate-holy-aegis",
      name: "Ultimate Holy Aegis",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Relic", "Shield"],
    } as OffHandItemData,
    {
      id: "ultimate-buckler",
      name: "Ultimate Buckler",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Off Hand Weapon", "Shield"],
    } as OffHandItemData,
    {
      id: "ultimate-hack-slash",
      name: "Ultimate Hack-Slash",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Light", "Heavy"],
    } as WeaponItemData,
    {
      id: "ultimate-twin-blades",
      name: "Ultimate Twin-Blades",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Light"],
    } as WeaponItemData,
    {
      id: "ultimate-cleavescythe",
      name: "Ultimate Cleavescythe",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Heavy"],
    } as WeaponItemData,
    {
      id: "ultimate-chaos-staff",
      name: "Ultimate Chaos Staff",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Implement"],
    } as WeaponItemData,
    {
      id: "ultimate-war-bow",
      name: "Ultimate War Bow",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Ranged"],
    } as WeaponItemData,
    {
      id: "ultimate-arcabalest",
      name: "Ultimate Arcabalest",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Ranged", "Implement"],
    } as WeaponItemData,
    {
      id: "ultimate-accuracy-ring",
      name: "Ultimate Accuracy Ring",
      itemType: "Trinket",
      cardType: "Camp Item",
    } as ItemData,
    {
      id: "ultimate-tracker-boots",
      name: "Ultimate Tracker Boots",
      itemType: "Trinket",
      cardType: "Camp Item",
    } as ItemData,
    {
      id: "ultimate-cornucopia",
      name: "Ultimate Cornucopia",
      itemType: "Trinket",
      cardType: "Camp Item",
    } as ItemData,
    {
      id: "ultimate-grimoire",
      name: "Ultimate Grimoire",
      itemType: "Trinket",
      cardType: "Camp Item",
    } as ItemData,
    {
      id: "war-bow",
      name: "War Bow",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Ranged"],
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
