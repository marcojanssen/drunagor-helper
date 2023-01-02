<script setup lang="ts">
import { ref } from "vue";

const displayDescription = ref(false);
function toggleDisplay() {
  displayDescription.value = !displayDescription.value;
}
</script>

<template>
  <div @click="toggleDisplay" class="h-12 pt-3 cursor-pointer w-full">
    <slot></slot>
  </div>
  <div v-if="displayDescription" class="h-full p-4">
    <slot name="description"></slot>
  </div>
</template>

<style scoped></style>
