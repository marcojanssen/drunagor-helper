import { useStorage } from "@vueuse/core";
import * as _ from "lodash-es";
import { defineStore } from "pinia";
import type { Hero } from "./Hero";

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

  return {
    heroes,
    hasInCampaign,
    findInCampaign,
    findAllInCampaign,
    add,
    removeFromCampaign,
  };
});
