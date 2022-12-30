import AvatarUrl from "@/assets/monster/avatar/ShadowMistressAvatar.webp";
import ImageUrl from "@/assets/monster/big/ShadowMistressBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/ShadowMistressMiniature.webp";
import type { MonsterData } from "@/data/store/MonsterData";
import type { AttackType } from "@/data/type/AttackType";
import type { Condition } from "@/data/type/Condition";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { Rune } from "@/data/type/Rune";
import type { TrackerPosition } from "@/data/type/TrackerPosition";
import type { VariantId } from "@/data/type/VariantId";

export class ShadowMistress implements MonsterData {
  id = "shadow-mistress";
  name = "Shadow Mistress";
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
        immunities: ["stun"] as Condition[],
        position: "top" as TrackerPosition,
        rune: "orange" as Rune,
        attackType: "melee" as AttackType,
        hp: 9,
        damage: 2,
        movement: 4,
        attack: "SHIELD X; CLEAVE 2, ATTACK TWICE",
      },
      alternate: {
        immunities: ["stun"] as Condition[],
        position: "top" as TrackerPosition,
        rune: "orange" as Rune,
        attackType: "melee" as AttackType,
        hp: 9,
        damage: 3,
        movement: 4,
        attack: "RECKONER; ATTACK TWICE",
      },
    },
    fighter: {
      standard: {
        immunities: ["stun"] as Condition[],
        position: "top" as TrackerPosition,
        rune: "orange" as Rune,
        attackType: "melee" as AttackType,
        hp: 12,
        damage: 3,
        movement: 4,
        attack: "SHIELD X; CLEAVE 2, ATTACK TWICE",
      },
      alternate: {
        immunities: ["stun"] as Condition[],
        position: "top" as TrackerPosition,
        rune: "orange" as Rune,
        attackType: "melee" as AttackType,
        hp: 12,
        damage: 4,
        movement: 4,
        attack: "RECKONER; ATTACK TWICE",
      },
    },
    veteran: {
      standard: {
        immunities: ["stun"] as Condition[],
        position: "top" as TrackerPosition,
        rune: "orange" as Rune,
        attackType: "melee" as AttackType,
        hp: 15,
        damage: 4,
        movement: 5,
        attack: "SHIELD X; CLEAVE 2, ATTACK TWICE",
      },
      alternate: {
        immunities: ["stun"] as Condition[],
        position: "top" as TrackerPosition,
        rune: "orange" as Rune,
        attackType: "melee" as AttackType,
        hp: 15,
        damage: 5,
        movement: 5,
        attack: "RECKONER; ATTACK TWICE",
      },
    },
    champion: {
      standard: {
        immunities: ["stun"] as Condition[],
        position: "top" as TrackerPosition,
        rune: "orange" as Rune,
        attackType: "melee" as AttackType,
        hp: 18,
        damage: 5,
        movement: 5,
        attack: "SHIELD X; CLEAVE 2, ATTACK TWICE",
      },
      alternate: {
        immunities: ["stun"] as Condition[],
        position: "top" as TrackerPosition,
        rune: "orange" as Rune,
        attackType: "melee" as AttackType,
        hp: 18,
        damage: 6,
        movement: 5,
        attack: "RECKONER; ATTACK TWICE",
      },
    },
  };
}
