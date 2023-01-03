<script setup lang="ts">
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/vue/24/solid";
import { ref } from "vue";

const displayDescription = ref(false);
function toggleDisplay() {
  displayDescription.value = !displayDescription.value;
}
</script>

<template>
  <div @click="toggleDisplay" class="relative h-12 pt-3 cursor-pointer w-full">
    <slot></slot>
    <ChevronDownIcon v-if="!displayDescription" class="absolute top-4 right-2 h-4 w-4" />
    <ChevronUpIcon v-if="displayDescription" class="absolute top-4 right-2 h-4 w-4" />
  </div>
  <div v-if="displayDescription" class="h-full p-3 bg-base-300">
    <slot name="description"></slot>
  </div>
</template>

<style scoped></style>
