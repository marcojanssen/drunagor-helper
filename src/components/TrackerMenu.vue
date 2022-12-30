<script setup lang="ts">
import TrackerMenuMain from "@/components/TrackerMenuMain.vue";
import TrackerMenuButtonBack from "@/components/TrackerMenuButtonBack.vue";
import TrackerMenuAddMonster from "@/components/TrackerMenuAddMonster.vue";
import TrackerMenuAddMonsterRank from "@/components/TrackerMenuAddMonsterRank.vue";
import { TrackerMenuStore } from "@/store/TrackerMenuStore";
import TrackerMenuRemoveCharacter from "./TrackerMenuRemoveCharacter.vue";
import { ref } from "vue";
import BaseModal from "./BaseModal.vue";
import { XMarkIcon } from "@heroicons/vue/24/solid";

const trackerMenuStore = TrackerMenuStore();
trackerMenuStore.resetMenu();

const isOpen = ref(false);

function openModal() {
  isOpen.value = true;
}
function closeModal() {
  isOpen.value = false;
  trackerMenuStore.resetMenu();
}
</script>

<template>
  <button class="btn" @click="openModal">open menu</button>
  <BaseModal :is-open="isOpen" @close-modal="closeModal">
    <template #header>
      <div class="grid grid-cols-3">
        <div><TrackerMenuButtonBack /></div>
        <div class="text-center font-medium place-self-center"></div>
        <div>
          <button id="close-modal" class="btn btn-sm btn-circle float-right" @click="closeModal">
            <XMarkIcon class="h-7 btn-sm btn-circle rounded-lg p-1" />
          </button>
        </div>
      </div>
    </template>
    <template #default>
      <div class="container">
        <TransitionGroup :name="trackerMenuStore.direction">
          <TrackerMenuMain v-if="trackerMenuStore.activeMenu == 'main'" />
          <TrackerMenuAddMonster v-if="trackerMenuStore.activeMenu == 'add-monster'" />
          <TrackerMenuAddMonsterRank
            @close-modal="closeModal"
            v-if="trackerMenuStore.activeMenu == 'add-monster-rank'"
          />
          <TrackerMenuRemoveCharacter v-if="trackerMenuStore.activeMenu == 'remove-character'" />
        </TransitionGroup>
      </div>
    </template>
  </BaseModal>
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
