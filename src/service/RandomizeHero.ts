import type { HeroData } from "@/data/repository/HeroData";
import { HeroDataRepository } from "@/data/repository/HeroDataRepository";
import type { RandomHero } from "@/entity/RandomHero";
import { RandomHeroFactory } from "@/service/RandomHeroFactory";
import { ConfigurationStore } from "@/store/ConfigurationStore";
import * as _ from "lodash-es";

export class RandomizeHero {
  private configurationStore = ConfigurationStore();
  private repository = new HeroDataRepository();

  public randomize(excludedHeroIds: string[] = []): RandomHero | null {
    let heroes = _.cloneDeep(this.repository.findAll());

    heroes = heroes.filter((hero: HeroData) => {
      if (this.configurationStore.isEnabledHeroContent(hero.content) === false) {
        return false;
      }
      if (excludedHeroIds.includes(hero.id)) {
        return false;
      }
      return true;
    });

    if (heroes.length === 0) {
      return null;
    }

    return RandomHeroFactory.fromHeroData(heroes[Math.floor(Math.random() * heroes.length)]);
  }
}
