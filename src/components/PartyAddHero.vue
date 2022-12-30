<script setup lang="ts">
import { ref } from "vue";
import type { HeroData } from "@/data/repository/HeroData";
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

const toast = useToast();

const isOpen = ref(false);

function openModal() {
  isOpen.value = true;
  getAllEnabledHeroes();
}
function closeModal() {
  isOpen.value = false;
}

const partyStore = PartyStore();
const availableHeroes = ref([] as HeroData[]);
const enabledHeroes = new EnabledHeroes();

function getAllEnabledHeroes(query: string = "") {
  const regExp = new RegExp(query, "gi");
  const filteredHeroes = enabledHeroes.findAll().filter((hero: HeroData) => {
    if (partyStore.has(hero.id) == true) {
      return false;
    }
    if (regExp.test(hero.name) === false) {
      return false;
    }
    return true;
  });
  availableHeroes.value = filteredHeroes;
}

getAllEnabledHeroes();

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
  <button id="party-add-hero" class="btn" @click="openModal">Add hero</button>
  <BaseModal :is-open="isOpen" @close-modal="closeModal">
    <template #header>
      <div class="grid grid-cols-3">
        <div></div>
        <div class="text-center font-medium place-self-center">Add hero</div>
        <div>
          <button id="close-modal" class="btn btn-sm btn-circle float-right" @click="closeModal">
            <XMarkIcon class="h-7 btn-sm btn-circle rounded-lg p-1" />
          </button>
        </div>
      </div>
    </template>
    <template #default>
      <BaseListSearch id="party-search-hero" @search="getAllEnabledHeroes" />
      <BaseListItem id="party-random-hero" @click="addRandomHeroToParty" :avatar="RandomImage.toString()">
        Random hero
      </BaseListItem>
      <BaseList id="party-add-heroes">
        <template v-for="hero in availableHeroes" :key="hero.id">
          <BaseListItem :avatar="hero.images.avatar" @click="addHeroToParty(hero.id)">
            {{ hero.name }}
          </BaseListItem>
        </template>
      </BaseList>
    </template>
  </BaseModal>
</template>

<style scoped></style>
