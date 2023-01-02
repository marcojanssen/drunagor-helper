<script setup lang="ts">
import { MonsterDataStore } from "@/data/store/MonsterDataStore";
import { TrackerMenuStore } from "@/store/TrackerMenuStore";
import BaseListItem from "@/components/BaseListItem.vue";
import BaseList from "@/components/BaseList.vue";
import type { MonsterColor } from "@/data/type/MonsterColor";
import { RandomizeMonster } from "@/service/RandomizeMonster";
import { useToast } from "vue-toastification";
import { ref, computed } from "vue";
import BaseListSearch from "@/components/BaseListSearch.vue";
import RandomAvatarImage from "@/assets/monster/avatar/RandomAvatar.webp";

const toast = useToast();

const monsterStore = MonsterDataStore();
const trackerMenuStore = TrackerMenuStore();

const monsters = monsterStore.findAll();

let filteredMonsters = computed(() =>
  query.value === ""
    ? monsters
    : monsters.filter((monster) =>
        monster.name.toLowerCase().replace(/\s+/g, "").includes(query.value.toLowerCase().replace(/\s+/g, ""))
      )
);

let query = ref("");

function randomMonster(color: MonsterColor) {
  const randomMonster = new RandomizeMonster().randomizeByColor(color);

  if (randomMonster === null) {
    toast.error("No random monster available. Check your settings.");
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
    <BaseListSearch @search="query = $event" />
    <BaseList>
      <BaseListItem @click="randomMonster('white')" :avatar="RandomAvatarImage"> Random white </BaseListItem>
      <BaseListItem @click="randomMonster('gray')" :avatar="RandomAvatarImage"> Random gray </BaseListItem>
      <BaseListItem @click="randomMonster('black')" :avatar="RandomAvatarImage"> Random black </BaseListItem>
      <template v-for="monster in filteredMonsters" :key="monster.id">
        <BaseListItem @click="selectMonster(monster.id)" :avatar="monster.images.avatar">
          {{ monster.name }}
        </BaseListItem>
      </template>
    </BaseList>
  </div>
</template>

<style scoped></style>
