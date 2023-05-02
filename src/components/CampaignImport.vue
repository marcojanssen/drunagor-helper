<script setup lang="ts">
import { ref } from "vue";
import { CampaignStore } from "@/store/CampaignStore";
import { HeroStore } from "@/store/HeroStore";
import { useRouter } from "vue-router";
import BaseModal from "@/components/BaseModal.vue";
import { XMarkIcon } from "@heroicons/vue/24/solid";
import { Campaign } from "@/store/Campaign";
import type { Hero } from "@/store/Hero";
import { nanoid } from "nanoid";

const isOpen = ref(false);
const campaignStore = CampaignStore();
const heroStore = HeroStore();
const router = useRouter();

const token = ref("");

function importCampaign() {
  const data = JSON.parse(atob(token.value));

  const campaignId = nanoid();
  campaignStore.add(new Campaign(campaignId, data.campaign));

  const heroes = data.heroes as Hero[];
  heroes.forEach((h) => {
    h.campaignId = campaignId;
    heroStore.add(h);
  });
  closeModal();
  router.push("/campaign/" + campaignId);
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
      <textarea v-model="token" id="campaign-token" class="w-full h-60 text-black"></textarea>
      <div class="flex flex-wrap justify-center gap-4">
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
