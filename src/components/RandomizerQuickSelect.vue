<script setup lang="ts">
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/vue/24/solid";
import { ref } from "vue";
import ConfigurationContentMonster from "./ConfigurationContentMonster.vue";
import ConfigurationVariant from "./ConfigurationVariant.vue";

const displayContent = ref(false);
function toggleDisplay() {
  displayContent.value = !displayContent.value;
}
</script>

<template>
  <div
    @click="toggleDisplay"
    class="bg-neutral relative h-12 pl-2 pt-3 cursor-pointer w-full lg:w-1/2 rounded-md shadow-lg"
    id="randomizer-quick-select"
  >
    {{ $t('randomizer.enabled_content') }}    
    <ChevronDownIcon v-if="!displayContent" class="absolute top-4 right-2 h-4 w-4" />
    <ChevronUpIcon v-if="displayContent" class="absolute top-4 right-2 h-4 w-4" />
  </div>
  <div v-if="displayContent" class="flex flex-col space-y-4 h-full w-full lg:w-1/2 bg-base-100">
    <ConfigurationVariant />
    <ConfigurationContentMonster />
  </div>
</template>

<style scoped></style>
