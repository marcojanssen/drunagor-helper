<script setup lang="ts">
import { ref, watch } from "vue";
import type { AuraRepository } from "@/data/repository/campaign/AuraRepository";
import { HeroStore } from "@/store/HeroStore";
import { useI18n } from "vue-i18n";
import { ConfigurationStore } from "@/store/ConfigurationStore";
import Dropdown from "primevue/dropdown";

const props = defineProps<{
  heroId: string;
  campaignId: string;
  repository: AuraRepository;
}>();

const heroStore = HeroStore();
const configurationStore = ConfigurationStore();
const { t } = useI18n();
props.repository.load(configurationStore.enabledLanguage);
const auras = props.repository.findAll();

const auraId = ref("");
auraId.value = heroStore.findInCampaign(props.heroId, props.campaignId).auraId ?? "";

watch(auraId, (newAuraId) => {
  heroStore.findInCampaign(props.heroId, props.campaignId).auraId = newAuraId;
});
</script>

<template>
  <span :data-testid="'campaign-log-aura-' + heroId">
    <Dropdown
      v-model="auraId"
      :options="auras"
      showClear
      checkmark
      filter
      optionLabel="name"
      optionValue="id"
      :placeholder="$t('text.select-aura')"
      class="w-full md:w-14rem"
    />
    <template v-if="auraId">
      <p class="text-sm text-gray-500 py-2">{{ t("text.aura-info") }}</p>
      <p>{{ props.repository.find(auraId)?.effect }}</p>
    </template>
  </span>
</template>

<style scoped></style>
