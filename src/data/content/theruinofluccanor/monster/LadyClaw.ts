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
        attack: "CLEAVE 2, POISON 1 AND KNOCK DOWN",
      },
      alternate: {
        immunities: ["burn", "slow"],
        position: "bottom",
        rune: "blue",
        attackType: "melee",
        hp: 12,
        damage: 5,
        movement: 3,
        attack: "DEFIANT; FATIGUE X AND POISON 1",
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
        attack: "CLEAVE 2, POISON 1 AND KNOCK DOWN",
      },
      alternate: {
        immunities: ["burn", "slow"],
        position: "bottom",
        rune: "blue",
        attackType: "melee",
        hp: 16,
        damage: 6,
        movement: 3,
        attack: "DEFIANT; FATIGUE X AND POISON 1",
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
        attack: "CLEAVE 2, POISON 2 AND KNOCK DOWN",
      },
      alternate: {
        immunities: ["burn", "slow"],
        position: "bottom",
        rune: "blue",
        attackType: "melee",
        hp: 20,
        damage: 7,
        movement: 4,
        attack: "DEFIANT; FATIGUE X AND POISON 2",
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
        attack: "CLEAVE 2, POISON 2 AND KNOCK DOWN",
      },
      alternate: {
        immunities: ["burn", "slow"],
        position: "bottom",
        rune: "blue",
        attackType: "melee",
        hp: 24,
        damage: 8,
        movement: 4,
        attack: "DEFIANT; FATIGUE X AND POISON 2",
      },
    },
  };
}
