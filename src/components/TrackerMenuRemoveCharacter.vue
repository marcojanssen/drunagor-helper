<script setup lang="ts">
import { MonsterDataStore } from "@/data/store/MonsterDataStore";
import TrackerMenuListItem from "./TrackerMenuListItem.vue";
import TrackerMenuList from "./TrackerMenuList.vue";
import { TrackerStore } from "@/store/TrackerStore";
import { BaseModalStore } from "@/store/BaseModalStore";
import type { TrackedItem } from "@/store/TrackedItem";

const monsterStore = MonsterDataStore();
const trackerStore = TrackerStore();
const modalStore = BaseModalStore();

function remove(item: TrackedItem) {
  trackerStore.remove(item);
  modalStore.close();
}
</script>

<template>
  <div>
    <div v-if="trackerStore.count() == 0">No active characters</div>
    <TrackerMenuList v-if="trackerStore.count() > 0">
      <template v-for="item in trackerStore.findAll()" :key="item.characterId">
        <TrackerMenuListItem
          @click.prevent="remove(item)"
          :avatar="monsterStore.find(item.trackedItem.id).images.avatar"
        >
          {{ monsterStore.find(item.trackedItem.id).name }}
        </TrackerMenuListItem>
      </template>
    </TrackerMenuList>
  </div>
</template>

<style scoped></style>
