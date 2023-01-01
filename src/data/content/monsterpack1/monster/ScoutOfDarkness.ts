import AvatarUrl from "@/assets/monster/avatar/ScoutOfDarknessAvatar.webp";
import ImageUrl from "@/assets/monster/big/ScoutOfDarknessBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/ScoutOfDarknessMiniature.webp";
import type { MonsterData, Rank } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class ScoutOfDarkness implements MonsterData {
  id = "scout-of-darkness";
  name = "Scout Of Darkness";
  content: ContentId = "monster-pack-1";
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
        immunities: ["stun"],
        position: "bottom",
        rune: "orange",
        attackType: "melee",
        hp: 9,
        damage: 2,
        movement: 4,
        attack: [{ id: "attack-twice" }, ",", { id: "drain-health", value: "1" }],
      },
      alternate: {
        immunities: ["stun"],
        position: "bottom",
        rune: "orange",
        attackType: "melee",
        hp: 9,
        damage: 3,
        movement: 4,
        attack: [
          { id: "bloodseeker", color: "blue" },
          ";",
          { id: "intimidate", value: "X" },
          "AND",
          { id: "knock-down" },
        ],
      },
    },
    fighter: {
      standard: {
        immunities: ["stun"],
        position: "bottom",
        rune: "orange",
        attackType: "melee",
        hp: 12,
        damage: 3,
        movement: 4,
        attack: [{ id: "attack-twice" }, ",", { id: "drain-health", value: "1" }],
      },
      alternate: {
        immunities: ["stun"],
        position: "bottom",
        rune: "orange",
        attackType: "melee",
        hp: 12,
        damage: 4,
        movement: 4,
        attack: [
          { id: "bloodseeker", color: "blue" },
          ";",
          { id: "intimidate", value: "X" },
          "AND",
          { id: "knock-down" },
        ],
      },
    },
    veteran: {
      standard: {
        immunities: ["stun"],
        position: "bottom",
        rune: "orange",
        attackType: "melee",
        hp: 15,
        damage: 4,
        movement: 5,
        attack: [{ id: "attack-twice" }, ",", { id: "drain-health", value: "2" }],
      },
      alternate: {
        immunities: ["stun"],
        position: "bottom",
        rune: "orange",
        attackType: "melee",
        hp: 15,
        damage: 5,
        movement: 5,
        attack: [
          { id: "bloodseeker", color: "blue" },
          ";",
          { id: "intimidate", value: "X" },
          "AND",
          { id: "knock-down" },
        ],
      },
    },
    champion: {
      standard: {
        immunities: ["stun"],
        position: "bottom",
        rune: "orange",
        attackType: "melee",
        hp: 18,
        damage: 5,
        movement: 5,
        attack: [{ id: "attack-twice" }, ",", { id: "drain-health", value: "2" }],
      },
      alternate: {
        immunities: ["stun"],
        position: "bottom",
        rune: "orange",
        attackType: "melee",
        hp: 18,
        damage: 6,
        movement: 5,
        attack: [
          { id: "bloodseeker", color: "blue" },
          ";",
          { id: "intimidate", value: "X" },
          "AND",
          { id: "knock-down" },
        ],
      },
    },
  };
}
