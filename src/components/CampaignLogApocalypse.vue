<script setup lang="ts">
import CampaignLogAura from "@/components/CampaignLogAura.vue";
import CampaignLogOutcome from "@/components/CampaignLogOutcome.vue";
import CampaignLogStatus from "@/components/CampaignLogStatus.vue";
import { CampaignLogStatusRepository } from "@/data/repository/campaign/apocalypse/CampaignLogStatusRepository";
import { CampaignLogAuraRepository } from "@/data/repository/campaign/apocalypse/CampaignLogAuraRepository";
import { CampaignLogOutcomeRepository } from "@/data/repository/campaign/apocalypse/CampaignLogOutcomeRepository";
import { useI18n } from "vue-i18n";

const props = defineProps<{
  heroId: string;
  campaignId: string;
}>();

const statusRepository = new CampaignLogStatusRepository();
const auraRepository = new CampaignLogAuraRepository();
const outcomeRepository = new CampaignLogOutcomeRepository();
const { t } = useI18n();
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
      <Button outlined :label="t('label.equipment-skills')" class="w-full"></Button>
    </router-link>
  </div>
</template>

<style scoped></style>
