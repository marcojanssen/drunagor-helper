<script setup lang="ts">
import { ref } from "vue";
import { CampaignStore } from "@/store/CampaignStore";
import { HeroStore } from "@/store/HeroStore";
import { useRouter } from "vue-router";
import BaseModal from "@/components/BaseModal.vue";
import { XMarkIcon } from "@heroicons/vue/24/solid";
import { Campaign } from "@/store/Campaign";
import type { Hero } from "@/store/Hero";
import { customAlphabet } from "nanoid";
import { HeroEquipment } from "@/store/Hero";
import { useToast } from "vue-toastification";

const toast = useToast();

const isOpen = ref(false);
const campaignStore = CampaignStore();
const heroStore = HeroStore();
const router = useRouter();
const nanoid = customAlphabet("1234567890", 5);

const token = ref("");

function importCampaign() {
  try {
    const data = JSON.parse(atob(token.value));
    const campaignId = nanoid();
    campaignStore.add(new Campaign(campaignId, data.campaign));

    const heroes = data.heroes as Hero[];
    heroes.forEach((h) => {
      h.campaignId = campaignId;

      if (typeof h.equipment === "undefined") {
        h.equipment = new HeroEquipment();
      }

      heroStore.add(h);
    });
    closeModal();
    router.push({ name: "Campaign", params: { id: campaignId } });
  } catch (e) {
    toast.error("Invalid token.");
    return;
  }
}

function openModal() {
  isOpen.value = true;
}

function closeModal() {
  isOpen.value = false;
}
</script>

<template>
  <button
    id="campaign-import"
    class="px-3 py-3 bg-neutral text-gray-200 uppercase font-semibold text-sm rounded-lg"
    @click="openModal"
  >
    Import campaign
  </button>
  <BaseModal :is-open="isOpen" @close-modal="closeModal" id="campaign-import-modal">
    <template #header>
      <div class="grid grid-cols-2">
        <div class="w-full font-medium place-self-center">Import campaign</div>
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
      <div class="py-4">Paste your token here</div>
      <textarea
        v-model="token"
        id="campaign-token"
        class="w-full h-60 text-black rounded shadow border-transparent focus:border-transparent focus:ring-0"
      ></textarea>
      <div class="flex flex-wrap justify-center gap-4 pt-4">
        <button
          id="import-button"
          class="px-2 py-2 bg-emerald-500 text-gray-200 uppercase font-semibold text-sm rounded-lg"
          @click="importCampaign"
        >
          Import
        </button>
        <button
          id="close-modal"
          class="px-2 py-2 bg-neutral text-gray-200 uppercase font-semibold text-sm rounded-lg"
          @click="closeModal"
        >
          Cancel
        </button>
      </div>
    </template>
  </BaseModal>
</template>

<style scoped></style>
