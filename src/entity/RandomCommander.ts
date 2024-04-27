import type { RandomImage } from "@/entity/RandomImage";

export class RandomCommander {
  public id: string;
  public name: string;
  public translation_key: string;
  public image: RandomImage;

  constructor(id: string, name: string, translation_key: string, image: RandomImage) {
    this.id = id;
    this.name = name;
    this.translation_key = translation_key;
    this.image = image;
  }
}
