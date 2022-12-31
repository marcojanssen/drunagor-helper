import AvatarUrl from "@/assets/monster/avatar/ShadowCultistAvatar.webp";
import ImageUrl from "@/assets/monster/big/ShadowCultistBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/ShadowCultistMiniature.webp";
import type { MonsterData, Rank } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class ShadowCultist implements MonsterData {
  id = "shadow-cultist";
  name = "Shadow Cultist";
  content: ContentId = "core";
  variants: VariantId[] = ["standard", "alternate", "complex"];
  images = {
    avatar: AvatarUrl,
    big: ImageUrl,
    miniature: MiniatureUrl,
    list: "",
  };
  color: MonsterColor = "white";
  rank: Rank = {
    rookie: {
      standard: {
        immunities: ["poison"],
        position: "top",
        rune: "red",
        attackType: "ranged",
        hp: 9,
        damage: 4,
        movement: 3,
        attack: "BURN 1 AND CURSE 1",
      },
      alternate: {
        immunities: ["poison"],
        position: "top",
        rune: "red",
        attackType: "ranged",
        hp: 9,
        damage: 4,
        movement: 3,
        attack: "DEFIANT; POISON 1 AND SLOW",
      },
    },
    fighter: {
      standard: {
        immunities: ["poison"],
        position: "top",
        rune: "red",
        attackType: "ranged",
        hp: 12,
        damage: 5,
        movement: 3,
        attack: "BURN 1 AND CURSE 1",
      },
      alternate: {
        immunities: ["poison"],
        position: "top",
        rune: "red",
        attackType: "ranged",
        hp: 12,
        damage: 5,
        movement: 3,
        attack: "DEFIANT; POISON 2 AND SLOW",
      },
    },
    veteran: {
      standard: {
        immunities: ["poison"],
        position: "top",
        rune: "red",
        attackType: "ranged",
        hp: 15,
        damage: 6,
        movement: 4,
        attack: "BURN 2 AND CURSE 1",
      },
      alternate: {
        immunities: ["poison"],
        position: "top",
        rune: "red",
        attackType: "ranged",
        hp: 15,
        damage: 6,
        movement: 4,
        attack: "DEFIANT; POISON 3 AND SLOW",
      },
    },
    champion: {
      standard: {
        immunities: ["poison"],
        position: "top",
        rune: "red",
        attackType: "ranged",
        hp: 18,
        damage: 7,
        movement: 4,
        attack: "BURN 2 AND CURSE 1",
      },
      alternate: {
        immunities: ["poison"],
        position: "top",
        rune: "red",
        attackType: "ranged",
        hp: 18,
        damage: 7,
        movement: 4,
        attack: "DEFIANT; POISON 4 AND SLOW",
      },
    },
  };
}
