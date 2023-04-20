<script setup lang="ts">
import { ref, computed } from "vue";
import BaseModal from "@/components/BaseModal.vue";
import BaseList from "@/components/BaseList.vue";
import BaseListItem from "@/components/BaseListItem.vue";
import BaseListSearch from "@/components/BaseListSearch.vue";
import { EnabledHeroes } from "@/repository/EnabledHeroes";
import { RandomizeHero } from "@/service/RandomizeHero";
import { useToast } from "vue-toastification";
import RandomImage from "@/assets/hero/avatar/RandomAvatar.webp";
import * as _ from "lodash-es";
import { XMarkIcon } from "@heroicons/vue/24/solid";
import type { HeroData } from "@/data/repository/HeroData";
import { HeroStore } from "@/store/HeroStore";
import { Hero } from "@/store/Hero";

const toast = useToast();

const isOpen = ref(false);

function openModal() {
  isOpen.value = true;
  query.value = "";
}
function closeModal() {
  isOpen.value = false;
}

const props = defineProps<{
  campaignId: string;
}>();

const heroStore = HeroStore();
const heroes = new EnabledHeroes().findAll();
let filteredHeroes = computed(() => heroes.filter(filterHero));
let query = ref("");

function filterHero(hero: HeroData) {
  if (heroStore.hasInCampaign(hero.id, props.campaignId)) {
    return false;
  }
  return hero.name.toLowerCase().replace(/\s+/g, "").includes(query.value.toLowerCase().replace(/\s+/g, ""));
}

function addHeroToParty(heroId: string) {
  heroStore.add(new Hero(heroId, props.campaignId));
  closeModal();
}

function addRandomHeroToParty() {
  const randomHero = new RandomizeHero().randomize(_.map(heroStore.findAllInCampaign(props.campaignId), "heroId"));

  if (randomHero === null) {
    toast.error("No random hero available.");
    return;
  }
  heroStore.add(new Hero(randomHero.id, props.campaignId));
  closeModal();
}
</script>

<template>
  <button
    id="campaign-add-hero"
    class="px-3 py-3 bg-neutral text-gray-200 uppercase font-semibold text-sm rounded-lg"
    @click="openModal"
  >
    Add hero
  </button>
  <BaseModal :is-open="isOpen" @close-modal="closeModal">
    <template #header>
      <div class="grid grid-cols-2">
        <div class="w-full font-medium place-self-center">Add hero</div>
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
      <BaseList id="campaign-add-heroes">
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
