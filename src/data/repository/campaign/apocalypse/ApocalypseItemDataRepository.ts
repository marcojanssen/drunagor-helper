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

export class ApocalypseItemDataRepository implements ItemDataRepository {
  private cards = [
    {
      id: "artisans-tools",
      name: "Artisan's Tools (Veteran)",
      itemType: "Consumable",
      cardType: "Chest",
      consumableType: "Tools",
    } as ConsumableItemData,
    {
      id: "axe-of-the-steppes",
      name: "Axe of the Steppes",
      itemType: "Weapon",
      cardType: "Starting Gear",
      weaponTypes: ["Heavy"],
    } as WeaponItemData,
    {
      id: "carmillas-kiss",
      name: "Carmilla's Kiss",
      itemType: "Off Hand",
      cardType: "Adventure",
      offHandTypes: ["Off Hand Weapon"],
    } as OffHandItemData,
    {
      id: "chain-of-the-lost-world",
      name: "Chain of the Lost World",
      itemType: "Trinket",
      cardType: "Adventure",
    } as ItemData,
    {
      id: "commodores-shield",
      name: "Commodore's Shield",
      itemType: "Off Hand",
      cardType: "Adventure",
      offHandTypes: ["Relic", "Shield"],
    } as OffHandItemData,
    {
      id: "condottieris-breastplate",
      name: "Connottieri's Breastplate",
      itemType: "Armor",
      cardType: "Adventure",
      armorTypes: ["Cloth", "Leather", "Plate"],
    } as ArmorItemData,
    {
      id: "counselors-staff",
      name: "Counselor's Staff",
      itemType: "Weapon",
      cardType: "Starting Gear",
      weaponTypes: ["Implement"],
    } as WeaponItemData,
    {
      id: "draconian-war-gauntlet",
      name: "Draconian War-Gauntlet",
      itemType: "Off Hand",
      cardType: "Adventure",
      offHandTypes: ["Off Hand Weapon", "Relic", "Shield"],
    } as OffHandItemData,
    {
      id: "eldritch-symbiot",
      name: "Eldritch Symbiot",
      itemType: "Trinket",
      cardType: "Adventure",
    } as ItemData,
    {
      id: "emerald-claw-gauntlet",
      name: "Emerald Claw-Gauntlet",
      itemType: "Off Hand",
      cardType: "Adventure",
      offHandTypes: ["Relic", "Shield"],
    } as OffHandItemData,
    {
      id: "empyrean-bowstaff",
      name: "Empyrean Bowstaff",
      itemType: "Weapon",
      cardType: "Adventure",
      weaponTypes: ["Implement", "Ranged"],
    } as WeaponItemData,
    {
      id: "executioners-helmet",
      name: "Executioner's Helmet",
      itemType: "Trinket",
      cardType: "Adventure",
    } as OffHandItemData,
    {
      id: "gilded-collar-death",
      name: "Gilded Collar (Death)",
      itemType: "Trinket",
      cardType: "Adventure",
    } as ItemData,
    {
      id: "gilded-collar-life",
      name: "Gilded Collar (Life)",
      itemType: "Trinket",
      cardType: "Adventure",
    } as ItemData,
    {
      id: "gil-garoths-sword",
      name: "Gil Garoth's Sword",
      itemType: "Weapon",
      cardType: "Adventure",
      weaponTypes: ["Heavy", "Light"],
    } as WeaponItemData,
    {
      id: "grayrock-signet",
      name: "Grayrock Signet",
      itemType: "Trinket",
      cardType: "Adventure",
    } as ItemData,
    {
      id: "hellscarian-falchion",
      name: "Hellscarian Falchion",
      itemType: "Weapon",
      cardType: "Starting Gear",
      weaponTypes: ["Light"],
    } as WeaponItemData,
    {
      id: "hunting-shotbow",
      name: "Hunting Shortbow",
      itemType: "Weapon",
      cardType: "Starting Gear",
      weaponTypes: ["Ranged"],
    } as WeaponItemData,
    {
      id: "improved-arbalast",
      name: "Improved Arbalast",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Ranged"],
    } as WeaponItemData,
    {
      id: "improved-arcannon",
      name: "Improved Arcannon",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Ranged", "Implement"],
    } as WeaponItemData,
    {
      id: "improved-arming-doublet",
      name: "Improved Arming Doublet",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Cloth", "Leather"],
    } as ArmorItemData,
    {
      id: "improved-astral-shard",
      name: "Improved Astral Shard",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Relic"],
    } as OffHandItemData,
    {
      id: "improved-cape-of-the-magi",
      name: "Improved Cape of the Magi",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Cloth"],
    } as ArmorItemData,
    {
      id: "improved-claymore",
      name: "Improved Claymore",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Heavy"],
    } as WeaponItemData,
    {
      id: "improved-crossbow",
      name: "Improved Crossbow",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Ranged"],
    } as WeaponItemData,
    {
      id: "improved-eldritch-mask",
      name: "Improved Eldritch Mask",
      itemType: "Trinket",
      cardType: "Camp Item",
    } as ItemData,
    {
      id: "improved-emerald-ring",
      name: "Improved Emerald Ring",
      itemType: "Trinket",
      cardType: "Camp Item",
    } as ItemData,
    {
      id: "improved-longsword",
      name: "Improved Longsword",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Heavy", "Light"],
    } as WeaponItemData,
    {
      id: "improved-lorica-armor",
      name: "Improved Lorica Armor",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Leather", "Plate"],
    } as ArmorItemData,
    {
      id: "improved-pact-blade",
      name: "Improved Pact Blade",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Off Hand Weapon", "Shield"],
    } as OffHandItemData,
    {
      id: "improved-power-gauntlet",
      name: "Improved Power Gauntlet",
      itemType: "Trinket",
      cardType: "Camp Item",
    } as ItemData,
    {
      id: "improved-rapier",
      name: "Improved Rapier",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Light"],
    } as WeaponItemData,
    {
      id: "improved-royal-plate",
      name: "Improved Royal Plate",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Plate"],
    } as ArmorItemData,
    {
      id: "improved-royal-staff",
      name: "Improved Royal Staff",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Implement"],
    } as WeaponItemData,
    {
      id: "improved-shadday-shield",
      name: "Improved Shadday Shield",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Shield"],
    } as OffHandItemData,
    {
      id: "improved-shadow-leather",
      name: "Improved Shadow Leather",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Leather"],
    } as ArmorItemData,
    {
      id: "improved-shell-opener",
      name: "Improved Shell Opener",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Off Hand Weapon"],
    } as OffHandItemData,
    {
      id: "improved-titan-stompers",
      name: "Improved Titan Stompers",
      itemType: "Trinket",
      cardType: "Camp Item",
    } as ItemData,
    {
      id: "improved-umbral-buckler",
      name: "Improved Umbral Buckler",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Off Hand Weapon", "Shield"],
    } as OffHandItemData,
    {
      id: "jeweled-necklace",
      name: "Jeweled Necklace",
      itemType: "Trinket",
      cardType: "Adventure",
    } as OffHandItemData,
    {
      id: "kraken-slayer",
      name: "Kraken Slayer",
      itemType: "Off Hand",
      cardType: "Adventure",
      offHandTypes: ["Off Hand Weapon", "Relic"],
    } as OffHandItemData,
    {
      id: "lionhearteds-sword",
      name: "Lionhearted's Sword",
      itemType: "Weapon",
      cardType: "Adventure",
      weaponTypes: ["Heavy", "Light"],
    } as WeaponItemData,
    {
      id: "masterpiece-armor",
      name: "Masterpiece Armor",
      itemType: "Armor",
      cardType: "Adventure",
      armorTypes: ["Cloth", "Leather", "Plate"],
    } as ArmorItemData,
    {
      id: "masterpiece-blade",
      name: "Masterpiece Blade",
      itemType: "Off Hand",
      cardType: "Adventure",
      offHandTypes: ["Off Hand Weapon", "Shield"],
    } as OffHandItemData,
    {
      id: "masterpiece-bow",
      name: "Masterpiece Bow",
      itemType: "Off Hand",
      cardType: "Adventure",
      offHandTypes: ["Off Hand Weapon"],
    } as OffHandItemData,
    {
      id: "masterpiece-staff",
      name: "Masterpiece Staff",
      itemType: "Off Hand",
      cardType: "Adventure",
      offHandTypes: ["Relic"],
    } as OffHandItemData,
    {
      id: "outlander-black-plate",
      name: "Outlander Black Plate",
      itemType: "Armor",
      cardType: "Adventure",
      armorTypes: ["Cloth", "Plate"],
    } as ArmorItemData,
    {
      id: "outlander-helmet",
      name: "Outlander Helmet",
      itemType: "Trinket",
      cardType: "Adventure",
    } as ItemData,
    {
      id: "outlander-shield",
      name: "Outlander Shield",
      itemType: "Off Hand",
      cardType: "Adventure",
      offHandTypes: ["Shield"],
    } as OffHandItemData,
    {
      id: "princess-bowaegis",
      name: "Princess' Bowaegis",
      itemType: "Off Hand",
      cardType: "Adventure",
      offHandTypes: ["Off Hand Weapon", "Relic", "Shield"],
    } as OffHandItemData,
    {
      id: "ragged-doll",
      name: "Ragged Doll",
      itemType: "Trinket",
      cardType: "Adventure",
    } as ItemData,
    {
      id: "rainbow-mask",
      name: "Rainbow Mask",
      itemType: "Trinket",
      cardType: "Adventure",
    } as ItemData,
    {
      id: "reality-render",
      name: "Reality Render",
      itemType: "Off Hand",
      cardType: "Adventure",
      offHandTypes: ["Off Hand Weapon", "Relic"],
    } as OffHandItemData,
    {
      id: "righteous-torch",
      name: "Righteous Torch",
      itemType: "Trinket",
      cardType: "Adventure",
    } as ItemData,
    {
      id: "rod-of-the-prince",
      name: "Rod of the Prince",
      itemType: "Off Hand",
      cardType: "Adventure",
      offHandTypes: ["Off Hand Weapon", "Relic"],
    } as OffHandItemData,
    {
      id: "sapphire-pendant",
      name: "Sapphire Pendant",
      itemType: "Trinket",
      cardType: "Adventure",
    } as ItemData,
    {
      id: "scholars-robe",
      name: "Scholar's Robe",
      itemType: "Armor",
      cardType: "Starting Gear",
      armorTypes: ["Cloth"],
    } as ArmorItemData,
    {
      id: "scroll-of-charm",
      name: "Scroll of Charm",
      itemType: "Consumable",
      cardType: "Chest",
      consumableType: "Scroll",
    } as ConsumableItemData,
    {
      id: "scroll-of-the-copy-cat",
      name: "Scroll of the Copy Cat",
      itemType: "Consumable",
      cardType: "Chest",
      consumableType: "Scroll",
    } as ConsumableItemData,
    {
      id: "scroll-of-translocation",
      name: "Scroll of Translocation",
      itemType: "Consumable",
      cardType: "Chest",
      consumableType: "Scroll",
    } as ConsumableItemData,
    {
      id: "sprout-of-darkness",
      name: "Sprout of Darkness",
      itemType: "Trinket",
      cardType: "Adventure",
    } as ItemData,
    {
      id: "standard-arbalast",
      name: "Standard Arbalast",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Ranged"],
    } as WeaponItemData,
    {
      id: "standard-arcannon",
      name: "Standard Arcannon",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Ranged", "Implement"],
    } as WeaponItemData,
    {
      id: "standard-arming-doublet",
      name: "Standard Arming Doublet",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Cloth", "Leather"],
    } as ArmorItemData,
    {
      id: "standard-astral-shard",
      name: "Standard Astral Shard",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Relic"],
    } as OffHandItemData,
    {
      id: "standard-cape-of-the-magi",
      name: "Standard Cape of the Magi",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Cloth"],
    } as ArmorItemData,
    {
      id: "standard-claymore",
      name: "Standard Claymore",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Heavy"],
    } as WeaponItemData,
    {
      id: "standard-crossbow",
      name: "Standard Crossbow",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Ranged"],
    } as WeaponItemData,
    {
      id: "standard-eldritch-mask",
      name: "Standard Eldritch Mask",
      itemType: "Trinket",
      cardType: "Camp Item",
    } as ItemData,
    {
      id: "standard-emerald-ring",
      name: "Standard Emerald Ring",
      itemType: "Trinket",
      cardType: "Camp Item",
    } as ItemData,
    {
      id: "standard-longsword",
      name: "Standard Longsword",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Heavy", "Light"],
    } as WeaponItemData,
    {
      id: "standard-lorica-armor",
      name: "Standard Lorica Armor",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Leather", "Plate"],
    } as ArmorItemData,
    {
      id: "standard-pact-blade",
      name: "Standard Pact Blade",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Off Hand Weapon", "Shield"],
    } as OffHandItemData,
    {
      id: "standard-power-gauntlet",
      name: "Standard Power Gauntlet",
      itemType: "Trinket",
      cardType: "Camp Item",
    } as ItemData,
    {
      id: "standard-rapier",
      name: "Standard Rapier",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Light"],
    } as WeaponItemData,
    {
      id: "standard-royal-plate",
      name: "Standard Royal Plate",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Plate"],
    } as ArmorItemData,
    {
      id: "standard-royal-staff",
      name: "Standard Royal Staff",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Implement"],
    } as WeaponItemData,
    {
      id: "standard-shadday-shield",
      name: "Standard Shadday Shield",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Shield"],
    } as OffHandItemData,
    {
      id: "standard-shadow-leather",
      name: "Standard Shadow Leather",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Leather"],
    } as ArmorItemData,
    {
      id: "standard-shell-opener",
      name: "Standard Shell Opener",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Off Hand Weapon"],
    } as OffHandItemData,
    {
      id: "standard-titan-stompers",
      name: "Standard Titan Stompers",
      itemType: "Trinket",
      cardType: "Camp Item",
    } as ItemData,
    {
      id: "standard-umbral-buckler",
      name: "Standard Umbral Buckler",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Off Hand Weapon", "Shield"],
    } as OffHandItemData,
    {
      id: "treasure-trove",
      name: "Treasure trove (Veteran)",
      itemType: "Consumable",
      cardType: "Chest",
      consumableType: "Treasure",
    } as ConsumableItemData,
    {
      id: "sword-of-kane",
      name: "Sword of Kane",
      itemType: "Weapon",
      cardType: "Adventure",
      weaponTypes: ["Heavy", "Light"],
    } as WeaponItemData,
    {
      id: "ultimate-arbalast",
      name: "Ultimate Arbalast",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Ranged"],
    } as WeaponItemData,
    {
      id: "ultimate-arcannon",
      name: "Ultimate Arcannon",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Ranged", "Implement"],
    } as WeaponItemData,
    {
      id: "ultimate-arming-doublet",
      name: "Ultimate Arming Doublet",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Cloth", "Leather"],
    } as ArmorItemData,
    {
      id: "ultimate-astral-shard",
      name: "Ultimate Astral Shard",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Relic"],
    } as OffHandItemData,
    {
      id: "ultimate-cape-of-the-magi",
      name: "Ultimate Cape of the Magi",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Cloth"],
    } as ArmorItemData,
    {
      id: "ultimate-claymore",
      name: "Ultimate Claymore",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Heavy"],
    } as WeaponItemData,
    {
      id: "ultimate-crossbow",
      name: "Ultimate Crossbow",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Ranged"],
    } as WeaponItemData,
    {
      id: "ultimate-eldritch-mask",
      name: "Ultimate Eldritch Mask",
      itemType: "Trinket",
      cardType: "Camp Item",
    } as ItemData,
    {
      id: "ultimate-emerald-ring",
      name: "Ultimate Emerald Ring",
      itemType: "Trinket",
      cardType: "Camp Item",
    } as ItemData,
    {
      id: "ultimate-longsword",
      name: "Ultimate Longsword",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Heavy", "Light"],
    } as WeaponItemData,
    {
      id: "ultimate-lorica-armor",
      name: "Ultimate Lorica Armor",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Leather", "Plate"],
    } as ArmorItemData,
    {
      id: "ultimate-pact-blade",
      name: "Ultimate Pact Blade",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Off Hand Weapon", "Shield"],
    } as OffHandItemData,
    {
      id: "ultimate-power-gauntlet",
      name: "Ultimate Power Gauntlet",
      itemType: "Trinket",
      cardType: "Camp Item",
    } as ItemData,
    {
      id: "ultimate-rapier",
      name: "Ultimate Rapier",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Light"],
    } as WeaponItemData,
    {
      id: "ultimate-royal-plate",
      name: "Ultimate Royal Plate",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Plate"],
    } as ArmorItemData,
    {
      id: "ultimate-royal-staff",
      name: "Ultimate Royal Staff",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Implement"],
    } as WeaponItemData,
    {
      id: "ultimate-shadday-shield",
      name: "Ultimate Shadday Shield",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Shield"],
    } as OffHandItemData,
    {
      id: "ultimate-shadow-leather",
      name: "Ultimate Shadow Leather",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Leather"],
    } as ArmorItemData,
    {
      id: "ultimate-shell-opener",
      name: "Ultimate Shell Opener",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Off Hand Weapon"],
    } as OffHandItemData,
    {
      id: "ultimate-titan-stompers",
      name: "Ultimate Titan Stompers",
      itemType: "Trinket",
      cardType: "Camp Item",
    } as ItemData,
    {
      id: "ultimate-umbral-buckler",
      name: "Ultimate Umbral Buckler",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Off Hand Weapon", "Shield"],
    } as OffHandItemData,
    {
      id: "veteran-cuirass",
      name: "Veteran Cuirass",
      itemType: "Armor",
      cardType: "Starting Gear",
      armorTypes: ["Leather"],
    } as ArmorItemData,
    {
      id: "vow-keeper",
      name: "Vow Keeper",
      itemType: "Trinket",
      cardType: "Adventure",
    } as ItemData,
    {
      id: "warworn-breastplate",
      name: "Warworn Breastplate",
      itemType: "Armor",
      cardType: "Starting Gear",
      armorTypes: ["Plate"],
    } as ArmorItemData,
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
