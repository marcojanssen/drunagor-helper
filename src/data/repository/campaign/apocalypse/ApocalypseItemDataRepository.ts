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
      itemType: "Consumable",
      cardType: "Chest",
      consumableType: "Tools",
      translation_key: "consumable.apocalypse.artisans-tools",
    } as ConsumableItemData,
    {
      id: "axe-of-the-steppes",
      itemType: "Weapon",
      cardType: "Starting Gear",
      weaponTypes: ["Heavy"],
      translation_key: "weapon.apocalypse.axe-of-the-steppes",
    } as WeaponItemData,
    {
      id: "carmillas-kiss",
      itemType: "Off Hand",
      cardType: "Adventure",
      offHandTypes: ["Off Hand Weapon"],
      translation_key: "offhand.apocalypse.carmillas-kiss",
    } as OffHandItemData,
    {
      id: "chain-of-the-lost-world",
      itemType: "Trinket",
      cardType: "Adventure",
      translation_key: "trinket.apocalypse.chain-of-the-lost-world",
    } as ItemData,
    {
      id: "commodores-shield",
      itemType: "Off Hand",
      cardType: "Adventure",
      offHandTypes: ["Relic", "Shield"],
      translation_key: "offhand.apocalypse.commodores-shield",
    } as OffHandItemData,
    {
      id: "condottieris-breastplate",
      itemType: "Armor",
      cardType: "Adventure",
      armorTypes: ["Cloth", "Leather", "Plate"],
      translation_key: "armor.apocalypse.condottieris-breastplate",
    } as ArmorItemData,
    {
      id: "counselors-staff",
      itemType: "Weapon",
      cardType: "Starting Gear",
      weaponTypes: ["Implement"],
      translation_key: "weapon.apocalypse.counselors-staff",
    } as WeaponItemData,
    {
      id: "draconian-war-gauntlet",
      itemType: "Off Hand",
      cardType: "Adventure",
      offHandTypes: ["Off Hand Weapon", "Relic", "Shield"],
      translation_key: "offhand.apocalypse.draconian-war-gauntlet",
    } as OffHandItemData,
    {
      id: "eldritch-symbiot",
      itemType: "Trinket",
      cardType: "Adventure",
      translation_key: "trinket.apocalypse.eldritch-symbiot",
    } as ItemData,
    {
      id: "emerald-claw-gauntlet",
      itemType: "Off Hand",
      cardType: "Adventure",
      offHandTypes: ["Relic", "Shield"],
      translation_key: "offhand.apocalypse.emerald-claw-gauntlet",
    } as OffHandItemData,
    {
      id: "empyrean-bowstaff",
      itemType: "Weapon",
      cardType: "Adventure",
      weaponTypes: ["Implement", "Ranged"],
      translation_key: "weapon.apocalypse.empyrean-bowstaff",
    } as WeaponItemData,
    {
      id: "executioners-helmet",
      itemType: "Trinket",
      cardType: "Adventure",
      translation_key: "trinket.apocalypse.executioners-helmet",
    } as OffHandItemData,
    {
      id: "gilded-collar-death",
      itemType: "Trinket",
      cardType: "Adventure",
      translation_key: "trinket.apocalypse.gilded-collar-death",
    } as ItemData,
    {
      id: "gilded-collar-life",
      itemType: "Trinket",
      cardType: "Adventure",
      translation_key: "trinket.apocalypse.gilded-collar-life",
    } as ItemData,
    {
      id: "gil-garoths-sword",
      itemType: "Weapon",
      cardType: "Adventure",
      weaponTypes: ["Heavy", "Light"],
      translation_key: "weapon.apocalypse.gil-garoths-sword",
    } as WeaponItemData,
    {
      id: "grayrock-signet",
      itemType: "Trinket",
      cardType: "Adventure",
      translation_key: "trinket.apocalypse.grayrock-signet",
    } as ItemData,
    {
      id: "hellscarian-falchion",
      itemType: "Weapon",
      cardType: "Starting Gear",
      weaponTypes: ["Light"],
      translation_key: "weapon.apocalypse.hellscarian-falchion",
    } as WeaponItemData,
    {
      id: "hunting-shotbow",
      itemType: "Weapon",
      cardType: "Starting Gear",
      weaponTypes: ["Ranged"],
      translation_key: "weapon.apocalypse.hunting-shotbow",
    } as WeaponItemData,
    {
      id: "improved-arbalast",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Ranged"],
      translation_key: "weapon.apocalypse.improved-arbalast",
    } as WeaponItemData,
    {
      id: "improved-arcannon",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Ranged", "Implement"],
      translation_key: "weapon.apocalypse.improved-arcannon",
    } as WeaponItemData,
    {
      id: "improved-arming-doublet",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Cloth", "Leather"],
      translation_key: "armor.apocalypse.improved-arming-doublet",
    } as ArmorItemData,
    {
      id: "improved-astral-shard",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Relic"],
      translation_key: "offhand.apocalypse.improved-astral-shard",
    } as OffHandItemData,
    {
      id: "improved-cape-of-the-magi",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Cloth"],
      translation_key: "armor.apocalypse.improved-cape-of-the-magi",
    } as ArmorItemData,
    {
      id: "improved-claymore",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Heavy"],
      translation_key: "weapon.apocalypse.improved-claymore",
    } as WeaponItemData,
    {
      id: "improved-crossbow",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Ranged"],
      translation_key: "weapon.apocalypse.improved-crossbow",
    } as WeaponItemData,
    {
      id: "improved-eldritch-mask",
      itemType: "Trinket",
      cardType: "Camp Item",
      translation_key: "trinket.apocalypse.improved-eldritch-mask",
    } as ItemData,
    {
      id: "improved-emerald-ring",
      itemType: "Trinket",
      cardType: "Camp Item",
      translation_key: "trinket.apocalypse.improved-emerald-ring",
    } as ItemData,
    {
      id: "improved-longsword",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Heavy", "Light"],
      translation_key: "weapon.apocalypse.improved-longsword",
    } as WeaponItemData,
    {
      id: "improved-lorica-armor",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Leather", "Plate"],
      translation_key: "armor.apocalypse.improved-lorica-armor",
    } as ArmorItemData,
    {
      id: "improved-pact-blade",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Off Hand Weapon", "Shield"],
      translation_key: "offhand.apocalypse.improved-pact-blade",
    } as OffHandItemData,
    {
      id: "improved-power-gauntlet",
      itemType: "Trinket",
      cardType: "Camp Item",
      translation_key: "trinket.apocalypse.improved-power-gauntlet",
    } as ItemData,
    {
      id: "improved-rapier",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Light"],
      translation_key: "weapon.apocalypse.improved-rapier",
    } as WeaponItemData,
    {
      id: "improved-royal-plate",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Plate"],
      translation_key: "armor.apocalypse.improved-royal-plate",
    } as ArmorItemData,
    {
      id: "improved-royal-staff",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Implement"],
      translation_key: "weapon.apocalypse.improved-royal-staff",
    } as WeaponItemData,
    {
      id: "improved-shadday-shield",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Shield"],
      translation_key: "offhand.apocalypse.improved-shadday-shield",
    } as OffHandItemData,
    {
      id: "improved-shadow-leather",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Leather"],
      translation_key: "armor.apocalypse.improved-shadow-leather",
    } as ArmorItemData,
    {
      id: "improved-shell-opener",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Off Hand Weapon"],
      translation_key: "offhand.apocalypse.improved-shell-opener",
    } as OffHandItemData,
    {
      id: "improved-titan-stompers",
      itemType: "Trinket",
      cardType: "Camp Item",
      translation_key: "trinket.apocalypse.improved-titan-stompers",
    } as ItemData,
    {
      id: "improved-umbral-buckler",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Off Hand Weapon", "Shield"],
      translation_key: "offhand.apocalypse.improved-umbral-buckler",
    } as OffHandItemData,
    {
      id: "jeweled-necklace",
      itemType: "Trinket",
      cardType: "Adventure",
      translation_key: "trinket.apocalypse.jeweled-necklace",
    } as OffHandItemData,
    {
      id: "kraken-slayer",
      itemType: "Off Hand",
      cardType: "Adventure",
      offHandTypes: ["Off Hand Weapon", "Relic"],
      translation_key: "offhand.apocalypse.kraken-slayer",
    } as OffHandItemData,
    {
      id: "lionhearteds-sword",
      itemType: "Weapon",
      cardType: "Adventure",
      weaponTypes: ["Heavy", "Light"],
      translation_key: "weapon.apocalypse.lionhearteds-sword",
    } as WeaponItemData,
    {
      id: "masterpiece-armor",
      itemType: "Armor",
      cardType: "Adventure",
      armorTypes: ["Cloth", "Leather", "Plate"],
      translation_key: "armor.apocalypse.masterpiece-armor",
    } as ArmorItemData,
    {
      id: "masterpiece-blade",
      itemType: "Off Hand",
      cardType: "Adventure",
      offHandTypes: ["Off Hand Weapon", "Shield"],
      translation_key: "offhand.apocalypse.masterpiece-blade",
    } as OffHandItemData,
    {
      id: "masterpiece-bow",
      itemType: "Off Hand",
      cardType: "Adventure",
      offHandTypes: ["Off Hand Weapon"],
      translation_key: "offhand.apocalypse.masterpiece-bow",
    } as OffHandItemData,
    {
      id: "masterpiece-staff",
      itemType: "Off Hand",
      cardType: "Adventure",
      offHandTypes: ["Relic"],
      translation_key: "offhand.apocalypse.masterpiece-staff",
    } as OffHandItemData,
    {
      id: "outlander-black-plate",
      itemType: "Armor",
      cardType: "Adventure",
      armorTypes: ["Cloth", "Plate"],
      translation_key: "armor.apocalypse.outlander-black-plate",
    } as ArmorItemData,
    {
      id: "outlander-helmet",
      itemType: "Trinket",
      cardType: "Adventure",
      translation_key: "trinket.apocalypse.outlander-helmet",
    } as ItemData,
    {
      id: "outlander-shield",
      itemType: "Off Hand",
      cardType: "Adventure",
      offHandTypes: ["Shield"],
      translation_key: "offhand.apocalypse.outlander-shield",
    } as OffHandItemData,
    {
      id: "princess-bowaegis",
      itemType: "Off Hand",
      cardType: "Adventure",
      offHandTypes: ["Off Hand Weapon", "Relic", "Shield"],
      translation_key: "offhand.apocalypse.princess-bowaegis",
    } as OffHandItemData,
    {
      id: "ragged-doll",
      itemType: "Trinket",
      cardType: "Adventure",
      translation_key: "trinket.apocalypse.ragged-doll",
    } as ItemData,
    {
      id: "rainbow-mask",
      itemType: "Trinket",
      cardType: "Adventure",
      translation_key: "trinket.apocalypse.rainbow-mask",
    } as ItemData,
    {
      id: "reality-render",
      itemType: "Off Hand",
      cardType: "Adventure",
      offHandTypes: ["Off Hand Weapon", "Relic"],
      translation_key: "offhand.apocalypse.reality-render",
    } as OffHandItemData,
    {
      id: "righteous-torch",
      itemType: "Trinket",
      cardType: "Adventure",
      translation_key: "trinket.apocalypse.righteous-torch",
    } as ItemData,
    {
      id: "rod-of-the-prince",
      itemType: "Off Hand",
      cardType: "Adventure",
      offHandTypes: ["Off Hand Weapon", "Relic"],
      translation_key: "offhand.apocalypse.rod-of-the-prince",
    } as OffHandItemData,
    {
      id: "sapphire-pendant",
      itemType: "Trinket",
      cardType: "Adventure",
      translation_key: "trinket.apocalypse.sapphire-pendant",
    } as ItemData,
    {
      id: "scholars-robe",
      itemType: "Armor",
      cardType: "Starting Gear",
      armorTypes: ["Cloth"],
      translation_key: "armor.apocalypse.scholars-robe",
    } as ArmorItemData,
    {
      id: "scroll-of-charm",
      itemType: "Consumable",
      cardType: "Chest",
      consumableType: "Scroll",
      translation_key: "consumable.apocalypse.scroll-of-charm",
    } as ConsumableItemData,
    {
      id: "scroll-of-the-copy-cat",
      itemType: "Consumable",
      cardType: "Chest",
      consumableType: "Scroll",
      translation_key: "consumable.apocalypse.scroll-of-the-copy-cat",
    } as ConsumableItemData,
    {
      id: "scroll-of-translocation",
      itemType: "Consumable",
      cardType: "Chest",
      consumableType: "Scroll",
      translation_key: "consumable.apocalypse.scroll-of-translocation",
    } as ConsumableItemData,
    {
      id: "sprout-of-darkness",
      itemType: "Trinket",
      cardType: "Adventure",
      translation_key: "trinket.apocalypse.sprout-of-darkness",
    } as ItemData,
    {
      id: "standard-arbalast",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Ranged"],
      translation_key: "weapon.apocalypse.standard-arbalast",
    } as WeaponItemData,
    {
      id: "standard-arcannon",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Ranged", "Implement"],
      translation_key: "weapon.apocalypse.standard-arcannon",
    } as WeaponItemData,
    {
      id: "standard-arming-doublet",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Cloth", "Leather"],
      translation_key: "armor.apocalypse.standard-arming-doublet",
    } as ArmorItemData,
    {
      id: "standard-astral-shard",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Relic"],
      translation_key: "offhand.apocalypse.standard-astral-shard",
    } as OffHandItemData,
    {
      id: "standard-cape-of-the-magi",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Cloth"],
      translation_key: "armor.apocalypse.standard-cape-of-the-magi",
    } as ArmorItemData,
    {
      id: "standard-claymore",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Heavy"],
      translation_key: "weapon.apocalypse.standard-claymore",
    } as WeaponItemData,
    {
      id: "standard-crossbow",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Ranged"],
      translation_key: "weapon.apocalypse.standard-crossbow",
    } as WeaponItemData,
    {
      id: "standard-eldritch-mask",
      itemType: "Trinket",
      cardType: "Camp Item",
      translation_key: "trinket.apocalypse.standard-eldritch-mask",
    } as ItemData,
    {
      id: "standard-emerald-ring",
      itemType: "Trinket",
      cardType: "Camp Item",
      translation_key: "trinket.apocalypse.standard-emerald-ring",
    } as ItemData,
    {
      id: "standard-longsword",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Heavy", "Light"],
      translation_key: "weapon.apocalypse.standard-longsword",
    } as WeaponItemData,
    {
      id: "standard-lorica-armor",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Leather", "Plate"],
      translation_key: "armor.apocalypse.standard-lorica-armor",
    } as ArmorItemData,
    {
      id: "standard-pact-blade",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Off Hand Weapon", "Shield"],
      translation_key: "offhand.apocalypse.standard-pact-blade",
    } as OffHandItemData,
    {
      id: "standard-power-gauntlet",
      itemType: "Trinket",
      cardType: "Camp Item",
      translation_key: "trinket.apocalypse.standard-power-gauntlet",
    } as ItemData,
    {
      id: "standard-rapier",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Light"],
      translation_key: "weapon.apocalypse.standard-rapier",
    } as WeaponItemData,
    {
      id: "standard-royal-plate",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Plate"],
      translation_key: "armor.apocalypse.standard-royal-plate",
    } as ArmorItemData,
    {
      id: "standard-royal-staff",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Implement"],
      translation_key: "weapon.apocalypse.standard-royal-staff",
    } as WeaponItemData,
    {
      id: "standard-shadday-shield",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Shield"],
      translation_key: "offhand.apocalypse.standard-shadday-shield",
    } as OffHandItemData,
    {
      id: "standard-shadow-leather",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Leather"],
      translation_key: "armor.apocalypse.standard-shadow-leather",
    } as ArmorItemData,
    {
      id: "standard-shell-opener",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Off Hand Weapon"],
      translation_key: "offhand.apocalypse.standard-shell-opener",
    } as OffHandItemData,
    {
      id: "standard-titan-stompers",
      itemType: "Trinket",
      cardType: "Camp Item",
      translation_key: "trinket.apocalypse.standard-titan-stompers",
    } as ItemData,
    {
      id: "standard-umbral-buckler",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Off Hand Weapon", "Shield"],
      translation_key: "offhand.apocalypse.standard-umbral-buckler",
    } as OffHandItemData,
    {
      id: "treasure-trove",
      itemType: "Consumable",
      cardType: "Chest",
      consumableType: "Treasure",
      translation_key: "consumable.apocalypse.treasure-trove",
    } as ConsumableItemData,
    {
      id: "sword-of-kane",
      itemType: "Weapon",
      cardType: "Adventure",
      weaponTypes: ["Heavy", "Light"],
      translation_key: "weapon.apocalypse.sword-of-kane",
    } as WeaponItemData,
    {
      id: "ultimate-arbalast",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Ranged"],
      translation_key: "weapon.apocalypse.ultimate-arbalast",
    } as WeaponItemData,
    {
      id: "ultimate-arcannon",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Ranged", "Implement"],
      translation_key: "weapon.apocalypse.ultimate-arcannon",
    } as WeaponItemData,
    {
      id: "ultimate-arming-doublet",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Cloth", "Leather"],
      translation_key: "armor.apocalypse.ultimate-arming-doublet",
    } as ArmorItemData,
    {
      id: "ultimate-astral-shard",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Relic"],
      translation_key: "offhand.apocalypse.ultimate-astral-shard",
    } as OffHandItemData,
    {
      id: "ultimate-cape-of-the-magi",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Cloth"],
      translation_key: "armor.apocalypse.ultimate-cape-of-the-magi",
    } as ArmorItemData,
    {
      id: "ultimate-claymore",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Heavy"],
      translation_key: "weapon.apocalypse.ultimate-claymore",
    } as WeaponItemData,
    {
      id: "ultimate-crossbow",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Ranged"],
      translation_key: "weapon.apocalypse.ultimate-crossbow",
    } as WeaponItemData,
    {
      id: "ultimate-eldritch-mask",
      itemType: "Trinket",
      cardType: "Camp Item",
      translation_key: "trinket.apocalypse.ultimate-eldritch-mask",
    } as ItemData,
    {
      id: "ultimate-emerald-ring",
      itemType: "Trinket",
      cardType: "Camp Item",
      translation_key: "trinket.apocalypse.ultimate-emerald-ring",
    } as ItemData,
    {
      id: "ultimate-longsword",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Heavy", "Light"],
      translation_key: "weapon.apocalypse.ultimate-longsword",
    } as WeaponItemData,
    {
      id: "ultimate-lorica-armor",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Leather", "Plate"],
      translation_key: "armor.apocalypse.ultimate-lorica-armor",
    } as ArmorItemData,
    {
      id: "ultimate-pact-blade",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Off Hand Weapon", "Shield"],
      translation_key: "offhand.apocalypse.ultimate-pact-blade",
    } as OffHandItemData,
    {
      id: "ultimate-power-gauntlet",
      itemType: "Trinket",
      cardType: "Camp Item",
      translation_key: "trinket.apocalypse.ultimate-power-gauntlet",
    } as ItemData,
    {
      id: "ultimate-rapier",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Light"],
      translation_key: "weapon.apocalypse.ultimate-rapier",
    } as WeaponItemData,
    {
      id: "ultimate-royal-plate",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Plate"],
      translation_key: "armor.apocalypse.ultimate-royal-plate",
    } as ArmorItemData,
    {
      id: "ultimate-royal-staff",
      itemType: "Weapon",
      cardType: "Camp Item",
      weaponTypes: ["Implement"],
      translation_key: "weapon.apocalypse.ultimate-royal-staff",
    } as WeaponItemData,
    {
      id: "ultimate-shadday-shield",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Shield"],
      translation_key: "offhand.apocalypse.ultimate-shadday-shield",
    } as OffHandItemData,
    {
      id: "ultimate-shadow-leather",
      itemType: "Armor",
      cardType: "Camp Item",
      armorTypes: ["Leather"],
      translation_key: "armor.apocalypse.ultimate-shadow-leather",
    } as ArmorItemData,
    {
      id: "ultimate-shell-opener",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Off Hand Weapon"],
      translation_key: "offhand.apocalypse.ultimate-shell-opener",
    } as OffHandItemData,
    {
      id: "ultimate-titan-stompers",
      itemType: "Trinket",
      cardType: "Camp Item",
      translation_key: "trinket.apocalypse.ultimate-titan-stompers",
    } as ItemData,
    {
      id: "ultimate-umbral-buckler",
      itemType: "Off Hand",
      cardType: "Camp Item",
      offHandTypes: ["Off Hand Weapon", "Shield"],
      translation_key: "offhand.apocalypse.ultimate-umbral-buckler",
    } as OffHandItemData,
    {
      id: "veteran-cuirass",
      itemType: "Armor",
      cardType: "Starting Gear",
      armorTypes: ["Leather"],
      translation_key: "armor.apocalypse.veteran-cuirass",
    } as ArmorItemData,
    {
      id: "vow-keeper",
      itemType: "Trinket",
      cardType: "Adventure",
      translation_key: "trinket.apocalypse.vow-keeper",
    } as ItemData,
    {
      id: "warworn-breastplate",
      itemType: "Armor",
      cardType: "Starting Gear",
      armorTypes: ["Plate"],
      translation_key: "armor.apocalypse.warworn-breastplate",
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
