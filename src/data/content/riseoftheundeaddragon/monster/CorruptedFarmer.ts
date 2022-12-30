import AvatarUrl from "@/assets/monster/avatar/CorruptedFarmerAvatar.webp";
import ImageUrl from "@/assets/monster/big/CorruptedFarmerBig.webp";
import type { MonsterData } from "@/data/store/MonsterData";
import type { AttackType } from "@/data/type/AttackType";
import type { Condition } from "@/data/type/Condition";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { Rune } from "@/data/type/Rune";
import type { TrackerPosition } from "@/data/type/TrackerPosition";
import type { VariantId } from "@/data/type/VariantId";

export class CorruptedFarmer implements MonsterData {
  id = "corrupted-farmer";
  name = "Corrupted Farmer";
  content: ContentId = "rise-of-the-undead-dragon";
  variants: VariantId[] = ["standard", "alternate"];
  images = {
    avatar: AvatarUrl,
    big: ImageUrl,
    miniature: "",
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
