import ImageUrl from "@/assets/monster/big/ShadowKnightBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/ShadowKnightMiniature.webp";
import Card from "@/assets/monster/cards/scenario-monsters/manifestation-of-wrath.jpg";
import CardBack from "@/assets/monster/cards/scenario-monsters/manifestation-of-wrath-back.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class ManifestationOfWrath implements MonsterData {
  id = "manifestation-of-wrath";
  name = "Manifestation of Wrath";
  content: ContentId = "core";
  variants: VariantId[] = ["standard"];
  images = {
    big: ImageUrl,
    miniature: MiniatureUrl,
    cards: {
      rookie: [Card, CardBack],
      fighter: [Card, CardBack],
      veteran: [Card, CardBack],
      champion: [Card, CardBack],
    },
  };
  color: MonsterColor = "other";
  size: string = "small";
  initiative: number = InitiativePlaces.BOTTOM_BLUE;
  translation_key = "monster.manifestation-of-wrath";
}
