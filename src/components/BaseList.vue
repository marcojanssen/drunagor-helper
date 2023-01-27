<script setup lang="ts">
const props = defineProps<{
  id?: string;
}>();
</script>

<template>
  <div :id="props.id" class="divide-y divide-gray-900">
    <header>
      <slot name="header"></slot>
    </header>
    <slot></slot>
  </div>
</template>

<style scoped></style>
