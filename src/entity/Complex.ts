import type { VariantId } from "@/data/type/VariantId";
import type { Variant } from "@/entity/Variant";

export class Complex implements Variant {
  public readonly id: VariantId = "complex";
  public readonly title: string = "Complex (A / B)";
  public readonly translation_key: string = "variant.complex";
}
