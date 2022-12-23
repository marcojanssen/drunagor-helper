<script setup lang="ts">
import { ref } from "vue";
import Multiselect from "@vueform/multiselect";

import type { Member } from "@/store/Member";

import { HeroStore } from "@/data/store/HeroDataStore.js";
import { PartyStore } from "@/store/PartyStore.js";

const heroStore = HeroStore();
const partyStore = PartyStore();

const heroToBeRemoved = ref("");

const removeHeroMultiSelect = ref(Multiselect);

function selectedHeroes(): Array<Object> {
  const herosAsOptions: Array<Object> = [];
  partyStore.findAll().forEach((member: Member) => {
    const hero = heroStore.find(member.heroId);
    herosAsOptions.push({ value: member.heroId, label: hero.name });
  });

  return herosAsOptions;
}

function removeHeroFromParty() {
  partyStore.removeMember(heroToBeRemoved.value);
}

partyStore.$subscribe(() => {
  // @ts-ignore
  removeHeroMultiSelect.value.clear();
});
</script>

<template>
  <Multiselect
    id="multiselect-remove-heroes"
    v-model="heroToBeRemoved"
    placeholder="Remove hero"
    ref="removeHeroMultiSelect"
    noOptionsText="No heroes in party"
    :searchable="true"
    :options="selectedHeroes()"
    @select="removeHeroFromParty()"
  />
</template>

<style scoped></style>
