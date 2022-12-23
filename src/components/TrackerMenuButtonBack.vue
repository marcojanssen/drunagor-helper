<script setup lang="ts">
import { TrackerMenuStore } from "@/store/TrackerMenuStore";

const trackerMenuStore = TrackerMenuStore();
</script>

<template>
  <TransitionGroup name="tracker-menu-back-button">
    <button
      class="btn btn-sm btn-circle absolute top-2 left-4"
      v-if="trackerMenuStore.canGoBack()"
      @click="trackerMenuStore.goBack()"
    >
      <svg
        class="h-6 w-6 fill-current md:h-8 md:w-8"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path>
      </svg>
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
