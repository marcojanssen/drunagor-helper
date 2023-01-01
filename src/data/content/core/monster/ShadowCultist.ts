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
        attack: [{ id: "burn", value: "1" }, "AND", { id: "curse", value: "1" }],
      },
      alternate: {
        immunities: ["poison"],
        position: "top",
        rune: "red",
        attackType: "ranged",
        hp: 9,
        damage: 4,
        movement: 3,
        attack: [{ id: "defiant", color: "blue" }, ";", { id: "poison", value: "1" }, "AND", { id: "slow" }],
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
        attack: [{ id: "burn", value: "1" }, "AND", { id: "curse", value: "1" }],
      },
      alternate: {
        immunities: ["poison"],
        position: "top",
        rune: "red",
        attackType: "ranged",
        hp: 12,
        damage: 5,
        movement: 3,
        attack: [{ id: "defiant", color: "blue" }, ";", { id: "poison", value: "2" }, "AND", { id: "slow" }],
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
        attack: [{ id: "burn", value: "2" }, "AND", { id: "curse", value: "1" }],
      },
      alternate: {
        immunities: ["poison"],
        position: "top",
        rune: "red",
        attackType: "ranged",
        hp: 15,
        damage: 6,
        movement: 4,
        attack: [{ id: "defiant", color: "blue" }, ";", { id: "poison", value: "3" }, "AND", { id: "slow" }],
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
        attack: [{ id: "burn", value: "2" }, "AND", { id: "curse", value: "1" }],
      },
      alternate: {
        immunities: ["poison"],
        position: "top",
        rune: "red",
        attackType: "ranged",
        hp: 18,
        damage: 7,
        movement: 4,
        attack: [{ id: "defiant", color: "blue" }, ";", { id: "poison", value: "4" }, "AND", { id: "slow" }],
      },
    },
  };
}
