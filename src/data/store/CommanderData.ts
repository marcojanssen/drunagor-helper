import type { ContentId } from "@/data/type/ContentId";

export interface CommanderData {
  id: string;
  content: ContentId;
  name: string;
  images: {
    avatar: string;
    big: string;
    miniature: string;
    list: string;
  };
}
