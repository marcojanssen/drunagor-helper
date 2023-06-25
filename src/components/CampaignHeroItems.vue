<script setup lang="ts">
import CampaignHeroWeapon from "@/components/CampaignHeroWeapon.vue";
import CampaignHeroOffHand from "@/components/CampaignHeroOffHand.vue";
import CampaignHeroArmor from "@/components/CampaignHeroArmor.vue";
import CampaignHeroTrinket from "@/components/CampaignHeroTrinket.vue";
import CampaignHeroBagItem from "@/components/CampaignHeroBagItem.vue";
import { HeroStore } from "@/store/HeroStore";
import { HeroEquipment } from "@/store/Hero";
import type { HeroData } from "@/data/repository/HeroData";
import { ref } from "vue";
import type { ItemDataRepository } from "@/data/repository/ItemDataRepository";

const heroStore = HeroStore();

const props = defineProps<{
  heroId: string;
  hero: HeroData;
  campaignId: string;
  repository: ItemDataRepository;
}>();

const filterProficiencies = ref(true);

const campaignHero = heroStore.findInCampaign(props.heroId, props.campaignId);
if (typeof campaignHero.equipment === "undefined") {
  campaignHero.equipment = new HeroEquipment();
}
</script>

<template>
  <div class="">
    <label>
      <input
        type="checkbox"
        v-model="filterProficiencies"
        id="filter-proficiencies"
        class="w-5 h-5 text-emerald-500 bg-base-100 rounded"
      />
      Filter by proficiency
    </label>

    <div class="pt-4">
      <span>Weapon</span>
    </div>
    <div class="hero-weapon-wrapper">
      <CampaignHeroWeapon
        :campaign-id="campaignId"
        :hero-id="heroId"
        :hero-data="hero"
        :cards-data-repository="repository"
        :filter-proficiencies="filterProficiencies"
        @stash="$emit('stash')"
      />
    </div>

    <div class="pt-2 col-auto leading-10">
      <span>Off Hand</span>
    </div>
    <div class="hero-offhand-wrapper">
      <CampaignHeroOffHand
        :campaign-id="campaignId"
        :hero-id="heroId"
        :hero-data="hero"
        :cards-data-repository="repository"
        :filter-proficiencies="filterProficiencies"
        @stash="$emit('stash')"
      >
      </CampaignHeroOffHand>
    </div>

    <div class="pt-2">
      <span>Armor</span>
    </div>
    <div class="hero-armor-wrapper">
      <CampaignHeroArmor
        :campaign-id="campaignId"
        :hero-id="heroId"
        :hero-data="hero"
        :cards-data-repository="repository"
        :filter-proficiencies="filterProficiencies"
        @stash="$emit('stash')"
      >
      </CampaignHeroArmor>
    </div>

    <div class="pt-2">
      <span>Trinket</span>
    </div>
    <div class="hero-trinket-wrapper">
      <CampaignHeroTrinket
        :campaign-id="campaignId"
        :hero-id="heroId"
        :cards-data-repository="repository"
        @stash="$emit('stash')"
      >
      </CampaignHeroTrinket>
    </div>
  </div>

  <div class="mt-8">
    <div class="">
      <span>Bag Slot 1</span>
    </div>
    <div class="hero-bag1-wrapper">
      <CampaignHeroBagItem
        :campaign-id="campaignId"
        :hero-id="heroId"
        :cards-data-repository="repository"
        :bagSlot="1"
        @stash="$emit('stash')"
      >
      </CampaignHeroBagItem>
    </div>

    <div class="pt-2">
      <span>Bag Slot 2</span>
    </div>
    <div class="hero-bag2-wrapper">
      <CampaignHeroBagItem
        :campaign-id="campaignId"
        :hero-id="heroId"
        :cards-data-repository="repository"
        :bagSlot="2"
        @stash="$emit('stash')"
      >
      </CampaignHeroBagItem>
    </div>
  </div>
</template>

<style scoped></style>
