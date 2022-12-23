<script setup lang="ts">
import { ContentDataStore } from "@/data/store/ContentDataStore";
import { ConfigurationStore } from "@/store/ConfigurationStore";

const contentStore = ContentDataStore();
const configurationStore = ConfigurationStore();
</script>

<template>
  <div id="configuration-content-hero" class="p-4 bg-neutral rounded-box">
    <h2 class="text-l font-semibold">Enabled hero content</h2>
    <label v-for="content in contentStore.getAllWithHeroes()" :key="content.id" class="label cursor-pointer">
      <span>{{ content.title }}</span>
      <input
        :id="content.id"
        v-model="configurationStore.enabledHeroContent"
        type="checkbox"
        :value="content.id"
        class="toggle toggle-primary"
      />
    </label>
  </div>
</template>

<style scoped></style>
