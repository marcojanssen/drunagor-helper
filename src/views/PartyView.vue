<script setup lang="ts">
import { ref } from "vue";
import HeroView from "@/views/HeroView.vue";
import AddHero from "@/components/AddHero.vue";
import RemoveHero from "@/components/RemoveHero.vue";

import { AuraDataStore } from "@/data/store/AuraDataStore";
import { HeroStore } from "@/data/store/HeroDataStore.js";
import { PartyStore } from "@/store/PartyStore";
import { OutcomeDataStore } from "@/data/store/OutcomeDataStore";
import { StatusDataStore } from "@/data/store/StatusDataStore";
import BaseModal from "@/components/BaseModal.vue";
import { BaseModalStore } from "@/store/BaseModalStore";

const heroStore = HeroStore();
const partyStore = PartyStore();
const auraStore = AuraDataStore();
const outcomeStore = OutcomeDataStore();
const statusStore = StatusDataStore();
const modalStore = BaseModalStore();

const heroViewId = ref("");

function viewHero(heroId: string) {
  heroViewId.value = heroId;
  modalStore.open();
}
</script>

<template>
  <div class="grid gap-4 grid-cols-1 place-items-center">
    <div class="grid grid-cols-2 place-items-center w-full lg:w-1/2">
      <div class="w-full pr-4">
        <AddHero />
      </div>
      <div class="w-full pl-4">
        <RemoveHero />
      </div>
    </div>
    <TransitionGroup name="list">
      <div class="flex w-full lg:w-1/2" v-for="member in partyStore.findAll()" :key="member.heroId">
        <div class="flex-none w-32 relative -mt-3">
          <img class="hero-image" :src="heroStore.find(member.heroId).images.avatar" />
          <div class="absolute bottom-1 left-0 right-0 py-1 bg-base-100 bg-opacity-80">
            <p class="text-xs text-center font-medium">{{ heroStore.find(member.heroId).name }}</p>
          </div>
        </div>
        <div
          @click="viewHero(member.heroId)"
          class="hero-overview grid gap-1 w-full place-content-start cursor-pointer bg-neutral pl-2 py-2"
        >
          <div class="text-sm" v-if="member.statusIds && member.statusIds.length > 0">
            <span class="text-gray-400">Status: </span>
            <template v-for="(statusId, index) in member.statusIds">
              {{ statusStore.find(statusId)?.name }}<template v-if="index + 1 < member.statusIds.length">, </template>
            </template>
          </div>

          <div class="text-sm" v-if="member.outcomeIds && member.outcomeIds.length > 0">
            <span class="text-gray-400">Outcome: </span>
            <template v-for="(outcomeId, index) in member.outcomeIds">
              {{ outcomeStore.find(outcomeId)?.name
              }}<template v-if="index + 1 < member.outcomeIds.length">, </template>
            </template>
          </div>

          <div class="text-sm" v-if="member.auraId">
            <span class="text-gray-400">Aura: </span>
            {{ auraStore.find(member.auraId)?.name }}
          </div>

          <div
            class="text-sm text-gray-400"
            v-if="
              (!member.auraId || member.auraId == null) &&
              (!member.outcomeIds || member.outcomeIds.length == 0) &&
              (!member.statusIds || member.statusIds.length == 0)
            "
          >
            No aura, status or outcome
          </div>
        </div>
      </div>
    </TransitionGroup>
  </div>

  <BaseModal v-if="heroViewId">
    <HeroView v-if="modalStore.state" :heroId="heroViewId" />
  </BaseModal>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
