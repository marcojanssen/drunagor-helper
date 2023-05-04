<script setup lang="ts">
import { CardDataRepository } from "@/data/repository/CardDataRepository";
import CampaignHeroWeapon from "@/components/CampaignHeroWeapon.vue";
import CampaignHeroOffHand from "@/components/CampaignHeroOffHand.vue";
import CampaignHeroArmor from "@/components/CampaignHeroArmor.vue";
import CampaignHeroTrinket from "@/components/CampaignHeroTrinket.vue";
import CampaignHeroBagItem from "@/components/CampaignHeroBagItem.vue";
import { HeroStore } from "@/store/HeroStore";
import { HeroEquipment } from "@/store/Hero";

const heroStore = HeroStore();
const itemCardDataRepository = new CardDataRepository();

const props = defineProps<{
  heroId: string;
  campaignId: string;
}>();

const hero = heroStore.findInCampaign(props.heroId, props.campaignId);
if (typeof hero.equipment === "undefined") {
  hero.equipment = new HeroEquipment();
}
</script>

<template>
  <div class="">
    <div class="pt-2">
      <span>Weapon</span>
    </div>
    <div class="hero-weapon-wrapper">
      <CampaignHeroWeapon
        :campaign-id="campaignId"
        :hero-id="heroId"
        :cards-data-repository="itemCardDataRepository"
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
        :cards-data-repository="itemCardDataRepository"
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
        :cards-data-repository="itemCardDataRepository"
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
        :cards-data-repository="itemCardDataRepository"
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
        :cards-data-repository="itemCardDataRepository"
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
        :cards-data-repository="itemCardDataRepository"
        :bagSlot="2"
        @stash="$emit('stash')"
      >
      </CampaignHeroBagItem>
    </div>
  </div>
</template>

<style scoped></style>
