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
  <div id="story-record-background-and-trait" class="grid gap-1 form-control w-full">
    <label class="cursor-pointer">
      <span class="label-text text-base">Folk Hero</span>
      <Checkbox variant="outlined" v-model="backgroundAndTraitIds" value="folk-hero" class="float-right" />
    </label>
    <label class="cursor-pointer">
      <span class="label-text text-base">Knight of Amira</span>
      <Checkbox variant="outlined" v-model="backgroundAndTraitIds" value="knight-of-amir" class="float-right" />
    </label>
    <label class="cursor-pointer">
      <span class="label-text text-base">Redeemer</span>
      <Checkbox variant="outlined" v-model="backgroundAndTraitIds" value="redeemer" class="float-right" />
    </label>
    <label class="cursor-pointer">
      <span class="label-text text-base">Passionate</span>
      <Checkbox variant="outlined" v-model="backgroundAndTraitIds" value="passionate" class="float-right" />
    </label>
  </div>
</template>

<style scoped></style>
