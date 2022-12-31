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
        attack: "ATTACK TWICE, DRAIN HEALTH 1",
      },
      alternate: {
        immunities: ["stun"],
        position: "bottom",
        rune: "orange",
        attackType: "melee",
        hp: 9,
        damage: 3,
        movement: 4,
        attack: "BLOODSEEKER; INTIMIDATE X AND KNOCK DOWN",
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
        attack: "ATTACK TWICE, DRAIN HEALTH 1",
      },
      alternate: {
        immunities: ["stun"],
        position: "bottom",
        rune: "orange",
        attackType: "melee",
        hp: 12,
        damage: 4,
        movement: 4,
        attack: "BLOODSEEKER; INTIMIDATE X AND KNOCK DOWN",
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
        attack: "ATTACK TWICE, DRAIN HEALTH 2",
      },
      alternate: {
        immunities: ["stun"],
        position: "bottom",
        rune: "orange",
        attackType: "melee",
        hp: 15,
        damage: 5,
        movement: 5,
        attack: "BLOODSEEKER; INTIMIDATE X AND KNOCK DOWN",
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
        attack: "ATTACK TWICE, DRAIN HEALTH 2",
      },
      alternate: {
        immunities: ["stun"],
        position: "bottom",
        rune: "orange",
        attackType: "melee",
        hp: 18,
        damage: 6,
        movement: 5,
        attack: "BLOODSEEKER; INTIMIDATE X AND KNOCK DOWN",
      },
    },
  };
}
