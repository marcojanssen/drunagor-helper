<script setup lang="ts">
import { TrackerStore } from "@/store/TrackerStore";
import TrackerMenuList from "./TrackerMenuList.vue";
import TrackerMenuListItem from "./TrackerMenuListItem.vue";
import { TrackedItem } from "@/store/TrackedItem";
import { TrackerMenuStore } from "@/store/TrackerMenuStore";
import { BaseModalStore } from "@/store/BaseModalStore";
import { TrackedItemMonster } from "@/store/TrackedItemMonster";
import { TrackedItemMonsterId } from "@/store/TrackedItemMonsterId";

const trackerStore = TrackerStore();
const trackerMenuStore = TrackerMenuStore();
const modalStore = BaseModalStore();

function addToTracker(rank: "rookie" | "fighter" | "veteran" | "champion") {
  const monsterId = trackerMenuStore.selectedMonster;

  const trackedMonster = new TrackedItemMonster(monsterId, rank);
  const trackedMonsterId = new TrackedItemMonsterId(monsterId, rank).toString();
  trackerStore.add(new TrackedItem(trackedMonsterId, "top", "monster", trackedMonster));
  modalStore.close();
}
</script>

<template>
  <TrackerMenuList>
    <TrackerMenuListItem @click="addToTracker('rookie')">Rookie</TrackerMenuListItem>
    <TrackerMenuListItem @click="addToTracker('fighter')">Fighter</TrackerMenuListItem>
    <TrackerMenuListItem @click="addToTracker('veteran')">Veteran</TrackerMenuListItem>
    <TrackerMenuListItem @click="addToTracker('champion')">Champion</TrackerMenuListItem>
  </TrackerMenuList>
</template>

<style scoped></style>
