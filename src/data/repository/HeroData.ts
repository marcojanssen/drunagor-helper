import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";

export interface HeroData {
  id: string;
  content: ContentId;
  name: string;
  class: HeroClass;
  path: HeroPath;
  race: HeroRace;
  images: {
    avatar: string;
    big: string;
    miniature: string;
  };
}
