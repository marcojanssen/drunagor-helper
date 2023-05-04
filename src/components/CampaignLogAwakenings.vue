<script setup lang="ts">
import CampaignLogAura from "@/components/CampaignLogAura.vue";
import CampaignLogStatus from "@/components/CampaignLogStatus.vue";
import { CampaignLogStatusRepository } from "@/data/repository/campaign/awakenings/CampaignLogStatusRepository";
import { CampaignLogAuraRepository } from "@/data/repository/campaign/awakenings/CampaignLogAuraRepository";

const props = defineProps<{
  heroId: string;
  campaignId: string;
}>();

const statusRepository = new CampaignLogStatusRepository();
const auraRepository = new CampaignLogAuraRepository();
</script>

<template>
  <div class="pt-2 w-full">
    <CampaignLogStatus :repository="statusRepository" :campaign-id="props.campaignId" :hero-id="props.heroId" />
  </div>
  <div class="pt-2 w-full">
    <CampaignLogAura :repository="auraRepository" :campaign-id="props.campaignId" :hero-id="props.heroId" />
  </div>
</template>

<style scoped></style>
