<script setup lang="ts">
import { ref, watch } from "vue";
import { CampaignStore } from "@/store/CampaignStore";

const props = defineProps<{
  campaignId: string;
}>();

const campaignStore = CampaignStore();

const backgroundAndTraitIds = ref([] as string[]);
backgroundAndTraitIds.value = campaignStore.find(props.campaignId).backgroundAndTraitIds ?? [];

watch(backgroundAndTraitIds, async (newBackgroundAndTraitsIds) => {
  campaignStore.find(props.campaignId).backgroundAndTraitIds = newBackgroundAndTraitsIds;
});
</script>

<template>
  <div id="story-record-background-and-trait" class="grid gap-4 bg-neutral form-control w-full">
    <label class="cursor-pointer">
      <span class="label-text text-base">Folk Hero</span>
      <input
        type="checkbox"
        v-model="backgroundAndTraitIds"
        id="story-record-background-and-trait-folk-hero"
        value="folk-hero"
        class="float-right w-5 h-5 text-emerald-500 bg-base-100 rounded focus:ring-0"
      />
    </label>
    <label class="cursor-pointer">
      <span class="label-text text-base">Knight of Amira</span>
      <input
        type="checkbox"
        v-model="backgroundAndTraitIds"
        id="story-record-background-and-trait-knight-of-amira"
        value="knight-of-amira"
        class="float-right w-5 h-5 text-emerald-500 bg-base-100 rounded focus:ring-0"
      />
    </label>
    <label class="cursor-pointer">
      <span class="label-text text-base">Redeemer</span>
      <input
        type="checkbox"
        v-model="backgroundAndTraitIds"
        id="story-record-background-and-trait-redeemer"
        value="redeemer"
        class="float-right w-5 h-5 text-emerald-500 bg-base-100 rounded focus:ring-0"
      />
    </label>
    <label class="cursor-pointer">
      <span class="label-text text-base">Passionate</span>
      <input
        type="checkbox"
        v-model="backgroundAndTraitIds"
        id="story-record-background-and-trait-passionate"
        value="passionate"
        class="float-right w-5 h-5 text-emerald-500 bg-base-100 rounded focus:ring-0"
      />
    </label>
  </div>
</template>

<style scoped></style>
