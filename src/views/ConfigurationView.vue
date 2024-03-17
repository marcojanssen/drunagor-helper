<script setup lang="ts">
import BaseDivider from "@/components/BaseDivider.vue";
import ConfigurationContentHero from "@/components/ConfigurationContentHero.vue";
import ConfigurationContentMonster from "@/components/ConfigurationContentMonster.vue";
import ConfigurationVariant from "@/components/ConfigurationVariant.vue";
</script>

<template>
  <div class="grid gap-4 place-items-center w-full">
    <BaseDivider>{{ $t("configuration.enabled-variant") }}</BaseDivider>
    <ConfigurationVariant />
    <BaseDivider>{{ $t("configuration.monster-content") }}</BaseDivider>
    <ConfigurationContentMonster />
    <BaseDivider>{{ $t("configuration.hero-content") }}</BaseDivider>
    <ConfigurationContentHero />
  </div>
</template>

<style scoped></style>
