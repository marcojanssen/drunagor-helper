<script setup lang="ts">
import { MonsterDataStore } from "@/data/store/MonsterDataStore";
import { TrackerMenuStore } from "@/store/TrackerMenuStore";
import TrackerMenuListItem from "./TrackerMenuListItem.vue";
import TrackerMenuList from "./TrackerMenuList.vue";
import type { MonsterColor } from "@/data/type/MonsterColor";
import { RandomizeMonster } from "@/service/RandomizeMonster";
import { useToast } from "vue-toastification";

const toast = useToast();

const monsterStore = MonsterDataStore();
const trackerMenuStore = TrackerMenuStore();

function randomMonster(color: MonsterColor) {
  const randomMonster = new RandomizeMonster().randomizeByColor(color);

  if (randomMonster === null) {
    toast.error("No random monster available. Check the content / variant settings");
    return;
  }

  selectMonster(randomMonster.id);
}

function selectMonster(monsterId: string) {
  trackerMenuStore.selectMonster(monsterId);
  trackerMenuStore.goTo("add-monster-rank");
}
</script>

<template>
  <div>
    <TrackerMenuList>
      <TrackerMenuListItem @click="randomMonster('white')"> Random white </TrackerMenuListItem>
      <TrackerMenuListItem @click="randomMonster('gray')"> Random Gray </TrackerMenuListItem>
      <TrackerMenuListItem @click="randomMonster('black')"> Random Black </TrackerMenuListItem>
      <template v-for="monster in monsterStore.findAllEnabled()" :key="monster.id">
        <TrackerMenuListItem @click="selectMonster(monster.id)" :avatar="monster.images.avatar">
          {{ monster.name }}
        </TrackerMenuListItem>
      </template>
    </TrackerMenuList>
  </div>
</template>

<style scoped></style>
