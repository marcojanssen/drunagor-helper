import AvatarUrl from "@/assets/monster/avatar/ShadowPainAvatar.webp";
import ImageUrl from "@/assets/monster/big/ShadowPainBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/ShadowPainMiniature.webp";
import type { MonsterData, Rank } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
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
  rank: Rank = {
    rookie: {
      standard: {
        immunities: ["poison"],
        position: "top",
        rune: "orange",
        attackType: "melee",
        hp: 9,
        damage: 4,
        movement: 4,
        attack: [{ id: "jump", color: "blue" }, ";", { id: "bleed", value: "1" }, "AND", { id: "knock-down" }],
      },
      alternate: {
        immunities: ["poison"],
        position: "top",
        rune: "orange",
        attackType: "ranged",
        hp: 9,
        damage: 3,
        movement: 4,
        attack: [
          { id: "bloodseeker", color: "blue" },
          ";",
          { id: "multishot", value: "2" },
          ",",
          { id: "bleed", value: "1" },
        ],
      },
    },
    fighter: {
      standard: {
        immunities: ["poison"],
        position: "top",
        rune: "orange",
        attackType: "melee",
        hp: 12,
        damage: 5,
        movement: 4,
        attack: [{ id: "jump", color: "blue" }, ";", { id: "bleed", value: "1" }, "AND", { id: "knock-down" }],
      },
      alternate: {
        immunities: ["poison"],
        position: "top",
        rune: "orange",
        attackType: "ranged",
        hp: 12,
        damage: 4,
        movement: 4,
        attack: [
          { id: "bloodseeker", color: "blue" },
          ";",
          { id: "multishot", value: "2" },
          ",",
          { id: "bleed", value: "1" },
        ],
      },
    },
    veteran: {
      standard: {
        immunities: ["poison"],
        position: "top",
        rune: "orange",
        attackType: "melee",
        hp: 15,
        damage: 6,
        movement: 5,
        attack: [{ id: "jump", color: "blue" }, ";", { id: "bleed", value: "2" }, "AND", { id: "knock-down" }],
      },
      alternate: {
        immunities: ["poison"],
        position: "top",
        rune: "orange",
        attackType: "ranged",
        hp: 15,
        damage: 3,
        movement: 4,
        attack: [
          { id: "bloodseeker", color: "blue" },
          ";",
          { id: "multishot", value: "2" },
          ",",
          { id: "bleed", value: "2" },
        ],
      },
    },
    champion: {
      standard: {
        immunities: ["poison"],
        position: "top",
        rune: "orange",
        attackType: "melee",
        hp: 18,
        damage: 7,
        movement: 5,
        attack: [{ id: "jump", color: "blue" }, ";", { id: "bleed", value: "2" }, "AND", { id: "knock-down" }],
      },
      alternate: {
        immunities: ["poison"],
        position: "top",
        rune: "orange",
        attackType: "ranged",
        hp: 18,
        damage: 6,
        movement: 5,
        attack: [
          { id: "bloodseeker", color: "blue" },
          ";",
          { id: "multishot", value: "2" },
          ",",
          { id: "bleed", value: "2" },
        ],
      },
    },
  };
}
