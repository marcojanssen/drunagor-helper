import ImageUrl from "@/assets/monster/big/NightStalkerBig.webp";
import CardStandard from "@/assets/monster/cards/night-stalker/rookie/standard.jpg";
import CardAlternate from "@/assets/monster/cards/night-stalker/rookie/alternate.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class NightStalker implements MonsterData {
  id = "night-stalker";
  name = "Night Stalker";
  content: ContentId = "awakenings";
  variants: VariantId[] = ["standard", "alternate"];
  images = {
    big: ImageUrl,
    miniature: "",
    cards: [CardStandard, CardAlternate,],
  };
  color: MonsterColor = "gray";
  translation_key = "monster.night-stalker";
  size: string = "small";
  initiative: number = InitiativePlaces.TOP_RED;
}
