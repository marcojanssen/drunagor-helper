<script setup lang="ts">
import { computed, ref } from "vue";
import { HeroStore } from "@/store/HeroStore";
import { useRouter } from "vue-router";
import { SequentialAdventureState } from "@/store/Hero";
import type { HeroData } from "@/data/repository/HeroData";
import { useI18n } from "vue-i18n";

const props = defineProps<{
  hero: HeroData;
  campaignId: string;
}>();

const heroStore = HeroStore();
const router = useRouter();
const { t } = useI18n();

const sequentialAdventureState = ref({} as SequentialAdventureState);
sequentialAdventureState.value =
  heroStore.findInCampaign(props.hero.id, props.campaignId)?.sequentialAdventureState ?? new SequentialAdventureState();

const resourceDisplay = computed(() => {
  const resources = sequentialAdventureState.value?.resources;
  const resourcesToDisplay = [] as any[];

  for (const resource in resources) {
    if (resources[resource] > 0) {
      resourcesToDisplay.push({
        name: resource,
        count: resources[resource],
      });
    }
  }
  return resourcesToDisplay;
});

function openSequentialStateEditor() {
  router.push({ name: "HeroSequentialState", params: { campaignId: props.campaignId, heroId: props.hero.id } });
}
</script>

<template>
  <div id="seq-adv" class="pt-2 w-full cursor-pointer" @click="openSequentialStateEditor">
    <div id="curse-cubes" class="resource-wrapper text-center flex justify-end">
      <div class="w-full">
        <span class="block border-b text-lg">{{ sequentialAdventureState.curseCubes }}</span>
        <span class="whitespace-nowrap">{{ t("text.curse-cubes") }}</span>
      </div>
    </div>

    <div id="trauma-cubes" class="resource-wrapper text-center flex justify-end">
      <div class="w-full">
        <span class="block border-b text-lg">{{ sequentialAdventureState.traumaCubes }}</span>
        <span class="whitespace-nowrap">{{ t("text.trauma-cubes") }}</span>
      </div>
    </div>

    <div class="text-center">
      <div id="resources" class="block border-b text-lg" v-if="resourceDisplay.length > 0">
        <span v-for="resource in resourceDisplay" :key="resource.name" class="block">
          {{ resource.count }} {{ t(resource.name) }}
        </span>
      </div>
      <div class="block border-b text-lg" v-else>
        <span class="italic text-sm text-gray-500">{{ t("text.no-resources") }}</span>
      </div>
      <span>{{ t("label.resources") }}</span>
    </div>
  </div>
</template>

<style scoped>
.resource-wrapper {
  align-items: flex-end;
}
#seq-adv {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 0.8em;
}
</style>
