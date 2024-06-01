<script setup lang="ts">
import { ref, watch } from "vue";
import { StoryRecordUnfoldingRepository } from "@/data/repository/campaign/apocalypse/StoryRecordUnfoldingRepository";
import { CampaignStore } from "@/store/CampaignStore";
import type { Unfolding } from "@/data/repository/campaign/apocalypse/Unfolding";

const props = defineProps<{
  campaignId: string;
}>();

const campaignStore = CampaignStore();
const repository = new StoryRecordUnfoldingRepository();
const unfoldings = repository.findAll();

const unfoldingIds = ref([] as string[]);
unfoldingIds.value = campaignStore.find(props.campaignId).unfoldingIds ?? [];

function findUnfoldings(followerIds: string[]): Unfolding[] {
  const outcomes: Unfolding[] = [];
  followerIds.forEach((followerId) => {
    let outcome = repository.find(followerId);
    if (outcome) {
      outcomes.push(outcome);
    }
  });

  return outcomes;
}

watch(unfoldingIds, (newUnfoldingIds) => {
  campaignStore.find(props.campaignId).unfoldingIds = newUnfoldingIds;
});
</script>

<template>
  <span data-testid="story-record-unfolding">
    <MultiSelect
      v-model="unfoldingIds"
      :options="unfoldings"
      :maxSelectedLabels="1"
      filter
      optionLabel="name"
      optionValue="id"
      placeholder="Add or remove unfolding"
      class="w-full md:w-14rem"
    />
    <template v-if="unfoldingIds.length > 0">
      <template v-for="unfolding in findUnfoldings(unfoldingIds)" :key="unfolding.id">
        <ul class="list-disc list-inside py-2">
          <li>
            {{ unfolding.name }}
          </li>
        </ul>
      </template>
    </template>
  </span>
</template>

<style scoped></style>
