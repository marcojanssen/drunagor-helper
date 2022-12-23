<script setup lang="ts">
import BaseModalButtonClose from "@/components/BaseModalButtonClose.vue";
import TrackerMenuMain from "@/components/TrackerMenuMain.vue";
import TrackerMenuButtonBack from "@/components/TrackerMenuButtonBack.vue";
import TrackerMenuAddMonster from "@/components/TrackerMenuAddMonster.vue";
import TrackerMenuAddMonsterRank from "@/components/TrackerMenuAddMonsterRank.vue";
import { TrackerMenuStore } from "@/store/TrackerMenuStore";
import TrackerMenuRemoveCharacter from "./TrackerMenuRemoveCharacter.vue";

const trackerMenuStore = TrackerMenuStore();

trackerMenuStore.resetMenu();
</script>

<template>
  <div class="container w-full bg-base-100 h-12 sticky top-0">
    <TrackerMenuButtonBack />
    <BaseModalButtonClose />
  </div>
  <div class="container p-4 h-128">
    <TransitionGroup :name="trackerMenuStore.direction">
      <TrackerMenuMain v-if="trackerMenuStore.activeMenu == 'main'" />
      <TrackerMenuAddMonster v-if="trackerMenuStore.activeMenu == 'add-monster'" />
      <TrackerMenuAddMonsterRank v-if="trackerMenuStore.activeMenu == 'add-monster-rank'" />
      <TrackerMenuRemoveCharacter v-if="trackerMenuStore.activeMenu == 'remove-character'" />
    </TransitionGroup>
  </div>
</template>

<style scoped>
.back-leave-active,
.to-leave-active {
  position: absolute;
}

.reset-leave-active,
.reset-enter-active {
  transition: all 0s ease;
}

.back-leave-active,
.back-enter-active,
.to-leave-active,
.to-enter-active {
  transition: all 0.3s ease;
}
.back-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.to-enter-from {
  opacity: 0;
  transform: translateX(100%);
}
.back-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
.to-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
