import ImageUrl from "@/assets/monster/big/ShadowCultistBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/ShadowCultistMiniature.webp";
import CardStandard from "@/assets/monster/cards/shadow-cultist/rookie/standard.jpg";
import CardAlternate from "@/assets/monster/cards/shadow-cultist/rookie/alternate.jpg";
import CardSideA from "@/assets/monster/cards/shadow-cultist/rookie/sidea.jpg";
import CardSideB from "@/assets/monster/cards/shadow-cultist/rookie/sideb.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class ShadowCultist implements MonsterData {
  id = "shadow-cultist";
  name = "Shadow Cultist";
  content: ContentId = "core";
  variants: VariantId[] = ["standard", "alternate", "complex"];
  images = {
    big: ImageUrl,
    miniature: MiniatureUrl,
    cards: [CardStandard, CardAlternate, CardSideA, CardSideB,],
  };
  color: MonsterColor = "white";
  size: string = "small";
  initiative: number = InitiativePlaces.TOP_RED;
  translation_key = "monster.shadow-cultist";
}
