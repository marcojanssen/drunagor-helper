<script setup lang="ts">
import { HeroDataRepository } from "@/data/repository/HeroDataRepository";
import type { HeroData } from "@/data/repository/HeroData";
import { CampaignStore } from "@/store/CampaignStore";
import CampaignLogCore from "./CampaignLogCore.vue";
import CampaignLogAwakenings from "./CampaignLogAwakenings.vue";
import CampaignLogApocalypse from "./CampaignLogApocalypse.vue";

const props = defineProps<{
  heroId: string;
  campaignId: string;
}>();

const heroDataRepository = new HeroDataRepository();
const campaignStore = CampaignStore();

const campaign = campaignStore.find(props.campaignId);
const hero = heroDataRepository.find(props.heroId) ?? ({} as HeroData);
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
    <CampaignLogCore v-if="campaign.campaign == 'core'" :campaign-id="props.campaignId" :hero-id="props.heroId" />
    <CampaignLogAwakenings
      v-if="campaign.campaign == 'awakenings'"
      :campaign-id="props.campaignId"
      :hero-id="props.heroId"
    />
    <CampaignLogApocalypse
      v-if="campaign.campaign == 'apocalypse'"
      :campaign-id="props.campaignId"
      :hero-id="props.heroId"
    />
  </div>
</template>

<style scoped>
.hero-list-item {
  background-image: url("@/assets/hero/flag-bg-red.webp");
  background-repeat: no-repeat;
}
</style>
