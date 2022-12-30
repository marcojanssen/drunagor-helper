import type { HeroData } from "@/data/repository/HeroData";
import { HeroDataRepository } from "@/data/repository/HeroDataRepository";
import { ConfigurationStore } from "@/store/ConfigurationStore";

export class EnabledHeroes {
  private configurationStore = ConfigurationStore();
  private repository = new HeroDataRepository();

  public findAll(): HeroData[] {
    const data = this.repository.findAll();

    const enabledHeroes = data.filter((hero: HeroData) => {
      if (this.configurationStore.getEnabledHeroContent().includes(hero.content) === false) {
        return false;
      }

      return true;
    });

    return enabledHeroes;
  }
}
