<script setup lang="ts">
import { MagnifyingGlassIcon } from "@heroicons/vue/24/solid";

const props = defineProps<{
  id?: string;
}>();

const emit = defineEmits<{
  (e: "search", keyword: string | null): void;
}>();

function search(event: Event) {
  const target = event.target as HTMLInputElement;
  emit("search", target.value);
}
</script>

<template>
  <div :id="props.id" class="flex p-2 h-16 sticky top-12 bg-base-100">
    <div class="mt-1 flex rounded-md shadow-sm w-full">
      <div class="relative flex items-stretch flex-grow">
        <input
          type="text"
          name="search"
          class="border-neutral bg-base-100 w-full pl-2 rounded-l-md text-white"
          placeholder="Search"
          @input="(event) => search(event)"
        />
      </div>
      <button type="button" class="px-4 py-2 border-1 border-base-100 rounded-r-md bg-neutral">
        <MagnifyingGlassIcon class="h-6" />
      </button>
    </div>
    <slot></slot>
  </div>
</template>

<style scoped>
input {
  box-shadow: none;
  border: 1;
  border-width: 1px;
  outline: none;
}
</style>
