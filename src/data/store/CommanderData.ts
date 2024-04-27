import type { ContentId } from "@/data/type/ContentId";

export interface CommanderData {
  id: string;
  content: ContentId;
  name: string;
  images: {
    big: string;
    miniature: string;
  };
  translation_key: string;
}
