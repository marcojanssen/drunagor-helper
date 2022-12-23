<script setup lang="ts">
import { ref } from "vue";
import Multiselect from "@vueform/multiselect";

import type { HeroData } from "@/data/store/HeroData";

import { HeroStore } from "@/data/store/HeroDataStore";
import { Member } from "@/store/Member";
import { PartyStore } from "@/store/PartyStore";

const heroStore = HeroStore();
const partyStore = PartyStore();

const heroToBeAdded = ref("");

const addHeroMultiSelect = ref(Multiselect);

function availableHeroes(): Array<Object> {
  const herosAsOptions: Array<Object> = [];

  heroStore.findAllEnabled().forEach((hero: HeroData) => {
    if (partyStore.has(hero.id) == false) {
      herosAsOptions.push({ value: hero.id, label: hero.name });
    }
  });

  if (herosAsOptions.length > 1) {
    herosAsOptions.unshift({ value: "random", label: "> Random hero" });
  }

  return herosAsOptions;
}

function addHeroToParty() {
  if (heroToBeAdded.value === "random") {
    const heroes: Array<string> = [];
    heroStore.findAllEnabled().forEach((hero: HeroData) => {
      if (partyStore.has(hero.id) == false) {
        heroes.push(hero.id);
      }
    });
    const randomHero = heroes[Math.floor(Math.random() * heroes.length)];
    heroToBeAdded.value = randomHero;
  }
  partyStore.addMember(new Member(heroToBeAdded.value));
  heroToBeAdded.value = "";
}

partyStore.$subscribe(() => {
  // @ts-ignore
  addHeroMultiSelect.value.clear();
});
</script>

<template>
  <Multiselect
    id="multiselect-add-heroes"
    v-model="heroToBeAdded"
    placeholder="Add hero"
    ref="addHeroMultiSelect"
    noOptionsText="No available heroes"
    :searchable="true"
    :options="availableHeroes()"
    @select="addHeroToParty()"
  />
</template>

<style scoped></style>
