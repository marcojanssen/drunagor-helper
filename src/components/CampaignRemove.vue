<script setup lang="ts">
import { ref } from "vue";
import BaseModal from "@/components/BaseModal.vue";
import { XMarkIcon } from "@heroicons/vue/24/solid";
import { CampaignStore } from "@/store/CampaignStore";
import { useRouter } from "vue-router";

const isOpen = ref(false);
const campaignStore = CampaignStore();
const router = useRouter();

function openModal() {
  isOpen.value = true;
}
function closeModal() {
  isOpen.value = false;
}

const props = defineProps<{
  campaignId: string;
}>();

function removeCampaign() {
  campaignStore.remove(props.campaignId);
  closeModal();
  router.push("/campaign/");
}
</script>

<template>
  <button
    id="campaign-remove"
    class="px-3 py-3 bg-neutral text-gray-200 uppercase font-semibold text-sm rounded-lg"
    @click="openModal"
  >
    Remove campaign
  </button>
  <BaseModal :is-open="isOpen" @close-modal="closeModal">
    <template #header>
      <div class="grid grid-cols-2">
        <div class="w-full font-medium place-self-center">Remove campaign</div>
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
      <div class="py-4">This will remove the campaign. It can not be restored. Are you sure?</div>
      <div class="flex flex-wrap justify-center gap-4">
        <button
          id="close-modal"
          class="px-2 py-2 bg-red-500 text-gray-200 uppercase font-semibold text-sm rounded-lg"
          @click="removeCampaign"
        >
          Yes
        </button>
        <button
          id="close-modal"
          class="px-2 py-2 bg-neutral text-gray-200 uppercase font-semibold text-sm rounded-lg"
          @click="closeModal"
        >
          No
        </button>
      </div>
    </template>
  </BaseModal>
</template>

<style scoped></style>
