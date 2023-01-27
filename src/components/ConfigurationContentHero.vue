<script setup lang="ts">
import { ContentDataStore } from "@/data/store/ContentDataStore";
import type { ContentId } from "@/data/type/ContentId";
import { ConfigurationStore } from "@/store/ConfigurationStore";
import { watch, ref } from "vue";
import { useToast } from "vue-toastification";

const toast = useToast();

const contentStore = ContentDataStore();
const configurationStore = ConfigurationStore();
const heroContentSettings = ref([] as ContentId[]);

configurationStore.enabledHeroContent.forEach((enabledContent) => {
  heroContentSettings.value.push(enabledContent);
});

watch(heroContentSettings, async (newSettings) => {
  if (newSettings.length > 0) {
    configurationStore.$patch({ enabledHeroContent: newSettings });
  } else {
    toast.error("At least one content pack has to be selected");
  }
});
</script>

<template>
  <div id="configuration-content-hero" class="p-4 bg-neutral rounded-box">
    <h2 class="text-l font-semibold">Enabled hero content</h2>
    <label v-for="content in contentStore.getAllWithHeroes()" :key="content.id" class="label cursor-pointer">
      <span>{{ content.title }}</span>
      <input
        type="checkbox"
        v-model="heroContentSettings"
        :id="content.id"
        :value="content.id"
        class="w-5 h-5 text-emerald-500 bg-gray-700 rounded shadow border-transparent focus:border-transparent focus:ring-0"
      />
    </label>
  </div>
</template>

<style scoped></style>
