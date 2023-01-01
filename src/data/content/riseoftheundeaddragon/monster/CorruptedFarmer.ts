import AvatarUrl from "@/assets/monster/avatar/CorruptedFarmerAvatar.webp";
import ImageUrl from "@/assets/monster/big/CorruptedFarmerBig.webp";
import type { MonsterData, Rank } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class CorruptedFarmer implements MonsterData {
  id = "corrupted-farmer";
  name = "Corrupted Farmer";
  content: ContentId = "rise-of-the-undead-dragon";
  variants: VariantId[] = ["standard", "alternate"];
  images = {
    avatar: AvatarUrl,
    big: ImageUrl,
    miniature: "",
    list: "",
  };
  color: MonsterColor = "white";
  rank: Rank = {
    rookie: {
      standard: {
        immunities: ["intimidate"],
        position: "bottom",
        rune: "green",
        attackType: "melee",
        hp: 9,
        damage: 4,
        movement: 4,
        attack: [
          { id: "regeneration", value: "1", color: "pink" },
          ";",
          { id: "bleed", value: "1" },
          "AND",
          { id: "slow" },
        ],
      },
      alternate: {
        immunities: ["intimidate"],
        position: "bottom",
        rune: "green",
        attackType: "melee",
        hp: 9,
        damage: 3,
        movement: 4,
        attack: [
          { id: "shield", value: "X", color: "pink" },
          ";",
          { id: "defiant", color: "blue" },
          ";",
          { id: "cleave", value: "2" },
          ",",
          { id: "fatigue", value: "1" },
          ",",
          { id: "push", value: "1" },
        ],
      },
    },
    fighter: {
      standard: {
        immunities: ["intimidate"],
        position: "bottom",
        rune: "green",
        attackType: "melee",
        hp: 12,
        damage: 5,
        movement: 4,
        attack: [
          { id: "regeneration", value: "1", color: "pink" },
          ";",
          { id: "bleed", value: "1" },
          "AND",
          { id: "slow" },
        ],
      },
      alternate: {
        immunities: ["intimidate"],
        position: "bottom",
        rune: "green",
        attackType: "melee",
        hp: 12,
        damage: 4,
        movement: 4,
        attack: [
          { id: "shield", value: "X", color: "pink" },
          ";",
          { id: "defiant", color: "blue" },
          ";",
          { id: "cleave", value: "2" },
          ",",
          { id: "fatigue", value: "2" },
          ",",
          { id: "push", value: "1" },
        ],
      },
    },
    veteran: {
      standard: {
        immunities: ["intimidate"],
        position: "bottom",
        rune: "green",
        attackType: "melee",
        hp: 15,
        damage: 6,
        movement: 5,
        attack: [
          { id: "regeneration", value: "2", color: "pink" },
          ";",
          { id: "bleed", value: "2" },
          "AND",
          { id: "slow" },
        ],
      },
      alternate: {
        immunities: ["intimidate"],
        position: "bottom",
        rune: "green",
        attackType: "melee",
        hp: 15,
        damage: 5,
        movement: 5,
        attack: [
          { id: "shield", value: "X", color: "pink" },
          ";",
          { id: "defiant", color: "blue" },
          ";",
          { id: "cleave", value: "2" },
          ",",
          { id: "fatigue", value: "3" },
          ",",
          { id: "push", value: "1" },
        ],
      },
    },
    champion: {
      standard: {
        immunities: ["intimidate"],
        position: "bottom",
        rune: "green",
        attackType: "melee",
        hp: 18,
        damage: 7,
        movement: 5,
        attack: [
          { id: "regeneration", value: "2", color: "pink" },
          ";",
          { id: "bleed", value: "2" },
          "AND",
          { id: "slow" },
        ],
      },
      alternate: {
        immunities: ["intimidate"],
        position: "bottom",
        rune: "green",
        attackType: "melee",
        hp: 18,
        damage: 6,
        movement: 5,
        attack: [
          { id: "shield", value: "X", color: "pink" },
          ";",
          { id: "defiant", color: "blue" },
          ";",
          { id: "cleave", value: "2" },
          ",",
          { id: "fatigue", value: "4" },
          ",",
          { id: "push", value: "1" },
        ],
      },
    },
  };
}
