<script setup lang="ts">
import { ref } from "vue";
import CoreLogo from "@/assets/campaign/logo/core.webp";
import ApocalypseLogo from "@/assets/campaign/logo/apocalypse.webp";
import AwakeningsLogo from "@/assets/campaign/logo/awakenings.webp";
import { CampaignStore } from "@/store/CampaignStore";
import { Campaign } from "@/store/Campaign";
import { customAlphabet } from "nanoid";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

const visible = ref(false);
const campaignStore = CampaignStore();
const nanoid = customAlphabet("1234567890", 5);
const router = useRouter();
const { t } = useI18n();

function newCampaign(campaign: "core" | "apocalypse" | "awakenings") {
  let campaignId = nanoid();
  campaignStore.add(new Campaign(campaignId, campaign));
  visible.value = false;
  router.push("/campaign/" + campaignId);
}
</script>

<template>
  <Button outlined id="campaign-new" :label="t('label.new-campaign')" @click="visible = true"></Button>
  <Dialog
    v-model:visible="visible"
    modal
    :header="t('label.new-campaign')"
    :dismissableMask="true"
    class="w-full md:w-1/3 m-2"
  >
    <div class="grid place-items-center gap-2">
      <img id="campaign-core" class="cursor-pointer" :src="CoreLogo.toString()" @click="newCampaign('core')" />
      <img
        id="campaign-apocalypse"
        class="cursor-pointer"
        :src="ApocalypseLogo.toString()"
        @click="newCampaign('apocalypse')"
      />
      <img
        id="campaign-awakenings"
        class="cursor-pointer"
        :src="AwakeningsLogo.toString()"
        @click="newCampaign('awakenings')"
      />
    </div>
  </Dialog>
</template>

<style scoped></style>
