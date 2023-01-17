<script setup lang="ts">
import { ConfigurationStore } from "@/store/ConfigurationStore";
import type { VariantId } from "@/data/type/VariantId";
import MainMenu from "./components/MainMenu.vue";

const configurationStore = ConfigurationStore();

//temp backwards compatibility
const variants = configurationStore.getEnabledVariants();

const newVariants = [] as VariantId[];
variants.forEach((variant: string) => {
  if (variant === "Standard") {
    variant = "standard";
  } else if (variant === "Alternate") {
    variant = "alternate";
  } else if (variant === "A / B") {
    variant = "complex";
  }
  newVariants.push(variant as VariantId);
});

configurationStore.enabledVariants = newVariants;
</script>

<template>
  <div class="w-full navbar bg-neutral sticky top-0 z-10 drop-shadow">
    <MainMenu />
  </div>
  <div class="container mx-auto lg:w-3/4 p-4">
    <router-view> </router-view>
  </div>
</template>

<style scoped></style>
