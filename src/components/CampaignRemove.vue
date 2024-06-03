<script setup lang="ts">
import { ref } from "vue";
import { CampaignStore } from "@/store/CampaignStore";
import { useRouter } from "vue-router";
import { HeroStore } from "@/store/HeroStore";
import { useI18n } from "vue-i18n";
import { useToast } from "primevue/usetoast";

const toast = useToast();

const visible = ref(false);
const campaignStore = CampaignStore();
const heroStore = HeroStore();
const router = useRouter();
const { t } = useI18n();

function openModal() {
  visible.value = true;
}
function closeModal() {
  visible.value = false;
}

const props = defineProps<{
  campaignId: string;
}>();

function removeCampaign() {
  campaignStore.remove(props.campaignId);
  heroStore.findAllInCampaign(props.campaignId).forEach((hero) => {
    heroStore.removeFromCampaign(hero.heroId, props.campaignId);
  });
  toast.add({ severity: "success", summary: t("label.success"), detail: t("text.campaign-removed"), life: 3000 });
  closeModal();
  router.push("/campaign/");
}
</script>

<template>
  <Button outlined id="campaign-remove" :label="t('label.remove-campaign')" @click="openModal"></Button>
  <Dialog
    v-model:visible="visible"
    modal
    :header="t('label.remove-campaign')"
    :dismissableMask="true"
    class="w-full md:w-1/3 m-2"
  >
    <span>{{ t("text.cannot-be-restored") }}</span>
    <BaseButtonMenu>
      <Button outlined :label="t('label.yes')" @click="removeCampaign"></Button>
      <Button outlined :label="t('label.no')" @click="closeModal"></Button>
    </BaseButtonMenu>
  </Dialog>
</template>

<style scoped></style>
