<script setup lang="ts">
import { ref, computed } from "vue";
import BaseList from "@/components/BaseList.vue";
import BaseListItem from "@/components/BaseListItem.vue";
import { HeroDataRepository } from "@/data/repository/HeroDataRepository";
import type { HeroData } from "@/data/repository/HeroData";
import { HeroStore } from "@/store/HeroStore";
import { useI18n } from "vue-i18n";

const props = defineProps<{
  campaignId: string;
}>();

const visible = ref(false);
const { t } = useI18n();

function openModal() {
  visible.value = true;
}
function closeModal() {
  visible.value = false;
}

const heroStore = HeroStore();
const heroes = new HeroDataRepository().findAll();

let filteredHeroes = computed(() => heroes.filter(filterHero));

function filterHero(hero: HeroData) {
  if (heroStore.hasInCampaign(hero.id, props.campaignId) == false) {
    return false;
  }
  return true;
}

function removeHeroFromCampaign(heroId: string) {
  heroStore.removeFromCampaign(heroId, props.campaignId);
  closeModal();
}
</script>

<template>
  <Button
    outlined
    id="campaign-remove-hero"
    :label="t('label.remove-hero')"
    @click="openModal"
    :disabled="filteredHeroes.length === 0"
  ></Button>
  <Dialog
    v-model:visible="visible"
    modal
    :header="t('label.remove-hero')"
    :dismissableMask="true"
    class="w-full md:w-1/3 m-2"
  >
    <BaseList id="campaign-remove-heroes">
      <template v-for="hero in filteredHeroes" :key="hero.id">
        <BaseListItem :avatar="hero.images.avatar" @click="removeHeroFromCampaign(hero.id)">
          {{ hero.name }}
        </BaseListItem>
        <Divider class="m-2" />
      </template>
    </BaseList>
  </Dialog>
</template>

<style scoped></style>
