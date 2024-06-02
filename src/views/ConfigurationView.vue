<script setup lang="ts">
import ConfigurationContentHero from "@/components/ConfigurationContentHero.vue";
import ConfigurationContentMonster from "@/components/ConfigurationContentMonster.vue";
import ConfigurationLanguage from "@/components/ConfigurationLanguage.vue";
import ConfigurationVariant from "@/components/ConfigurationVariant.vue";
</script>

<template>
  <div class="grid gap-4 place-items-center w-full">
    <ConfigurationLanguage />
    <ConfigurationVariant />
    <ConfigurationContentMonster />
    <ConfigurationContentHero />
  </div>
</template>

<style scoped></style>
