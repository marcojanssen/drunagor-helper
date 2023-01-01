import AvatarUrl from "@/assets/monster/avatar/LadyClawAvatar.webp";
import ImageUrl from "@/assets/monster/big/LadyClawBig.webp";
import type { MonsterData, Rank } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class LadyClaw implements MonsterData {
  id = "lady-claw";
  name = "Lady Claw";
  content: ContentId = "the-ruin-of-luccanor";
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
        immunities: ["burn", "slow"],
        position: "bottom",
        rune: "blue",
        attackType: "melee",
        hp: 12,
        damage: 4,
        movement: 4,
        attack: [{ id: "cleave", value: "2" }, ",", { id: "poison", value: "1" }, "AND", { id: "knock-down" }],
      },
      alternate: {
        immunities: ["burn", "slow"],
        position: "bottom",
        rune: "blue",
        attackType: "melee",
        hp: 12,
        damage: 5,
        movement: 3,
        attack: [
          { id: "defiant", color: "blue" },
          ";",
          { id: "fatigue", value: "X" },
          "AND",
          { id: "poison", value: "1" },
        ],
      },
    },
    fighter: {
      standard: {
        immunities: ["burn", "slow"],
        position: "bottom",
        rune: "blue",
        attackType: "melee",
        hp: 16,
        damage: 5,
        movement: 4,
        attack: [{ id: "cleave", value: "2" }, ",", { id: "poison", value: "1" }, "AND", { id: "knock-down" }],
      },
      alternate: {
        immunities: ["burn", "slow"],
        position: "bottom",
        rune: "blue",
        attackType: "melee",
        hp: 16,
        damage: 6,
        movement: 3,
        attack: [
          { id: "defiant", color: "blue" },
          ";",
          { id: "fatigue", value: "X" },
          "AND",
          { id: "poison", value: "1" },
        ],
      },
    },
    veteran: {
      standard: {
        immunities: ["burn", "slow"],
        position: "bottom",
        rune: "blue",
        attackType: "melee",
        hp: 20,
        damage: 6,
        movement: 5,
        attack: [{ id: "cleave", value: "2" }, ",", { id: "poison", value: "2" }, "AND", { id: "knock-down" }],
      },
      alternate: {
        immunities: ["burn", "slow"],
        position: "bottom",
        rune: "blue",
        attackType: "melee",
        hp: 20,
        damage: 7,
        movement: 4,
        attack: [
          { id: "defiant", color: "blue" },
          ";",
          { id: "fatigue", value: "X" },
          "AND",
          { id: "poison", value: "2" },
        ],
      },
    },
    champion: {
      standard: {
        immunities: ["burn", "slow"],
        position: "bottom",
        rune: "blue",
        attackType: "melee",
        hp: 24,
        damage: 7,
        movement: 5,
        attack: [{ id: "cleave", value: "2" }, ",", { id: "poison", value: "2" }, "AND", { id: "knock-down" }],
      },
      alternate: {
        immunities: ["burn", "slow"],
        position: "bottom",
        rune: "blue",
        attackType: "melee",
        hp: 24,
        damage: 8,
        movement: 4,
        attack: [
          { id: "defiant", color: "blue" },
          ";",
          { id: "fatigue", value: "X" },
          "AND",
          { id: "poison", value: "2" },
        ],
      },
    },
  };
}
