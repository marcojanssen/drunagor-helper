<script setup lang="ts"></script>

<template>
  <div class="divide-y dark:divide-slate-200/5">
    <header>
      <slot name="header"></slot>
    </header>
    <slot></slot>
  </div>
</template>

<style scoped></style>
