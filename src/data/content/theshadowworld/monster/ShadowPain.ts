import AvatarUrl from "@/assets/monster/avatar/ShadowPainAvatar.webp";
import ImageUrl from "@/assets/monster/big/ShadowPainBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/ShadowPainMiniature.webp";
import type { MonsterData } from "@/data/store/MonsterData";
import type { AttackType } from "@/data/type/AttackType";
import type { Condition } from "@/data/type/Condition";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { Rune } from "@/data/type/Rune";
import type { TrackerPosition } from "@/data/type/TrackerPosition";
import type { VariantId } from "@/data/type/VariantId";

export class ShadowPain implements MonsterData {
  id = "shadow-pain";
  name = "Shadow Pain";
  content: ContentId = "the-shadow-world";
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
