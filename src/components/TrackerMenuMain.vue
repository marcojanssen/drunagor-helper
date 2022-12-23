<script setup lang="ts">
import { TrackerMenuStore } from "@/store/TrackerMenuStore";
import { ChapterOne } from "@/data/content/core/chapter/ChapterOne";
import { BaseModalStore } from "@/store/BaseModalStore";

const trackerMenuStore = TrackerMenuStore();
const baseModalStore = BaseModalStore();

function setupChapter1() {
  new ChapterOne().setup();
  baseModalStore.close();
}
</script>

<template>
  <div class="grid grid-cols-2 gap-4">
    <div><button class="btn btn-block" @click="setupChapter1()">Setup chapter</button></div>
    <div></div>
    <div class="divider col-span-2 m-0">Add</div>
    <div><button class="btn btn-block" @click="trackerMenuStore.goTo('add-monster')">Monster</button></div>
    <div>
      <button class="btn btn-block btn-disabled">Commander</button>
    </div>
    <div>
      <button class="btn btn-block btn-disabled">Special</button>
    </div>
    <div></div>
    <div><button class="btn btn-block btn-disabled">Hero</button></div>
    <div><button class="btn btn-block btn-disabled">NPC</button></div>
    <div class="divider col-span-2 m-0">Remove</div>
    <div><button class="btn btn-block" @click="trackerMenuStore.goTo('remove-character')">Character</button></div>
    <div></div>
    <div class="divider col-span-2 m-0"></div>
    <div><button class="btn btn-block btn-disabled">Settings</button></div>
    <div><button class="btn btn-block btn-disabled">About</button></div>
    <div></div>
  </div>
</template>

<style scoped></style>
