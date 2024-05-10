import ImageUrl from "@/assets/monster/big/RottenFleshBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/RottenFleshMiniature.webp";
import CardStandard from "@/assets/monster/cards/rotten-flesh/rookie/standard.jpg";
import CardAlternate from "@/assets/monster/cards/rotten-flesh/rookie/alternate.jpg";
import CardSideA from "@/assets/monster/cards/rotten-flesh/rookie/sidea.jpg";
import CardSideB from "@/assets/monster/cards/rotten-flesh/rookie/sideb.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class RottenFlesh implements MonsterData {
  id = "rotten-flesh";
  name = "Rotten Flesh";
  content: ContentId = "core";
  variants: VariantId[] = ["standard", "alternate", "complex"];
  images = {
    big: ImageUrl,
    miniature: MiniatureUrl,
    cards: [CardStandard, CardAlternate, CardSideA, CardSideB,],
  };
  color: MonsterColor = "gray";
  size: string = "small";
  initiative: number = InitiativePlaces.BOTTOM_RED;
  translation_key = "monster.rotten-flesh";
}
