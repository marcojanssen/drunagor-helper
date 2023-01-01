import type { AttackType } from "@/data/type/AttackType";
import type { Condition } from "@/data/type/Condition";
import type { ContentId } from "@/data/type/ContentId";
import type { KeywordColor } from "@/data/type/KeywordColor";
import type { KeywordSeperator } from "@/data/type/KeywordSeperator";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { Rune } from "@/data/type/Rune";
import type { TrackerPosition } from "@/data/type/TrackerPosition";
import type { VariantId } from "@/data/type/VariantId";

export interface Keyword {
  id: string;
  value?: string;
  color?: KeywordColor;
}

export interface VariantData {
  immunities: Condition[];
  position: TrackerPosition;
  rune: Rune;
  attackType: AttackType;
  hp: number;
  damage: number;
  movement: number;
  attack: Array<Keyword | KeywordSeperator>;
}

export interface Variant {
  standard: VariantData;
  alternate: VariantData;
  complex?: {
    a: VariantData;
    b: VariantData;
  };
}

export interface Rank {
  rookie: Variant;
  fighter: Variant;
  veteran: Variant;
  champion: Variant;
}

export interface MonsterData {
  id: string;
  content: ContentId;
  name: string;
  variants: VariantId[];
  images: {
    avatar: string;
    big: string;
    miniature: string;
    list: string;
  };
  color: MonsterColor;
  rank: Rank;
}
