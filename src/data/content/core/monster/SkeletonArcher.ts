import AvatarUrl from "@/assets/monster/avatar/SkeletonArcherAvatar.webp";
import ImageUrl from "@/assets/monster/big/SkeletonArcherBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/SkeletonArcherMiniature.webp";
import type { MonsterData, Rank } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class SkeletonArcher implements MonsterData {
  id = "skeleton-archer";
  name = "Skeleton Archer";
  content: ContentId = "core";
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
        immunities: ["bleed"],
        position: "top",
        rune: "blue",
        attackType: "ranged",
        hp: 9,
        damage: 3,
        movement: 4,
        attack: [{ id: "multishot", value: "2" }, ",", { id: "poison", value: "1" }],
      },
      alternate: {
        immunities: ["bleed"],
        position: "top",
        rune: "blue",
        attackType: "ranged",
        hp: 6,
        damage: 4,
        movement: 4,
        attack: [{ id: "bloodseeker", color: "blue" }, ";", { id: "burn", value: "1" }],
      },
    },
    fighter: {
      standard: {
        immunities: ["bleed"],
        position: "top",
        rune: "blue",
        attackType: "ranged",
        hp: 12,
        damage: 4,
        movement: 4,
        attack: [{ id: "multishot", value: "2" }, ",", { id: "poison", value: "1" }],
      },
      alternate: {
        immunities: ["bleed"],
        position: "top",
        rune: "blue",
        attackType: "ranged",
        hp: 9,
        damage: 5,
        movement: 4,
        attack: [{ id: "bloodseeker", color: "blue" }, ";", { id: "burn", value: "2" }],
      },
    },
    veteran: {
      standard: {
        immunities: ["bleed"],
        position: "top",
        rune: "blue",
        attackType: "ranged",
        hp: 15,
        damage: 5,
        movement: 5,
        attack: [{ id: "multishot", value: "2" }, ",", { id: "poison", value: "2" }],
      },
      alternate: {
        immunities: ["bleed"],
        position: "top",
        rune: "blue",
        attackType: "ranged",
        hp: 12,
        damage: 6,
        movement: 5,
        attack: [{ id: "bloodseeker", color: "blue" }, ";", { id: "burn", value: "3" }],
      },
    },
    champion: {
      standard: {
        immunities: ["bleed"],
        position: "top",
        rune: "blue",
        attackType: "ranged",
        hp: 18,
        damage: 6,
        movement: 5,
        attack: [{ id: "multishot", value: "2" }, ",", { id: "poison", value: "2" }],
      },
      alternate: {
        immunities: ["bleed"],
        position: "top",
        rune: "blue",
        attackType: "ranged",
        hp: 15,
        damage: 7,
        movement: 5,
        attack: [{ id: "bloodseeker", color: "blue" }, ";", { id: "burn", value: "4" }],
      },
    },
  };
}
