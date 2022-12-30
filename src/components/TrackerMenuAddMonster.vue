<script setup lang="ts">
import { MonsterDataStore } from "@/data/store/MonsterDataStore";
import { TrackerMenuStore } from "@/store/TrackerMenuStore";
import BaseListItem from "@/components/BaseListItem.vue";
import BaseList from "@/components/BaseList.vue";
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
    <BaseList>
      <BaseListItem @click="randomMonster('white')"> Random white </BaseListItem>
      <BaseListItem @click="randomMonster('gray')"> Random Gray </BaseListItem>
      <BaseListItem @click="randomMonster('black')"> Random Black </BaseListItem>
      <template v-for="monster in monsterStore.findAllEnabled()" :key="monster.id">
        <BaseListItem @click="selectMonster(monster.id)" :avatar="monster.images.avatar">
          {{ monster.name }}
        </BaseListItem>
      </template>
    </BaseList>
  </div>
</template>

<style scoped></style>
