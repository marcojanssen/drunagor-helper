import type { ContentData } from "@/data/store/ContentData";
import type { ContentId } from "@/data/type/ContentId";

export class TheRuinOfLuccanor implements ContentData {
  public readonly id: ContentId = "the-ruin-of-luccanor";
  public readonly title = "The Ruin of Luccanor";
  public readonly heroes = false;
  public readonly monsters = true;
  public readonly items = false;
  public readonly translation_key = "content.the-ruin-of-luccanor";
}
