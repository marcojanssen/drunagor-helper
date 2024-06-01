<script setup lang="ts">
import { ref, watch } from "vue";
import { CampaignStore } from "@/store/CampaignStore";

const props = defineProps<{
  campaignId: string;
}>();

const campaignStore = CampaignStore();

const perseverance = ref(0);
perseverance.value = campaignStore.find(props.campaignId).legacyTrail.perseverance ?? 0;

watch(perseverance, async (newPersverance) => {
  campaignStore.find(props.campaignId).legacyTrail.perseverance = newPersverance;
});

const tragedy = ref(0);
tragedy.value = campaignStore.find(props.campaignId).legacyTrail.tragedy ?? 0;

watch(tragedy, async (newTragedy) => {
  campaignStore.find(props.campaignId).legacyTrail.tragedy = newTragedy;
});

const doom = ref(0);
doom.value = campaignStore.find(props.campaignId).legacyTrail.doom ?? 0;

watch(doom, async (newDoom) => {
  campaignStore.find(props.campaignId).legacyTrail.doom = newDoom;
});

const heroism = ref(0);
heroism.value = campaignStore.find(props.campaignId).legacyTrail.heroism ?? 0;

watch(heroism, async (newHeroism) => {
  campaignStore.find(props.campaignId).legacyTrail.heroism = newHeroism;
});
</script>

<template>
  <div id="story-record-legacy-trail" class="form-control w-full">
    <div class="flex flex-row">
      <span class="w-1/2 lg:w-3/4"></span>
      <div class="w-1/2 lg:w-1/4 grid grid-cols-4 place-items-end">
        <span>0</span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
    </div>
    <div class="flex flex-row">
      <span class="w-1/2 lg:w-3/4">Perseverance</span>
      <div class="w-1/2 lg:w-1/4 grid grid-cols-4 place-items-end">
        <RadioButton v-model="perseverance" name="perseverance" value="0" />
        <RadioButton v-model="perseverance" name="perseverance" value="1" />
        <RadioButton v-model="perseverance" name="perseverance" value="2" />
        <RadioButton v-model="perseverance" name="perseverance" value="3" />
      </div>
    </div>
    <div class="flex flex-row">
      <span class="w-1/2 lg:w-3/4">Tragedy</span>
      <div class="w-1/2 lg:w-1/4 grid grid-cols-4 place-items-end">
        <RadioButton v-model="tragedy" name="tragedy" value="0" />
        <RadioButton v-model="tragedy" name="tragedy" value="1" />
        <RadioButton v-model="tragedy" name="tragedy" value="2" />
        <RadioButton v-model="tragedy" name="tragedy" value="3" />
      </div>
    </div>

    <div class="flex flex-row">
      <span class="w-1/2 lg:w-3/4">Doom</span>
      <div class="w-1/2 lg:w-1/4 grid grid-cols-4 place-items-end">
        <RadioButton v-model="doom" name="doom" value="0" />
        <RadioButton v-model="doom" name="doom" value="1" />
        <RadioButton v-model="doom" name="doom" value="2" />
        <RadioButton v-model="doom" name="doom" value="3" />
      </div>
    </div>
    <div class="flex flex-row">
      <span class="w-1/2 lg:w-3/4">Heroism</span>
      <div class="w-1/2 lg:w-1/4 grid grid-cols-4 place-items-end">
        <RadioButton v-model="heroism" name="heroism" value="0" />
        <RadioButton v-model="heroism" name="heroism" value="1" />
        <RadioButton v-model="heroism" name="heroism" value="2" />
        <RadioButton v-model="heroism" name="heroism" value="3" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
