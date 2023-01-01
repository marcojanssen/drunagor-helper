import AvatarUrl from "@/assets/monster/avatar/ShadowKnightAvatar.webp";
import ImageUrl from "@/assets/monster/big/ShadowKnightBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/ShadowKnightMiniature.webp";
import type { MonsterData, Rank } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class ShadowKnight implements MonsterData {
  id = "shadow-knight";
  name = "Shadow Knight";
  content: ContentId = "core";
  variants: VariantId[] = ["standard", "alternate", "complex"];
  images = {
    avatar: AvatarUrl,
    big: ImageUrl,
    miniature: MiniatureUrl,
    list: "",
  };
  color: MonsterColor = "black";
  rank: Rank = {
    rookie: {
      standard: {
        immunities: ["large"],
        position: "top",
        rune: "black",
        attackType: "melee",
        hp: 15,
        damage: 4,
        movement: 2,
        attack: [
          { id: "shield", value: "1", color: "pink" },
          ";",
          { id: "strike", value: "2" },
          ",",
          { id: "knock-down" },
        ],
      },
      alternate: {
        immunities: ["large"],
        position: "top",
        rune: "black",
        attackType: "melee",
        hp: 12,
        damage: 4,
        movement: 3,
        attack: [
          { id: "relentless", color: "blue" },
          ";",
          { id: "strike", value: "1" },
          ",",
          { id: "burn", value: "1" },
          "AND",
          { id: "fatigue", value: "1" },
        ],
      },
    },
    fighter: {
      standard: {
        immunities: ["large"],
        position: "top",
        rune: "black",
        attackType: "melee",
        hp: 20,
        damage: 5,
        movement: 2,
        attack: [
          { id: "shield", value: "2", color: "pink" },
          ";",
          { id: "strike", value: "2" },
          ",",
          { id: "knock-down" },
        ],
      },
      alternate: {
        immunities: ["large"],
        position: "top",
        rune: "black",
        attackType: "melee",
        hp: 16,
        damage: 5,
        movement: 3,
        attack: [
          { id: "relentless", color: "blue" },
          ";",
          { id: "strike", value: "1" },
          ",",
          { id: "burn", value: "2" },
          "AND",
          { id: "fatigue", value: "2" },
        ],
      },
    },
    veteran: {
      standard: {
        immunities: ["large"],
        position: "top",
        rune: "black",
        attackType: "melee",
        hp: 25,
        damage: 6,
        movement: 3,
        attack: [
          { id: "shield", value: "3", color: "pink" },
          ";",
          { id: "strike", value: "2" },
          ",",
          { id: "knock-down" },
        ],
      },
      alternate: {
        immunities: ["large"],
        position: "top",
        rune: "black",
        attackType: "melee",
        hp: 20,
        damage: 6,
        movement: 4,
        attack: [
          { id: "relentless", color: "blue" },
          ";",
          { id: "strike", value: "1" },
          ",",
          { id: "burn", value: "3" },
          "AND",
          { id: "fatigue", value: "3" },
        ],
      },
    },
    champion: {
      standard: {
        immunities: ["large"],
        position: "top",
        rune: "black",
        attackType: "melee",
        hp: 30,
        damage: 7,
        movement: 3,
        attack: [
          { id: "shield", value: "4", color: "pink" },
          ";",
          { id: "strike", value: "2" },
          ",",
          { id: "knock-down" },
        ],
      },
      alternate: {
        immunities: ["large"],
        position: "top",
        rune: "black",
        attackType: "melee",
        hp: 24,
        damage: 7,
        movement: 4,
        attack: [
          { id: "relentless", color: "blue" },
          ";",
          { id: "strike", value: "1" },
          ",",
          { id: "burn", value: "4" },
          "AND",
          { id: "fatigue", value: "4" },
        ],
      },
    },
  };
}
