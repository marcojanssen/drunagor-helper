import AvatarUrl from "@/assets/monster/avatar/CorruptedWormAvatar.webp";
import ImageUrl from "@/assets/monster/big/CorruptedWormBig.webp";
import type { MonsterData, Rank } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class CorruptedWorm implements MonsterData {
  id = "corrupted-worm";
  name = "Corrupted Worm";
  content: ContentId = "desert-of-hellscar";
  variants: VariantId[] = ["standard", "alternate"];
  images = {
    avatar: AvatarUrl,
    big: ImageUrl,
    miniature: "",
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
        hp: 9,
        damage: 5,
        movement: 5,
        attack: "SHIELD 1; POISON 1 AND KNOCK DOWN",
      },
      alternate: {
        immunities: ["knock-down", "stealth"],
        position: "top",
        rune: "green",
        attackType: "melee",
        hp: 9,
        damage: 4,
        movement: 5,
        attack: "RELENTLESS; CLEAVE 2, BURN 1 AND INTIMIDATE 1",
      },
    },
    fighter: {
      standard: {
        immunities: ["knock-down", "stealth"],
        position: "top",
        rune: "green",
        attackType: "melee",
        hp: 12,
        damage: 6,
        movement: 5,
        attack: "SHIELD 1; POISON 1 AND KNOCK DOWN",
      },
      alternate: {
        immunities: ["knock-down", "stealth"],
        position: "top",
        rune: "green",
        attackType: "melee",
        hp: 12,
        damage: 5,
        movement: 5,
        attack: "RELENTLESS; CLEAVE 2, BURN 1 AND INTIMIDATE 1",
      },
    },
    veteran: {
      standard: {
        immunities: ["knock-down", "stealth"],
        position: "top",
        rune: "green",
        attackType: "melee",
        hp: 15,
        damage: 7,
        movement: 6,
        attack: "SHIELD 2; POISON 2 AND KNOCK DOWN",
      },
      alternate: {
        immunities: ["knock-down", "stealth"],
        position: "top",
        rune: "green",
        attackType: "melee",
        hp: 15,
        damage: 6,
        movement: 6,
        attack: "RELENTLESS; CLEAVE 2, BURN 2 AND INTIMIDATE 2",
      },
    },
    champion: {
      standard: {
        immunities: ["knock-down", "stealth"],
        position: "top",
        rune: "green",
        attackType: "melee",
        hp: 18,
        damage: 8,
        movement: 6,
        attack: "SHIELD 2; POISON 2 AND KNOCK DOWN",
      },
      alternate: {
        immunities: ["knock-down", "stealth"],
        position: "top",
        rune: "green",
        attackType: "melee",
        hp: 18,
        damage: 7,
        movement: 6,
        attack: "RELENTLESS; CLEAVE 2, BURN 2 AND INTIMIDATE 2",
      },
    },
  };
}
