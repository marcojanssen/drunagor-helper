<script setup lang="ts">
import { CampaignStore } from "@/store/CampaignStore";

const props = defineProps<{
  campaignId: string;
}>();

const campaignStore = CampaignStore();
</script>

<template>
  <div class="p-4 grid gap-2">
    <span class="w-48">Party name:</span>
    <input
      type="text"
      v-model="campaignStore.find(props.campaignId).name"
      class="w-full bg-base-100 focus:ring-0 border-0 rounded-lg"
    />
  </div>
</template>

<style scoped></style>
