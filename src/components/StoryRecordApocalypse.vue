<script setup lang="ts">
import { StoryRecordStatusRepository } from "@/data/repository/campaign/apocalypse/StoryRecordStatusRepository";
import { StoryRecordOutcomeRepository } from "@/data/repository/campaign/apocalypse/StoryRecordOutcomeRepository";
import { StoryRecordFollowerRepository } from "@/data/repository/campaign/apocalypse/StoryRecordFollowerRepository";
import StoryRecordStatus from "@/components/StoryRecordStatus.vue";
import StoryRecordOutcome from "@/components/StoryRecordOutcome.vue";
import StoryRecordFollower from "@/components/StoryRecordFollower.vue";
import StoryRecordUnfolding from "@/components/StoryRecordUnfolding.vue";
import StoryRecordBackgroundAndTrait from "@/components/StoryRecordBackgroundAndTrait.vue";
import BaseDividerAlt from "@/components/BaseDividerAlt.vue";
import StoryRecordLegacyTrail from "@/components/StoryRecordLegacyTrail.vue";

const props = defineProps<{
  campaignId: string;
}>();

const statusRepository = new StoryRecordStatusRepository();
const outcomeRepository = new StoryRecordOutcomeRepository();
const followerRepository = new StoryRecordFollowerRepository();
</script>

<template>
  <div class="p-4">
    <div class="pt-2 w-full">
      <BaseDividerAlt> Recruited followers </BaseDividerAlt>
      <StoryRecordFollower :repository="followerRepository" :campaign-id="props.campaignId" />
    </div>
    <div class="pt-2 w-full">
      <BaseDividerAlt> Legacy Trails </BaseDividerAlt>
      <StoryRecordLegacyTrail :campaign-id="props.campaignId" />
    </div>
    <div class="pt-2 w-full">
      <BaseDividerAlt> Background and Traits </BaseDividerAlt>
      <StoryRecordBackgroundAndTrait :campaign-id="props.campaignId" />
    </div>
    <div class="pt-2 w-full">
      <BaseDividerAlt> Outcomes </BaseDividerAlt>
      <StoryRecordOutcome :repository="outcomeRepository" :campaign-id="props.campaignId" />
    </div>
    <div class="pt-2 w-full">
      <BaseDividerAlt> Status </BaseDividerAlt>
      <StoryRecordStatus :repository="statusRepository" :campaign-id="props.campaignId" />
    </div>
    <div class="pt-2 w-full">
      <BaseDividerAlt> Unfoldings </BaseDividerAlt>
      <StoryRecordUnfolding :campaign-id="props.campaignId" />
    </div>
  </div>
</template>

<style scoped></style>
