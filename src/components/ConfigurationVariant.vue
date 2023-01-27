<script setup lang="ts">
import type { VariantId } from "@/data/type/VariantId";
import { ConfigurationStore } from "@/store/ConfigurationStore";
import { VariantStore } from "@/store/VariantStore.js";
import { watch, ref } from "vue";
import { useToast } from "vue-toastification";

const toast = useToast();

const variantStore = VariantStore();
const configurationStore = ConfigurationStore();
const variantSettings = ref([] as VariantId[]);

configurationStore.enabledVariants.forEach((enabledVariant) => {
  variantSettings.value.push(enabledVariant);
});

watch(variantSettings, async (newSettings) => {
  if (newSettings.length > 0) {
    configurationStore.$patch({ enabledVariants: newSettings });
  } else {
    toast.error("At least one variant has to be selected");
  }
});
</script>

<template>
  <div id="configuration-variant" class="bg-neutral form-control p-4 drop-shadow rounded-box">
    <h1 class="text-l font-semibold">Enabled variant</h1>
    <label v-for="variant in variantStore.getAll()" :key="variant.id" class="label cursor-pointer">
      <span class="label-text text-base">
        {{ variant.title }}
      </span>
      <input
        type="checkbox"
        v-model="variantSettings"
        :id="variant.id"
        :value="variant.id"
        class="w-5 h-5 text-emerald-500 bg-gray-700 rounded shadow border-transparent focus:border-transparent focus:ring-0"
      />
    </label>
  </div>
</template>
<style scoped></style>
