<script setup lang="ts">
import MainMenu from "@/components/MainMenu.vue";
</script>

<template>
  <div class="w-full pl-2 pt-5 h-16 bg-neutral sticky top-0 z-10 drop-shadow">
    <MainMenu />
  </div>
  <div class="container mx-auto 2xl:w-2/4 lg:w-3/4 p-4">
    <router-view> </router-view>
  </div>
</template>

<style scoped></style>
