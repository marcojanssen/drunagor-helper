import AvatarUrl from "@/assets/monster/avatar/RottenFleshAvatar.webp";
import ImageUrl from "@/assets/monster/big/RottenFleshBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/RottenFleshMiniature.webp";
import type { MonsterData, Rank } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class RottenFlesh implements MonsterData {
  id = "rotten-flesh";
  name = "Rotten Flesh";
  content: ContentId = "core";
  variants: VariantId[] = ["standard", "alternate", "complex"];
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
        immunities: ["stun"],
        position: "bottom",
        rune: "red",
        attackType: "melee",
        hp: 12,
        damage: 3,
        movement: 3,
        attack: "ATTACK TWICE, INTIMIDATE 1",
      },
      alternate: {
        immunities: ["stun"],
        position: "bottom",
        rune: "red",
        attackType: "melee",
        hp: 12,
        damage: 5,
        movement: 2,
        attack: "DEFIANT; DRAIN HEALTH 1 AND FATIGUE 1",
      },
    },
    fighter: {
      standard: {
        immunities: ["stun"],
        position: "bottom",
        rune: "red",
        attackType: "melee",
        hp: 16,
        damage: 4,
        movement: 3,
        attack: "ATTACK TWICE, INTIMIDATE 1",
      },
      alternate: {
        immunities: ["stun"],
        position: "bottom",
        rune: "red",
        attackType: "melee",
        hp: 16,
        damage: 6,
        movement: 2,
        attack: "DEFIANT; DRAIN HEALTH 1 AND FATIGUE 2",
      },
    },
    veteran: {
      standard: {
        immunities: ["stun"],
        position: "bottom",
        rune: "red",
        attackType: "melee",
        hp: 20,
        damage: 5,
        movement: 4,
        attack: "ATTACK TWICE, INTIMIDATE 2",
      },
      alternate: {
        immunities: ["stun"],
        position: "bottom",
        rune: "red",
        attackType: "melee",
        hp: 20,
        damage: 7,
        movement: 3,
        attack: "DEFIANT; DRAIN HEALTH 2 AND FATIGUE 3",
      },
    },
    champion: {
      standard: {
        immunities: ["stun"],
        position: "bottom",
        rune: "red",
        attackType: "melee",
        hp: 24,
        damage: 6,
        movement: 4,
        attack: "ATTACK TWICE, INTIMIDATE 2",
      },
      alternate: {
        immunities: ["stun"],
        position: "bottom",
        rune: "red",
        attackType: "melee",
        hp: 24,
        damage: 8,
        movement: 3,
        attack: "DEFIANT; DRAIN HEALTH 2 AND FATIGUE 4",
      },
    },
  };
}
