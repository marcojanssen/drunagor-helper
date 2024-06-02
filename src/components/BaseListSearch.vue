<script setup lang="ts">
import InputGroup from "primevue/inputgroup";
import InputGroupAddon from "primevue/inputgroupaddon";

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
  <div :id="props.id" :class="props.class">
    <InputGroup>
      <InputText placeholder="Search" name="search" :value="props.value" @input="(event) => search(event)" />
      <InputGroupAddon>
        <i class="pi pi-search"></i>
      </InputGroupAddon>
    </InputGroup>

    <slot></slot>
  </div>
</template>

<style scoped></style>
