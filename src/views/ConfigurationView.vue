<script setup lang="ts">
import BaseDivider from "@/components/BaseDivider.vue";
import ConfigurationContentHero from "@/components/ConfigurationContentHero.vue";
import ConfigurationContentMonster from "@/components/ConfigurationContentMonster.vue";
import ConfigurationVariant from "@/components/ConfigurationVariant.vue";
</script>

<template>
  <div class="grid gap-4 place-items-center w-full">
    <BaseDivider>{{ $t("configuration.enabled_variant") }}</BaseDivider>
    <ConfigurationVariant />
    <BaseDivider>{{ $t("configuration.monster_content") }}</BaseDivider>
    <ConfigurationContentMonster />
    <BaseDivider>{{ $t("configuration.hero_content") }}</BaseDivider>
    <ConfigurationContentHero />
  </div>
</template>

<style scoped></style>
