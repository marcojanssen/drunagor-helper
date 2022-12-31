import AvatarUrl from "@/assets/monster/avatar/ShadowKnightAvatar.webp";
import ImageUrl from "@/assets/monster/big/ShadowKnightBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/ShadowKnightMiniature.webp";
import type { MonsterData, Rank } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class ShadowKnight implements MonsterData {
  id = "shadow-knight";
  name = "Shadow Knight";
  content: ContentId = "core";
  variants: VariantId[] = ["standard", "alternate", "complex"];
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
        immunities: ["large"],
        position: "top",
        rune: "black",
        attackType: "melee",
        hp: 15,
        damage: 4,
        movement: 2,
        attack: "SHIELD 1; STRIKE 2, KNOCK DOWN",
      },
      alternate: {
        immunities: ["large"],
        position: "top",
        rune: "black",
        attackType: "melee",
        hp: 12,
        damage: 4,
        movement: 3,
        attack: "RELENTLESS; STRIKE 1, BURN 1 AND FATIGUE 1",
      },
    },
    fighter: {
      standard: {
        immunities: ["large"],
        position: "top",
        rune: "black",
        attackType: "melee",
        hp: 20,
        damage: 5,
        movement: 2,
        attack: "SHIELD 2; STRIKE 2, KNOCK DOWN",
      },
      alternate: {
        immunities: ["large"],
        position: "top",
        rune: "black",
        attackType: "melee",
        hp: 16,
        damage: 5,
        movement: 3,
        attack: "RELENTLESS; STRIKE 1, BURN 2 AND FATIGUE 2",
      },
    },
    veteran: {
      standard: {
        immunities: ["large"],
        position: "top",
        rune: "black",
        attackType: "melee",
        hp: 25,
        damage: 6,
        movement: 3,
        attack: "SHIELD 3; STRIKE 2, KNOCK DOWN",
      },
      alternate: {
        immunities: ["large"],
        position: "top",
        rune: "black",
        attackType: "melee",
        hp: 20,
        damage: 6,
        movement: 4,
        attack: "RELENTLESS; STRIKE 1, BURN 3 AND FATIGUE 3",
      },
    },
    champion: {
      standard: {
        immunities: ["large"],
        position: "top",
        rune: "black",
        attackType: "melee",
        hp: 30,
        damage: 7,
        movement: 3,
        attack: "SHIELD 4; STRIKE 2, KNOCK DOWN",
      },
      alternate: {
        immunities: ["large"],
        position: "top",
        rune: "black",
        attackType: "melee",
        hp: 24,
        damage: 7,
        movement: 4,
        attack: "RELENTLESS; STRIKE 1, BURN 4 AND FATIGUE 4",
      },
    },
  };
}
