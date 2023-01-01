import AvatarUrl from "@/assets/monster/avatar/WalkingHorrorAvatar.webp";
import ImageUrl from "@/assets/monster/big/WalkingHorrorBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/WalkingHorrorMiniature.webp";
import type { MonsterData, Rank } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class WalkingHorror implements MonsterData {
  id = "walking-horror";
  name = "Walking Horror";
  content: ContentId = "spoils-of-war";
  variants: VariantId[] = ["standard", "alternate"];
  images = {
    avatar: AvatarUrl,
    big: ImageUrl,
    miniature: MiniatureUrl,
    list: "",
  };
  color: MonsterColor = "white";
  rank: Rank = {
    rookie: {
      standard: {
        immunities: ["knock-down"],
        position: "bottom",
        rune: "red",
        attackType: "melee",
        hp: 9,
        damage: 3,
        movement: 3,
        attack: [
          { id: "cleave", value: "2" },
          ",",
          { id: "poison", value: "1" },
          "AND",
          { id: "intimidate", value: "1" },
        ],
      },
      alternate: {
        immunities: ["knock-down"],
        position: "bottom",
        rune: "red",
        attackType: "melee",
        hp: 9,
        damage: 4,
        movement: 3,
        attack: [
          { id: "relentless", color: "blue" },
          ";",
          { id: "bleed", value: "1" },
          ",",
          { id: "push", value: "1" },
          "AND",
          { id: "knock-down" },
        ],
      },
    },
    fighter: {
      standard: {
        immunities: ["knock-down"],
        position: "bottom",
        rune: "red",
        attackType: "melee",
        hp: 12,
        damage: 4,
        movement: 3,
        attack: [
          { id: "cleave", value: "2" },
          ",",
          { id: "poison", value: "1" },
          "AND",
          { id: "intimidate", value: "1" },
        ],
      },
      alternate: {
        immunities: ["knock-down"],
        position: "bottom",
        rune: "red",
        attackType: "melee",
        hp: 12,
        damage: 5,
        movement: 3,
        attack: [
          { id: "relentless", color: "blue" },
          ";",
          { id: "bleed", value: "1" },
          ",",
          { id: "push", value: "1" },
          "AND",
          { id: "knock-down" },
        ],
      },
    },
    veteran: {
      standard: {
        immunities: ["knock-down"],
        position: "bottom",
        rune: "red",
        attackType: "melee",
        hp: 15,
        damage: 5,
        movement: 4,
        attack: [
          { id: "cleave", value: "2" },
          ",",
          { id: "poison", value: "2" },
          "AND",
          { id: "intimidate", value: "2" },
        ],
      },
      alternate: {
        immunities: ["knock-down"],
        position: "bottom",
        rune: "red",
        attackType: "melee",
        hp: 15,
        damage: 6,
        movement: 4,
        attack: [
          { id: "relentless", color: "blue" },
          ";",
          { id: "bleed", value: "2" },
          ",",
          { id: "push", value: "1" },
          "AND",
          { id: "knock-down" },
        ],
      },
    },
    champion: {
      standard: {
        immunities: ["knock-down"],
        position: "bottom",
        rune: "red",
        attackType: "melee",
        hp: 18,
        damage: 6,
        movement: 4,
        attack: [
          { id: "cleave", value: "2" },
          ",",
          { id: "poison", value: "2" },
          "AND",
          { id: "intimidate", value: "2" },
        ],
      },
      alternate: {
        immunities: ["knock-down"],
        position: "bottom",
        rune: "red",
        attackType: "melee",
        hp: 18,
        damage: 7,
        movement: 4,
        attack: [
          { id: "relentless", color: "blue" },
          ";",
          { id: "bleed", value: "2" },
          ",",
          { id: "push", value: "1" },
          "AND",
          { id: "knock-down" },
        ],
      },
    },
  };
}
