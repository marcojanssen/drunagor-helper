<script setup lang="ts">
import { CampaignStore } from "@/store/CampaignStore";
import { HeroStore } from "@/store/HeroStore";
import { SequentialAdventureState } from "@/store/Hero";

const campaignStore = CampaignStore();
const heroStore = HeroStore();

const props = defineProps<{
  campaignId: string;
}>();

const emit = defineEmits(["sequentialAdventure"]);

function startSequentialAdventure() {
  const campaign = campaignStore.find(props.campaignId);
  campaign.isSequentialAdventure = true;
  campaign.sequentialAdventureRunes = 0;

  heroStore.findAllInCampaign(props.campaignId).forEach((hero) => {
    hero.sequentialAdventureState = new SequentialAdventureState();
  });
  emit("sequentialAdventure");
}
</script>

<template>
  <button
    id="sequential-adventure-btn"
    class="px-3 py-3 bg-neutral text-gray-200 uppercase font-semibold text-sm rounded-lg"
    @click="startSequentialAdventure"
  >
    Sequential Adventure
  </button>
</template>

<style scoped></style>
