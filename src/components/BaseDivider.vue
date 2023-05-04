<script setup lang="ts">
defineProps<{
  alt: Boolean;
}>();
</script>

<template>
  <div v-if="!alt" class="py-3 inline-flex items-center justify-center w-full">
    <hr class="w-full h-px my-4 border-0 bg-neutral" />
    <span class="absolute px-3 -translate-x-1/2 left-1/2 text-white bg-base-300">
      <slot></slot>
    </span>
  </div>
  <div v-if="alt" class="inline-flex items-center justify-center w-full">
    <hr class="w-full h-px my-4 border-0 bg-base-300" />
    <span class="absolute px-3 -translate-x-1/2 left-1/2 text-white bg-neutral">
      <slot></slot>
    </span>
  </div>
</template>

<style scoped></style>
