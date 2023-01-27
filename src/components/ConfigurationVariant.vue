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
  <div id="configuration-variant" class="bg-neutral form-control p-4 drop-shadow rounded-lg">
    <p class="text-l font-semibold">Enabled variant</p>
    <label v-for="variant in variantStore.getAll()" :key="variant.id" class="pt-4 relative block cursor-pointer">
      <span class="label-text text-base">
        {{ variant.title }}
      </span>
      <input
        type="checkbox"
        v-model="variantSettings"
        :id="variant.id"
        :value="variant.id"
        class="absolute right-0 w-5 h-5 text-emerald-500 bg-base-100 rounded shadow border-transparent focus:border-transparent focus:ring-0"
      />
    </label>
  </div>
</template>
<style scoped></style>
