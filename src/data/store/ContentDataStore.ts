import { defineStore } from "pinia";

import { Core } from "@/data/content/Core";
import { DesertOfHellscar } from "@/data/content/DesertOfHellscar";
import { Handuriel } from "@/data/content/Handuriel";
import { Lordwrath } from "@/data/content/Lordwrath";
import { MonsterPack1 } from "@/data/content/MonsterPack1";
import { RiseOfTheUndeadDragon } from "@/data/content/RiseOfTheUndeadDragon";
import { SpoilsOfWar } from "@/data/content/SpoilsOfWar";
import { TheRuinOfLuccanor } from "@/data/content/TheRuinOfLuccanor";
import { TheShadowWorld } from "@/data/content/TheShadowWorld";
import { Apocalypse } from "@/data/content/Apocalypse";
import { Awakenings } from "@/data/content/Awakenings";
import { HeroPack1 } from "@/data/content/HeroPack1";
import { FallenSisters } from "@/data/content/FallenSisters";
import { Lorien } from "@/data/content/Lorien";
import type { ContentData } from "@/data/store/ContentData";

export const ContentDataStore = defineStore("data-content", () => {
  const content = [
    new Core(),
    new SpoilsOfWar(),
    new MonsterPack1(),
    new TheRuinOfLuccanor(),
    new TheShadowWorld(),
    new DesertOfHellscar(),
    new RiseOfTheUndeadDragon(),
    new Handuriel(),
    new Lordwrath(),
    new Apocalypse(),
    new Awakenings(),
    new HeroPack1(),
    new FallenSisters(),
    new Lorien(),
  ];

  function getAllWithMonsters() {
    const contentWithMonsters = content.filter((content: ContentData) => {
      if (content.monsters === false) {
        return false;
      }

      return true;
    });

    return contentWithMonsters;
  }

  function getAllWithHeroes() {
    const contentWithHeroes = content.filter((content: ContentData) => {
      if (content.heroes === false) {
        return false;
      }

      return true;
    });

    return contentWithHeroes;
  }

  function getAll() {
    return content;
  }

  return {
    content,
    getAllWithMonsters,
    getAllWithHeroes,
    getAll,
  };
});
