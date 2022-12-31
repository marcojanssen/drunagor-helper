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
        immunities: [],
        position: "",
        rune: "",
        attackType: "",
        hp: null,
        damage: null,
        movement: null,
        attack: null,
      },
      alternate: {
        immunities: [],
        position: "",
        rune: "",
        attackType: "",
        hp: null,
        damage: null,
        movement: null,
        attack: null,
      },
    },
    fighter: {
      standard: {
        immunities: [],
        position: "",
        rune: "",
        attackType: "",
        hp: null,
        damage: null,
        movement: null,
        attack: null,
      },
      alternate: {
        immunities: [],
        position: "",
        rune: "",
        attackType: "",
        hp: null,
        damage: null,
        movement: null,
        attack: null,
      },
    },
    veteran: {
      standard: {
        immunities: [],
        position: "",
        rune: "",
        attackType: "",
        hp: null,
        damage: null,
        movement: null,
        attack: null,
      },
      alternate: {
        immunities: [],
        position: "",
        rune: "",
        attackType: "",
        hp: null,
        damage: null,
        movement: null,
        attack: null,
      },
    },
    champion: {
      standard: {
        immunities: [],
        position: "",
        rune: "",
        attackType: "",
        hp: null,
        damage: null,
        movement: null,
        attack: null,
      },
      alternate: {
        immunities: [],
        position: "",
        rune: "",
        attackType: "",
        hp: null,
        damage: null,
        movement: null,
        attack: null,
      },
    },
  };
}
