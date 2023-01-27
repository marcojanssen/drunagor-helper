<script setup lang="ts">
import { ref, computed } from "vue";
import { PartyStore } from "@/store/PartyStore";
import BaseModal from "@/components/BaseModal.vue";
import BaseList from "@/components/BaseList.vue";
import BaseListItem from "@/components/BaseListItem.vue";
import BaseListSearch from "@/components/BaseListSearch.vue";
import { EnabledHeroes } from "@/repository/EnabledHeroes";
import { RandomizeHero } from "@/service/RandomizeHero";
import { Member } from "@/store/Member";
import { useToast } from "vue-toastification";
import RandomImage from "@/assets/hero/avatar/RandomAvatar.webp";
import * as _ from "lodash-es";
import { XMarkIcon } from "@heroicons/vue/24/solid";
import type { HeroData } from "@/data/repository/HeroData";

const toast = useToast();

const isOpen = ref(false);

function openModal() {
  isOpen.value = true;
  query.value = "";
}
function closeModal() {
  isOpen.value = false;
}

const partyStore = PartyStore();
const heroes = new EnabledHeroes().findAll();
let filteredHeroes = computed(() => heroes.filter(filterHero));
let query = ref("");

function filterHero(hero: HeroData) {
  if (partyStore.has(hero.id)) {
    return false;
  }
  return hero.name.toLowerCase().replace(/\s+/g, "").includes(query.value.toLowerCase().replace(/\s+/g, ""));
}

function addHeroToParty(heroId: string) {
  partyStore.addMember(new Member(heroId));
  closeModal();
}

function addRandomHeroToParty() {
  const randomHero = new RandomizeHero().randomize(_.map(partyStore.findAll(), "heroId"));

  if (randomHero === null) {
    toast.error("No random hero available.");
    return;
  }
  partyStore.addMember(new Member(randomHero.id));
  closeModal();
}
</script>

<template>
  <button
    id="party-add-hero"
    class="px-3 py-3 bg-neutral text-gray-200 uppercase font-semibold text-sm rounded-lg"
    @click="openModal"
  >
    Add hero
  </button>
  <BaseModal :is-open="isOpen" @close-modal="closeModal">
    <template #header>
      <div class="grid grid-cols-3">
        <div></div>
        <div class="text-center font-medium place-self-center">Add hero</div>
        <div>
          <button
            id="close-modal"
            class="px-2 py-2 bg-neutral text-gray-200 uppercase font-semibold text-sm rounded-lg float-right"
            @click="closeModal"
          >
            <XMarkIcon class="h-5 bg-neutral text-gray-200 uppercase font-semibold text-sm rounded-lg" />
          </button>
        </div>
      </div>
    </template>
    <template #default>
      <BaseListSearch id="party-search-hero" @search="query = $event" />
      <BaseListItem id="party-random-hero" @click="addRandomHeroToParty" :avatar="RandomImage.toString()">
        Random hero
      </BaseListItem>
      <BaseList id="party-add-heroes">
        <template v-for="hero in filteredHeroes" :key="hero.id">
          <BaseListItem :avatar="hero.images.avatar" @click="addHeroToParty(hero.id)">
            {{ hero.name }}
          </BaseListItem>
        </template>
      </BaseList>
    </template>
  </BaseModal>
</template>

<style scoped></style>
