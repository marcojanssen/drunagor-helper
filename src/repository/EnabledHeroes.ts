import { HeroDataRepository } from "@/data/repository/HeroDataRepository";
import type { HeroData } from "@/data/store/HeroData";
import { ConfigurationStore } from "@/store/ConfigurationStore";

export class EnabledHeroes {
  private configurationStore = ConfigurationStore();

  public findAll(): HeroData[] {
    const data = new HeroDataRepository().findAll();

    const enabledHeroes = data.filter((hero: HeroData) => {
      if (this.configurationStore.getEnabledHeroContent().includes(hero.content) === false) {
        return false;
      }

      return true;
    });

    return enabledHeroes;
  }
}
