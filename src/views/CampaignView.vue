<script setup lang="ts">
import CampaignLogAddHero from "@/components/CampaignLogAddHero.vue";
import CampaignLogRemoveHero from "@/components/CampaignLogRemoveHero.vue";
import CampaignLog from "@/components/CampaignLog.vue";
import { useRoute } from "vue-router";
import { HeroStore } from "@/store/HeroStore";
import CampaignRemove from "@/components/CampaignRemove.vue";
import BaseDivider from "@/components/BaseDivider.vue";
import BaseButtonMenu from "@/components/BaseButtonMenu.vue";
import StoryRecord from "@/components/StoryRecord.vue";
import CampaignName from "@/components/CampaignName.vue";
import { CampaignStore } from "@/store/CampaignStore";
import CampaignCampPhase from "@/components/CampaignCampPhase.vue";

const route = useRoute();

const campaignId = route.params.id.toString();
const campaignStore = CampaignStore();
const campaign = campaignStore.find(campaignId);
const heroStore = HeroStore();
</script>

<template>
  <BaseDivider>Campaign</BaseDivider>
  <BaseButtonMenu>
    <CampaignRemove :campaign-id="campaignId" />
    <CampaignCampPhase :campaign-id="campaignId" />
  </BaseButtonMenu>
  <div class="bg-neutral mt-4 form-control drop-shadow rounded-lg">
    <CampaignName :campaign-id="campaignId" />
  </div>
  <template v-if="campaign.campaign == 'awakenings' || campaign.campaign == 'apocalypse'">
    <BaseDivider>Story record</BaseDivider>
    <div class="bg-neutral form-control drop-shadow rounded-lg">
      <StoryRecord :campaign-id="campaignId" />
    </div>
  </template>
  <BaseDivider>Campaign Log</BaseDivider>
  <BaseButtonMenu>
    <CampaignLogAddHero :campaign-id="campaignId" />
    <CampaignLogRemoveHero :campaign-id="campaignId" />
  </BaseButtonMenu>
  <div id="heroes" class="grid pt-4 gap-4 w-full">
    <template v-for="hero in heroStore.findAllInCampaign(campaignId)" :key="hero.heroId">
      <div class="bg-neutral form-control drop-shadow rounded-lg">
        <CampaignLog :campaign-id="campaignId" :hero-id="hero.heroId" />
      </div>
    </template>
  </div>
</template>

<style scoped></style>
