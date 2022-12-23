import type { VariantId } from "@/data/type/VariantId";
import type { RandomImage } from "./RandomImage";

export class RandomMonster {
  public id: string;
  public name: string;
  public variants: VariantId[];
  public image: RandomImage;

  constructor(id: string, name: string, variants: VariantId[], image: RandomImage) {
    this.id = id;
    this.name = name;
    this.variants = variants;
    this.image = image;
  }

  public getRandomVariant(): VariantId {
    return this.variants[Math.floor(Math.random() * this.variants.length)];
  }
}
