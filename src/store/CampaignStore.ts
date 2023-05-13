import { useStorage } from "@vueuse/core";
import * as _ from "lodash-es";
import { defineStore } from "pinia";
import type { Campaign } from "./Campaign";

export const CampaignStore = defineStore("campaign", () => {
  const campaigns = useStorage("CampaignStore.campaigns", [] as Campaign[]);

  function has(campaignId: string): boolean {
    const activeCampaign = _.find(campaigns.value, { campaignId: campaignId });
    if (activeCampaign == undefined) {
      return false;
    }
    return true;
  }

  function find(campaignId: string): Campaign {
    const campaign = _.find(campaigns.value, { campaignId: campaignId });
    if (campaign == undefined) {
      throw new Error("Campaign could not be found: " + campaignId);
    }
    return campaign;
  }

  function findAll(): Campaign[] {
    return campaigns.value;
  }

  function add(campaign: Campaign) {
    campaigns.value.push(campaign);
  }

  function remove(campaignId: string) {
    campaigns.value = campaigns.value.filter((campaign: Campaign) => {
      if (campaign.campaignId === campaignId) {
        return false;
      }
      return true;
    });
  }

  function rename(campaignId: string, newName: string) {
    const campaign = find(campaignId);
    campaign.name = newName;
  }

  return {
    campaigns,
    has,
    find,
    findAll,
    add,
    remove,
    rename,
  };
});
