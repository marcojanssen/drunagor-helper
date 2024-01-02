<script setup lang="ts">
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/vue/24/solid";
import { ref } from "vue";

const props = defineProps<{
  opened?: boolean;
  id?: string;
}>();

const displayDescription = ref(false);
if (props.opened) {
  displayDescription.value = true;
}

function toggleDisplay() {
  displayDescription.value = !displayDescription.value;
}
</script>

<template>
  <div
    @click="toggleDisplay"
    :id="props.id"
    class="bg-neutral relative h-12 pl-2 pt-3 cursor-pointer w-full rounded-md shadow-lg"
  >
    <slot></slot>
    <ChevronDownIcon v-if="!displayDescription" class="absolute top-4 right-2 h-4 w-4" />
    <ChevronUpIcon v-if="displayDescription" class="absolute top-4 right-2 h-4 w-4" />
  </div>
  <div v-if="displayDescription" class="h-full p-3 bg-base-100">
    <slot name="description"></slot>
  </div>
</template>

<style scoped></style>
