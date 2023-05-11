<script setup lang="ts">
import { CampaignStore } from "@/store/CampaignStore";

const campaignStore = CampaignStore();

const props = defineProps<{
  campaignId: string;
}>();
</script>

<template>
  <div class="p-4 grid gap-2">
    <span class="w-48">Number of runes:</span>
    <input
      type="number"
      v-model.number="campaignStore.find(props.campaignId).sequentialAdventureRunes"
      id="runes"
      class="w-full bg-base-100 focus:ring-0 rounded-lg"
    />
  </div>
</template>

<style scoped></style>
