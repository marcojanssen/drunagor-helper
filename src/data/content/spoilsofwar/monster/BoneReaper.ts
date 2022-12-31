import AvatarUrl from "@/assets/monster/avatar/BoneReaperAvatar.webp";
import ImageUrl from "@/assets/monster/big/BoneReaperBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/BoneReaperMiniature.webp";
import type { MonsterData, Rank } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class BoneReaper implements MonsterData {
  id = "bone-reaper";
  name = "Bone Reaper";
  content: ContentId = "spoils-of-war";
  variants: VariantId[] = ["standard", "alternate"];
  images = {
    avatar: AvatarUrl,
    big: ImageUrl,
    miniature: MiniatureUrl,
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
