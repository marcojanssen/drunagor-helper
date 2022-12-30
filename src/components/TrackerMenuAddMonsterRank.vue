<script setup lang="ts">
import { TrackerStore } from "@/store/TrackerStore";
import BaseList from "@/components/BaseList.vue";
import BaseListItem from "@/components/BaseListItem.vue";
import { TrackedItem } from "@/store/TrackedItem";
import { TrackerMenuStore } from "@/store/TrackerMenuStore";
import { TrackedItemMonster } from "@/store/TrackedItemMonster";
import { TrackedItemMonsterId } from "@/store/TrackedItemMonsterId";

const trackerStore = TrackerStore();
const trackerMenuStore = TrackerMenuStore();

const emit = defineEmits(["close-modal"]);

function addToTracker(rank: "rookie" | "fighter" | "veteran" | "champion") {
  const monsterId = trackerMenuStore.selectedMonster;

  const trackedMonster = new TrackedItemMonster(monsterId, rank);
  const trackedMonsterId = new TrackedItemMonsterId(monsterId, rank).toString();
  trackerStore.add(new TrackedItem(trackedMonsterId, "top", "monster", trackedMonster));
  emit("close-modal");
}
</script>

<template>
  <BaseList>
    <BaseListItem @click="addToTracker('rookie')">Rookie</BaseListItem>
    <BaseListItem @click="addToTracker('fighter')">Fighter</BaseListItem>
    <BaseListItem @click="addToTracker('veteran')">Veteran</BaseListItem>
    <BaseListItem @click="addToTracker('champion')">Champion</BaseListItem>
  </BaseList>
</template>

<style scoped></style>
