<script setup lang="ts">
import ConfigurationContentMonster from "./ConfigurationContentMonster.vue";
import ConfigurationVariant from "./ConfigurationVariant.vue";
</script>

<template>
  <Accordion class="w-full" id="randomizer-quick-select">
    <AccordionTab :header="$t('randomizer.enabled-content')">
      <ConfigurationVariant />
      <ConfigurationContentMonster />
    </AccordionTab>
  </Accordion>
</template>

<style scoped></style>
