import type { RandomImage } from "@/entity/RandomImage";

export class RandomHero {
  public id: string;
  public name: string;
  public image: RandomImage;

  constructor(id: string, name: string, image: RandomImage) {
    this.id = id;
    this.name = name;
    this.image = image;
  }
}
