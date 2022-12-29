<script setup lang="ts">
import SwappableImage from "@/components/SwappableImage.vue";
import backgroundImage from "@/assets/hero/big/Background.webp";
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
  <div class="grid grid-cols-1 gap-2 p-4 place-items-center w-full divide-y divide-dotted divide-slate-500 rounded-md">
    <div class="mb-4">
      <SwappableImage
        :title="hero.name"
        :sub-title="hero.class + ' - Path of ' + hero.path"
        :background="backgroundImage"
        :frontImage="hero.images.big"
        :backImage="hero.images.miniature"
      />
    </div>
    <div class="grid gap-3 py-4 w-full">
      <HeroStatus :hero-id="heroId" />
    </div>
    <div class="grid gap-3 py-4 w-full">
      <HeroOutcome :hero-id="heroId" />
    </div>
    <div class="grid gap-3 py-4 w-full">
      <HeroAura :hero-id="heroId" />
    </div>
  </div>
</template>

<style scoped></style>
