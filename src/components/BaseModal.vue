<script setup lang="ts">
import { BaseModalStore } from "@/store/BaseModalStore";

const baseModalStore = BaseModalStore();
</script>

<template>
  <input type="checkbox" id="base-modal" v-model="baseModalStore.state" class="modal-toggle" />
  <div class="modal bg-base-300 bg-opacity-90">
    <div class="modal-box lg:w-11/12 lg:max-w-2xl bg-base-100 mt-4 p-0 cursor-default h-screen">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped></style>
