import AvatarUrl from "@/assets/monster/avatar/ExecutionerAvatar.webp";
import ImageUrl from "@/assets/monster/big/ExecutionerBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/ExecutionerMiniature.webp";
import type { MonsterData, Rank } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class Executioner implements MonsterData {
  id = "executioner";
  name = "Executioner";
  content: ContentId = "core";
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
        immunities: ["intimidate", "slow"],
        position: "bottom",
        rune: "green",
        attackType: "melee",
        hp: 12,
        damage: 4,
        movement: 4,
        attack: [{ id: "cleave", value: "2" }, ",", { id: "bleed", value: "1" }, "AND", { id: "slow" }],
      },
      alternate: {
        immunities: ["intimidate", "slow"],
        position: "bottom",
        rune: "green",
        attackType: "melee",
        hp: 15,
        damage: 3,
        movement: 4,
        attack: [
          { id: "shield", value: "1", color: "pink" },
          ";",
          { id: "reckoner", color: "blue" },
          ",",
          { id: "cleave", value: "2" },
          "AND",
          { id: "curse", value: "1" },
        ],
      },
    },
    fighter: {
      standard: {
        immunities: ["intimidate", "slow"],
        position: "bottom",
        rune: "green",
        attackType: "melee",
        hp: 16,
        damage: 5,
        movement: 4,
        attack: [{ id: "cleave", value: "2" }, ",", { id: "bleed", value: "1" }, "AND", { id: "slow" }],
      },
      alternate: {
        immunities: ["intimidate", "slow"],
        position: "bottom",
        rune: "green",
        attackType: "melee",
        hp: 20,
        damage: 4,
        movement: 4,
        attack: [
          { id: "shield", value: "2", color: "pink" },
          ";",
          { id: "reckoner", color: "blue" },
          ",",
          { id: "cleave", value: "2" },
          "AND",
          { id: "curse", value: "1" },
        ],
      },
    },
    veteran: {
      standard: {
        immunities: ["intimidate", "slow"],
        position: "bottom",
        rune: "green",
        attackType: "melee",
        hp: 20,
        damage: 6,
        movement: 5,
        attack: [{ id: "cleave", value: "2" }, ",", { id: "bleed", value: "2" }, "AND", { id: "slow" }],
      },
      alternate: {
        immunities: ["intimidate", "slow"],
        position: "bottom",
        rune: "green",
        attackType: "melee",
        hp: 25,
        damage: 5,
        movement: 5,
        attack: [
          { id: "shield", value: "3", color: "pink" },
          ";",
          { id: "reckoner", color: "blue" },
          ",",
          { id: "cleave", value: "2" },
          "AND",
          { id: "curse", value: "1" },
        ],
      },
    },
    champion: {
      standard: {
        immunities: ["intimidate", "slow"],
        position: "bottom",
        rune: "green",
        attackType: "melee",
        hp: 24,
        damage: 7,
        movement: 5,
        attack: [{ id: "cleave", value: "2" }, ",", { id: "bleed", value: "2" }, "AND", { id: "slow" }],
      },
      alternate: {
        immunities: ["intimidate", "slow"],
        position: "bottom",
        rune: "green",
        attackType: "melee",
        hp: 30,
        damage: 6,
        movement: 5,
        attack: [
          { id: "shield", value: "4", color: "pink" },
          ";",
          { id: "reckoner", color: "blue" },
          ",",
          { id: "cleave", value: "2" },
          "AND",
          { id: "curse", value: "1" },
        ],
      },
    },
  };
}
