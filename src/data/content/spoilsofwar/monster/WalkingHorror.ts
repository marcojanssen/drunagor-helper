import AvatarUrl from "@/assets/monster/avatar/WalkingHorrorAvatar.webp";
import ImageUrl from "@/assets/monster/big/WalkingHorrorBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/WalkingHorrorMiniature.webp";
import type { MonsterData } from "@/data/store/MonsterData";
import type { AttackType } from "@/data/type/AttackType";
import type { Condition } from "@/data/type/Condition";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { Rune } from "@/data/type/Rune";
import type { TrackerPosition } from "@/data/type/TrackerPosition";
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
  rank = {
    rookie: {
      standard: {
        immunities: ["knock-down"] as Condition[],
        position: "bottom" as TrackerPosition,
        rune: "red" as Rune,
        attackType: "melee" as AttackType,
        hp: 9,
        damage: 3,
        movement: 3,
        attack: "CLEAVE 2, POISON 1 AND INTIMIDATE 1",
      },
      alternate: {
        immunities: ["knock-down"] as Condition[],
        position: "bottom" as TrackerPosition,
        rune: "red" as Rune,
        attackType: "melee" as AttackType,
        hp: 9,
        damage: 4,
        movement: 3,
        attack: "RELENTLESS; BLEED 1, PUSH 1 AND KNOCK DOWN",
      },
    },
    fighter: {
      standard: {
        immunities: ["knock-down"] as Condition[],
        position: "bottom" as TrackerPosition,
        rune: "red" as Rune,
        attackType: "melee" as AttackType,
        hp: 12,
        damage: 4,
        movement: 3,
        attack: "CLEAVE 2, POISON 1 AND INTIMIDATE 1",
      },
      alternate: {
        immunities: ["knock-down"] as Condition[],
        position: "bottom" as TrackerPosition,
        rune: "red" as Rune,
        attackType: "melee" as AttackType,
        hp: 12,
        damage: 5,
        movement: 3,
        attack: "RELENTLESS; BLEED 1, PUSH 1 AND KNOCK DOWN",
      },
    },
    veteran: {
      standard: {
        immunities: ["knock-down"] as Condition[],
        position: "bottom" as TrackerPosition,
        rune: "red" as Rune,
        attackType: "melee" as AttackType,
        hp: 15,
        damage: 5,
        movement: 4,
        attack: "CLEAVE 2, POISON 2 AND INTIMIDATE 2",
      },
      alternate: {
        immunities: ["knock-down"] as Condition[],
        position: "bottom" as TrackerPosition,
        rune: "red" as Rune,
        attackType: "melee" as AttackType,
        hp: 15,
        damage: 6,
        movement: 4,
        attack: "RELENTLESS; BLEED 2, PUSH 1 AND KNOCK DOWN",
      },
    },
    champion: {
      standard: {
        immunities: ["knock-down"] as Condition[],
        position: "bottom" as TrackerPosition,
        rune: "red" as Rune,
        attackType: "melee" as AttackType,
        hp: 18,
        damage: 6,
        movement: 4,
        attack: "CLEAVE 2, POISON 2 AND INTIMIDATE 2",
      },
      alternate: {
        immunities: ["knock-down"] as Condition[],
        position: "bottom" as TrackerPosition,
        rune: "red" as Rune,
        attackType: "melee" as AttackType,
        hp: 18,
        damage: 7,
        movement: 4,
        attack: "RELENTLESS; BLEED 2, PUSH 1 AND KNOCK DOWN",
      },
    },
  };
}
