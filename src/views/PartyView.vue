<script setup lang="ts">
import { ref } from "vue";
import HeroView from "@/views/HeroView.vue";
import PartyAddHero from "@/components/PartyAddHero.vue";
import PartyRemoveHero from "@/components/PartyRemoveHero.vue";
import { AuraDataStore } from "@/data/store/AuraDataStore";
import { HeroStore } from "@/data/store/HeroDataStore.js";
import { PartyStore } from "@/store/PartyStore";
import { OutcomeDataStore } from "@/data/store/OutcomeDataStore";
import { StatusDataStore } from "@/data/store/StatusDataStore";
import BaseModal from "@/components/BaseModal.vue";
import { XMarkIcon } from "@heroicons/vue/24/solid";

const isOpen = ref(false);

function openModal() {
  isOpen.value = true;
}
function closeModal() {
  isOpen.value = false;
}

const heroStore = HeroStore();
const partyStore = PartyStore();
const auraStore = AuraDataStore();
const outcomeStore = OutcomeDataStore();
const statusStore = StatusDataStore();

const heroViewId = ref("");

function viewHero(heroId: string) {
  heroViewId.value = heroId;
  openModal();
}
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
    <TransitionGroup name="list">
      <div class="border-gold relative h-32 lg:w-1/2 bg-black">
        <!-- <img class="absolute top-10 -left-6" :src="runeUrl" /> -->
        <div class="flex h-full">
          <div class="flex-none w-32 h-full">
            <img :src="url" />
          </div>
          <div class="grid pt-3 w-full">
            <div class="text-2m text-center font-medium">Skeleton Archer - Rookie</div>
            <div class="text-sm text-center uppercase">Regeneration x; Bloodseeker; <br />Strike 1, stun</div>
          </div>
        </div>
      </div>

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

  <BaseModal :is-open="isOpen" @close-modal="closeModal">
    <template #header>
      <div class="grid grid-cols-3 pb-3">
        <div></div>
        <div class="text-center font-medium place-self-center"></div>
        <div>
          <button id="close-modal" class="btn btn-sm btn-circle float-right" @click="closeModal">
            <XMarkIcon class="h-7 btn-sm btn-circle rounded-lg p-1" />
          </button>
        </div>
      </div>
    </template>
    <template #default>
      <HeroView :heroId="heroViewId" />
    </template>
  </BaseModal>
</template>

<style scoped>
.border-gold {
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(to bottom, #f5dab7, #4c4037) 1;
}

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
