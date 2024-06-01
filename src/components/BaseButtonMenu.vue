<script setup lang="ts">
import Toolbar from "primevue/toolbar";
</script>

<template>
  <Toolbar class="w-full border-0">
    <template #center>
      <div class="flex flex-wrap p-0 m-0 justify-center p-4 gap-4 w-full">
        <slot></slot>
      </div>
    </template>
  </Toolbar>
</template>

<style scoped></style>
