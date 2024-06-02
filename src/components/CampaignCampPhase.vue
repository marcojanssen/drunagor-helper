<script setup lang="ts">
import { ref } from "vue";
import { CampaignStore } from "@/store/CampaignStore";
import { HeroStore } from "@/store/HeroStore";
import { useI18n } from "vue-i18n";

const emit = defineEmits(["campPhase"]);
const { t } = useI18n();

const visible = ref(false);
const campaignStore = CampaignStore();
const heroStore = HeroStore();

function openModal() {
  visible.value = true;
}
function closeModal() {
  visible.value = false;
}

const props = defineProps<{
  campaignId: string;
}>();

function campPhase() {
  const campaign = campaignStore.find(props.campaignId);
  campaign.statusIds = [];
  campaign.isSequentialAdventure = false;
  campaign.sequentialAdventureRunes = 0;

  heroStore.findAllInCampaign(props.campaignId).forEach((hero) => {
    hero.statusIds = [];
    hero.sequentialAdventureState = null;
  });
  closeModal();
  emit("campPhase");
}
</script>

<template>
  <Button outlined id="camp-phase" :label="t('label.camp-phase')" @click="openModal"></Button>
  <Dialog
    v-model:visible="visible"
    modal
    :header="t('label.camp-phase')"
    :dismissableMask="true"
    class="w-full md:w-1/3 m-2"
  >
    <span>{{ t("text.reset-state") }}</span>
    <BaseButtonMenu>
      <Button outlined :label="t('label.yes')" @click="campPhase"></Button>
      <Button outlined :label="t('label.no')" @click="closeModal"></Button>
    </BaseButtonMenu>
  </Dialog>
</template>

<style scoped></style>
