import ImageUrl from "@/assets/monster/big/ShadowKnightBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/ShadowKnightMiniature.webp";
import CardStandard from "@/assets/monster/cards/shadow-knight/rookie/standard.jpg";
import CardAlternate from "@/assets/monster/cards/shadow-knight/rookie/alternate.jpg";
import CardSideA from "@/assets/monster/cards/shadow-knight/rookie/sidea.jpg";
import CardSideB from "@/assets/monster/cards/shadow-knight/rookie/sideb.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class ShadowKnight implements MonsterData {
  id = "shadow-knight";
  name = "Shadow Knight";
  content: ContentId = "core";
  variants: VariantId[] = ["standard", "alternate", "complex"];
  images = {
    big: ImageUrl,
    miniature: MiniatureUrl,
    cards: [CardStandard, CardAlternate, CardSideA, CardSideB,],
  };
  color: MonsterColor = "black";
  size: string = "large";
  initiative: number = InitiativePlaces.TOP_GRAY;
  translation_key = "monster.shadow-knight";
}
