import AvatarUrl from "@/assets/monster/avatar/ShadowMistressAvatar.webp";
import ImageUrl from "@/assets/monster/big/ShadowMistressBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/ShadowMistressMiniature.webp";
import type { MonsterData, Rank } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class ShadowMistress implements MonsterData {
  id = "shadow-mistress";
  name = "Shadow Mistress";
  content: ContentId = "spoils-of-war";
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
        position: "top",
        rune: "orange",
        attackType: "melee",
        hp: 9,
        damage: 2,
        movement: 4,
        attack: "SHIELD X; CLEAVE 2, ATTACK TWICE",
      },
      alternate: {
        immunities: ["stun"],
        position: "top",
        rune: "orange",
        attackType: "melee",
        hp: 9,
        damage: 3,
        movement: 4,
        attack: "RECKONER; ATTACK TWICE",
      },
    },
    fighter: {
      standard: {
        immunities: ["stun"],
        position: "top",
        rune: "orange",
        attackType: "melee",
        hp: 12,
        damage: 3,
        movement: 4,
        attack: "SHIELD X; CLEAVE 2, ATTACK TWICE",
      },
      alternate: {
        immunities: ["stun"],
        position: "top",
        rune: "orange",
        attackType: "melee",
        hp: 12,
        damage: 4,
        movement: 4,
        attack: "RECKONER; ATTACK TWICE",
      },
    },
    veteran: {
      standard: {
        immunities: ["stun"],
        position: "top",
        rune: "orange",
        attackType: "melee",
        hp: 15,
        damage: 4,
        movement: 5,
        attack: "SHIELD X; CLEAVE 2, ATTACK TWICE",
      },
      alternate: {
        immunities: ["stun"],
        position: "top",
        rune: "orange",
        attackType: "melee",
        hp: 15,
        damage: 5,
        movement: 5,
        attack: "RECKONER; ATTACK TWICE",
      },
    },
    champion: {
      standard: {
        immunities: ["stun"],
        position: "top",
        rune: "orange",
        attackType: "melee",
        hp: 18,
        damage: 5,
        movement: 5,
        attack: "SHIELD X; CLEAVE 2, ATTACK TWICE",
      },
      alternate: {
        immunities: ["stun"],
        position: "top",
        rune: "orange",
        attackType: "melee",
        hp: 18,
        damage: 6,
        movement: 5,
        attack: "RECKONER; ATTACK TWICE",
      },
    },
  };
}
