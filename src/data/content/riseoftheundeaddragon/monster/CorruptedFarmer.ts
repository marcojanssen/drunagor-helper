import AvatarUrl from "@/assets/monster/avatar/CorruptedFarmerAvatar.webp";
import ImageUrl from "@/assets/monster/big/CorruptedFarmerBig.webp";
import type { MonsterData, Rank } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class CorruptedFarmer implements MonsterData {
  id = "corrupted-farmer";
  name = "Corrupted Farmer";
  content: ContentId = "rise-of-the-undead-dragon";
  variants: VariantId[] = ["standard", "alternate"];
  images = {
    avatar: AvatarUrl,
    big: ImageUrl,
    miniature: "",
    list: "",
  };
  color: MonsterColor = "white";
  rank: Rank = {
    rookie: {
      standard: {
        immunities: ["intimidate"],
        position: "bottom",
        rune: "green",
        attackType: "melee",
        hp: 9,
        damage: 4,
        movement: 4,
        attack: "REGENERATION 1; BLEED 1 AND SLOW",
      },
      alternate: {
        immunities: ["intimidate"],
        position: "bottom",
        rune: "green",
        attackType: "melee",
        hp: 9,
        damage: 3,
        movement: 4,
        attack: "SHIELD X; DEFIANT; CLEAVE 2, FATIGUE 1 AND PUSH 1",
      },
    },
    fighter: {
      standard: {
        immunities: ["intimidate"],
        position: "bottom",
        rune: "green",
        attackType: "melee",
        hp: 12,
        damage: 5,
        movement: 4,
        attack: "REGENERATION 1; BLEED 1 AND SLOW",
      },
      alternate: {
        immunities: ["intimidate"],
        position: "bottom",
        rune: "green",
        attackType: "melee",
        hp: 12,
        damage: 4,
        movement: 4,
        attack: "SHIELD X; DEFIANT; CLEAVE 2, FATIGUE 2 AND PUSH 1",
      },
    },
    veteran: {
      standard: {
        immunities: ["intimidate"],
        position: "bottom",
        rune: "green",
        attackType: "melee",
        hp: 15,
        damage: 6,
        movement: 5,
        attack: "REGENERATION 2; BLEED 2 AND SLOW",
      },
      alternate: {
        immunities: ["intimidate"],
        position: "bottom",
        rune: "green",
        attackType: "melee",
        hp: 15,
        damage: 5,
        movement: 5,
        attack: "SHIELD X; DEFIANT; CLEAVE 2, FATIGUE 3 AND PUSH 1",
      },
    },
    champion: {
      standard: {
        immunities: ["intimidate"],
        position: "bottom",
        rune: "green",
        attackType: "melee",
        hp: 18,
        damage: 7,
        movement: 5,
        attack: "REGENERATION 2; BLEED 2 AND SLOW",
      },
      alternate: {
        immunities: ["intimidate"],
        position: "bottom",
        rune: "green",
        attackType: "melee",
        hp: 18,
        damage: 6,
        movement: 5,
        attack: "SHIELD X; DEFIANT; CLEAVE 2, FATIGUE 4 AND PUSH 1",
      },
    },
  };
}
