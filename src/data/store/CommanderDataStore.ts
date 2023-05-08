import { Archon } from "@/data/content/core/commander/Archon";
import { Bane } from "@/data/content/core/commander/Bane";
import { FallenSisters } from "@/data/content/fallensisters/overlord/FallenSisters";
import { DemonLord } from "@/data/content/monsterpack1/overlord/DemonLord";
import { Thern } from "@/data/content/spoilsofwar/commander/Thern";
import { Twin } from "@/data/content/spoilsofwar/commander/Twin";
import { ConfigurationStore } from "@/store/ConfigurationStore";
import * as _ from "lodash-es";
import { defineStore } from "pinia";
import type { CommanderData } from "./CommanderData";

export const CommanderDataStore = defineStore("data-commander", () => {
  const configurationStore = ConfigurationStore();

  const commanders = [new Archon(), new Bane(), new DemonLord(), new FallenSisters(), new Thern(), new Twin()];

  function find(commanderId: string): CommanderData {
    const commander = _.find(commanders, { id: commanderId });
    if (commander === undefined) {
      throw new Error("Commander with id:" + commanderId + " can not be found");
    }
    return commander;
  }

  function findAll(): CommanderData[] {
    return commanders;
  }

  function findAllEnabled(): CommanderData[] {
    const enabledCommanders = commanders.filter((commander: CommanderData) => {
      if (configurationStore.getEnabledMonsterContent().includes(commander.content) === false) {
        return false;
      }

      return true;
    });

    return enabledCommanders;
  }

  return {
    commanders,
    find,
    findAll,
    findAllEnabled,
  };
});
