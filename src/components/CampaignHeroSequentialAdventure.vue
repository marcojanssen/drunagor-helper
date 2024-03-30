<script setup lang="ts">
import { SequentialAdventureState } from "@/store/Hero";
import { ref, watch } from "vue";
import { HeroStore } from "@/store/HeroStore";
import { HeroDataRepository } from "@/data/repository/HeroDataRepository";
import { useRoute } from "vue-router";
import { ChevronLeftIcon } from "@heroicons/vue/20/solid";
import type { HeroData } from "@/data/repository/HeroData";
import { useI18n } from "vue-i18n";

const resourceDefinitions = [
  { id: "focus", name: "Focus" },
  { id: "fruit-of-life", name: "Fruit of Life" },
  { id: "ki", name: "KI" },
  { id: "shield", name: "Shield" },
];

const heroStore = HeroStore();
const heroDataRepository = new HeroDataRepository();
const { t } = useI18n();

const route = useRoute();
const heroId = route.params.heroId.toString();
const campaignId = route.params.campaignId.toString();

const hero = heroDataRepository.find(heroId) ?? ({} as HeroData);
const sequentialAdventureState = ref({} as SequentialAdventureState);

const currentSeqAdv = heroStore.findInCampaign(heroId, campaignId).sequentialAdventureState;
const seqAdvState =
  typeof currentSeqAdv !== "undefined" && currentSeqAdv !== null ? currentSeqAdv : new SequentialAdventureState();

sequentialAdventureState.value = seqAdvState;

watch(
  sequentialAdventureState,
  (newState) => {
    heroStore.findInCampaign(heroId, campaignId).sequentialAdventureState = newState;
  },
  { deep: true }
);
</script>

<template>
  <div>
    <button class="px-3 py-3 w-16 bg-neutral rounded-lg" @click="$router.go(-1)">
      <ChevronLeftIcon class="h-5 w-5 mx-auto" />
    </button>
  </div>
  <div id="hero-card" class="bg-neutral form-control drop-shadow rounded-lg p-4 mt-4">
    <div class="flex h-28">
      <div>
        <img class="-ml-1 w-14 rounded-full hero-image" :src="hero.images.avatar" />
      </div>
      <div class="pl-8">
        <p>{{ hero.name }}</p>
        <p>
          {{ t("label." + hero.race.toLowerCase()) }} {{ t("label." + hero.class.toLowerCase().replace(" ", "-")) }}
        </p>
        <p>{{ t("text.path-of") }} {{ t("label." + hero.path.toLowerCase()) }}</p>
      </div>
    </div>

    <div id="sequential-select" class="pt-4">
      <label for="curse-cubes" class="block"> {{ t("text.curse-cubes") }} </label>
      <select
        v-model.number="sequentialAdventureState.curseCubes"
        name="curse-cubes"
        id="curse-cubes"
        class="bg-base-100 py-2 pl-3 pr-20 w-full leading-5 focus:ring-0 rounded-lg"
      >
        <option v-for="index in 6" :value="index - 1" :key="index">
          {{ index - 1 }}
        </option>
      </select>

      <label for="trauma-cube" class="block pt-2"> {{ t("text.trauma-cube") }} </label>
      <select
        v-model.number="sequentialAdventureState.traumaCubes"
        name="trauma-cube"
        id="trauma-cube"
        class="bg-base-100 py-2 pl-3 pr-20 w-full leading-5 focus:ring-0 rounded-lg"
      >
        <option value="0">0</option>
        <option value="1">1</option>
      </select>
    </div>

    <h3 class="py-5">Resources</h3>

    <div id="resource-select">
      <template v-for="resource in resourceDefinitions" :key="resource.id">
        <label :for="resource.id">
          {{ resource.name }}
        </label>
        <div>
          <select
            v-model.number="sequentialAdventureState.resources[resource.name]"
            :name="resource.id"
            :id="resource.id"
            class="bg-base-100 py-2 pl-3 pr-20 w-full leading-5 focus:ring-0 rounded-lg"
          >
            <option v-for="index in 5" :value="index - 1" :key="index">
              {{ index - 1 }}
            </option>
          </select>
        </div>
      </template>
    </div>

    <button
      id="save-seq-adv"
      class="px-4 py-2 mt-4 w-full bg-emerald-500 text-gray-200 uppercase font-semibold text-sm rounded-lg"
      @click="$router.back()"
    >
      Ok
    </button>
  </div>
</template>

<style scoped>
#hero-card {
  background-image: url("@/assets/hero/flag-bg-red.webp");
  background-repeat: no-repeat;
}

#resource-select {
  display: grid;
  grid-template-columns: max-content auto;
  grid-gap: 0.5em;
}
</style>
