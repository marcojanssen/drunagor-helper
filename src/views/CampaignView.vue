<script setup lang="ts">
import CampaignAddHero from "@/components/CampaignAddHero.vue";
import CampaignRemoveHero from "@/components/CampaignRemoveHero.vue";
import { PartyStore } from "@/store/PartyStore";
import CampaignHero from "@/components/CampaignHero.vue";

const partyStore = PartyStore();
</script>

<template>
  <div class="grid gap-4 grid-cols-1 w-full place-items-center">
    <div class="grid grid-cols-2 place-items-center w-full lg:w-1/2">
      <CampaignAddHero />
      <CampaignRemoveHero />
    </div>
    <div class="h-16"></div>
    <div class="grid gap-4 w-full 2xl:w-3/4">
      <template v-for="member in partyStore.findAll()" :key="member.heroId">
        <div class="bg-neutral form-control drop-shadow rounded-lg">
          <CampaignHero :hero-id="member.heroId" />
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped></style>
