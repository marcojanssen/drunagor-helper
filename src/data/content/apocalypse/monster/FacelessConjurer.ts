import ImageUrl from "@/assets/monster/big/FacelessConjurerBig.webp";
import CardStandard from "@/assets/monster/cards/faceless-conjurer/rookie/standard.jpg";
import CardAlternate from "@/assets/monster/cards/faceless-conjurer/rookie/alternate.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class FacelessConjurer implements MonsterData {
  id = "faceless-conjurer";
  name = "Faceless Conjurer";
  content: ContentId = "apocalypse";
  variants: VariantId[] = ["standard", "alternate"];
  images = {
    big: ImageUrl,
    miniature: "",
    cards: [CardStandard, CardAlternate,],
  };
  color: MonsterColor = "gray";
  size: string = "small";
  initiative: number = InitiativePlaces.BOTTOM_ORANGE;
  translation_key = "monster.faceless-conjurer";
}
