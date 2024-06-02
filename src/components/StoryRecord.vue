<script setup lang="ts">
import { CampaignStore } from "@/store/CampaignStore";
import StoryRecordApocalypse from "@/components/StoryRecordApocalypse.vue";
import StoryRecordAwakenings from "@/components/StoryRecordAwakenings.vue";

const props = defineProps<{
  campaignId: string;
}>();

const campaignStore = CampaignStore();
const campaign = campaignStore.find(props.campaignId);
</script>

<template>
  <div class="p-4" style="background-color: #1f2937">
    <StoryRecordApocalypse v-if="campaign.campaign == 'apocalypse'" :campaign-id="props.campaignId" />
    <StoryRecordAwakenings v-if="campaign.campaign == 'awakenings'" :campaign-id="props.campaignId" />
  </div>
</template>

<style scoped></style>
