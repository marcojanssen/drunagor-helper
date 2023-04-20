<script setup lang="ts">
import CampaignAddHero from "@/components/CampaignAddHero.vue";
import CampaignRemoveHero from "@/components/CampaignRemoveHero.vue";
import CampaignCoreHero from "@/components/CampaignCoreHero.vue";
import { useRoute } from "vue-router";
import { HeroStore } from "@/store/HeroStore";
import CampaignRemove from "@/components/CampaignRemove.vue";
import BaseDivider from "@/components/BaseDivider.vue";
import BaseButtonMenu from "@/components/BaseButtonMenu.vue";

const route = useRoute();

const campaignId = route.params.id.toString();
const heroStore = HeroStore();
</script>

<template>
  <BaseDivider>Campaign</BaseDivider>
  <BaseButtonMenu>
    <CampaignRemove :campaign-id="campaignId" />
  </BaseButtonMenu>
  <BaseDivider>Heroes</BaseDivider>
  <BaseButtonMenu>
    <CampaignAddHero :campaign-id="campaignId" />
    <CampaignRemoveHero :campaign-id="campaignId" />
  </BaseButtonMenu>
  <div id="heroes" class="grid pt-4 gap-4 w-full">
    <template v-for="hero in heroStore.findAllInCampaign(campaignId)" :key="hero.heroId">
      <div class="bg-neutral form-control drop-shadow rounded-lg">
        <CampaignCoreHero :campaign-id="campaignId" :hero-id="hero.heroId" />
      </div>
    </template>
  </div>
</template>

<style scoped></style>
