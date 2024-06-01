<script setup lang="ts">
import { HeroDataRepository } from "@/data/repository/HeroDataRepository";
import type { HeroData } from "@/data/repository/HeroData";
import { CampaignStore } from "@/store/CampaignStore";
import CampaignLogCore from "./CampaignLogCore.vue";
import CampaignLogAwakenings from "./CampaignLogAwakenings.vue";
import CampaignLogApocalypse from "./CampaignLogApocalypse.vue";
import CampaignLogSequentialAdventure from "@/components/CampaignLogSequentialAdventure.vue";
import { useI18n } from "vue-i18n";

const props = defineProps<{
  heroId: string;
  campaignId: string;
  isSequentialAdventure: boolean;
}>();

const heroDataRepository = new HeroDataRepository();
const campaignStore = CampaignStore();
const { t } = useI18n();

const campaign = campaignStore.find(props.campaignId);
const hero = heroDataRepository.find(props.heroId) ?? ({} as HeroData);
</script>

<template>
  <div class="hero-list-item p-4" style="background-color: #1f2937">
    <div class="flex h-28">
      <div>
        <img class="-ml-1 w-14 rounded-full hero-image" :src="hero.images.avatar" />
      </div>
      <div class="pl-8">
        <p>{{ hero.name }}</p>
        <p>
          {{ t("label." + hero.race.toLowerCase()) }} {{ t("label." + hero.class.toLowerCase().replace(" ", "-")) }}
        </p>
        <p>{{ t("text.path-of") }} {{ t("label." + hero.path.toLowerCase()) }}</p>
      </div>
    </div>
    <CampaignLogSequentialAdventure v-if="isSequentialAdventure" :hero="hero" :campaign-id="campaignId" />
    <CampaignLogCore v-if="campaign.campaign == 'core'" :campaign-id="props.campaignId" :hero-id="props.heroId" />
    <CampaignLogAwakenings
      v-if="campaign.campaign == 'awakenings'"
      :campaign-id="props.campaignId"
      :hero-id="props.heroId"
    />
    <CampaignLogApocalypse
      v-if="campaign.campaign == 'apocalypse'"
      :campaign-id="props.campaignId"
      :hero-id="props.heroId"
    />
  </div>
</template>

<style scoped>
.hero-list-item {
  background-image: url("@/assets/hero/flag-bg-red.webp");
  background-repeat: no-repeat;
}
</style>
