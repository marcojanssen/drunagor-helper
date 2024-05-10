import ImageUrl from "@/assets/monster/big/GrimDoctorBig.webp";
import CardStandard from "@/assets/monster/cards/grim-doctor/rookie/standard.jpg";
import CardAlternate from "@/assets/monster/cards/grim-doctor/rookie/alternate.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class GrimDoctor implements MonsterData {
  id = "grim-doctor";
  name = "Grim Doctor";
  content: ContentId = "awakenings";
  variants: VariantId[] = ["standard", "alternate"];
  images = {
    big: ImageUrl,
    miniature: "",
    cards: [CardStandard, CardAlternate,],
  };
  color: MonsterColor = "white";
  size: string = "small";
  initiative: number = InitiativePlaces.TOP_BLUE;
  translation_key = "monster.grim-doctor";
}
