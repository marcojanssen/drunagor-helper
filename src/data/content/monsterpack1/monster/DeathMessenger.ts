import AvatarUrl from "@/assets/monster/avatar/DeathMessengerAvatar.webp";
import ImageUrl from "@/assets/monster/big/DeathMessengerBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/DeathMessengerMiniature.webp";
import type { MonsterData, Rank } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class DeathMessenger implements MonsterData {
  id = "death-messenger";
  name = "Death Messenger";
  content: ContentId = "monster-pack-1";
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
        immunities: ["bleed", "slow"],
        position: "top",
        rune: "red",
        attackType: "melee",
        hp: 12,
        damage: 5,
        movement: 3,
        attack: "CURSE 1 AND SHADOW AURA",
      },
      alternate: {
        immunities: ["bleed", "slow"],
        position: "top",
        rune: "red",
        attackType: "melee",
        hp: 9,
        damage: 4,
        movement: 4,
        attack: "RECKONER; PENITENCE AND SLOW",
      },
    },
    fighter: {
      standard: {
        immunities: ["bleed", "slow"],
        position: "top",
        rune: "red",
        attackType: "melee",
        hp: 16,
        damage: 6,
        movement: 3,
        attack: "CURSE 1 AND SHADOW AURA",
      },
      alternate: {
        immunities: ["bleed", "slow"],
        position: "top",
        rune: "red",
        attackType: "melee",
        hp: 12,
        damage: 5,
        movement: 4,
        attack: "RECKONER; PENITENCE AND SLOW",
      },
    },
    veteran: {
      standard: {
        immunities: ["bleed", "slow"],
        position: "top",
        rune: "red",
        attackType: "melee",
        hp: 20,
        damage: 7,
        movement: 4,
        attack: "CURSE 1 AND SHADOW AURA",
      },
      alternate: {
        immunities: ["bleed", "slow"],
        position: "top",
        rune: "red",
        attackType: "melee",
        hp: 15,
        damage: 6,
        movement: 5,
        attack: "RECKONER; PENITENCE AND SLOW",
      },
    },
    champion: {
      standard: {
        immunities: ["bleed", "slow"],
        position: "top",
        rune: "red",
        attackType: "melee",
        hp: 24,
        damage: 8,
        movement: 4,
        attack: "CURSE 1 AND SHADOW AURA",
      },
      alternate: {
        immunities: ["bleed", "slow"],
        position: "top",
        rune: "red",
        attackType: "melee",
        hp: 18,
        damage: 7,
        movement: 5,
        attack: "RECKONER; PENITENCE AND SLOW",
      },
    },
  };
}
