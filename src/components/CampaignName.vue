<script setup lang="ts">
import { CampaignStore } from "@/store/CampaignStore";
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import FloatLabel from "primevue/floatlabel";

const props = defineProps<{
  campaignId: string;
}>();
const { t } = useI18n();

const campaignStore = CampaignStore();
const campaign = campaignStore.find(props.campaignId);
const name = ref(campaign.name);

watch(name, async (newName) => {
  campaignStore.find(props.campaignId).name = newName;
});
</script>

<template>
  <FloatLabel>
    <InputText class="w-full" id="campaign-log-name" v-model="name" />
    <label for="campaign-log-name">{{ t("text.party-name") }}</label>
  </FloatLabel>
</template>

<style scoped></style>
