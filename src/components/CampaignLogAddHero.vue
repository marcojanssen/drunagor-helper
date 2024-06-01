<script setup lang="ts">
import { ref, computed } from "vue";
import BaseList from "@/components/BaseList.vue";
import BaseListItem from "@/components/BaseListItem.vue";
import { EnabledHeroes } from "@/repository/EnabledHeroes";
import { RandomizeHero } from "@/service/RandomizeHero";
import { useToast } from "primevue/usetoast";
import RandomImage from "@/assets/hero/avatar/RandomAvatar.webp";
import * as _ from "lodash-es";
import { HeroStore } from "@/store/HeroStore";
import { Hero } from "@/store/Hero";
import { useI18n } from "vue-i18n";
import type { HeroData } from "@/data/repository/HeroData";

const props = defineProps<{
  campaignId: string;
}>();

const toast = useToast();
const { t } = useI18n();

const visible = ref(false);

function openModal() {
  visible.value = true;
}
function closeModal() {
  visible.value = false;
}

const heroStore = HeroStore();
const heroes = new EnabledHeroes().findAll();

let filteredHeroes = computed(() => heroes.filter(filterHero));

function filterHero(hero: HeroData) {
  if (heroStore.hasInCampaign(hero.id, props.campaignId)) {
    return false;
  }
  return true;
}

function addHeroToCampaign(heroId: string) {
  heroStore.add(new Hero(heroId, props.campaignId));
  closeModal();
}

function addRandomHeroToCampaign() {
  const randomHero = new RandomizeHero().randomize(_.map(heroStore.findAllInCampaign(props.campaignId), "heroId"));

  if (randomHero === null) {
    toast.add({ severity: "error", summary: "Error", detail: "No random hero available.", life: 3000 });
    return;
  }
  heroStore.add(new Hero(randomHero.id, props.campaignId));
  closeModal();
}
</script>

<template>
  <Button outlined id="campaign-add-hero" :label="t('label.add-hero')" @click="openModal"></Button>
  <Dialog
    v-model:visible="visible"
    modal
    :header="t('label.add-hero')"
    :dismissableMask="true"
    class="w-full md:w-1/3 m-2"
  >
    <BaseListItem id="party-random-hero" @click="addRandomHeroToCampaign" :avatar="RandomImage.toString()">
      Random hero
    </BaseListItem>
    <Divider class="m-2" />
    <BaseList id="campaign-add-heroes">
      <template v-for="hero in filteredHeroes" :key="hero.id">
        <BaseListItem :avatar="hero.images.avatar" @click="addHeroToCampaign(hero.id)">
          {{ hero.name }}
        </BaseListItem>
        <Divider class="m-2" />
      </template>
    </BaseList>
  </Dialog>
</template>

<style scoped></style>
