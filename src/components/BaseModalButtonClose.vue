<script setup lang="ts">
import { BaseModalStore } from "@/store/BaseModalStore";
import { XMarkIcon } from "@heroicons/vue/24/solid";

const baseModalStore = BaseModalStore();
</script>

<template>
  <button id="base-modal-close" @click="baseModalStore.close()" class="btn btn-sm btn-circle absolute top-2 right-2">
    <XMarkIcon class="h-7 rounded-lg p-1" />
  </button>
</template>

<style scoped></style>
