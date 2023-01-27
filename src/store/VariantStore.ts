import { Alternate } from "@/entity/Alternate";
import { Complex } from "@/entity/Complex";
import { Standard } from "@/entity/Standard";
import type { Variant } from "@/entity/Variant";
import * as _ from "lodash-es";
import { defineStore } from "pinia";
import type { VariantId } from "../data/type/VariantId";

export const VariantStore = defineStore("variant", () => {
  const variants = [new Standard(), new Alternate(), new Complex()] as Variant[];

  function getAll(): Variant[] {
    return variants;
  }

  function find(variantId: VariantId): Variant {
    const variant = _.find(variants, { id: variantId });
    if (variant === undefined) {
      throw new Error("Variant with id:" + variantId + " can not be found");
    }
    return variant;
  }

  return {
    variants,
    getAll,
    find,
  };
});
