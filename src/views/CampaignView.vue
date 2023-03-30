<script setup lang="ts">
import PartyAddHero from "@/components/PartyAddHero.vue";
import PartyRemoveHero from "@/components/PartyRemoveHero.vue";
import { PartyStore } from "@/store/PartyStore";
import CampaignHero from "@/components/CampaignHero.vue";

const partyStore = PartyStore();
</script>

<template>
  <div class="grid gap-4 grid-cols-1 place-items-center">
    <div class="grid grid-cols-2 place-items-center w-full lg:w-1/2">
      <div class="w-full pr-4">
        <PartyAddHero />
      </div>
      <div class="w-full pl-4">
        <PartyRemoveHero />
      </div>
    </div>
    <div class="h-16"></div>
    <template v-for="member in partyStore.findAll()" :key="member.heroId">
      <div class="w-full lg:w-1/2 bg-base-100">
        <CampaignHero :hero-id="member.heroId" />
      </div>
    </template>
  </div>
</template>

<style scoped></style>
