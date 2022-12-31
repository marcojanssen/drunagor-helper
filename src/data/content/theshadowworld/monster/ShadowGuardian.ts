import AvatarUrl from "@/assets/monster/avatar/ShadowGuardianAvatar.webp";
import ImageUrl from "@/assets/monster/big/ShadowGuardianBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/ShadowGuardianMiniature.webp";
import type { MonsterData, Rank } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class ShadowGuardian implements MonsterData {
  id = "shadow-guardian";
  name = "Shadow Guardian";
  content: ContentId = "the-shadow-world";
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
        immunities: ["bleed", "stealth"],
        position: "top",
        rune: "black",
        attackType: "ranged",
        hp: 12,
        damage: 3,
        movement: 3,
        attack: "JUMP; STRIKE 1, PENITENCE",
      },
      alternate: {
        immunities: ["bleed", "stealth"],
        position: "top",
        rune: "black",
        attackType: "melee",
        hp: 9,
        damage: 4,
        movement: 4,
        attack: "RECKONER; SHADOW AURA AND STUN",
      },
    },
    fighter: {
      standard: {
        immunities: ["bleed", "stealth"],
        position: "top",
        rune: "black",
        attackType: "ranged",
        hp: 16,
        damage: 4,
        movement: 3,
        attack: "JUMP; STRIKE 1, PENITENCE",
      },
      alternate: {
        immunities: ["bleed", "stealth"],
        position: "top",
        rune: "black",
        attackType: "melee",
        hp: 12,
        damage: 5,
        movement: 4,
        attack: "RECKONER; SHADOW AURA AND STUN",
      },
    },
    veteran: {
      standard: {
        immunities: ["bleed", "stealth"],
        position: "top",
        rune: "black",
        attackType: "ranged",
        hp: 20,
        damage: 5,
        movement: 4,
        attack: "JUMP; STRIKE 1, PENITENCE",
      },
      alternate: {
        immunities: ["bleed", "stealth"],
        position: "top",
        rune: "black",
        attackType: "melee",
        hp: 15,
        damage: 6,
        movement: 5,
        attack: "RECKONER; SHADOW AURA AND STUN",
      },
    },
    champion: {
      standard: {
        immunities: ["bleed", "stealth"],
        position: "top",
        rune: "black",
        attackType: "ranged",
        hp: 24,
        damage: 6,
        movement: 4,
        attack: "JUMP; STRIKE 1, PENITENCE",
      },
      alternate: {
        immunities: ["bleed", "stealth"],
        position: "top",
        rune: "black",
        attackType: "melee",
        hp: 18,
        damage: 7,
        movement: 5,
        attack: "RECKONER; SHADOW AURA AND STUN",
      },
    },
  };
}
