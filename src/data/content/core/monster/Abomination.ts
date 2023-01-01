import AvatarUrl from "@/assets/monster/avatar/AbominationAvatar.webp";
import ImageUrl from "@/assets/monster/big/AbominationBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/AbominationMiniature.webp";
import type { MonsterData, Rank } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class Abomination implements MonsterData {
  id = "abomination";
  name = "Abomination";
  content: ContentId = "core";
  variants: VariantId[] = ["standard", "alternate"];
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
        immunities: ["large", "burn"],
        position: "bottom",
        rune: "black",
        attackType: "melee",
        hp: 15,
        damage: 5,
        movement: 2,
        attack: [
          { id: "regeneration", value: "1", color: "pink" },
          ";",
          { id: "strike", value: "1" },
          "AND",
          { id: "stun" },
        ],
      },
      alternate: {
        immunities: ["large", "burn"],
        position: "bottom",
        rune: "black",
        attackType: "melee",
        hp: 15,
        damage: 3,
        movement: 2,
        attack: [
          { id: "defiant", color: "blue" },
          ";",
          { id: "strike", value: "1" },
          ",",
          { id: "drain-health", value: "1" },
        ],
      },
    },
    fighter: {
      standard: {
        immunities: ["large", "burn"],
        position: "bottom",
        rune: "black",
        attackType: "melee",
        hp: 20,
        damage: 6,
        movement: 2,
        attack: [
          { id: "regeneration", value: "1", color: "pink" },
          ";",
          { id: "strike", value: "1" },
          "AND",
          { id: "stun" },
        ],
      },
      alternate: {
        immunities: ["large", "burn"],
        position: "bottom",
        rune: "black",
        attackType: "melee",
        hp: 20,
        damage: 4,
        movement: 2,
        attack: [
          { id: "defiant", color: "blue" },
          ";",
          { id: "strike", value: "1" },
          ",",
          { id: "drain-health", value: "2" },
        ],
      },
    },
    veteran: {
      standard: {
        immunities: ["large", "burn"],
        position: "bottom",
        rune: "black",
        attackType: "melee",
        hp: 25,
        damage: 7,
        movement: 3,
        attack: [
          { id: "regeneration", value: "2", color: "pink" },
          ";",
          { id: "strike", value: "1" },
          "AND",
          { id: "stun" },
        ],
      },
      alternate: {
        immunities: ["large", "burn"],
        position: "bottom",
        rune: "black",
        attackType: "melee",
        hp: 25,
        damage: 5,
        movement: 3,
        attack: [
          { id: "defiant", color: "blue" },
          ";",
          { id: "strike", value: "1" },
          ",",
          { id: "drain-health", value: "3" },
        ],
      },
    },
    champion: {
      standard: {
        immunities: ["large", "burn"],
        position: "bottom",
        rune: "black",
        attackType: "melee",
        hp: 30,
        damage: 8,
        movement: 3,
        attack: [
          { id: "regeneration", value: "2", color: "pink" },
          ";",
          { id: "strike", value: "1" },
          "AND",
          { id: "stun" },
        ],
      },
      alternate: {
        immunities: ["large", "burn"],
        position: "bottom",
        rune: "black",
        attackType: "melee",
        hp: 30,
        damage: 6,
        movement: 3,
        attack: [
          { id: "defiant", color: "blue" },
          ";",
          { id: "strike", value: "1" },
          ",",
          { id: "drain-health", value: "4" },
        ],
      },
    },
  };
}
