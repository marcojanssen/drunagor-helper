<script setup lang="ts">
import { ref } from "vue";
import { CampaignStore } from "@/store/CampaignStore";
import { HeroStore } from "@/store/HeroStore";
import BaseModal from "@/components/BaseModal.vue";
import { XMarkIcon } from "@heroicons/vue/24/solid";
import { useToast } from "vue-toastification";

const toast = useToast();

const props = defineProps<{
  campaignId: string;
}>();

const isOpen = ref(false);
const campaignStore = CampaignStore();
const heroStore = HeroStore();
const token = ref("");

function openModal() {
  const campaign = campaignStore.find(props.campaignId);
  const heroes = heroStore.findAllInCampaign(props.campaignId);
  const data = {
    campaign: campaign.campaign,
    heroes: heroes.map((h) => {
      const clone = JSON.parse(JSON.stringify(h));
      clone.campaignId = "";
      return clone;
    }),
  };
  token.value = btoa(JSON.stringify(data));

  isOpen.value = true;
}

function copyToClipboard() {
  navigator.clipboard.writeText(token.value);
  toast.success("Token has been copied to clipboard.");
}

function closeModal() {
  isOpen.value = false;
}
</script>

<template>
  <button
    id="campaign-export"
    class="px-3 py-3 bg-neutral text-gray-200 uppercase font-semibold text-sm rounded-lg"
    @click="openModal"
  >
    Export campaign
  </button>
  <BaseModal :is-open="isOpen" @close-modal="closeModal">
    <template #header>
      <div class="grid grid-cols-2">
        <div class="w-full font-medium place-self-center">Export campaign</div>
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
      <div class="py-4">Copy this token to import your campaign on another device</div>
      <textarea
        v-model="token"
        id="campaign-token"
        class="w-full h-60 text-black rounded shadow border-transparent focus:border-transparent focus:ring-0"
      ></textarea>
      <div class="flex flex-wrap justify-center gap-4 pt-4">
        <button
          id="campaign-token-copy-to-clipboard"
          class="px-2 py-2 bg-neutral text-gray-200 uppercase font-semibold text-sm rounded-lg"
          @click="copyToClipboard"
        >
          Copy to clipboard
        </button>
        <button
          id="close-modal"
          class="px-2 py-2 bg-neutral text-gray-200 uppercase font-semibold text-sm rounded-lg"
          @click="closeModal"
        >
          Close
        </button>
      </div>
    </template>
  </BaseModal>
</template>

<style scoped></style>
