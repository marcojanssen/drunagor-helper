<script setup lang="ts">
import { ref } from "vue";
import type { HeroData } from "@/data/store/HeroData";
import { PartyStore } from "@/store/PartyStore";
import BaseModal from "@/components/BaseModal.vue";
import TrackerMenuList from "@/components/TrackerMenuList.vue";
import TrackerMenuListItem from "@/components/TrackerMenuListItem.vue";
import TrackerMenuSearchItem from "@/components/TrackerMenuSearchItem.vue";
import { EnabledHeroes } from "@/repository/EnabledHeroes";
import { RandomizeHero } from "@/service/RandomizeHero";
import { Member } from "@/store/Member";
import { useToast } from "vue-toastification";
import RandomImage from "@/assets/hero/avatar/RandomAvatar.webp";
import * as _ from "lodash-es";

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

function getAllEnabledHeroes(filter: string = "") {
  const filteredHeroes = new EnabledHeroes().findAll().filter((hero: HeroData) => {
    if (partyStore.has(hero.id) == true) {
      return false;
    }
    if (new RegExp(filter, "gi").test(hero.name) === false) {
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
  <button class="btn" @click="openModal">Add hero</button>
  <BaseModal :is-open="isOpen" @close-modal="closeModal">
    <template #header> Select a hero </template>
    <template #default>
      <TrackerMenuSearchItem @search="getAllEnabledHeroes"> </TrackerMenuSearchItem>
      <TrackerMenuList>
        <TrackerMenuListItem @click="addRandomHeroToParty" :avatar="RandomImage.toString()">
          Random hero
        </TrackerMenuListItem>
        <template v-for="hero in availableHeroes" :key="hero.id">
          <TrackerMenuListItem :avatar="hero.images.avatar" @click="addHeroToParty(hero.id)">
            {{ hero.name }}
          </TrackerMenuListItem>
        </template>
      </TrackerMenuList>
    </template>
  </BaseModal>
</template>

<style scoped></style>
