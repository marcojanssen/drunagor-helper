import type { VariantId } from "@/data/type/VariantId";

export interface Variant {
  id: VariantId;
  title: string;
  translation_key: string;
}
