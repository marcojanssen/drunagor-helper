<script setup lang="ts">
import { ContentDataStore } from "@/data/store/ContentDataStore.js";
import type { ContentId } from "@/data/type/ContentId";
import { ConfigurationStore } from "@/store/ConfigurationStore";
import { watch, ref } from "vue";
import { useToast } from "vue-toastification";

const toast = useToast();

const contentStore = ContentDataStore();
const configurationStore = ConfigurationStore();
const monsterContentSettings = ref([] as ContentId[]);

configurationStore.enabledMonsterContent.forEach((enabledContent) => {
  monsterContentSettings.value.push(enabledContent);
});

watch(monsterContentSettings, async (newSettings) => {
  if (newSettings.length > 0) {
    configurationStore.$patch({ enabledMonsterContent: newSettings });
  } else {
    toast.error("At least one content pack has to be selected");
  }
});
</script>

<template>
  <div
    id="configuration-content-monster"
    class="form-control grid gap-4 p-4 drop-shadow-lg bg-neutral rounded-lg w-full"
  >
    <label v-for="content in contentStore.getAllWithMonsters()" :key="content.id" class="cursor-pointer">
      <span>{{ content.title }}</span>
      <input
        type="checkbox"
        v-model="monsterContentSettings"
        :id="content.id"
        :value="content.id"
        class="float-right w-5 h-5 text-emerald-500 bg-base-100 rounded"
      />
    </label>
  </div>
</template>

<style scoped></style>
