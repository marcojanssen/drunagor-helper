<script setup lang="ts">
import { StoryRecordStatusRepository } from "@/data/repository/campaign/apocalypse/StoryRecordStatusRepository";
import { StoryRecordOutcomeRepository } from "@/data/repository/campaign/apocalypse/StoryRecordOutcomeRepository";
import { StoryRecordFollowerRepository } from "@/data/repository/campaign/apocalypse/StoryRecordFollowerRepository";
import StoryRecordStatus from "@/components/StoryRecordStatus.vue";
import StoryRecordOutcome from "@/components/StoryRecordOutcome.vue";
import StoryRecordFollower from "@/components/StoryRecordFollower.vue";
import StoryRecordUnfolding from "@/components/StoryRecordUnfolding.vue";

const props = defineProps<{
  campaignId: string;
}>();

const statusRepository = new StoryRecordStatusRepository();
const outcomeRepository = new StoryRecordOutcomeRepository();
const followerRepository = new StoryRecordFollowerRepository();
</script>

<template>
  <div class="pt-2 w-full">
    <StoryRecordFollower :repository="followerRepository" :campaign-id="props.campaignId" />
  </div>
  <div class="pt-2 w-full">
    <StoryRecordOutcome :repository="outcomeRepository" :campaign-id="props.campaignId" />
  </div>
  <div class="pt-2 w-full">
    <StoryRecordStatus :repository="statusRepository" :campaign-id="props.campaignId" />
  </div>
  <div class="pt-2 w-full">
    <StoryRecordUnfolding :campaign-id="props.campaignId" />
  </div>
</template>

<style scoped></style>
