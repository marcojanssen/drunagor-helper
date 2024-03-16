import type { VariantId } from "@/data/type/VariantId";
import type { Variant } from "@/entity/Variant";

export class Alternate implements Variant {
  public readonly id: VariantId = "alternate";
  public readonly title: string = "Alternate";
  public readonly translation_key: string = "variant.alternate";
}
