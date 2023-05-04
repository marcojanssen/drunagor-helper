<script setup lang="ts">
import type { WeaponCardData } from "@/data/repository/CardData";
import { HeroStore } from "@/store/HeroStore";
import ItemCardSelect from "@/components/ItemCardSelect.vue";
import type { CardDataRepository } from "@/data/repository/CardDataRepository";

const heroStore = HeroStore();

const emit = defineEmits(["stash"]);
const props = defineProps<{
  heroId: string;
  campaignId: string;
  cardsDataRepository: CardDataRepository;
}>();

const hero = heroStore.findInCampaign(props.heroId, props.campaignId);
const weaponCards: WeaponCardData[] = props.cardsDataRepository
  .findByType("Weapon")
  .map((card) => card as WeaponCardData);

let selectedId = hero.equipment.weaponId;

function subTypeList(item: WeaponCardData) {
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
  ></ItemCardSelect>
</template>

<style scoped></style>
