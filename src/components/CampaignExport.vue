<script setup lang="ts">
import { ref } from "vue";
import { useToast } from "primevue/usetoast";
import { CampaignStore } from "@/store/CampaignStore";
import { HeroStore } from "@/store/HeroStore";
import { useI18n } from "vue-i18n";

const toast = useToast();

const props = defineProps<{
  campaignId: string;
}>();

const visible = ref(false);
const campaignStore = CampaignStore();
const heroStore = HeroStore();
const token = ref("");
const { t } = useI18n();

function openModal() {
  const campaignCopy = JSON.parse(JSON.stringify(campaignStore.find(props.campaignId)));
  campaignCopy.campaignId = "";

  const heroes = heroStore.findAllInCampaign(props.campaignId);

  const data = {
    campaignData: campaignCopy,
    heroes: heroes.map((h) => {
      const clone = JSON.parse(JSON.stringify(h));
      clone.campaignId = "";
      return clone;
    }),
  };
  token.value = btoa(JSON.stringify(data));

  visible.value = true;
}

function copyToClipboard() {
  navigator.clipboard.writeText(token.value);
  toast.add({
    severity: "success",
    summary: t("label.success"),
    detail: "Token has been copied to clipboard.",
    life: 3000,
  });
  closeModal();
}

function closeModal() {
  visible.value = false;
}
</script>

<template>
  <Button outlined id="campaign-export" :label="t('label.export-campaign')" @click="openModal"></Button>
  <Dialog
    v-model:visible="visible"
    modal
    :header="t('label.export-campaign')"
    :dismissableMask="true"
    class="w-full md:w-1/3 m-2"
  >
    <div class="py-4">{{ t("text.copy-this-token") }}</div>
    <Textarea id="campaign-token" v-model="token" rows="5" cols="25" class="w-full"></Textarea>
    <BaseButtonMenu>
      <Button outlined :label="t('label.copy-to-clipboard')" @click="copyToClipboard"></Button>
      <Button outlined :label="t('label.cancel')" @click="closeModal"></Button>
    </BaseButtonMenu>
  </Dialog>
</template>

<style scoped></style>
