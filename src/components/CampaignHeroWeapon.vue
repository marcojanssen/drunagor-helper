<script setup lang="ts">
import type { WeaponItemData } from "@/data/repository/ItemData";
import { HeroStore } from "@/store/HeroStore";
import ItemCardSelect from "@/components/ItemCardSelect.vue";
import type { HeroData } from "@/data/repository/HeroData";
import { heroCanUse } from "@/data/repository/HeroData";
import { computed } from "vue";
import type { ItemDataRepository } from "@/data/repository/ItemDataRepository";

const heroStore = HeroStore();

const emit = defineEmits(["stash"]);
const props = defineProps<{
  heroId: string;
  heroData: HeroData;
  campaignId: string;
  cardsDataRepository: ItemDataRepository;
  filterProficiencies: boolean;
}>();

const hero = heroStore.findInCampaign(props.heroId, props.campaignId);
const weaponCards = computed(() =>
  props.cardsDataRepository
    .findByType("Weapon", null)
    .filter((item) => !props.filterProficiencies || heroCanUse(props.heroData, item))
    .map((item) => item as WeaponItemData)
);

let selectedId = hero.equipment.weaponId;

function subTypeList(item: WeaponItemData) {
  return item.weaponTypes.join(" | ");
}

function onClear() {
  hero.equipment.weaponId = "";
}

function onSelect(selectedId: string) {
  heroStore.findInCampaign(props.heroId, props.campaignId).equipment.weaponId = selectedId;
}

function onStash() {
  const heroState = heroStore.findInCampaign(props.heroId, props.campaignId);
  if (heroState.equipment.weaponId === "") return;
  heroStore.findInCampaign(props.heroId, props.campaignId).stashedCardIds.push(heroState.equipment.weaponId!);
  emit("stash");
}
</script>

<template>
  <ItemCardSelect
    @clear="onClear"
    :items="weaponCards"
    item-type="Weapon"
    :sub-type-list="subTypeList"
    :value="selectedId"
    @selected="onSelect"
    @stash="onStash"
    :repository="cardsDataRepository"
  ></ItemCardSelect>
</template>

<style scoped></style>
