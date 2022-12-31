import AvatarUrl from "@/assets/monster/avatar/AbominationAvatar.webp";
import ImageUrl from "@/assets/monster/big/AbominationBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/AbominationMiniature.webp";
import type { MonsterData, Rank } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class Abomination implements MonsterData {
  id = "abomination";
  name = "Abomination";
  content: ContentId = "core";
  variants: VariantId[] = ["standard", "alternate"];
  images = {
    avatar: AvatarUrl,
    big: ImageUrl,
    miniature: MiniatureUrl,
    list: "",
  };
  color: MonsterColor = "black";
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
