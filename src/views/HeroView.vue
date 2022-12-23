<script setup lang="ts">
import { ref, computed, watch } from "vue";
import Multiselect from "@vueform/multiselect";

import type { AuraData } from "@/data/store/AuraData";
import type { OutcomeData } from "@/data/store/OutcomeData";
import type { StatusData } from "@/data/store/StatusData";

import { AuraDataStore } from "@/data/store/AuraDataStore";
import { OutcomeDataStore } from "@/data/store/OutcomeDataStore";
import { HeroStore } from "@/data/store/HeroDataStore";
import { PartyStore } from "@/store/PartyStore";
import { StatusDataStore } from "@/data/store/StatusDataStore";
import BaseModalButtonClose from "@/components/BaseModalButtonClose.vue";
import SwappableImage from "@/components/SwappableImage.vue";
import backgroundImage from "@/assets/hero/big/Background.webp";
import { BaseModalStore } from "@/store/BaseModalStore";

const heroStore = HeroStore();
const partyStore = PartyStore();
const auraStore = AuraDataStore();
const outcomeStore = OutcomeDataStore();
const statusStore = StatusDataStore();
const baseModalStore = BaseModalStore();

const props = defineProps({
  heroId: {
    default: "",
    type: String,
  },
});
const heroId = computed(() => props.heroId);
const member = ref(partyStore.find(heroId.value));
const hero = ref(heroStore.find(heroId.value));

function availableAuras(): Array<Object> {
  const auras: Array<Object> = [];
  auraStore.findAll().forEach((aura: AuraData) => {
    auras.push({ value: aura.id, label: aura.name });
  });

  return auras;
}

function availableOutcomes(): Array<Object> {
  const outcomes: Array<Object> = [];
  outcomeStore.findAll().forEach((outcome: OutcomeData) => {
    outcomes.push({ value: outcome.id, label: outcome.name });
  });

  return outcomes;
}

function availableStatuses(): Array<Object> {
  const statuses: Array<Object> = [];
  statusStore.findAll().forEach((status: StatusData) => {
    statuses.push({ value: status.id, label: status.name });
  });

  return statuses;
}

watch(heroId, (newHeroId) => {
  member.value = partyStore.find(newHeroId);
  hero.value = heroStore.find(newHeroId);
});
</script>

<template>
  <div class="container w-full bg-base-100 h-12 z-20 sticky top-0">
    <BaseModalButtonClose />
  </div>
  <div class="grid grid-cols-1 gap-2 p-4 place-items-center w-full divide-y divide-dotted divide-slate-500 rounded-md">
    <div class="mb-4">
      <SwappableImage
        :title="hero.name"
        :sub-title="hero.race + ' ' + hero.class + ' - Path of ' + hero.path"
        :background="backgroundImage"
        :frontImage="hero.images.big"
        :backImage="hero.images.miniature"
      />
    </div>
    <div class="grid gap-3 py-4 w-full">
      <div>
        <h2>Status(es)</h2>
        <p class="text-sm text-gray-500">Statuses are removed during the camp phase.</p>
      </div>
      <div class="w-full">
        <Multiselect
          id="multiselect-select-status"
          v-model="member.statusIds"
          placeholder="Select status"
          mode="tags"
          openDirection="top"
          :searchable="true"
          :options="availableStatuses()"
        />
      </div>
      <template v-for="statusId in member.statusIds" :key="statusId">
        <div class="w-full bg-base-200 p-4 rounded-md" v-if="statusStore.find(statusId)?.effect">
          {{ statusStore.find(statusId)?.effect }}
        </div>
      </template>
    </div>
    <div class="grid gap-3 py-4 w-full">
      <div>
        <h2>Outcome(s)</h2>
        <p class="text-sm text-gray-500">
          Remain in effect for the entire campaign unless some other effect changes them.
        </p>
      </div>
      <div class="w-full">
        <Multiselect
          id="multiselect-select-outcome"
          v-model="member.outcomeIds"
          placeholder="Select outcome"
          mode="tags"
          openDirection="top"
          :searchable="true"
          :options="availableOutcomes()"
        />
      </div>
      <template v-for="outcomeId in member.outcomeIds" :key="outcomeId">
        <div class="w-full bg-base-200 p-4 rounded-md" v-if="outcomeStore.find(outcomeId)?.effect">
          {{ outcomeStore.find(outcomeId)?.effect }}
        </div>
      </template>
    </div>
    <div class="grid gap-3 py-4 w-full">
      <div>
        <h2>Aura</h2>
        <p class="text-sm text-gray-500">Aura is removed when you receive a trauma cube or another aura.</p>
      </div>
      <div class="w-full">
        <Multiselect
          id="multiselect-select-aura"
          v-model="member.auraId"
          placeholder="Select aura"
          openDirection="top"
          :searchable="true"
          :options="availableAuras()"
        />
      </div>
      <div class="w-full bg-base-200 p-4 rounded-md" v-if="member.auraId">
        {{ auraStore.find(member.auraId)?.effect }}
      </div>
    </div>
    <div>
      <button class="btn" @click="baseModalStore.close()">Close</button>
    </div>
  </div>
</template>

<style scoped></style>
