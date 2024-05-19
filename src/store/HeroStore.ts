import { useStorage } from "@vueuse/core";
import * as _ from "lodash-es";
import { defineStore } from "pinia";
import type { Hero } from "./Hero";
import { Sskar } from "@/data/content/spoilsofwar/hero/Sskar";
import { VacrenWarlord } from "@/data/content/awakenings/hero/VacrenWarlord";
import { Kellam } from "@/data/content/spoilsofwar/hero/Kellam";
import { CatharinaMage } from "@/data/content/awakenings/hero/CatharinaMage";

export const HeroStore = defineStore("hero", () => {
  const heroes = useStorage("HeroStore.heroes", [] as Hero[]);

  function hasInCampaign(heroId: string, campaignId: string): boolean {
    const inCampaign = _.find(heroes.value, { heroId: heroId, campaignId: campaignId });
    if (inCampaign == undefined) {
      return false;
    }
    return true;
  }

  function findInCampaign(heroId: string, campaignId: string): Hero {
    const hero = _.find(heroes.value, { heroId: heroId, campaignId: campaignId });
    if (hero == undefined) {
      throw new Error("Hero could not be found: " + campaignId + " " + heroId);
    }
    return hero;
  }

  function findAllInCampaign(campaignId: string): Hero[] {
    return _.filter(heroes.value, (hero: Hero) => {
      if (hero.campaignId === campaignId) {
        return true;
      }
      return false;
    });
  }

  function add(hero: Hero) {
    heroes.value.push(hero);
  }

  function removeFromCampaign(heroId: string, campaignId: string) {
    heroes.value = heroes.value.filter((hero: Hero) => {
      if (hero.campaignId === campaignId && hero.heroId === heroId) {
        return false;
      }
      return true;
    });
  }

  function getHero(id: string) {
    switch(id) {
      case 'catharina-mage':
        return new CatharinaMage();
      case 'sskar':
        return new Sskar();
      case 'vacren':
        return new VacrenWarlord();
      case 'kellam':
        return new Kellam();
      default:
        throw new Error("Unknown hero: " + id);
    }
  }

  return {
    heroes,
    getHero,
    hasInCampaign,
    findInCampaign,
    findAllInCampaign,
    add,
    removeFromCampaign,
  };
});
