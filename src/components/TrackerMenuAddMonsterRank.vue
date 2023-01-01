<script setup lang="ts">
import { TrackerStore } from "@/store/TrackerStore";
import BaseList from "@/components/BaseList.vue";
import BaseListItem from "@/components/BaseListItem.vue";
import { TrackedItem } from "@/store/TrackedItem";
import { TrackerMenuStore } from "@/store/TrackerMenuStore";
import { TrackedItemMonster } from "@/store/TrackedItemMonster";
import { TrackedItemMonsterId } from "@/store/TrackedItemMonsterId";
import type { MonsterRank } from "@/data/type/MonsterRank";
import { MonsterDataStore } from "@/data/store/MonsterDataStore";
import type { VariantId } from "@/data/type/VariantId";
import { ConfigurationStore } from "@/store/ConfigurationStore";
import { useToast } from "vue-toastification";

const toast = useToast();

const trackerStore = TrackerStore();
const trackerMenuStore = TrackerMenuStore();
const monsterDataStore = MonsterDataStore();
const configurationStore = ConfigurationStore();

const emit = defineEmits(["close-modal"]);

function addToTracker(rank: MonsterRank) {
  const monsterId = trackerMenuStore.selectedMonster;
  const monster = monsterDataStore.find(monsterId);

  const filteredVariants = monster.variants.filter((variantId: VariantId) => {
    return configurationStore.isEnabledVariant(variantId);
  });

  if (filteredVariants.length < 1) {
    toast.error("No available variants");
    return;
  }

  const randomVariant = filteredVariants[Math.floor(Math.random() * filteredVariants.length)];

  const trackedMonster = new TrackedItemMonster(monsterId, rank, randomVariant);
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
