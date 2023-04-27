<script setup lang="ts">
import { CampaignStore } from "@/store/CampaignStore";
import { StoryRecordStatusRepository as StoryRecordStatusRepository } from "@/data/repository/campaign/awakenings/StoryRecordStatusRepository";
import { StoryRecordOutcomeRepository as StoryRecordOutcomeRepository } from "@/data/repository/campaign/awakenings/StoryRecordOutcomeRepository";
import { StoryRecordFollowerRepository as StoryRecordFollowerRepository } from "@/data/repository/campaign/awakenings/StoryRecordFollowerRepository";
import StoryRecordStatus from "@/components/StoryRecordStatus.vue";
import StoryRecordOutcome from "@/components/StoryRecordOutcome.vue";
import StoryRecordFollower from "@/components/StoryRecordFollower.vue";

const props = defineProps<{
  campaignId: string;
}>();

const campaignStore = CampaignStore();

const campaign = campaignStore.find(props.campaignId);

const storyRecordStatusRepository = new StoryRecordStatusRepository();
const storyRecordOutcomeRepository = new StoryRecordOutcomeRepository();
const storyRecordFollowerRepository = new StoryRecordFollowerRepository();
</script>

<template>
  <div class="p-4">
    <div class="pt-2 w-full" v-if="campaign.campaign == 'awakenings'">
      <StoryRecordFollower :repository="storyRecordFollowerRepository" :campaign-id="campaignId" />
    </div>
    <div class="pt-2 w-full" v-if="campaign.campaign == 'awakenings'">
      <StoryRecordStatus :repository="storyRecordStatusRepository" :campaign-id="campaignId" />
    </div>
    <div class="pt-2 w-full" v-if="campaign.campaign == 'awakenings'">
      <StoryRecordOutcome :repository="storyRecordOutcomeRepository" :campaign-id="campaignId" />
    </div>
  </div>
</template>

<style scoped></style>
