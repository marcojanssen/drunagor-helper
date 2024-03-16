import type { VariantId } from "@/data/type/VariantId";
import type { Variant } from "@/entity/Variant";

export class Standard implements Variant {
  public readonly id: VariantId = "standard";
  public readonly title: string = "Standard";
  public readonly translation_key: string = "variant.standard";
}
