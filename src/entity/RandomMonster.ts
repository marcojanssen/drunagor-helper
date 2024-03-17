import type { VariantId } from "@/data/type/VariantId";
import type { RandomImage } from "@/entity/RandomImage";

export class RandomMonster {
  public id: string;
  public name: string;
  public translation_key: string;
  public variants: VariantId[];
  public image: RandomImage;

  constructor(id: string, name: string, translation_key: string, variants: VariantId[], image: RandomImage) {
    this.id = id;
    this.name = name;
    this.translation_key = translation_key;
    this.variants = variants;
    this.image = image;
  }

  public getRandomVariant(): VariantId {
    return this.variants[Math.floor(Math.random() * this.variants.length)];
  }
}
