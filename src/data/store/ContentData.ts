import type { ContentId } from "@/data/type/ContentId";

export interface ContentData {
  id: ContentId;
  title: string;
  heroes: boolean;
  monsters: boolean;
  translation_key: string;
}
