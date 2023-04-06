<script setup lang="ts">
import HeroAura from "@/components/HeroAura.vue";
import HeroOutcome from "@/components/HeroOutcome.vue";
import HeroStatus from "@/components/HeroStatus.vue";
import { HeroDataRepository } from "@/data/repository/HeroDataRepository";
import type { HeroData } from "@/data/repository/HeroData";

const heroDataRepository = new HeroDataRepository();

const props = defineProps<{
  heroId: string;
}>();

const hero = heroDataRepository.find(props.heroId) ?? ({} as HeroData);
</script>

<template>
  <div class="hero-list-item p-4">
    <div class="flex h-28">
      <div>
        <img class="-ml-1 w-14 rounded-full hero-image" :src="hero.images.avatar" />
      </div>
      <div class="pl-8">
        <p>{{ hero.name }}</p>
        <p>{{ hero.race }} {{ hero.class }}</p>
        <p>Path of {{ hero.path }}</p>
      </div>
    </div>
    <div class="pt-2 w-full">
      <HeroStatus :hero-id="heroId" />
    </div>
    <div class="pt-2 w-full">
      <HeroOutcome :hero-id="heroId" />
    </div>
    <div class="py-2 w-full">
      <HeroAura :hero-id="heroId" />
    </div>
  </div>
</template>

<style scoped>
.hero-list-item {
  background-image: url("@/assets/hero/flag-bg-red.webp");
  background-repeat: no-repeat;
}
</style>
