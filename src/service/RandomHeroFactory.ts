import type { HeroData } from "@/data/repository/HeroData";
import { RandomHero } from "@/entity/RandomHero";

export class RandomHeroFactory {
  static fromHeroData(hero: HeroData): RandomHero {
    return new RandomHero(hero.id, hero.name);
  }
}
