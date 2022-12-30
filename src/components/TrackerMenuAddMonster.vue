<script setup lang="ts">
import { MonsterDataStore } from "@/data/store/MonsterDataStore";
import { TrackerMenuStore } from "@/store/TrackerMenuStore";
import BaseListItem from "@/components/BaseListItem.vue";
import BaseList from "@/components/BaseList.vue";
import type { MonsterColor } from "@/data/type/MonsterColor";
import { RandomizeMonster } from "@/service/RandomizeMonster";
import { useToast } from "vue-toastification";
import type { MonsterData } from "@/data/store/MonsterData";
import { ref } from "vue";
import BaseListSearch from "@/components/BaseListSearch.vue";

const toast = useToast();

const monsterStore = MonsterDataStore();
const trackerMenuStore = TrackerMenuStore();
const filteredMonsters = ref([] as MonsterData[]);
searchMonsters();

function searchMonsters(query: string = "") {
  const monsters: MonsterData[] = [];
  const regExp = new RegExp(query, "gi");

  monsterStore.findAllEnabled().forEach((monster: MonsterData) => {
    if (regExp.test(monster.name)) {
      monsters.push(monster);
    }
  });

  filteredMonsters.value = monsters;
}

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
    <BaseListSearch @search="searchMonsters" />
    <BaseList>
      <BaseListItem @click="randomMonster('white')"> Random white </BaseListItem>
      <BaseListItem @click="randomMonster('gray')"> Random gray </BaseListItem>
      <BaseListItem @click="randomMonster('black')"> Random black </BaseListItem>
      <template v-for="monster in filteredMonsters" :key="monster.id">
        <BaseListItem @click="selectMonster(monster.id)" :avatar="monster.images.avatar">
          {{ monster.name }}
        </BaseListItem>
      </template>
    </BaseList>
  </div>
</template>

<style scoped></style>
