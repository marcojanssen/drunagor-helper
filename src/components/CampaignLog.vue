<script setup lang="ts">
import CampaignLogAura from "@/components/CampaignLogAura.vue";
import CampaignLogOutcome from "@/components/CampaignLogOutcome.vue";
import CampaignLogStatus from "@/components/CampaignLogStatus.vue";
import { HeroDataRepository } from "@/data/repository/HeroDataRepository";
import type { HeroData } from "@/data/repository/HeroData";
import { CampaignStore } from "@/store/CampaignStore";
import { CampaignLogStatusRepository as CampaignLogStatusCoreRepository } from "@/data/repository/campaign/core/CampaignLogStatusRepository";
import { CampaignLogStatusRepository as CampaignLogStatusAwakeningsRepository } from "@/data/repository/campaign/awakenings/CampaignLogStatusRepository";
import { CampaignLogAuraRepository as CampaignLogAuraCoreRepository } from "@/data/repository/campaign/core/CampaignLogAuraRepository";
import { CampaignLogAuraRepository as CampaignLogAuraAwakeningsRepository } from "@/data/repository/campaign/awakenings/CampaignLogAuraRepository";
import { CampaignLogOutcomeRepository } from "@/data/repository/campaign/core/CampaignLogOutcomeRepository";

const props = defineProps<{
  heroId: string;
  campaignId: string;
}>();

const heroDataRepository = new HeroDataRepository();
const campaignStore = CampaignStore();

const campaign = campaignStore.find(props.campaignId);
const hero = heroDataRepository.find(props.heroId) ?? ({} as HeroData);

const statusCoreRepository = new CampaignLogStatusCoreRepository();
const statusAwakeningsRepository = new CampaignLogStatusAwakeningsRepository();

const auraCoreRepository = new CampaignLogAuraCoreRepository();
const auraAwakeningsRepository = new CampaignLogAuraAwakeningsRepository();

const outcomeDataRepository = new CampaignLogOutcomeRepository();
</script>

<template>
  <div class="hero-list-item p-4">
    <div class="flex h-28">
      <div>
        <img class="-ml-1 w-14 rounded-full hero-image" :src="hero.images.avatar" />
      </div>
      <div class="pl-8">
        <p>{{ hero.name }}</p>
        <p>{{ hero.race }} {{ hero.class }}</p>
        <p>Path of {{ hero.path }}</p>
      </div>
    </div>
    <div class="pt-2 w-full" v-if="campaign.campaign == 'core'">
      <CampaignLogStatus :repository="statusCoreRepository" :campaign-id="campaignId" :hero-id="heroId" />
    </div>
    <div class="pt-2 w-full" v-if="campaign.campaign == 'awakenings'">
      <CampaignLogStatus :repository="statusAwakeningsRepository" :campaign-id="campaignId" :hero-id="heroId" />
    </div>
    <div class="pt-2 w-full" v-if="campaign.campaign == 'core'">
      <CampaignLogOutcome :repository="outcomeDataRepository" :campaign-id="campaignId" :hero-id="heroId" />
    </div>
    <div class="pt-2 w-full" v-if="campaign.campaign == 'core'">
      <CampaignLogAura :repository="auraCoreRepository" :campaign-id="campaignId" :hero-id="heroId" />
    </div>
    <div class="pt-2 w-full" v-if="campaign.campaign == 'awakenings'">
      <CampaignLogAura :repository="auraAwakeningsRepository" :campaign-id="campaignId" :hero-id="heroId" />
    </div>
  </div>
</template>

<style scoped>
.hero-list-item {
  background-image: url("@/assets/hero/flag-bg-red.webp");
  background-repeat: no-repeat;
}
</style>
