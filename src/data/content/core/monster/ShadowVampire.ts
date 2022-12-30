import AvatarUrl from "@/assets/monster/avatar/ShadowVampireAvatar.webp";
import ImageUrl from "@/assets/monster/big/ShadowVampireBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/ShadowVampireMiniature.webp";
import type { MonsterData } from "@/data/store/MonsterData";
import type { AttackType } from "@/data/type/AttackType";
import type { Condition } from "@/data/type/Condition";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { Rune } from "@/data/type/Rune";
import type { TrackerPosition } from "@/data/type/TrackerPosition";
import type { VariantId } from "@/data/type/VariantId";

export class ShadowVampire implements MonsterData {
  id = "shadow-vampire";
  name = "Shadow Vampire";
  content: ContentId = "core";
  variants: VariantId[] = ["standard", "alternate"];
  images = {
    avatar: AvatarUrl,
    big: ImageUrl,
    miniature: MiniatureUrl,
    list: "",
  };
  color: MonsterColor = "gray";
  rank = {
    rookie: {
      standard: {
        immunities: [] as Condition[],
        position: "" as TrackerPosition,
        rune: "" as Rune,
        attackType: "" as AttackType,
        hp: null,
        damage: null,
        movement: null,
        attack: null,
      },
      alternate: {
        immunities: [] as Condition[],
        position: "" as TrackerPosition,
        rune: "" as Rune,
        attackType: "" as AttackType,
        hp: null,
        damage: null,
        movement: null,
        attack: null,
      },
    },
    fighter: {
      standard: {
        immunities: [] as Condition[],
        position: "" as TrackerPosition,
        rune: "" as Rune,
        attackType: "" as AttackType,
        hp: null,
        damage: null,
        movement: null,
        attack: null,
      },
      alternate: {
        immunities: [] as Condition[],
        position: "" as TrackerPosition,
        rune: "" as Rune,
        attackType: "" as AttackType,
        hp: null,
        damage: null,
        movement: null,
        attack: null,
      },
    },
    veteran: {
      standard: {
        immunities: [] as Condition[],
        position: "" as TrackerPosition,
        rune: "" as Rune,
        attackType: "" as AttackType,
        hp: null,
        damage: null,
        movement: null,
        attack: null,
      },
      alternate: {
        immunities: [] as Condition[],
        position: "" as TrackerPosition,
        rune: "" as Rune,
        attackType: "" as AttackType,
        hp: null,
        damage: null,
        movement: null,
        attack: null,
      },
    },
    champion: {
      standard: {
        immunities: [] as Condition[],
        position: "" as TrackerPosition,
        rune: "" as Rune,
        attackType: "" as AttackType,
        hp: null,
        damage: null,
        movement: null,
        attack: null,
      },
      alternate: {
        immunities: [] as Condition[],
        position: "" as TrackerPosition,
        rune: "" as Rune,
        attackType: "" as AttackType,
        hp: null,
        damage: null,
        movement: null,
        attack: null,
      },
    },
  };
}
