import ImageUrl from "@/assets/monster/big/GorgonessWitchBig.webp";
import CardStandard from "@/assets/monster/cards/gorgoness-witch/rookie/standard.jpg";
import CardAlternate from "@/assets/monster/cards/gorgoness-witch/rookie/alternate.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class GorgonessWitch implements MonsterData {
  id = "gorgoness-witch";
  name = "Gorgoness Witch";
  content: ContentId = "awakenings";
  variants: VariantId[] = ["standard", "alternate"];
  images = {
    big: ImageUrl,
    miniature: "",
    cards: [CardStandard, CardAlternate,],
  };
  color: MonsterColor = "white";
  size: string = "small";
  initiative: number = InitiativePlaces.BOTTOM_GREEN;
  translation_key = "monster.gorgoness-witch";
}
