<script setup lang="ts">
import BaseDivider from "@/components/BaseDivider.vue";
import ConfigurationContentHero from "@/components/ConfigurationContentHero.vue";
import ConfigurationContentMonster from "@/components/ConfigurationContentMonster.vue";
import ConfigurationVariant from "@/components/ConfigurationVariant.vue";
</script>

<template>
  <div class="grid gap-4 place-items-center w-full">
    <BaseDivider :alt="false">Enabled variant</BaseDivider>
    <ConfigurationVariant />
    <BaseDivider :alt="false">Monster content</BaseDivider>
    <ConfigurationContentMonster />
    <BaseDivider :alt="false">Hero content</BaseDivider>
    <ConfigurationContentHero />
  </div>
</template>

<style scoped></style>
