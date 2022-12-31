import AvatarUrl from "@/assets/monster/avatar/AbominationAvatar.webp";
import ImageUrl from "@/assets/monster/big/AbominationBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/AbominationMiniature.webp";
import type { MonsterData, Rank } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class Abomination implements MonsterData {
  id = "abomination";
  name = "Abomination";
  content: ContentId = "core";
  variants: VariantId[] = ["standard", "alternate"];
  images = {
    avatar: AvatarUrl,
    big: ImageUrl,
    miniature: MiniatureUrl,
    list: "",
  };
  color: MonsterColor = "black";
  rank: Rank = {
    rookie: {
      standard: {
        immunities: ["large", "burn"],
        position: "bottom",
        rune: "black",
        attackType: "melee",
        hp: 15,
        damage: 5,
        movement: 2,
        attack: "REGENERATION 1; STRIKE 1, STUN",
      },
      alternate: {
        immunities: ["large", "burn"],
        position: "bottom",
        rune: "black",
        attackType: "melee",
        hp: 15,
        damage: 3,
        movement: 2,
        attack: "DEFIANT; STRIKE 1, DRAIN HEALTH 1",
      },
    },
    fighter: {
      standard: {
        immunities: ["large", "burn"],
        position: "bottom",
        rune: "black",
        attackType: "melee",
        hp: 20,
        damage: 6,
        movement: 2,
        attack: "REGENERATION 1; STRIKE 1, STUN",
      },
      alternate: {
        immunities: ["large", "burn"],
        position: "bottom",
        rune: "black",
        attackType: "melee",
        hp: 20,
        damage: 4,
        movement: 2,
        attack: "DEFIANT; STRIKE 1, DRAIN HEALTH 2",
      },
    },
    veteran: {
      standard: {
        immunities: ["large", "burn"],
        position: "bottom",
        rune: "black",
        attackType: "melee",
        hp: 25,
        damage: 7,
        movement: 3,
        attack: "REGENERATION 2; STRIKE 1, STUN",
      },
      alternate: {
        immunities: ["large", "burn"],
        position: "bottom",
        rune: "black",
        attackType: "melee",
        hp: 25,
        damage: 5,
        movement: 3,
        attack: "DEFIANT; STRIKE 1, DRAIN HEALTH 3",
      },
    },
    champion: {
      standard: {
        immunities: ["large", "burn"],
        position: "bottom",
        rune: "black",
        attackType: "melee",
        hp: 30,
        damage: 8,
        movement: 3,
        attack: "REGENERATION 2; STRIKE 1, STUN",
      },
      alternate: {
        immunities: ["large", "burn"],
        position: "bottom",
        rune: "black",
        attackType: "melee",
        hp: 30,
        damage: 6,
        movement: 3,
        attack: "DEFIANT; STRIKE 1, DRAIN HEALTH 4",
      },
    },
  };
}
