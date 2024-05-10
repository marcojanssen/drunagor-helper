import ImageUrl from "@/assets/monster/big/CorruptedFarmerBig.webp";
import CardStandard from "@/assets/monster/cards/corrupted-farmer/rookie/standard.jpg";
import CardAlternate from "@/assets/monster/cards/corrupted-farmer/rookie/alternate.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class CorruptedFarmer implements MonsterData {
  id = "corrupted-farmer";
  name = "Corrupted Farmer";
  content: ContentId = "rise-of-the-undead-dragon";
  variants: VariantId[] = ["standard", "alternate"];
  images = {
    big: ImageUrl,
    miniature: "",
    cards: [CardStandard, CardAlternate,],
  };
  color: MonsterColor = "white";
  size: string = "small";
  initiative: number = InitiativePlaces.BOTTOM_GREEN;
  translation_key = "monster.corrupted-farmer";
}
