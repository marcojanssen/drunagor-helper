import AvatarUrl from "@/assets/monster/avatar/RavagerAvatar.webp";
import ImageUrl from "@/assets/monster/big/RavagerBig.webp";
import type { MonsterData, Rank } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class Ravager implements MonsterData {
  id = "ravager";
  name = "Ravager";
  content: ContentId = "the-ruin-of-luccanor";
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
        immunities: ["burn"],
        position: "top",
        rune: "blue",
        attackType: "melee",
        hp: 9,
        damage: 4,
        movement: 3,
        attack: [
          { id: "shield", value: "1", color: "pink" },
          ";",
          { id: "bleed", value: "1" },
          "AND",
          { id: "fatigue", value: "1" },
        ],
      },
      alternate: {
        immunities: ["burn"],
        position: "top",
        rune: "blue",
        attackType: "melee",
        hp: 6,
        damage: 4,
        movement: 3,
        attack: [
          { id: "shield", value: "X", color: "pink" },
          ";",
          { id: "reckoner", color: "blue" },
          ";",
          { id: "cleave", value: "2" },
          "AND",
          { id: "fatigue", value: "1" },
        ],
      },
    },
    fighter: {
      standard: {
        immunities: ["burn"],
        position: "top",
        rune: "blue",
        attackType: "melee",
        hp: 12,
        damage: 5,
        movement: 3,
        attack: [
          { id: "shield", value: "2", color: "pink" },
          ";",
          { id: "bleed", value: "1" },
          "AND",
          { id: "fatigue", value: "2" },
        ],
      },
      alternate: {
        immunities: ["burn"],
        position: "top",
        rune: "blue",
        attackType: "melee",
        hp: 9,
        damage: 5,
        movement: 3,
        attack: [
          { id: "shield", value: "X", color: "pink" },
          ";",
          { id: "reckoner", color: "blue" },
          ";",
          { id: "cleave", value: "2" },
          "AND",
          { id: "fatigue", value: "1" },
        ],
      },
    },
    veteran: {
      standard: {
        immunities: ["burn"],
        position: "top",
        rune: "blue",
        attackType: "melee",
        hp: 15,
        damage: 6,
        movement: 4,
        attack: [
          { id: "shield", value: "3", color: "pink" },
          ";",
          { id: "bleed", value: "2" },
          "AND",
          { id: "fatigue", value: "3" },
        ],
      },
      alternate: {
        immunities: ["burn"],
        position: "top",
        rune: "blue",
        attackType: "melee",
        hp: 12,
        damage: 6,
        movement: 4,
        attack: [
          { id: "shield", value: "X", color: "pink" },
          ";",
          { id: "reckoner", color: "blue" },
          ";",
          { id: "cleave", value: "2" },
          "AND",
          { id: "fatigue", value: "2" },
        ],
      },
    },
    champion: {
      standard: {
        immunities: ["burn"],
        position: "top",
        rune: "blue",
        attackType: "melee",
        hp: 18,
        damage: 7,
        movement: 4,
        attack: [
          { id: "shield", value: "4", color: "pink" },
          ";",
          { id: "bleed", value: "2" },
          "AND",
          { id: "fatigue", value: "4" },
        ],
      },
      alternate: {
        immunities: ["burn"],
        position: "top",
        rune: "blue",
        attackType: "melee",
        hp: 15,
        damage: 7,
        movement: 4,
        attack: [
          { id: "shield", value: "X", color: "pink" },
          ";",
          { id: "reckoner", color: "blue" },
          ";",
          { id: "cleave", value: "2" },
          "AND",
          { id: "fatigue", value: "2" },
        ],
      },
    },
  };
}
