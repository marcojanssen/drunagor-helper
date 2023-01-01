<script setup lang="ts">
import KeywordTooltip from "@/components/KeywordTooltip.vue";
import MonsterAttack from "@/components/MonsterAttack.vue";
import TrackerMenu from "@/components/TrackerMenu.vue";
import { MonsterDataStore } from "@/data/store/MonsterDataStore.js";
import { TrackerStore } from "@/store/TrackerStore";

const trackerStore = TrackerStore();
const monsterStore = MonsterDataStore();
</script>

<template>
  <div class="grid gap-4 grid-cols-1 place-items-center mb-32">
    <div class="grid w-full lg:w-1/2">
      <TrackerMenu />
    </div>
    <div class="grid w-full lg:w-1/2">
      <MonsterAttack
        :attack="[
          { id: 'regeneration', value: '1', color: 'pink' },
          ';',
          { id: 'strike', value: '1' },
          'AND',
          { id: 'stun' },
        ]"
      />
    </div>
    <TransitionGroup name="list">
      <template v-for="item in trackerStore.findAll()" :key="item.id">
        <template v-if="item.type == 'monster'">
          <div class="grid grid-cols-1"></div>
          <div class="flex w-full lg:w-1/2">
            <div class="flex-none relative">
              <img class="w-20 h-20 rounded-full mr-4" :src="monsterStore.find(item.trackedItem.id).images.avatar" />
              <div class="absolute bottom-0 left-0 right-4 bg-base-100 bg-opacity-80">
                <p class="text-xs text-center">
                  {{ monsterStore.find(item.trackedItem.id).name }}
                </p>
              </div>
            </div>
            <div
              class="hero-overview grid gap-1 w-full place-content-start cursor-pointer bg-neutral rounded-md pl-2 py-2"
            ></div>
          </div>
          <!-- <template v-for="spawn in character.getSpawns()" :key="character.characterId">
            <div class="h-6">yolo</div>
          </template> -->
          <div class="h-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xml:space="preserve"
              class="fill-slate-600 h-6 cursor-pointer"
              style="enable-background: new 0 0 490 490"
              viewBox="0 0 490 490"
            >
              <path
                d="M227.8 174.1v53.7h-53.7c-9.5 0-17.2 7.7-17.2 17.2s7.7 17.2 17.2 17.2h53.7v53.7c0 9.5 7.7 17.2 17.2 17.2s17.1-7.7 17.1-17.2v-53.7h53.7c9.5 0 17.2-7.7 17.2-17.2s-7.7-17.2-17.2-17.2h-53.7v-53.7c0-9.5-7.7-17.2-17.1-17.2s-17.2 7.7-17.2 17.2z"
              />
              <path
                d="M71.7 71.7C25.5 118 0 179.5 0 245s25.5 127 71.8 173.3C118 464.5 179.6 490 245 490s127-25.5 173.3-71.8C464.5 372 490 310.4 490 245s-25.5-127-71.8-173.3C372 25.5 310.5 0 245 0 179.6 0 118 25.5 71.7 71.7zm384 173.3c0 56.3-21.9 109.2-61.7 149s-92.7 61.7-149 61.7S135.8 433.8 96 394s-61.7-92.7-61.7-149S56.2 135.8 96 96s92.7-61.7 149-61.7S354.2 56.2 394 96s61.7 92.7 61.7 149z"
              />
            </svg>
          </div>
        </template>
      </template>
    </TransitionGroup>
  </div>
  <footer class="flex w-full justify-center p-4 bg-base-100 fixed bottom-0 left-0">
    <button class="btn">End round</button>
  </footer>
</template>

<style scoped></style>
