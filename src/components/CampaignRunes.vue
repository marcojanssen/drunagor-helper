<script setup lang="ts">
import { CampaignStore } from "@/store/CampaignStore";
import { useI18n } from "vue-i18n";

const campaignStore = CampaignStore();

const props = defineProps<{
  campaignId: string;
}>();
const { t } = useI18n();
</script>

<template>
  <label for="runes" class="block pb-4">{{ t("text.number-of-runes") }}</label>
  <InputNumber
    :inputStyle="{ width: '100%' }"
    incrementButtonIcon="pi pi-plus"
    decrementButtonIcon="pi pi-minus"
    id="runes"
    name="runes"
    showButtons
    buttonLayout="horizontal"
    :min="0"
    v-model="campaignStore.find(props.campaignId).sequentialAdventureRunes"
  />
</template>

<style scoped></style>
