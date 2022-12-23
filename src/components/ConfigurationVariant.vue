<script setup lang="ts">
import { ConfigurationStore } from "@/store/ConfigurationStore";
import { VariantStore } from "@/store/VariantStore.js";

const variantStore = VariantStore();
const configurationStore = ConfigurationStore();
</script>

<template>
  <div id="configuration-variant" class="bg-neutral form-control p-4 drop-shadow rounded-box">
    <h1 class="text-l font-semibold">Enabled variant</h1>
    <label v-for="variant in variantStore.getAll()" :key="variant.id" class="label cursor-pointer">
      <span class="label-text text-base">
        {{ variant.title }}
      </span>
      <input
        :id="variant.id"
        v-model="configurationStore.enabledVariants"
        type="checkbox"
        :value="variant.id"
        class="toggle toggle-primary"
      />
    </label>
  </div>
</template>

<style scoped></style>
