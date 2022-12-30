<script setup lang="ts">
const props = defineProps<{
  id?: string;
  avatar?: string;
}>();
</script>

<template>
  <div :id="props.id" class="flex items-center gap-4 p-2 h-16 cursor-pointer">
    <img v-if="props.avatar" class="w-12 h-12 rounded-full bg-base-300" :src="props.avatar" />
    <slot></slot>
  </div>
</template>

<style scoped></style>
