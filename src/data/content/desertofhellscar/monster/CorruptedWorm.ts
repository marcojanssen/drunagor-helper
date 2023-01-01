import AvatarUrl from "@/assets/monster/avatar/CorruptedWormAvatar.webp";
import ImageUrl from "@/assets/monster/big/CorruptedWormBig.webp";
import type { MonsterData, Rank } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class CorruptedWorm implements MonsterData {
  id = "corrupted-worm";
  name = "Corrupted Worm";
  content: ContentId = "desert-of-hellscar";
  variants: VariantId[] = ["standard", "alternate"];
  images = {
    avatar: AvatarUrl,
    big: ImageUrl,
    miniature: "",
    list: "",
  };
  color: MonsterColor = "gray";
  rank: Rank = {
    rookie: {
      standard: {
        immunities: ["knock-down", "stealth"],
        position: "top",
        rune: "green",
        attackType: "melee",
        hp: 9,
        damage: 5,
        movement: 5,
        attack: [
          { id: "shield", value: "1", color: "pink" },
          ";",
          { id: "poison", value: "1" },
          "AND",
          { id: "knock-down" },
        ],
      },
      alternate: {
        immunities: ["knock-down", "stealth"],
        position: "top",
        rune: "green",
        attackType: "melee",
        hp: 9,
        damage: 4,
        movement: 5,
        attack: [
          { id: "relentless", color: "blue" },
          ";",
          { id: "cleave", value: "2" },
          ",",
          { id: "burn", value: "1" },
          "AND",
          { id: "intimidate", value: "1" },
        ],
      },
    },
    fighter: {
      standard: {
        immunities: ["knock-down", "stealth"],
        position: "top",
        rune: "green",
        attackType: "melee",
        hp: 12,
        damage: 6,
        movement: 5,
        attack: [
          { id: "shield", value: "1", color: "pink" },
          ";",
          { id: "poison", value: "1" },
          "AND",
          { id: "knock-down" },
        ],
      },
      alternate: {
        immunities: ["knock-down", "stealth"],
        position: "top",
        rune: "green",
        attackType: "melee",
        hp: 12,
        damage: 5,
        movement: 5,
        attack: [
          { id: "relentless", color: "blue" },
          ";",
          { id: "cleave", value: "2" },
          ",",
          { id: "burn", value: "1" },
          "AND",
          { id: "intimidate", value: "1" },
        ],
      },
    },
    veteran: {
      standard: {
        immunities: ["knock-down", "stealth"],
        position: "top",
        rune: "green",
        attackType: "melee",
        hp: 15,
        damage: 7,
        movement: 6,
        attack: [
          { id: "shield", value: "2", color: "pink" },
          ";",
          { id: "poison", value: "2" },
          "AND",
          { id: "knock-down" },
        ],
      },
      alternate: {
        immunities: ["knock-down", "stealth"],
        position: "top",
        rune: "green",
        attackType: "melee",
        hp: 15,
        damage: 6,
        movement: 6,
        attack: [
          { id: "relentless", color: "blue" },
          ";",
          { id: "cleave", value: "2" },
          ",",
          { id: "burn", value: "2" },
          "AND",
          { id: "intimidate", value: "2" },
        ],
      },
    },
    champion: {
      standard: {
        immunities: ["knock-down", "stealth"],
        position: "top",
        rune: "green",
        attackType: "melee",
        hp: 18,
        damage: 8,
        movement: 6,
        attack: [
          { id: "shield", value: "2", color: "pink" },
          ";",
          { id: "poison", value: "2" },
          "AND",
          { id: "knock-down" },
        ],
      },
      alternate: {
        immunities: ["knock-down", "stealth"],
        position: "top",
        rune: "green",
        attackType: "melee",
        hp: 18,
        damage: 7,
        movement: 6,
        attack: [
          { id: "relentless", color: "blue" },
          ";",
          { id: "cleave", value: "2" },
          ",",
          { id: "burn", value: "2" },
          "AND",
          { id: "intimidate", value: "2" },
        ],
      },
    },
  };
}
