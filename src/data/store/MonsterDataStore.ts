import { DreamTitan } from "@/data/content/apocalypse/monster/DreamTitan";
import { FacelessConjurer } from "@/data/content/apocalypse/monster/FacelessConjurer";
import { HellishFlayer } from "@/data/content/apocalypse/monster/HellishFlayer";
import { ShadowWitch } from "@/data/content/apocalypse/monster/ShadowWitch";
import { SkeletonKnight } from "@/data/content/apocalypse/monster/SkeletonKnight";
import { FellAsteris } from "@/data/content/awakenings/monster/FellAsteris";
import { GorgonHexer } from "@/data/content/awakenings/monster/GorgonHexer";
import { GorgonessWitch } from "@/data/content/awakenings/monster/GorgonessWitch";
import { GremlinHorde } from "@/data/content/awakenings/monster/GremlinHorde";
import { GrimDoctor } from "@/data/content/awakenings/monster/GrimDoctor";
import { HellspawnBrute } from "@/data/content/awakenings/monster/HellspawnBrute";
import { NagianHunter } from "@/data/content/awakenings/monster/NagianHunter";
import { NightStalker } from "@/data/content/awakenings/monster/NightStalker";
import { Abomination } from "@/data/content/core/monster/Abomination";
import { Executioner } from "@/data/content/core/monster/Executioner";
import { RottenFlesh } from "@/data/content/core/monster/RottenFlesh";
import { ShadowCultist } from "@/data/content/core/monster/ShadowCultist";
import { ShadowKnight } from "@/data/content/core/monster/ShadowKnight";
import { ShadowVampire } from "@/data/content/core/monster/ShadowVampire";
import { SkeletonArcher } from "@/data/content/core/monster/SkeletonArcher";
import { CorruptedWorm } from "@/data/content/desertofhellscar/monster/CorruptedWorm";
import { DeathMessenger } from "@/data/content/monsterpack1/monster/DeathMessenger";
import { ScoutOfDarkness } from "@/data/content/monsterpack1/monster/ScoutOfDarkness";
import { CorruptedFarmer } from "@/data/content/riseoftheundeaddragon/monster/CorruptedFarmer";
import { BoneReaper } from "@/data/content/spoilsofwar/monster/BoneReaper";
import { ShadowMistress } from "@/data/content/spoilsofwar/monster/ShadowMistress";
import { WalkingHorror } from "@/data/content/spoilsofwar/monster/WalkingHorror";
import { LadyClaw } from "@/data/content/theruinofluccanor/monster/LadyClaw";
import { Ravager } from "@/data/content/theruinofluccanor/monster/Ravager";
import { ShadowGuardian } from "@/data/content/theshadowworld/monster/ShadowGuardian";
import { ShadowPain } from "@/data/content/theshadowworld/monster/ShadowPain";
import type { MonsterData } from "@/data/store/MonsterData";
import { ConfigurationStore } from "@/store/ConfigurationStore";
import * as _ from "lodash-es";
import { defineStore } from "pinia";

export const MonsterDataStore = defineStore("data-monster", () => {
  const configurationStore = ConfigurationStore();

  const monsters = [
    new Abomination(),
    new BoneReaper(),
    new CorruptedFarmer(),
    new CorruptedWorm(),
    new DeathMessenger(),
    new DreamTitan(),
    new Executioner(),
    new FacelessConjurer(),
    new FellAsteris(),
    new GorgonessWitch(),
    new GorgonHexer(),
    new GremlinHorde(),
    new GrimDoctor(),
    new HellishFlayer(),
    new HellspawnBrute(),
    new LadyClaw(),
    new NagianHunter(),
    new NightStalker(),
    new SkeletonArcher(),
    new ShadowCultist(),
    new ShadowVampire(),
    new Ravager(),
    new RottenFlesh(),
    new ScoutOfDarkness(),
    new SkeletonKnight(),
    new ShadowGuardian(),
    new ShadowKnight(),
    new ShadowMistress(),
    new ShadowPain(),
    new ShadowWitch(),
    new WalkingHorror(),
  ];

  function find(monsterId: string): MonsterData {
    const monster = _.find(monsters, { id: monsterId });
    if (monster === undefined) {
      throw new Error("Monster with id:" + monsterId + " can not be found");
    }
    return monster;
  }

  function findAll(): MonsterData[] {
    return monsters;
  }

  function findAllEnabled(): MonsterData[] {
    const enabledMonsters = monsters.filter((monster: MonsterData) => {
      if (configurationStore.getEnabledMonsterContent().includes(monster.content) === false) {
        return false;
      }

      return true;
    });

    return enabledMonsters;
  }

  return {
    monsters,
    find,
    findAll,
    findAllEnabled,
  };
});
