import ImageUrl from "@/assets/monster/big/DeathMessengerBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/DeathMessengerMiniature.webp";
import RookieStandard from "@/assets/monster/cards/death-messenger/rookie/standard.jpg";
import RookieAlternate from "@/assets/monster/cards/death-messenger/rookie/alternate.jpg";
import FighterStandard from "@/assets/monster/cards/death-messenger/fighter/standard.jpg";
import FighterAlternate from "@/assets/monster/cards/death-messenger/fighter/alternate.jpg";
import VeteranStandard from "@/assets/monster/cards/death-messenger/veteran/standard.jpg";
import VeteranAlternate from "@/assets/monster/cards/death-messenger/veteran/alternate.jpg";
import ChampionStandard from "@/assets/monster/cards/death-messenger/champion/standard.jpg";
import ChampionAlternate from "@/assets/monster/cards/death-messenger/champion/alternate.jpg";
import InitiativePlaces from "@/data/initiative/InitiativePlaces";
import type { MonsterData } from "@/data/store/MonsterData";
import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";

export class DeathMessenger implements MonsterData {
  id = "death-messenger";
  name = "Death Messenger";
  content: ContentId = "monster-pack-1";
  variants: VariantId[] = ["standard", "alternate"];
  images = {
    big: ImageUrl,
    miniature: MiniatureUrl,
    cards: {
      rookie: [RookieStandard, RookieAlternate,],
      fighter: [FighterStandard, FighterAlternate,],
      veteran: [VeteranStandard, VeteranAlternate,],
      champion: [ChampionStandard, ChampionAlternate,],
    },
  };
  color: MonsterColor = "gray";
  size: string = "small";
  initiative: number = InitiativePlaces.TOP_RED;
  translation_key = "monster.death-messenger";
}
