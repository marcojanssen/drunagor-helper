import AvatarUrl from "@/assets/monster/avatar/ShadowVampireAvatar.webp";
import ImageUrl from "@/assets/monster/big/ShadowVampireBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/ShadowVampireMiniature.webp";
import type { MonsterData, Rank } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class ShadowVampire implements MonsterData {
  id = "shadow-vampire";
  name = "Shadow Vampire";
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
        immunities: ["knock-down", "stealth"],
        position: "top",
        rune: "green",
        attackType: "melee",
        hp: 12,
        damage: 5,
        movement: 5,
        attack: "JUMP; DRAIN HEALTH 1",
      },
      alternate: {
        immunities: ["knock-down", "stealth"],
        position: "top",
        rune: "green",
        attackType: "melee",
        hp: 9,
        damage: 1,
        movement: 5,
        attack: "JUMP; RELENTLESS; VICIOUS",
      },
    },
    fighter: {
      standard: {
        immunities: ["knock-down", "stealth"],
        position: "top",
        rune: "green",
        attackType: "melee",
        hp: 16,
        damage: 6,
        movement: 5,
        attack: "JUMP; DRAIN HEALTH 1",
      },
      alternate: {
        immunities: ["knock-down", "stealth"],
        position: "top",
        rune: "green",
        attackType: "melee",
        hp: 12,
        damage: 2,
        movement: 5,
        attack: "JUMP; RELENTLESS; VICIOUS",
      },
    },
    veteran: {
      standard: {
        immunities: ["knock-down", "stealth"],
        position: "top",
        rune: "green",
        attackType: "melee",
        hp: 20,
        damage: 7,
        movement: 6,
        attack: "JUMP; DRAIN HEALTH 2",
      },
      alternate: {
        immunities: ["knock-down", "stealth"],
        position: "top",
        rune: "green",
        attackType: "melee",
        hp: 15,
        damage: 3,
        movement: 5,
        attack: "JUMP; RELENTLESS; VICIOUS",
      },
    },
    champion: {
      standard: {
        immunities: ["knock-down", "stealth"],
        position: "top",
        rune: "green",
        attackType: "melee",
        hp: 24,
        damage: 8,
        movement: 6,
        attack: "JUMP; DRAIN HEALTH 2",
      },
      alternate: {
        immunities: ["knock-down", "stealth"],
        position: "top",
        rune: "green",
        attackType: "melee",
        hp: 18,
        damage: 4,
        movement: 5,
        attack: "JUMP; RELENTLESS; VICIOUS",
      },
    },
  };
}
