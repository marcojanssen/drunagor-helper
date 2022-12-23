<script setup lang="ts">
import { ContentDataStore } from "@/data/store/ContentDataStore.js";
import { ConfigurationStore } from "@/store/ConfigurationStore";

const contentStore = ContentDataStore();
const configurationStore = ConfigurationStore();
</script>

<template>
  <div id="configuration-content-monster" class="form-control p-4 drop-shadow bg-neutral rounded-box">
    <h2 class="text-l font-semibold">Enabled monster content</h2>
    <label v-for="content in contentStore.getAllWithMonsters()" :key="content.id" class="label cursor-pointer">
      <span>{{ content.title }}</span>
      <input
        :id="content.id"
        v-model="configurationStore.enabledMonsterContent"
        type="checkbox"
        :value="content.id"
        class="toggle toggle-primary"
      />
    </label>
  </div>
</template>

<style scoped></style>
