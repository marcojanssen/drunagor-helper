<script setup lang="ts">
import type { HeroData } from "@/data/repository/HeroData";
import { HeroDataRepository } from "@/data/repository/HeroDataRepository";
import { useRoute } from "vue-router";
import CampaignHeroItems from "@/components/CampaignHeroItems.vue";
import CampaignHeroStash from "@/components/CampaignHeroStash.vue";
import CampaignHeroSkills from "@/components/CampaignHeroSkills.vue";
import { ref } from "vue";
import { CampaignStore } from "@/store/CampaignStore";
import { CoreItemDataRepository } from "@/data/repository/campaign/core/CoreItemDataRepository";
import type { ItemDataRepository } from "@/data/repository/ItemDataRepository";
import { ApocalypseItemDataRepository } from "@/data/repository/campaign/apocalypse/ApocalypseItemDataRepository";
import { AwakeningsItemDataRepository } from "@/data/repository/campaign/awakenings/AwakeningsItemDataRepository";
import { useI18n } from "vue-i18n";

const route = useRoute();
const heroDataRepository = new HeroDataRepository();
const { t } = useI18n();

const heroId = route.params.heroId.toString();
const campaignId = route.params.campaignId.toString();
const campaignStore = CampaignStore();
const campaign = campaignStore.find(campaignId);
let repository: ItemDataRepository;

if (campaign.campaign === "core") {
  repository = new CoreItemDataRepository();
} else if (campaign.campaign === "apocalypse") {
  repository = new ApocalypseItemDataRepository();
} else if (campaign.campaign === "awakenings") {
  repository = new AwakeningsItemDataRepository();
} else {
  throw new Error("Unknown campaign");
}

const hero = heroDataRepository.find(heroId) ?? ({} as HeroData);

let stash = ref(0);
function onStash() {
  stash.value += 1;
}
</script>

<template>
  <div>
    <Button outlined id="campaign-export" :label="t('label.back')" @click="$router.go(-1)"></Button>
  </div>
  <div id="hero-card" class="bg-neutral form-control drop-shadow rounded-lg p-4 mt-4" style="background-color: #1f2937">
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

    <Divider>{{ t("label.equipment") }}</Divider>

    <div class="py-2 w-full">
      <CampaignHeroItems
        :campaign-id="campaignId"
        :hero-id="heroId"
        :repository="repository"
        :hero="hero"
        @stash="onStash"
      />
    </div>

    <Divider>{{ t("label.stash") }}</Divider>

    <div class="hero-stash-wrapper py-2 w-full">
      <CampaignHeroStash :campaign-id="campaignId" :repository="repository" :hero-id="heroId" :key="stash" />
    </div>

    <Divider>{{ t("label.skills") }}</Divider>

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
