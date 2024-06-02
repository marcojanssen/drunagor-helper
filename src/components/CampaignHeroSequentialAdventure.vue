<script setup lang="ts">
import { SequentialAdventureState } from "@/store/Hero";
import { ref, watch } from "vue";
import { HeroStore } from "@/store/HeroStore";
import { HeroDataRepository } from "@/data/repository/HeroDataRepository";
import { useRoute } from "vue-router";
import type { HeroData } from "@/data/repository/HeroData";
import { useI18n } from "vue-i18n";

const resourceDefinitions = [
  { id: "focus", translation_key: "label.focus" },
  { id: "fruit-of-life", translation_key: "label.fruit-of-life" },
  { id: "ki", translation_key: "label.ki" },
  { id: "shield", translation_key: "label.shield" },
  { id: "fury", translation_key: "label.fury" },
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
    <Button outlined label="Back" @click="$router.go(-1)"></Button>
  </div>
  <div id="hero-card" class="bg-neutral form-control drop-shadow rounded-lg p-4 mt-4" style="background-color: #1f2937">
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
      <label for="curse-cubes" class="block pt-4">{{ t("text.curse-cubes") }}</label>
      <InputNumber
        :inputStyle="{ width: '100%' }"
        incrementButtonIcon="pi pi-plus"
        decrementButtonIcon="pi pi-minus"
        id="curse-cubes"
        name="curse-cubes"
        showButtons
        buttonLayout="horizontal"
        :min="0"
        :max="5"
        v-model="sequentialAdventureState.curseCubes"
      />

      <label for="trauma-cube" class="block py-2">{{ t("text.trauma-cubes") }}</label>
      <InputNumber
        :inputStyle="{ width: '100%' }"
        incrementButtonIcon="pi pi-plus"
        decrementButtonIcon="pi pi-minus"
        id="trauma-cube"
        name="trauma-cube"
        showButtons
        buttonLayout="horizontal"
        :min="0"
        :max="1"
        v-model="sequentialAdventureState.traumaCubes"
      />
    </div>

    <Divider>{{ t("label.resources") }}</Divider>

    <div id="resource-select">
      <template v-for="resource in resourceDefinitions" :key="resource.id">
        <label :for="resource.id" class="block py-2">{{ t(resource.translation_key) }}</label>
        <InputNumber
          :inputStyle="{ width: '100%' }"
          incrementButtonIcon="pi pi-plus"
          decrementButtonIcon="pi pi-minus"
          :name="resource.id"
          :id="resource.id"
          showButtons
          buttonLayout="horizontal"
          :min="0"
          :max="4"
          v-model.number="sequentialAdventureState.resources[resource.translation_key]"
        />
      </template>
    </div>
  </div>
</template>

<style scoped>
#hero-card {
  background-image: url("@/assets/hero/flag-bg-red.webp");
  background-repeat: no-repeat;
}
</style>
