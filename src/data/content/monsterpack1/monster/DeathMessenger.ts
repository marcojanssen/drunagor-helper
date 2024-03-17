import ImageUrl from "@/assets/monster/big/DeathMessengerBig.webp";
import MiniatureUrl from "@/assets/monster/miniature/DeathMessengerMiniature.webp";
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
  };
  color: MonsterColor = "gray";
  translation_key = "monster.death-messenger";
}
