<script setup lang="ts">
import CampaignLogAura from "@/components/CampaignLogAura.vue";
import CampaignLogOutcome from "@/components/CampaignLogOutcome.vue";
import CampaignLogStatus from "@/components/CampaignLogStatus.vue";
import { CampaignLogStatusRepository } from "@/data/repository/campaign/core/CampaignLogStatusRepository";
import { CampaignLogAuraRepository } from "@/data/repository/campaign/core/CampaignLogAuraRepository";
import { CampaignLogOutcomeRepository } from "@/data/repository/campaign/core/CampaignLogOutcomeRepository";

const props = defineProps<{
  heroId: string;
  campaignId: string;
}>();

const statusRepository = new CampaignLogStatusRepository();
const auraRepository = new CampaignLogAuraRepository();
const outcomeRepository = new CampaignLogOutcomeRepository();
</script>

<template>
  <div class="pt-2 w-full">
    <CampaignLogStatus :repository="statusRepository" :campaign-id="props.campaignId" :hero-id="props.heroId" />
  </div>
  <div class="pt-2 w-full">
    <CampaignLogOutcome :repository="outcomeRepository" :campaign-id="props.campaignId" :hero-id="props.heroId" />
  </div>
  <div class="pt-2 w-full">
    <CampaignLogAura :repository="auraRepository" :campaign-id="props.campaignId" :hero-id="props.heroId" />
  </div>
  <div class="pt-4 w-full">
    <router-link
      :to="{ name: 'Hero', params: { campaignId: campaignId, heroId: props.heroId } }"
      class="hero-detail-btn"
    >
      <button class="w-full px-2 py-2 bg-emerald-700 text-gray-200 uppercase font-semibold text-sm rounded-lg">
        Equipment / Skills / Abilities
      </button>
    </router-link>
  </div>
</template>

<style scoped></style>
