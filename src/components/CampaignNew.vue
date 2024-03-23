<script setup lang="ts">
import { ref } from "vue";
import BaseModal from "@/components/BaseModal.vue";
import { XMarkIcon } from "@heroicons/vue/24/solid";
import CoreLogo from "@/assets/campaign/logo/core.webp";
import ApocalypseLogo from "@/assets/campaign/logo/apocalypse.webp";
import AwakeningsLogo from "@/assets/campaign/logo/awakenings.webp";
import { CampaignStore } from "@/store/CampaignStore";
import { Campaign } from "@/store/Campaign";
import { customAlphabet } from "nanoid";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

const isOpen = ref(false);
const campaignStore = CampaignStore();
const nanoid = customAlphabet("1234567890", 5);
const router = useRouter();
const { t } = useI18n();

function openModal() {
  isOpen.value = true;
}

function closeModal() {
  isOpen.value = false;
}

function newCampaign(campaign: "core" | "apocalypse" | "awakenings") {
  let campaignId = nanoid();
  campaignStore.add(new Campaign(campaignId, campaign));
  closeModal();
  router.push("/campaign/" + campaignId);
}
</script>

<template>
  <button
    id="campaign-new"
    class="px-3 py-3 bg-neutral text-gray-200 uppercase font-semibold text-sm rounded-lg"
    @click="openModal"
  >
    {{ t("label.new-campaign") }}
  </button>
  <BaseModal :is-open="isOpen" @close-modal="closeModal">
    <template #header>
      <div class="grid grid-cols-2">
        <div class="w-full font-medium place-self-center">{{}}</div>
        <div>
          <button
            id="close-modal"
            class="px-2 py-2 bg-neutral text-gray-200 uppercase font-semibold text-sm rounded-lg float-right"
            @click="closeModal"
          >
            <XMarkIcon class="h-5 bg-neutral text-gray-200 uppercase font-semibold text-sm rounded-lg" />
          </button>
        </div>
      </div>
    </template>
    <template #default>
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
    </template>
  </BaseModal>
</template>

<style scoped></style>
