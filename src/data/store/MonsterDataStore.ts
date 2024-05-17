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
import { DriftingApparition } from "@/data/content/core/monster/DriftingApparition";
import { ShadowVampireSpawn } from "@/data/content/core/monster/ShadowVampireSpawn";
import { SkeletonArcherMinion } from "@/data/content/core/monster/SkeletonArcherMinion";
import { TormentOfEnvy } from "@/data/content/core/monster/TormentOfEnvy";
import { TormentOfGrief } from "../content/core/monster/TormentOfGrief";
import { MurderousApparition } from "../content/core/monster/MurderousApparition";
import { ManifestationOfWrath } from "../content/core/monster/ManifestationOfWrath";
import { MournfulApparition } from "../content/core/monster/MournfulApparition";
import { MindlessReaver } from "../content/apocalypse/monster/MindlessReaver";
import { GarothianRevenant } from "../content/apocalypse/monster/GarothianRevenant";
import { Nightmare } from "../content/awakenings/monster/Nightmare";
import { GarothianMarksman } from "../content/apocalypse/monster/GarothianMarksman";
import { Tidehunter } from "../content/awakenings/monster/Tidehunter";
import { Boatswain } from "../content/awakenings/monster/Boatswain";
import { FellWoodman } from "../content/awakenings/monster/FellWoodman";
import { PlagueCarrier } from "../content/apocalypse/monster/PlagueCarrier";
import { FoulShooter } from "../content/awakenings/monster/FoulShooter";
import { UnstableDevourer } from "../content/apocalypse/monster/UnstableDevourer";
import { FlickeringBoar } from "../content/awakenings/monster/FlickeringBoar";
import { RavenousAbomination } from "../content/apocalypse/monster/RavenousAbomination";
import { RavenousStalker } from "../content/apocalypse/monster/RavenousStalker";
import { ViciousMauler } from "../content/awakenings/monster/ViciousMauler";
import { CoiledHarridan } from "../content/awakenings/monster/CoiledHarridan";
import { VileSpawn } from "../content/awakenings/monster/VileSpawn";
import { SowerCultist } from "../content/apocalypse/monster/SowerCultist";
import { SkeletonSentry } from "../content/awakenings/monster/SkeletonSentry";
import { DireExecutioner } from "../content/core/monster/DireExecutioner";

export const MonsterDataStore = defineStore("data-monster", () => {
  const configurationStore = ConfigurationStore();

  const monsters : MonsterData[] = [
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

  const scenarioMonsters: MonsterData[] = [
    new Boatswain(),
    new CoiledHarridan(),
    new DireExecutioner(),
    new DriftingApparition(),
    new FellWoodman(),
    new FlickeringBoar(),
    new FoulShooter(),
    new GarothianMarksman(),
    new GarothianRevenant(),
    new ManifestationOfWrath(),
    new MindlessReaver(),
    new MournfulApparition(),
    new MurderousApparition(),
    new Nightmare(),
    new PlagueCarrier(),
    new RavenousAbomination(),
    new RavenousStalker(),
    new ShadowVampireSpawn(),
    new SkeletonArcherMinion(),
    new SkeletonSentry(),
    new SowerCultist(),
    new Tidehunter(),
    new TormentOfEnvy(),
    new TormentOfGrief(),
    new UnstableDevourer(),
    new ViciousMauler(),
    new VileSpawn(),
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
    scenarioMonsters,
    find,
    findAll,
    findAllEnabled,
  };
});
