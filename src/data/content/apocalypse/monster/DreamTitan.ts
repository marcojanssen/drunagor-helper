import ImageUrl from "@/assets/monster/big/DreamTitanBig.webp";
import CardStandard from "@/assets/monster/cards/dream-titan/rookie/standard.jpg";
import CardAlternate from "@/assets/monster/cards/dream-titan/rookie/alternate.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class DreamTitan implements MonsterData {
  id = "dream-titan";
  name = "Dream Titan";
  content: ContentId = "apocalypse";
  variants: VariantId[] = ["standard", "alternate"];
  images = {
    big: ImageUrl,
    miniature: "",
    cards: [CardStandard, CardAlternate,],
  };
  color: MonsterColor = "black";
  size: string = "large";
  initiative: number = InitiativePlaces.TOP_GRAY;
  translation_key = "monster.dream-titan";
}
