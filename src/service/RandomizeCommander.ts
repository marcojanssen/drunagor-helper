import type { CommanderData } from "@/data/store/CommanderData";
import { CommanderDataStore } from "@/data/store/CommanderDataStore";
import type { RandomCommander } from "@/entity/RandomCommander";
import { RandomCommanderFactory } from "@/service/RandomCommanderFactory";
import { ConfigurationStore } from "@/store/ConfigurationStore";
import * as _ from "lodash-es";

export class RandomizeCommander {
  private configurationStore = ConfigurationStore();
  private commanderDataStore = CommanderDataStore();

  public randomize(excludedCommanderIds: string[] = []): RandomCommander | null {
    let commanders = _.cloneDeep(this.commanderDataStore.findAll());

    commanders = commanders.filter((commander: CommanderData) => {
      if (this.configurationStore.isEnabledMonsterContent(commander.content) === false) {
        return false;
      }
      if (excludedCommanderIds.includes(commander.id)) {
        return false;
      }
      return true;
    });

    if (commanders.length === 0) {
      return null;
    }

    return RandomCommanderFactory.fromCommanderData(commanders[Math.floor(Math.random() * commanders.length)]);
  }
}
