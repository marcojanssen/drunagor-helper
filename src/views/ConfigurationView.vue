<script setup lang="ts">
import ConfigurationContentHero from "@/components/ConfigurationContentHero.vue";
import ConfigurationContentMonster from "@/components/ConfigurationContentMonster.vue";
import ConfigurationVariant from "@/components/ConfigurationVariant.vue";
</script>

<template>
  <div class="grid gap-4 w-full">
    <ConfigurationVariant />
    <ConfigurationContentMonster />
    <ConfigurationContentHero />
  </div>
</template>

<style scoped></style>
