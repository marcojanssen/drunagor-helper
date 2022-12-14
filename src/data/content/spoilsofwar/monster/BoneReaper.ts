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
        immunities: ["poison", "intimidate"],
        position: "bottom",
        rune: "black",
        attackType: "melee",
        hp: 12,
        damage: 4,
        movement: 3,
        attack: [
          { id: "regeneration", value: "X", color: "pink" },
          ";",
          { id: "cleave", value: "2" },
          ",",
          { id: "bleed", value: "1" },
        ],
      },
      alternate: {
        immunities: ["poison", "intimidate"],
        position: "bottom",
        rune: "black",
        attackType: "melee",
        hp: 12,
        damage: 4,
        movement: 3,
        attack: [
          { id: "bloodseeker", color: "blue" },
          ";",
          { id: "cleave", value: "2" },
          ",",
          { id: "bleed", value: "X" },
          ",",
          { id: "intimidate", value: "1" },
        ],
      },
    },
    fighter: {
      standard: {
        immunities: ["poison", "intimidate"],
        position: "bottom",
        rune: "black",
        attackType: "melee",
        hp: 16,
        damage: 5,
        movement: 3,
        attack: [
          { id: "regeneration", value: "X", color: "pink" },
          ";",
          { id: "cleave", value: "2" },
          ",",
          { id: "bleed", value: "2" },
        ],
      },
      alternate: {
        immunities: ["poison", "intimidate"],
        position: "bottom",
        rune: "black",
        attackType: "melee",
        hp: 16,
        damage: 5,
        movement: 3,
        attack: [
          { id: "bloodseeker", color: "blue" },
          ";",
          { id: "cleave", value: "2" },
          ",",
          { id: "bleed", value: "X" },
          ",",
          { id: "intimidate", value: "1" },
        ],
      },
    },
    veteran: {
      standard: {
        immunities: ["poison", "intimidate"],
        position: "bottom",
        rune: "black",
        attackType: "melee",
        hp: 20,
        damage: 6,
        movement: 4,
        attack: [
          { id: "regeneration", value: "X", color: "pink" },
          ";",
          { id: "cleave", value: "2" },
          ",",
          { id: "bleed", value: "3" },
        ],
      },
      alternate: {
        immunities: ["poison", "intimidate"],
        position: "bottom",
        rune: "black",
        attackType: "melee",
        hp: 20,
        damage: 6,
        movement: 4,
        attack: [
          { id: "bloodseeker", color: "blue" },
          ";",
          { id: "cleave", value: "2" },
          ",",
          { id: "bleed", value: "X" },
          ",",
          { id: "intimidate", value: "2" },
        ],
      },
    },
    champion: {
      standard: {
        immunities: ["poison", "intimidate"],
        position: "bottom",
        rune: "black",
        attackType: "melee",
        hp: 24,
        damage: 7,
        movement: 4,
        attack: [
          { id: "regeneration", value: "X", color: "pink" },
          ";",
          { id: "cleave", value: "2" },
          ",",
          { id: "bleed", value: "4" },
        ],
      },
      alternate: {
        immunities: ["poison", "intimidate"],
        position: "bottom",
        rune: "black",
        attackType: "melee",
        hp: 24,
        damage: 7,
        movement: 4,
        attack: [
          { id: "bloodseeker", color: "blue" },
          ";",
          { id: "cleave", value: "2" },
          ",",
          { id: "bleed", value: "X" },
          ",",
          { id: "intimidate", value: "2" },
        ],
      },
    },
  };
}
