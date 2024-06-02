<script setup lang="ts">
import Toast from "primevue/toast";
import MainMenu from "@/components/MainMenu.vue";
</script>

<template>
  <Toast />
  <MainMenu />
  <div class="container mx-auto 2xl:w-2/4 lg:w-3/4 p-4">
    <router-view> </router-view>
  </div>
</template>

<style scoped></style>
