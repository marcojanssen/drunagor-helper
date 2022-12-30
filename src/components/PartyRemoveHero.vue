<script setup lang="ts">
import { ref } from "vue";
import type { HeroData } from "@/data/repository/HeroData";
import { PartyStore } from "@/store/PartyStore";
import BaseModal from "@/components/BaseModal.vue";
import BaseList from "@/components/BaseList.vue";
import BaseListItem from "@/components/BaseListItem.vue";
import BaseListSearch from "@/components/BaseListSearch.vue";
import * as _ from "lodash-es";
import { HeroDataRepository } from "@/data/repository/HeroDataRepository";
import type { Member } from "@/store/Member";
import { XMarkIcon } from "@heroicons/vue/24/solid";

const isOpen = ref(false);

function openModal() {
  isOpen.value = true;
  getAllHeroesInParty();
}
function closeModal() {
  isOpen.value = false;
}

const partyStore = PartyStore();
const heroesInParty = ref([] as HeroData[]);

function getAllHeroesInParty(filter: string = "") {
  const heroes: HeroData[] = [];
  const repository = new HeroDataRepository();

  partyStore.findAll().forEach((member: Member) => {
    let hero = repository.find(member.heroId);

    if (hero && new RegExp(filter, "gi").test(hero.name)) {
      heroes.push(hero);
    }
  });

  heroesInParty.value = heroes;
}

getAllHeroesInParty();

function removeHeroFromParty(heroId: string) {
  partyStore.removeMember(heroId);
  closeModal();
}
</script>

<template>
  <button id="party-remove-hero" class="btn float-right" @click="openModal">Remove hero</button>
  <BaseModal :is-open="isOpen" @close-modal="closeModal">
    <template #header>
      <div class="grid grid-cols-3">
        <div></div>
        <div class="text-center font-medium place-self-center">Remove hero</div>
        <div>
          <button id="close-modal" class="btn btn-sm btn-circle float-right" @click="closeModal">
            <XMarkIcon class="h-7 btn-sm btn-circle rounded-lg p-1" />
          </button>
        </div>
      </div>
    </template>
    <template #default>
      <BaseListSearch @search="getAllHeroesInParty"> </BaseListSearch>
      <BaseList id="party-remove-heroes">
        <template v-for="hero in heroesInParty" :key="hero.id">
          <BaseListItem :avatar="hero.images.avatar" @click="removeHeroFromParty(hero.id)">
            {{ hero.name }}
          </BaseListItem>
        </template>
      </BaseList>
    </template>
  </BaseModal>
</template>

<style scoped></style>
