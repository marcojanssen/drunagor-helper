import AvatarUrl from "@/assets/monster/avatar/RottenFleshAvatar.webp";
import ImageUrl from "@/assets/monster/big/RottenFleshBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/RottenFleshMiniature.webp";
import type { MonsterData } from "@/data/store/MonsterData";
import type { AttackType } from "@/data/type/AttackType";
import type { Condition } from "@/data/type/Condition";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { Rune } from "@/data/type/Rune";
import type { TrackerPosition } from "@/data/type/TrackerPosition";
import type { VariantId } from "@/data/type/VariantId";

export class RottenFlesh implements MonsterData {
  id = "rotten-flesh";
  name = "Rotten Flesh";
  content: ContentId = "core";
  variants: VariantId[] = ["standard", "alternate", "complex"];
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
