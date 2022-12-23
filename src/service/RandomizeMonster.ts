import type { MonsterData } from "@/data/store/MonsterData";
import { MonsterDataStore } from "@/data/store/MonsterDataStore";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { VariantId } from "@/data/type/VariantId";
import type { RandomMonster } from "@/entity/RandomMonster";
import { RandomMonsterFactory } from "@/service/RandomMonsterFactory";
import { ConfigurationStore } from "@/store/ConfigurationStore";
import * as _ from "lodash-es";

export class RandomizeMonster {
  private configurationStore = ConfigurationStore();
  private monsterDataStore = MonsterDataStore();

  public randomizeByColor(requestedColor: MonsterColor, excludedMonsterIds: string[] = []): RandomMonster | null {
    let monsters = _.cloneDeep(this.monsterDataStore.findAll());

    monsters.forEach((monster) => {
      monster.variants = this.filterDisabledVariants(monster.variants);
    });

    monsters = monsters.filter((monster: MonsterData) => {
      if (monster.variants.length === 0) {
        return false;
      }
      if (this.configurationStore.isEnabledMonsterContent(monster.content) === false) {
        return false;
      }
      if (monster.color !== requestedColor) {
        return false;
      }
      if (excludedMonsterIds.includes(monster.id)) {
        return false;
      }
      return true;
    });

    if (monsters.length === 0) {
      return null;
    }

    return RandomMonsterFactory.fromMonsterData(monsters[Math.floor(Math.random() * monsters.length)]);
  }

  private filterDisabledVariants(variants: VariantId[]): VariantId[] {
    const filteredVariants = variants.filter((variantId: VariantId) => {
      return this.configurationStore.isEnabledVariant(variantId);
    });

    return filteredVariants;
  }
}
