import type { HeroData } from "@/data/repository/HeroData";
import { RandomHero } from "@/entity/RandomHero";
import { RandomImage } from "@/entity/RandomImage";

export class RandomHeroFactory {
  static fromHeroData(hero: HeroData): RandomHero {
    return new RandomHero(hero.id, hero.name, new RandomImage(hero.images.big, hero.images.miniature));
  }
}
