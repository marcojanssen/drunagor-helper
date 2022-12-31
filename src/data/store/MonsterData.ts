import type { ContentId } from "@/data/type/ContentId";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";
import type { AttackType } from "../type/AttackType";
import type { Condition } from "../type/Condition";
import type { Rune } from "../type/Rune";
import type { TrackerPosition } from "../type/TrackerPosition";

export interface VariantData {
  immunities: Condition[];
  position: TrackerPosition;
  rune: Rune;
  attackType: AttackType;
  hp: number | null;
  damage: number | null;
  movement: number | null;
  attack: string | null;
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
