<script setup lang="ts">
import { MagnifyingGlassIcon } from "@heroicons/vue/24/solid";

const props = defineProps<{
  id?: string;
  class?: string;
  value?: string;
}>();

const emit = defineEmits<{
  (e: "search", keyword: string): void;
}>();

function search(event: Event) {
  const target = event.target as HTMLInputElement;
  emit("search", target.value || "");
}
</script>

<template>
  <div :id="props.id" class="flex h-14 sticky inset-16 bg-base-300" :class="props.class">
    <div class="flex rounded-md shadow-sm w-full">
      <div class="relative flex items-stretch flex-grow form-control border-1 border-neutral">
        <input
          type="text"
          name="search"
          class="bg-base-100 w-full pl-2 rounded-l-md text-white border-0 focus:ring-0"
          placeholder="Search"
          :value="props.value"
          @input="(event) => search(event)"
        />
      </div>
      <button type="button" class="px-4 py-2 border-1 border-base-300 rounded-r-md bg-neutral">
        <MagnifyingGlassIcon class="h-6" />
      </button>
    </div>
    <slot></slot>
  </div>
</template>

<style scoped></style>
