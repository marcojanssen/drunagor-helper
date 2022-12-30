import AvatarUrl from "@/assets/monster/avatar/SkeletonArcherAvatar.webp";
import ImageUrl from "@/assets/monster/big/SkeletonArcherBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/SkeletonArcherMiniature.webp";
import type { MonsterData } from "@/data/store/MonsterData";
import type { AttackType } from "@/data/type/AttackType";
import type { Condition } from "@/data/type/Condition";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { Rune } from "@/data/type/Rune";
import type { TrackerPosition } from "@/data/type/TrackerPosition";
import type { VariantId } from "@/data/type/VariantId";

export class SkeletonArcher implements MonsterData {
  id = "skeleton-archer";
  name = "Skeleton Archer";
  content: ContentId = "core";
  variants: VariantId[] = ["standard", "alternate"];
  images = {
    avatar: AvatarUrl,
    big: ImageUrl,
    miniature: MiniatureUrl,
    list: "",
  };
  color: MonsterColor = "white";
  rank = {
    rookie: {
      standard: {
        immunities: ["bleed"] as Condition[],
        position: "top" as TrackerPosition,
        rune: "blue" as Rune,
        attackType: "ranged" as AttackType,
        hp: 9,
        damage: 3,
        movement: 4,
        attack: "MULTISHOT 2, POISON 1",
      },
      alternate: {
        immunities: ["bleed"] as Condition[],
        position: "top" as TrackerPosition,
        rune: "blue" as Rune,
        attackType: "ranged" as AttackType,
        hp: 6,
        damage: 4,
        movement: 4,
        attack: "BLOODSEEKER; BURN 1",
      },
    },
    fighter: {
      standard: {
        immunities: ["bleed"] as Condition[],
        position: "top" as TrackerPosition,
        rune: "blue" as Rune,
        attackType: "ranged" as AttackType,
        hp: 12,
        damage: 4,
        movement: 4,
        attack: "MULTISHOT 2, POISON 1",
      },
      alternate: {
        immunities: ["bleed"] as Condition[],
        position: "top" as TrackerPosition,
        rune: "blue" as Rune,
        attackType: "ranged" as AttackType,
        hp: 9,
        damage: 5,
        movement: 4,
        attack: "BLOODSEEKER; BURN 2",
      },
    },
    veteran: {
      standard: {
        immunities: ["bleed"] as Condition[],
        position: "top" as TrackerPosition,
        rune: "blue" as Rune,
        attackType: "ranged" as AttackType,
        hp: 15,
        damage: 5,
        movement: 5,
        attack: "MULTISHOT 2, POISON 2",
      },
      alternate: {
        immunities: ["bleed"] as Condition[],
        position: "top" as TrackerPosition,
        rune: "blue" as Rune,
        attackType: "ranged" as AttackType,
        hp: 12,
        damage: 6,
        movement: 5,
        attack: "BLOODSEEKER; BURN 3",
      },
    },
    champion: {
      standard: {
        immunities: ["bleed"] as Condition[],
        position: "top" as TrackerPosition,
        rune: "blue" as Rune,
        attackType: "ranged" as AttackType,
        hp: 18,
        damage: 6,
        movement: 5,
        attack: "MULTISHOT 2, POISON 2",
      },
      alternate: {
        immunities: ["bleed"] as Condition[],
        position: "top" as TrackerPosition,
        rune: "blue" as Rune,
        attackType: "ranged" as AttackType,
        hp: 15,
        damage: 7,
        movement: 5,
        attack: "BLOODSEEKER; BURN 4",
      },
    },
  };
}
