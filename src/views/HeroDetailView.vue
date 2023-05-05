<script setup lang="ts">
import type { HeroData } from "@/data/repository/HeroData";
import { HeroDataRepository } from "@/data/repository/HeroDataRepository";
import { useRoute } from "vue-router";
import { ChevronLeftIcon } from "@heroicons/vue/20/solid";
import CampaignHeroItems from "@/components/CampaignHeroItems.vue";
import CampaignHeroStash from "@/components/CampaignHeroStash.vue";
import CampaignHeroSkills from "@/components/CampaignHeroSkills.vue";
import { ref } from "vue";
import BaseDividerAlt from "@/components/BaseDividerAlt.vue";

const route = useRoute();
const heroDataRepository = new HeroDataRepository();

const heroId = route.params.heroId.toString();
const campaignId = route.params.campaignId.toString();

const hero = heroDataRepository.find(heroId) ?? ({} as HeroData);

let stash = ref(0);
function onStash() {
  stash.value += 1;
}
</script>

<template>
  <div>
    <button class="px-3 py-3 w-16 bg-neutral rounded-lg" @click="$router.go(-1)">
      <ChevronLeftIcon class="h-5 w-5 mx-auto" />
    </button>
  </div>
  <div id="hero-card" class="bg-neutral form-control drop-shadow rounded-lg p-4 mt-4">
    <div class="flex h-28">
      <div>
        <img class="-ml-1 w-14 rounded-full hero-image" :src="hero.images.avatar" />
      </div>
      <div class="pl-8">
        <p>{{ hero.name }}</p>
        <p>{{ hero.race }} {{ hero.class }}</p>
        <p>Path of {{ hero.path }}</p>
      </div>
    </div>

    <BaseDividerAlt>Equipment</BaseDividerAlt>

    <div class="py-2 w-full">
      <CampaignHeroItems :campaign-id="campaignId" :hero-id="heroId" @stash="onStash" />
    </div>

    <BaseDividerAlt>Stash</BaseDividerAlt>

    <div class="hero-stash-wrapper py-2 w-full">
      <CampaignHeroStash :campaign-id="campaignId" :hero-id="heroId" :key="stash" />
    </div>

    <BaseDividerAlt>Skills</BaseDividerAlt>

    <div class="py-2 w-full">
      <CampaignHeroSkills :campaign-id="campaignId" :hero-id="heroId"></CampaignHeroSkills>
    </div>
  </div>
</template>

<style scoped>
#hero-card {
  background-image: url("@/assets/hero/flag-bg-red.webp");
  background-repeat: no-repeat;
}
</style>
