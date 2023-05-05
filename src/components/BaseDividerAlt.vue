<script setup lang="ts"></script>

<template>
  <div class="inline-flex items-center justify-center w-full">
    <hr class="w-full h-px my-4 border-0 bg-base-300" />
    <span class="absolute px-3 -translate-x-1/2 left-1/2 text-white bg-neutral">
      <slot></slot>
    </span>
  </div>
</template>

<style scoped></style>
