import ImageUrl from "@/assets/monster/big/NagianHunterBig.webp";
import CardStandard from "@/assets/monster/cards/nagian-hunter/rookie/standard.jpg";
import CardAlternate from "@/assets/monster/cards/nagian-hunter/rookie/alternate.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class NagianHunter implements MonsterData {
  id = "nagian-hunter";
  name = "Nagian Hunter";
  content: ContentId = "awakenings";
  variants: VariantId[] = ["standard", "alternate"];
  images = {
    big: ImageUrl,
    miniature: "",
    cards: [CardStandard, CardAlternate,],
  };
  color: MonsterColor = "white";
  size: string = "small";
  initiative: number = InitiativePlaces.TOP_ORANGE;
  translation_key = "monster.nagian-hunter";
}
