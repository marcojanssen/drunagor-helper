<script setup lang="ts">
import { TrackerMenuStore } from "@/store/TrackerMenuStore";
import { ChevronLeftIcon } from "@heroicons/vue/24/solid";

const trackerMenuStore = TrackerMenuStore();
</script>

<template>
  <TransitionGroup name="tracker-menu-back-button">
    <button class="btn btn-sm btn-circle" v-if="trackerMenuStore.canGoBack()" @click="trackerMenuStore.goBack()">
      <ChevronLeftIcon class="h-7 btn-sm btn-circle rounded-lg p-1" />
    </button>
  </TransitionGroup>
</template>

<style>
.tracker-menu-back-button-leave-active,
.tracker-menu-back-button-enter-active {
  transition: all 0.3s ease;
}

.tracker-menu-back-button-leave-to,
.tracker-menu-back-button-enter-from {
  opacity: 0;
}
</style>
