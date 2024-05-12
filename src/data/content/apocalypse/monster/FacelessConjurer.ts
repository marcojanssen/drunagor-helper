import ImageUrl from "@/assets/monster/big/FacelessConjurerBig.webp";
import RookieStandard from "@/assets/monster/cards/faceless-conjurer/rookie/standard.jpg";
import RookieAlternate from "@/assets/monster/cards/faceless-conjurer/rookie/alternate.jpg";
import FighterStandard from "@/assets/monster/cards/faceless-conjurer/fighter/standard.jpg";
import FighterAlternate from "@/assets/monster/cards/faceless-conjurer/fighter/alternate.jpg";
import VeteranStandard from "@/assets/monster/cards/faceless-conjurer/veteran/standard.jpg";
import VeteranAlternate from "@/assets/monster/cards/faceless-conjurer/veteran/alternate.jpg";
import ChampionStandard from "@/assets/monster/cards/faceless-conjurer/champion/standard.jpg";
import ChampionAlternate from "@/assets/monster/cards/faceless-conjurer/champion/alternate.jpg";
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
    cards: {
      rookie: [RookieStandard, RookieAlternate,],
      fighter: [FighterStandard, FighterAlternate,],
      veteran: [VeteranStandard, VeteranAlternate,],
      champion: [ChampionStandard, ChampionAlternate,],
    },
  };
  color: MonsterColor = "gray";
  size: string = "small";
  initiative: number = InitiativePlaces.BOTTOM_ORANGE;
  translation_key = "monster.faceless-conjurer";
}
