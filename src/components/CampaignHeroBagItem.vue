<script setup lang="ts">
import type { ItemData } from "@/data/repository/ItemData";
import { HeroStore } from "@/store/HeroStore";
import type { ItemDataRepository } from "@/data/repository/ItemDataRepository";

const heroStore = HeroStore();

const emit = defineEmits(["stash"]);
const props = defineProps<{
  heroId: string;
  campaignId: string;
  cardsDataRepository: ItemDataRepository;
  bagSlot: number;
}>();

const hero = heroStore.findInCampaign(props.heroId, props.campaignId);

const slotItem = props.bagSlot === 1 ? hero.equipment.bagOneId : hero.equipment.bagTwoId;
const itemId = slotItem ?? "";

const itemCards: ItemData[] = props.cardsDataRepository.findAll();
const itemCardCategories = [
  { name: "Treasure Deck", items: itemCards.filter((item) => item.cardType === "Chest") },
  { name: "Misc", items: itemCards.filter((item) => item.cardType !== "Chest") },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function subTypeList(item: ItemData) {
  return "";
}

function onClear() {
  if (props.bagSlot === 1) {
    hero.equipment.bagOneId = "";
    return;
  }
  hero.equipment.bagTwoId = "";
}

function onSelect(selectedId: string) {
  if (props.bagSlot === 1) {
    heroStore.findInCampaign(props.heroId, props.campaignId).equipment.bagOneId = selectedId;
    return;
  }
  heroStore.findInCampaign(props.heroId, props.campaignId).equipment.bagTwoId = selectedId;
}

function onStash() {
  const heroState = heroStore.findInCampaign(props.heroId, props.campaignId);
  if (props.bagSlot === 1) {
    if (heroState.equipment.bagOneId === "") return;
    heroStore.findInCampaign(props.heroId, props.campaignId).stashedCardIds.push(heroState.equipment.bagOneId!);
    emit("stash");
    return;
  }

  if (heroState.equipment.bagTwoId === "") return;
  heroStore.findInCampaign(props.heroId, props.campaignId).stashedCardIds.push(heroState.equipment.bagTwoId!);
  emit("stash");
}
</script>

<template>
  <ItemCardSelectCategorized
    @clear="onClear"
    :categories="itemCardCategories"
    :sub-type-list="subTypeList"
    :value="itemId"
    :bagSlot="bagSlot"
    @selected="onSelect"
    @stash="onStash"
    :repository="cardsDataRepository"
  ></ItemCardSelectCategorized>
</template>

<style scoped></style>
