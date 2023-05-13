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
  <div id="configuration-variant" class="grid gap-4 bg-neutral form-control p-4 drop-shadow-lg rounded-lg w-full">
    <label v-for="variant in variantStore.getAll()" :key="variant.id" class="cursor-pointer">
      <span class="label-text text-base">
        {{ variant.title }}
      </span>
      <input
        type="checkbox"
        v-model="variantSettings"
        :id="variant.id"
        :value="variant.id"
        class="float-right w-5 h-5 text-emerald-500 bg-base-100 rounded"
      />
    </label>
  </div>
</template>
<style scoped></style>
